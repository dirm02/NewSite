# GHST-5 — Connect frontend discovery pages to PocketBase

## Summary

Public discovery pages now load live data from `https://pocket.lif3line.me/api` (GHST-3 collections + GHST-4 seed). UI layout is unchanged; filter sidebars and detail-page lower sections remain template mock until GHST-7.

## Configuration

- **Env:** `VITE_POCKETBASE_URL` (default `https://pocket.lif3line.me/api`)
- **Files:** `.env.example`, `.env`, `src/vite-env.d.ts`

## Data layer

| Path | Purpose |
|------|---------|
| `src/core/api/pocketbase/config.ts` | Base URL |
| `src/core/api/pocketbase/client.ts` | `pbList`, `pbGetOne` |
| `src/core/api/pocketbase/discovery.ts` | Collection queries |
| `src/core/api/pocketbase/types.ts` | Record types |
| `src/core/api/pocketbase/format.ts` | URLs, prices, placeholder images |
| `src/core/hooks/useAsyncDiscovery.ts` | Loading/error + **MOCK_FALLBACK** |
| `src/core/hooks/useDiscoveryData.ts` | `useCategories`, `useServices`, etc. |

## Shared UI

| Path | Purpose |
|------|---------|
| `src/feature-module/frontend/common/discovery/DiscoveryStatus.tsx` | Loading / empty / API-failure banner |
| `ServiceGridCards.tsx` | Service listing cards |
| `ProviderGridCards.tsx` | Provider listing cards |
| `ServiceSlideCards.tsx` | Homepage slider cards |
| `ServiceDiscoveryPanel.tsx` | Search/grid results (optional) |
| `ProviderDiscoveryPanel.tsx` | Providers list grid |

## Connected routes

| Route | Component | PocketBase data |
|-------|-----------|-----------------|
| `/index` | `HomeCategorySection`, `feature-section`, `popular-section`, `provider-section`, `customerSection`, `serviceCities` | categories, featured services, services by category, providers, reviews, cities |
| `/services/search` | `search.tsx` | services (+ optional `?category=` slug filter, client-side) |
| `/services/service-grid` | `service-grid.tsx` | services |
| `/services/service-details1` | `service-details1.tsx` | single service via `?id=` |
| `/services/providers-list` | `providers-list.tsx` | provider_profiles |
| `/services/provider-details` | `provider-details.tsx` | single provider via `?id=` |

Detail links use query params (no dynamic route segments): e.g. `/services/service-details1?id=<recordId>`.

## MOCK_FALLBACK (temporary)

`useAsyncDiscovery` falls back to empty arrays / null when PocketBase is unreachable and shows a warning banner. Static template copy remains on detail pages below the wired header. Remove fallback in GHST-7 after live-data parity review.

## Not in scope (GHST-5)

- Deploy, auth, payments, admin
- Filter sidebar wiring (still demo UI)
- Route cleanup or mock JSON file deletion
- `rateServiceSection` (still static tabs)

## Verify locally

```bash
npm run build
npm run dev
# Homepage, /services/search, /services/service-grid, providers list
# Detail: add ?id=<uuid from PocketBase admin>
```

## Build

`npm run build` passes (verified GHST-5).
