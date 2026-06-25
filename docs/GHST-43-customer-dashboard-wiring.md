# GHST-43 — Customer dashboard wired to PocketBase

**Task:** GHST-43 (Milestone: PocketBase Wiring)
**Surface:** `/customers/customer-dashboard` → `customers/customer-dashboard/customer-dashboard.tsx`
**Guard:** `RequireAuth` role `customer` (unchanged).

## What changed

The customer dashboard was a fully static template (fake orders, wallet, transactions, bookings, proposals, activities). It is now driven by the **signed-in customer's** real `service_requests`.

- **Auth/session:** `useAuth()` for the current user; `useCustomerRequests()` (`src/core/hooks/useJobData.ts`) loads requests with the auth token.
- **Metrics (computed from real data):** Total Requests, Open, In Progress, Completed.
- **Recent requests table:** title → `customerJobDetailUrl`, category (`expand.category.name`), budget (`formatJobBudget`), posted date, status badge (`requestStatusLabel`/`requestStatusBadgeClass`), actions → Quotes (`quoteComparisonUrl`) / View.
- **Empty state:** when the customer has 0 requests, a clean call-to-action encourages **Create Job** (`all_routes.customerCreateJob`) — no fake bookings.
- **Loading/error:** spinner while loading; non-blocking alert on error.

## PocketBase query

```
GET /api/collections/service_requests/records
  ?filter=(customer='<AUTH_USER_ID>')
  &sort=-@rowid
  &expand=customer,category,city
  &perPage=50
```

(via `fetchCustomerRequests(token, user.id)` → `useCustomerRequests()`, auth-scoped with the bearer token; access rules already restrict rows to the owning customer.)

## Removed / deferred widgets (no MVP collection)

| Demo widget | Reason | Returns in |
|---|---|---|
| Total Spend / Wallet / Total Savings | No payments/wallet collection | Future Payments phase |
| Recent Booking table | No `bookings` collection (out of MVP) | Future Bookings/Appointments phase |
| Recent Transaction table | No payments collection | Future Payments phase |
| Recent Proposals (accept/decline cards) | Belongs to the customer Quote Comparison flow | GHST-44 |
| Recent Activities feed | No activity-log collection | Future |
| "Review Proposals (48 pending)" / promo cards | Fabricated counts | n/a |

## Acceptance check

- [x] No jobs → clean empty state encouraging Create Job (no fake bookings).
- [x] With seeded/e2e jobs → real counts + rows from PocketBase.
- [x] Logout still clears `lif3line_pb_auth` (sidebar logout via `useAuth().logout()`, unchanged from GHST-37).
- [x] Wrong-role access still blocked by `RequireAuth` (unchanged).
- [x] Customer sidebar remains simplified, no Provider/Admin nav (GHST-24/26, unchanged).
- [x] `npm run build` passes.

## Files changed

```
src/feature-module/frontend/customers/customer-dashboard/customer-dashboard.tsx
docs/GHST-43-customer-dashboard-wiring.md
```

No backend/schema changes, no new collections, no route/page deletion.
