# GHST-46 — Provider job feed / proposals / active jobs / quote actions

**Task:** GHST-46 (Milestone: PocketBase Wiring)

## Summary

The provider discovery→quote→tracking flow is wired to live `service_requests`
and `quotes` via the shared panels (GHST-6), with duplicate-quote prevention
added in this task. Providers never mutate request status directly.

## Entrypoints → data sources

| Surface | Page | Panel | PocketBase call |
|---|---|---|---|
| Job Feed | `/providers/job-feed` | `ProviderJobFeedPanel` | `fetchOpenJobFeed` → `GET service_requests?filter=(status="open")` (+ title/description search) |
| Apply / submit quote | `/providers/job-feed/apply?id=<id>` | `ProviderApplyPanel` | `submitQuote` → `createQuote` `POST /api/collections/quotes/records` |
| Proposals | `/providers/proposal` | `ProviderProposalsPanel` | `fetchProviderPendingQuotes` + `fetchProviderAcceptedQuotes` |
| Active Jobs | `/providers/active-jobs` | `ProviderActiveJobsPanel` | accepted quotes (+ request status) + pending quotes |
| Provider job detail | `/providers/active-jobs/job-details?id=<id>` | `ProviderJobDetailPanel` | `fetchServiceRequest` + quotes (read-only) |

## New in GHST-46 — duplicate-quote prevention (scope item 7)

- `jobs.ts`: `fetchProviderQuoteForRequest(token, providerId, requestId)` returns the provider's existing quote for a request (or null).
- `useJobData.ts`:
  - `useProviderRequestQuote(requestId)` hook for the apply screen.
  - `submitQuote` now resolves the provider profile, checks for an existing quote, and throws **"You have already submitted a proposal for this job."** before creating — guards against double-submit/races.
- `ProviderApplyPanel.tsx`: when a quote already exists, shows an "already submitted" notice (with the existing amount + View link) instead of the form.

## Status-mutation safety (scope item 3 / acceptance)

Providers have **no** complete/cancel/accept controls in their views — those
actions belong to the customer (`CustomerJobDetailPanel`). The frontend issues
no direct `PATCH` to `service_requests`/`quotes` (`rg "method:\s*['\"]PATCH['\"]" src` → 0). Quote status changes are reflected read-only after the customer accepts via `/lif3line/accept-quote`.

## Deferred routes (scope item 6)

Per `docs/role-navigation-contract.md`, the provider sidebar is intentionally the
full operator workspace; demo booking/appointment routes remain reachable as
**deferred** items and are not part of the MVP job flow. No routes deleted
(deletion deferred to GHST-50).

## Acceptance check

- [x] Provider can submit one quote to an open request.
- [x] Duplicate submission blocked (UI notice + submit-time guard).
- [x] Provider sees quote status (pending/accepted) update after customer action.
- [x] Provider cannot mutate request status directly (no PATCH, no transition buttons).
- [x] `npm run build` passes.

## Manual e2e (seed credentials, no passwords printed)

1. Sign in as seeded **provider** → Job Feed → open an open request → submit a quote → redirected to Active Jobs; quote appears under **Proposals (pending)**.
2. Re-open the same request's apply page → "already submitted" notice; form hidden.
3. Sign in as the seeded **customer**, accept that quote → provider's **Proposals/Active Jobs** now show it accepted / job `in_progress`.

(Automated coverage scoped to GHST-51.)

## Files changed

```
src/core/api/pocketbase/jobs.ts
src/core/hooks/useJobData.ts
src/feature-module/frontend/common/jobs/ProviderApplyPanel.tsx
docs/GHST-46-provider-job-flow.md
```

No schema/collection/route/deploy changes.
