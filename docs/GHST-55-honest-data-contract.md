# GHST-55 — Honest live-data homepage & service-card contract

Ensures the homepage and discovery surfaces render **only real PocketBase data**:
real cards (or honest empty states) and **no fabricated popularity numbers**.
No sections, pages, or features were removed — only fake/seeded display data was
replaced with real computed values or honest labels.

## The contract

- 0 services/providers/reviews → honest empty state (never fake cards).
- 1 record → exactly 1 real card. N records → exactly N (verified: rendered
  count == live PB count).
- No fabricated counts (no `?? 255 reviews`, no `0.0 (0)`, no seeded inflated
  aggregates presented as precise truth).

## What was fake (verified) and how it's fixed

| Problem | Where | Fix |
|---|---|---|
| `formatRating` printed `"0.0 (0)"` when a provider/service had no reviews | all rating displays | `formatRating` now returns **"New"** when there is no real review; shows `avg (count)` only when `count > 0` |
| Hardcoded `?? 255 reviews` + `?? 4.9` rating + a static 4.5-star block | `provider-details.tsx`, `service-details1.tsx` | replaced with `formatRating(real avg, real count)` (no invented numbers/stars) |
| Seeded `provider_profiles.services_count` (e.g. **52** while only 18 services exist) shown as "N Services" | homepage Popular Providers, provider grid cards | now shows **real** active-service count computed from the live `services` collection (`useServiceCounts().byProvider`) |
| Seeded `service_categories.listing_count` (e.g. **11**) shown as "N Listings" | homepage Categories | now shows **real** count per category (`useServiceCounts().byCategory`) |
| Provider dashboard "Reviews" + avg used seeded `rating_count`/`rating_avg` | `providers/dashboard/dashboard.tsx` | derived from the provider's **real received reviews** (`data.reviews`) |
| Non-Canada fallback text `"Illinois, USA"` | `provider-details.tsx` | uses `serviceLocationLabel(...)` (defaults to "Canada") |

### New code
- `core/api/pocketbase/format.ts` — honest `formatRating`.
- `core/hooks/useDiscoveryData.ts` — `useServiceCounts()` → `{ byProvider, byCategory, total }` computed from live **active** services (replaces denormalized seed fields).
- `ProviderGridCards` gains an optional `serviceCounts` prop; `ProviderDiscoveryPanel` supplies it.

## Card contract (audited — already honest, confirmed)

Every homepage/discovery data section loads via `useAsyncDiscovery`, whose
fallback is an **empty array** (never demo cards), and renders through
`DiscoveryStatus`/`JobFlowStatus` with explicit empty messages:
Categories, Featured/Popular/Most-Preferred/High-Rated Services, Popular
Providers, Reviews, Cities. Service/provider cards are generated from PB records
(title, price, category, city, provider) — no static hand-authored cards.

## Known, documented residue (not fake popularity; follow-ups)

- **Service card image** uses a cycling stock placeholder because seeded
  services have `images: []`. With GHST-56 image upload now live, a follow-up can
  prefer the real uploaded `service.images[0]` when present (placeholder only as
  fallback). Stock photo ≠ fabricated metric, so out of this task's hard scope.
- **Discovery filter facets** on service-grid/list (hardcoded category checklist,
  rating-count chips like `(55)`, a "50% OFF Christmas" promo) are static
  template **filter UI**, not data cards. Treated under GHST-58 (demo surface
  policy) so this task stays focused on the data/card contract. They do not
  fabricate the service results, which are live.
- **Authoritative aggregate maintenance:** ideally `services_count` /
  `rating_count` are recomputed by a PocketBase hook on service/review
  create+delete; until then the frontend computes them from live relations
  (done here). Recommended backend follow-up (no deploy in this task).

## Verification

- New suite `tests/e2e/discovery/data-honesty.spec.ts` (`@datahonesty`,
  read-only / production-safe) — **5/5 PASS** (local `dist`):
  1. `/services/service-grid` "Found N Services" == live active services (18).
  2. providers-list renders exactly the live provider count (6).
  3. `/index`, service-grid, providers-list contain **no** `(255 reviews)` / `0.0 (0)`.
  4. blog grid (0 posts) shows the honest "No blog posts yet" empty state.
- `npm run build` → PASS; lint clean on changed files.
- No deploy; no PB restart; no records/collections mutated.

## Files changed

`format.ts`, `useDiscoveryData.ts`, `provider-section.tsx`,
`HomeCategorySection.tsx`, `ProviderGridCards.tsx`, `ProviderDiscoveryPanel.tsx`,
`providers/dashboard/dashboard.tsx`, `services/providers/provider-details.tsx`,
`services/service-details/service-details1.tsx`,
`tests/e2e/discovery/data-honesty.spec.ts` (new).
