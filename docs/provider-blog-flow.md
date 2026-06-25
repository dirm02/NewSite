# Provider Blog — schema, rules & status lifecycle (GHST-48)

Providers create blog posts to promote their services. Admins moderate
(approve / reject / publish / unpublish). **No comments, ratings, or blog
reviews** are part of this model.

> Status: schema + rules committed as a migration and hook in the repo, **ready
> for VM application**. Not applied/deployed (see GHST-52 deploy checklist).

## Files

| File | Purpose |
|---|---|
| `pocketbase/pb_migrations/1740524000_lif3line_provider_blog.js` | Creates `blog_categories` + `blog_posts` (with down-migration). |
| `pocketbase/pb_hooks/20_lif3line_blog.pb.js` | Enforces status-transition integrity for non-admins. |

## Collections (ER)

```
provider_profiles 1───* blog_posts *───0..1 blog_categories
users (author)    1───* blog_posts
services          0..1─* blog_posts   (optional "promotes" link)
```

### blog_categories (admin-managed taxonomy)

| Field | Type | Notes |
|---|---|---|
| name | text (1–120, req) | |
| slug | text (1–120, req) | unique |
| sort_order | number (≥0) | |
| status | select | `active` / `inactive` |

### blog_posts

| Field | Type | Notes |
|---|---|---|
| provider | relation → provider_profiles (req, cascade) | owning provider |
| author | relation → users (req) | authoring user |
| service | relation → services (optional) | service the post promotes |
| category | relation → blog_categories (optional) | |
| title | text (1–200, req) | |
| slug | text (1–220, req) | unique |
| excerpt | text (≤500) | |
| content | editor | rich text |
| cover_image | file (1, ≤5 MB, jpg/png/webp) | |
| status | select (req) | `draft` / `submitted` / `approved` / `rejected` / `published` |
| rejection_reason | text (≤1000) | set by admin on reject |
| published_at | date | stamped by hook on publish |
| seo_title | text (≤200) | |
| seo_description | text (≤300) | |

## Status lifecycle

```
draft ──submit──▶ submitted ──admin approve──▶ approved ──admin publish──▶ published
  ▲                   │                                                       │
  │              admin reject                                          admin unpublish
  │                   ▼                                                       │
  └───────────── rejected ◀──────────────────────────────────────────────────┘
        (provider edits & resubmits)         (back to approved/draft)
```

- **Provider** sets only `draft` / `submitted` (create + edit own non-final posts).
- **Admin** sets `approved` / `rejected` (+`rejection_reason`) / `published` / unpublish.
- Public sees only `published`.

## Access rules (as implemented in the migration)

| Action | Rule |
|---|---|
| blog_categories list/view | public (`""`) |
| blog_categories create/update/delete | `@request.auth.role = "admin"` |
| blog_posts list/view | `status = "published" \|\| provider.user = @request.auth.id \|\| @request.auth.role = "admin"` |
| blog_posts create | `@request.auth.id != "" && @request.auth.role = "provider" && provider.user = @request.auth.id && author = @request.auth.id` |
| blog_posts update | `(provider.user = @request.auth.id && (status = "draft" \|\| "rejected" \|\| "submitted")) \|\| admin` |
| blog_posts delete | `(provider.user = @request.auth.id && status = "draft") \|\| admin` |

## Hook points (`20_lif3line_blog.pb.js`)

Access rules govern *who* can write; the hook governs *which status* a non-admin
may set (rules alone can't constrain the incoming `status` value):

- `onRecordCreateRequest("blog_posts")`: non-admin → status must be `draft` or
  `submitted` (defaults empty to `draft`); else `BadRequestError`.
- `onRecordUpdateRequest("blog_posts")`:
  - admin → allowed; if publishing and `published_at` empty, stamp it.
  - non-admin → status must be `draft` or `submitted`; else `ForbiddenError`
    ("Only an admin can approve, reject, publish, or unpublish").

This mirrors the GHST-12 pattern (`10_lif3line_transitions.pb.js`) of guarding
sensitive status transitions in hooks rather than trusting client payloads.

## Public discovery

Public blog reads must filter `status = "published"` (mirrors the `services`
`status='active'` discovery pattern). Sorting by `-published_at`. The frontend
discovery/dashboard wiring is **GHST-49**.

## Seed

No blog seed added (optional per task). If demo content is wanted later, seed
must be Canada/Lif3line-safe and reference seeded providers; add as a separate
migration after `1740524000`.

## Not added (by design)

- blog_comments, blog_reactions, blog_reviews, ratings — out of scope.
