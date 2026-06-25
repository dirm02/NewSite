# GHST-45 — Provider dashboard wired to PocketBase

**Task:** GHST-45 (Milestone: PocketBase Wiring)
**Surface:** `/providers/dashboard` → `providers/dashboard/dashboard.tsx`
**Guard:** `RequireAuth` role `provider` (unchanged).

## What changed

Replaced the 1,100-line static template (upcoming/completed appointments, earnings
charts, subscription, calendar, demo tables) with a live MVP summary for the
signed-in provider.

- **Profile resolution:** `fetchProviderProfileForUser(token, user.id)`.
- **Composite loader:** `useProviderDashboard()` (`src/core/hooks/useJobData.ts`) resolves the profile then loads, in parallel: provider services, all provider quotes (with request expand), received reviews, and the open-opportunities count.

## Metrics (from real data)

| Card | Source |
|---|---|
| Active Services | `services` where `provider == profile.id` and `status == active` |
| Open Opportunities | `totalItems` of open `service_requests` feed |
| Quotes Submitted | count of provider `quotes` (any status) |
| Active Jobs | accepted quotes whose `request.status == in_progress` |
| Completed Jobs | accepted quotes whose `request.status == completed` |
| Reviews + avg rating | `profile.rating_count` / `profile.rating_avg` (fallback to reviews length) |

Recent quotes table: job title (`quote.expand.request.title`), quote amount, job
budget (`formatJobBudget`), quote status badge. Links to Job Feed / Proposals /
Add Service.

## PocketBase queries

```
GET /api/collections/provider_profiles/records?filter=(user='<uid>')&perPage=1
GET /api/collections/services/records?filter=(provider='<pid>')&expand=category,city
GET /api/collections/quotes/records?filter=(provider='<pid>')&expand=provider,provider.user,request,request.city,request.category
GET /api/collections/reviews/records?filter=(provider='<pid>')&expand=provider,provider.user,service,request
GET /api/collections/service_requests/records?filter=(status="open")   # count only
```

(All auth-scoped via bearer token; new `fetchProviderServices` / `fetchProviderQuotes` / `fetchProviderReviews` in `jobs.ts`.)

## Empty / setup states

- No provider profile → info banner prompting profile setup.
- No quotes + no active services → "Add a Service" CTA (`providerService`).
- No quotes but has services → "Browse Job Feed" CTA (`providerJobFeed`).
- Loading spinner; error alert.

## Removed / deferred widgets (no MVP collection)

| Demo widget | Returns in |
|---|---|
| Upcoming / Completed Appointments | Future Bookings/Appointments phase |
| Earnings / Daily / Deals charts | Future Payments phase |
| Subscription / plan widgets | Future Subscriptions phase |
| Wallet / payout | Future Payments phase |
| Calendar | Future Scheduling phase |

## Acceptance check

- [x] Provider with no services/quotes → useful setup empty states.
- [x] Seed provider → real services/quotes/jobs/review metrics.
- [x] No fake appointment/earning numbers remain on the MVP dashboard.
- [x] Provider header/sidebar have no customer-route leaks (`rg` for `all_routes.customer*`/`user*` in `providers/common` → 0).
- [x] Visit Website escape hatch unchanged (provider header).
- [x] `npm run build` passes.

## Files changed

```
src/core/api/pocketbase/jobs.ts
src/core/hooks/useJobData.ts
src/feature-module/frontend/providers/dashboard/dashboard.tsx
docs/GHST-45-provider-dashboard-wiring.md
```

No schema/collection/route/deploy changes. Old chart/modal files remain on disk (unused) for GHST-50 cleanup.
