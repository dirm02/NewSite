# GHST-44 — Customer create-job + job detail actions end to end

**Task:** GHST-44 (Milestone: PocketBase Wiring)

## Summary

The customer request→quote→completion→review flow is fully wired to PocketBase
using the shared panels (built in GHST-6) plus the new review-creation path added
here. All status transitions go through the GHST-12 custom hook routes — the
frontend never issues a direct `PATCH` to `service_requests` or `quotes`.

## Entrypoints → data sources

| Step | Page | Renders panel | PocketBase call |
|---|---|---|---|
| Create Job | `/customers/customer-create-job` | `CustomerCreateJobPanel` | `createServiceRequest` → `POST /api/collections/service_requests/records` (status `open`) |
| My Jobs | `/customers/user-jobs` | `CustomerJobsPanel` | `fetchCustomerRequests` → `GET service_requests?filter=(customer='<uid>')` |
| Job Details | `/customers/customer-job-details?id=<id>` | `CustomerJobDetailPanel` | `fetchServiceRequest` + `fetchQuotesForRequest` |
| Quote Comparison | `/customers/user-quote-comparison?id=<id>` | `QuoteComparisonPanel` | `fetchQuotesForRequest` |
| Accept quote | job detail / quote comparison | — | `POST /lif3line/accept-quote` `{quoteId}` |
| Cancel request | job detail | — | `POST /lif3line/cancel-request` `{requestId}` |
| Complete request | job detail | — | `POST /lif3line/complete-request` `{requestId}` |
| Leave review | job detail (when `status=completed`) | — | `createReview` → `POST /api/collections/reviews/records` |
| My Reviews | `/customers/customer-reviews` | — | `fetchCustomerReviews` → `GET reviews?filter=(author='<uid>')` |

## New in GHST-44

- `src/core/api/pocketbase/jobs.ts`: `createReview(token, authorId, {requestId, providerId?, serviceId?, rating, message?})` and `fetchCustomerReviews(token, authorId)`.
- `src/core/hooks/useJobData.ts`: `useCustomerReviews()` hook and `submitReview()` action in `useJobActions`.
- `CustomerJobDetailPanel.tsx`: "Leave a Review" form shown only when the request is `completed`; submits rating + comment, links the review to the request and the accepted quote's provider. Backend GHST-12 hook validates the request is completed.
- `customer-reviews.tsx`: replaced static demo cards with the customer's real authored reviews + empty state.

## Direct-PATCH check

`rg "method:\s*['\"]PATCH['\"]" src` → no matches in the frontend. Status changes use only the `/lif3line/*` hook routes; review creation uses the collection create endpoint guarded by create rules + the review hook.

## States

Every panel uses `JobFlowStatus` / explicit loading-error-empty handling. Empty states encourage the next real action (Create Job, "No quotes yet", "No reviews yet").

## Manual e2e (seed credentials)

Use the seeded customer/provider accounts from `.env.e2e` via the Playwright login helpers (`tests/e2e/helpers`). **Do not hardcode/print passwords.**

1. Sign in as the seeded **customer** → `/customers/customer-dashboard`.
2. Create Job → fill title/category/city/budget/description → submit; confirm redirect/visibility in **My Jobs**.
3. Sign in as the seeded **provider**, open the Job Feed, submit a quote for that request.
4. Back as the **customer**, open Job Details → see the quote → **Accept Quote** (status → `in_progress`).
5. **Mark Completed** (status → `completed`).
6. **Leave a Review** (rating + comment) → success; confirm it appears under **My Reviews**.

(Automated coverage of this full chain is scoped to GHST-51.)

## Files changed

```
src/core/api/pocketbase/jobs.ts
src/core/hooks/useJobData.ts
src/feature-module/frontend/common/jobs/CustomerJobDetailPanel.tsx
src/feature-module/frontend/customers/customer-reviews/customer-reviews.tsx
docs/GHST-44-customer-job-flow.md
```

No schema/collection/route/deploy changes. Duplicate demo job-detail/booking pages are already hidden from public nav (GHST-42); page deletion is deferred to GHST-50.
