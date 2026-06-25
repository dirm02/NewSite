# GHST-51 — E2E coverage for Home / Customer / Provider / Blog flows

**Task:** GHST-51 (Milestone: E2E QA).

## What changed

- **New `@blog` suite** — `tests/e2e/blog/provider-blog.spec.ts`:
  1. Guest blog grid renders posts **or** an honest empty state (no demo brand).
  2. Guest blog detail shows "Post not found" for an unknown slug.
  3. Provider submits a post → lands on Submitted Blogs (status **Submitted**);
     guest cannot see the unpublished post on the public blog. (Mutating; skips
     pre-deploy.)
- **New helper** — `blogCollectionExists()` in `tests/e2e/helpers/pocketbase.ts`
  probes `blog_posts` and lets the mutating blog test skip cleanly until the
  GHST-48 migration is applied.
- **Fixed `@navigation` guest assertion** — the "no role dashboard menus" test
  now checks dashboard route **hrefs** (`/admin`, `/customers/customer-dashboard`,
  `/providers/dashboard`) instead of broad label text. The public **Providers
  directory** link (footer / Services menu, added in GHST-42) is legitimate and
  was tripping the old `/^providers$/i` text match.
- **Runbook** — `docs/e2e/AGENT-RUNBOOK.md` updated with the `@blog` command,
  env-var table, and a production-safe skip matrix.

## Existing coverage relied on (no change needed)

- Home smoke + role nav contract: `@navigation` (incl. hero search, chips,
  guest/customer/provider boundaries, sidebar MVP-only, logout clears PB).
- Customer/Provider request→quote→accept→complete→review: `@marketplace`.
- Discovery (Canada-only): `@discovery`. Auth: `@auth`. A11y/responsive: health.

## Runs performed (local, against fresh `dist` via vite preview)

`BASE_URL=http://127.0.0.1:4173`:

- `npm run build` → **PASS**.
- `--grep @blog --project=chromium` → **2 passed, 1 skipped**
  (provider-submit skipped: `blog_posts` not deployed yet — expected).
- `--grep @navigation --project=chromium` → **13 passed** (validates the GHST-50
  provider sidebar MVP contract + the guest-homepage fix).

Seed credentials were configured in `.env.e2e` (customer + provider). The local
preview build talks to the production PocketBase, where `blog_posts` 404s, so the
public blog surfaces correctly render empty/not-found states.

## Mutating / deferred

- `@marketplace` and the `@blog` provider-submit test mutate PocketBase — run
  only with explicit approval (and, for blog, after the GHST-48 migration).
- Crawl audit (`npm run audit:crawl`, scope item 6) unchanged; rerun after the
  full MVP build is deployed to capture the new blog + trimmed-nav surfaces.

## Acceptance

- `npm run build` passes. ✔
- Relevant Playwright suites pass locally (`@blog` read-only, `@navigation`). ✔
- Runbook updated with env vars, seed requirements, skip matrix. ✔
- Mutating tests clearly separated and skipped without approval/deploy. ✔
