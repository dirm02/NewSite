# GHST-63 — Homepage provider review aggregates

## Problem

Popular Providers on `/index` still displayed seeded `provider_profiles.rating_avg`
and `rating_count` (e.g. `4.9 (370)`). Service sliders used seeded `services.rating_avg`.

## Fix

- Added `useReviewStats()` — computes real aggregates from published `reviews`
  grouped by `provider` and by `service`.
- Added helpers: `providerReviewDisplay`, `serviceReviewDisplay`, `serviceReviewSortScore`.
- Wired into: `provider-section.tsx`, `ProviderGridCards`, homepage service sections
  (`preferred`, `popular`, `feature`, `rateService`), and discovery cards.

Service counts remain from `useServiceCounts()` (GHST-55). Ratings show **New** when
no published reviews exist for that provider/service.

## Test

`@datahonesty` — “homepage provider cards do not show seeded review counts” compares
live PB review totals against rendered text and rejects fabricated `(370)`-style counts.

## Files

- `src/core/hooks/useDiscoveryData.ts`
- `src/core/api/pocketbase/format.ts`
- Homepage/discovery components listed above
- `tests/e2e/discovery/data-honesty.spec.ts`
