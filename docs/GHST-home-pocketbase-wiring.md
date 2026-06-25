# GHST-41 — Wire `/index` homepage to PocketBase live data only

**Task:** GHST-41 (Milestone: PocketBase Wiring)
**Surface:** Public homepage `/index` → `NewHome` (`src/feature-module/frontend/home/new-home/index.tsx`)
**Goal:** `/index` is a real Lif3Line landing page backed by PocketBase, with honest empty states and **no fabricated/demo service, provider, review, or blog cards**. Canada-only. No new collections, no deploy, no demo-page deletion.

References read first: `docs/entrypoint-audit/homepage-entrypoints.md`, `docs/entrypoint-audit/entrypoint-flow-graph.md`, `docs/pocketbase-mvp-schema.md`, `docs/pocketbase-mvp-seed-data.md`, `docs/canada-location-scope.md`.

---

## Data sources

All live sections read from the existing discovery hooks (`src/core/hooks/useDiscoveryData.ts`) which call the public PocketBase API (`https://pocket.lif3line.me/api`). On API failure each hook falls back to an **empty array** (`useAsyncDiscovery` mock fallback = `[]`), so a backend outage renders the honest empty state — never fake cards.

| Collection | Hook | Filter / sort |
|---|---|---|
| `service_categories` | `useCategories` | `featured=true` (grid) / all |
| `services` | `useServices` | `status='active'` (+ `featured=true` for featured carousel) |
| `provider_profiles` | `useProviders` | `status='active'`, sort `-rating_avg` |
| `reviews` | `useReviews` | `status='published'` |
| `cities` | `useCities` | `country='Canada'`, sort `name` |

---

## Section-by-section result

| # | Section / component | Before | After (GHST-41) |
|---|---------------------|--------|-----------------|
| Hero stats | `index.tsx` banner-info counters | Hardcoded `215,292+ Providers`, `90,000+ Services Completed`, `2,390,968 Reviews` | Live counts from `useProviders/useServices/useReviews` → "Verified Providers", "Services Listed", "Reviews Across Canada". Falls back to `0` when empty. |
| Hero badges | `index.tsx` floating shapes | Hardcoded `4.9 / 5 (255 reviews)`, `300 Booking Completed` | Rating badge = real average over published reviews + real review count (hidden when 0 reviews); second badge = live `Services Listed` count. |
| Hero search | `index.tsx` form + popular chips | (GHST-37) controlled inputs → `buildSearchUrl` | Unchanged — already routes to `/services/search?query=&location=`, consumed by search page. |
| Categories | `HomeCategorySection.tsx` | PocketBase | Unchanged — live `useCategories`; "View All" → `/services/search?category=<slug>`. |
| Featured services | `feature-section.tsx` | PocketBase | Unchanged — live `useServices({featuredOnly:true})` with empty state. |
| Popular services | `popular-section.tsx` | PocketBase | Unchanged — live tabs by category. |
| **Most Preferred Services** | `preferredSection.tsx` | **Static `home-work` JSON** (fake cards, all linking to `service-details1`) | **Rewired to `useServices`** sorted by `rating_avg` desc (top 8). Real titles, prices, provider names (`expand.provider`), `serviceDetailUrl(id)` links. Empty state when no active services. |
| Popular providers | `provider-section.tsx` | PocketBase | Unchanged — live `useProviders` with empty state. |
| **Browse High Rated Services** | `rateServiceSection.tsx` | **7 static tabs / 28 hardcoded cards** (all `service-details1`) | **Rewired to `useServices`** sorted by `rating_avg` desc (top 8) as `.rated-wrap` cards → `serviceDetailUrl(id)`. Static category tabs removed. Empty state when no services. |
| Testimonials | `customerSection.tsx` | PocketBase | Unchanged — live `useReviews`; "Based on N reviews" already honest. |
| **Recent Blogs** | `blogAndJoinus.tsx` | **5 static demo blog cards** → `/blog/blog-details` | **Section removed** from `/index`. No blog/posts collection exists yet; documented to return in **GHST-48 (schema)** / **GHST-49 (UI)**. Provider "Join Us" CTA (→ `chooseSignUp`) retained. |
| Business CTA | `bussinessWithUs.tsx` | (GHST-37) → `chooseSignUp` | Unchanged. |
| Cities / professions | `serviceCities.tsx` | (GHST-37) city/profession links → filtered search; cities from `useCities` | Unchanged — Canada-only cities from PocketBase. |
| Footer | `home/footer/newFooter.tsx` | (GHST-37) Lif3Line copyright, real Terms/Privacy | Unchanged. |

---

## Files changed

```
src/feature-module/frontend/home/new-home/index.tsx              (hero stats/badges → live PB counts)
src/feature-module/frontend/home/new-home/preferredSection.tsx   (static JSON → PB services)
src/feature-module/frontend/home/new-home/rateServiceSection.tsx (static tabs/cards → PB services)
src/feature-module/frontend/home/new-home/blogAndJoinus.tsx      (removed static blog section; kept provider CTA)
docs/GHST-home-pocketbase-wiring.md                              (this file)
```

No backend/schema changes. No PocketBase collections created. No routes/pages/mock files deleted (`home-work` JSON is left in place, now unreferenced, pending GHST-50 cleanup).

---

## Acceptance criteria check

- [x] `/index` renders with PocketBase data when available (categories, featured/popular/preferred/high-rated services, providers, testimonials, cities, live hero counts).
- [x] With 0 services/providers/reviews, `/index` shows honest empty states, **no fake provider/service/review cards** (all card sources are now PB-backed via `DiscoveryStatus`; hero counts show `0`; rating badge hides).
- [x] Hero search + city/category chips route to `/services/search` with query params the search page consumes (GHST-37, retained).
- [x] No visible "TruelySell" text and no non-Canada location strings on `/index` (verified by repo grep over `new-home/` + footer + site-header).
- [x] `npm run build` passes (`tsc -b` + `vite build`, exit 0).
- [x] Doc with sections wired, fallback behavior, and deferred items (this file).

---

## Deferred (not in scope for GHST-41)

- **Favorite hearts** (`.fav-icon` on service cards) remain no-op `#` — needs auth + a `favorites` collection (future).
- **Recent Blogs** section — returns once provider blog schema (GHST-48) and UI (GHST-49) land.
- **Hero count accuracy at scale** — counts use the discovery list length (≤ 50/page); exact for MVP seed volumes. Switch to `totalItems` if listings exceed one page.
- **`home-work` mock JSON** + remaining demo home variants — deletion deferred to GHST-50.

---

## Verification commands

```
npm run build        # tsc -b && vite build → exit 0
# repo grep: no Truelysell / US-location strings under home/new-home, footer, site-header
```
