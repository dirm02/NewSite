# GHST-49 — Provider blog dashboard UI + public display

**Task:** GHST-49 (Milestone: Provider Blog) · depends on GHST-48 schema.

## Summary

Providers own blog creation; the public sees only **published** posts; admins
moderate (approve/reject/publish). Built on the GHST-48 `blog_posts` /
`blog_categories` schema + moderation hook. All reads degrade to honest empty
states when the collection has no published rows (or isn't deployed yet).

## New code

### Data layer
- `core/api/pocketbase/types.ts`: `PbBlogCategory`, `PbBlogPost`.
- `core/api/pocketbase/discovery.ts` (public): `fetchPublishedBlogPosts`,
  `fetchPublishedBlogPostBySlug`, `fetchBlogCategories` (all filter
  `status='published'` / `status='active'`).
- `core/api/pocketbase/blog.ts` (provider, auth): `fetchProviderBlogPosts`,
  `fetchProviderBlogPost`, `createBlogPost`, `updateBlogPost`, `BlogPostInput`.
- `core/api/pocketbase/format.ts`: `blogStatusLabel`, `blogStatusBadgeClass`,
  `blogDetailUrl`, `slugify`, `formatBlogDate`.
- `core/hooks/useDiscoveryData.ts`: `usePublishedBlogPosts`,
  `usePublishedBlogPost`, `useBlogCategories`.
- `core/hooks/useJobData.ts`: `useProviderBlogPosts`, `useProviderBlogPost`,
  `useBlogActions` (`createPost` / `updatePost`, resolves provider profile +
  author; create defaults status `draft`).

### Provider UI (provider shell, `RequireAuth role=provider`)
- `providers/provider-blog/providerAllBlog.tsx` — All Blogs: status filter
  tabs, table (title/category/status/published/actions), Add Blog button.
- `providers/provider-blog/providerAddBlog.tsx` — Add/Edit form (reused for
  `providerEditBlog?id=`): title, auto-slug, category (from `blog_categories`),
  optional promoted service (provider's own services), excerpt, content, SEO.
  **Save Draft** (status `draft`) and **Submit for Approval** (status
  `submitted`). Approved/published posts are locked (fieldset disabled);
  rejection reason is shown for rejected posts.
- `providers/provider-blog/providerSubmittedBlog.tsx` — Submitted Blogs: shows
  submitted/approved/rejected/published state + rejection reason + edit/view.

### Routes & nav
- `all_routes`: `providerBlog`, `providerAddBlog`, `providerEditBlog`,
  `providerSubmittedBlog`.
- `router.link.tsx`: 4 entries added to `providerRoutes` (provider-only via
  `providerLayout`).
- `providerSidebarData.ts`: **Blog** parent item → All Blogs / Add Blog /
  Submitted Blogs.
- `site-header-nav-config.ts`: provider dropdown gets **Blog**; public **Pages**
  dropdown re-adds **Blog** (→ `blogGrid`), now that it's wired.

### Public display (published only)
- `blog/components/PublicBlogList.tsx` — grid of published posts + empty state.
- `blog/components/PublicBlogDetail.tsx` — resolves `?slug=`, renders published
  post or a "not found" state.
- `blog/blog-grid` + `blog/blog-list`: render `PublicBlogList`; static demo
  markup hidden via `d-none` (kept for reference, routes intact).
- `blog/blog-details`: renders `PublicBlogDetail`; static demo hidden.
- `home/new-home/blogAndJoinus.tsx`: homepage preview of latest 3 published
  posts; **entire section hidden when there are none** (no placeholder).

## Visibility / security

- Public list/detail use `status='published'` filters only → drafts, submitted,
  approved (unpublished), and rejected posts are never publicly visible.
  Defense-in-depth: GHST-48 `listRule`/`viewRule` also restrict non-published to
  owner/admin.
- Providers can only create/save `draft`/`submitted` (UI buttons + GHST-48 hook
  enforce this server-side). They cannot self-publish.
- Provider blog routes are inside `providerLayout` (`RequireAuth role=provider`)
  → sidebar/pages remain provider-only.

## Admin moderation (scope item 7 — deferred, documented)

Admin is **not** the primary author. Admin moderation = approve / reject (+
`rejection_reason`) / publish / unpublish only. A dedicated admin moderation UI
is **deferred**; the intended route surface already exists in `all_routes`
(`adminPendingBlog`, `adminAllBlog`, `adminEditblog`) and should be wired in a
future admin task to PATCH `blog_posts.status` (admin PB rule + GHST-48 hook
already allow admin transitions and stamp `published_at` on publish). Until then
an admin can moderate via the PocketBase Admin UI directly.

## Not included (by design)

- Blog comments / reactions / blog reviews (out of scope).
- Cover-image upload UI (schema field exists; can be added later — current form
  ships text fields only).

## Verification

- `npm run build` → **PASS** (4707 modules).
- Lint clean on all new/edited files.
- Behavior pre-deploy (collection absent): public blog pages + homepage preview
  show empty/hidden states (no crash) because `useAsyncDiscovery` falls back to
  empty on the collection-missing error.
- Manual E2E (after applying the GHST-48 migration on the VM):
  1. Provider → sidebar **Blog → Add Blog** → fill title/content → **Submit for
     Approval** → redirected to Submitted Blogs showing status **Submitted**.
  2. Public `/blog/blog-grid` does NOT show the submitted post.
  3. Admin sets the post `published` (Admin UI) → it appears on `/blog/blog-grid`,
     `/blog/blog-details?slug=...`, and the homepage preview.
  4. Admin sets `rejected` + reason → provider sees the reason on Submitted
     Blogs and can edit/resubmit.
