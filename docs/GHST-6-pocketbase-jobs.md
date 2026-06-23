# GHST-6 — Connect MVP customer request and provider quote flow

## Summary

Canonical job/request/quote UI now loads and mutates live PocketBase data using GHST-11 auth and GHST-12 transition routes. Template mock sections remain hidden (`d-none`) for GHST-7 cleanup.

## Data layer

| Path | Purpose |
|------|---------|
| `src/core/api/pocketbase/jobs.ts` | CRUD: requests, quotes, provider profile lookup |
| `src/core/api/pocketbase/transitions.ts` | accept-quote, complete-request, cancel-request |
| `src/core/api/pocketbase/client.ts` | `pbListAuth`, `pbGetOneAuth`, `pbCreate` |
| `src/core/api/pocketbase/types.ts` | `PbServiceRequest`, `PbQuote` |
| `src/core/hooks/useJobData.ts` | Authenticated hooks + `useJobActions()` |

## Shared UI panels

| Component | Purpose |
|-----------|---------|
| `common/jobs/CustomerJobsPanel` | Customer job list |
| `common/jobs/CustomerCreateJobPanel` | Post service request form |
| `common/jobs/CustomerJobDetailPanel` | Job detail + quotes + accept/complete/cancel |
| `common/jobs/QuoteComparisonPanel` | Side-by-side quote table + accept |
| `common/jobs/ProviderJobFeedPanel` | Open jobs for providers |
| `common/jobs/ProviderApplyPanel` | Submit quote form |
| `common/jobs/ProviderActiveJobsPanel` | Accepted + pending provider jobs |
| `common/jobs/ProviderProposalsPanel` | All provider proposals |
| `common/jobs/ProviderJobDetailPanel` | Provider job detail view |

## Connected routes

| Route | Live behavior |
|-------|----------------|
| `/customers/customer-create-job` | Create `service_requests` (status `open`) |
| `/customers/user-jobs` | List customer's requests |
| `/customers/customer-job-details?id=` | View job, list quotes, accept via `/lif3line/accept-quote` |
| `/customers/user-quote-comparison?requestId=` | Compare quotes + accept |
| `/providers/job-feed` | List open requests |
| `/providers/provider-apply-job?id=` | Submit `quotes` record |
| `/providers/proposal` | Provider's pending + accepted quotes |
| `/providers/active-jobs` | Accepted jobs + pending proposals |
| `/providers/job-details?id=` | Job detail for provider |

## Auth & transitions

- All job API calls use `useAuth().token` via `pbListAuth` / `pbCreate`.
- Quote acceptance calls `acceptQuote()` → `POST /lif3line/accept-quote` (not direct PATCH).
- Complete/cancel use GHST-12 custom routes from job detail panel.

## Verify locally

```bash
npm run build
npm run dev
# Sign in as seed customer: robert.anderson@seed.lif3line.ca / $LIF3LINE_SEED_PASSWORD
# Sign in as seed provider: hendry.thompson@seed.lif3line.ca / $LIF3LINE_SEED_PASSWORD
```

## Not in scope (GHST-6)

- Frontend deploy
- Payments, booking, chat, wallet
- Mock/template section removal (GHST-7)
- Rating aggregate on review publish

## Build

`npm run build` passes (verified GHST-6).
