# GHST-61 — Provider demo pages: honest empty states

## Approach

Provider sidebar links stay visible. Demo/unwired surfaces now use two layers:

1. **`DemoSurfaceBanner`** (GHST-58) — warns at the top of demo routes.
2. **`DemoSurfacePageGuard`** (GHST-61) — when `hideFakeContent: true`, replaces
   the visible page body with `FeatureComingSoon` (“No records yet”) and hides
   the original template markup in `d-none` (preserved for future wiring).

Settings preview routes keep forms visible (`hideFakeContent: false`); only the
banner warns that values are not saved yet.

## Live wiring added

- **Reviews** (`/providers/provider-review`) — removed from demo-surface map;
  now uses `ProviderReviewsPanel` backed by PocketBase `reviews` (published
  only) with an honest empty state when none exist.

## Surfaces with hidden fake content

Bookings, book details, staff (list/grid/details), customers (list/grid/details),
payout, transactions, holidays, leave history, coupons, offers, enquiries,
earnings, subscription, job-detail variants, plan/billing, payment settings,
verification.

## Files

- `src/feature-module/frontend/common/state/DemoSurfacePageGuard.tsx`
- `src/core/navigation/demo-surfaces.ts` — `hideFakeContent` flag
- `src/feature-module/router/providerLayout.tsx`
- `src/feature-module/frontend/common/jobs/ProviderReviewsPanel.tsx`
- `src/feature-module/frontend/providers/provider-review/provider-review.tsx`
- `src/core/hooks/useJobData.ts` — `useProviderReceivedReviews`

## Verification

```bash
npm run build
npx playwright test --grep @demopolicy
```

No PocketBase schema changes. No deploy/restart.
