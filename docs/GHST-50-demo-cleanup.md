# GHST-50 — Demo/mock data cleanup after live parity

**Task:** GHST-50 (Milestone: Demo Cleanup). Source list:
`docs/entrypoint-audit/demo-cleanup-candidates.md`.

Removes mock JSON / static demo from the **wired MVP surfaces** (Home, Customer,
Provider, Blog) and trims demo-only items from MVP navigation. **No routes,
pages, or PocketBase seed data were deleted** — deferred pages remain reachable
by direct URL and return in later phases.

## 1. Mock-JSON imports removed from wired MVP flow pages

These pages already rendered the live PocketBase panel with the old template
hidden via `d-none`; the dead demo block + `core/data/json/dropDownData` import
were removed entirely:

| Page | Removed | Now renders |
|---|---|---|
| `customers/user-Job/customerCreateJob.tsx` | `category/BudgetType/ExperienceLevel` JSON, demo form, post-job modal | `CustomerCreateJobPanel` |
| `customers/user-quote-comparison/userQuoteComparison.tsx` | `Compare` JSON, fake sellers, hardcoded comparison table | `QuoteComparisonPanel` |
| `providers/provider-job-feed/providerJobFeed.tsx` | `Country/Feed` JSON, fake job cards, demo apply modal | `ProviderJobFeedPanel` |

Result: **no MVP flow page imports `src/core/data/json` mock data.** Other
wired MVP panels (customer/provider dashboards, services, proposals, active jobs,
job detail, reviews, blog) were already JSON-free.

## 2. Navigation trimmed to MVP (routes kept)

### Provider sidebar (`providers/common/providerSidebarData.ts`)
Kept (live PocketBase): **Dashboard, My Services, Job Feed, Proposals, Blog, My
Jobs, Settings, Logout**. Removed fake count badges on Proposals/My Jobs.

Removed demo-only items (routes kept; documented in
`DEFERRED_NAV_LABELS.provider`): **Bookings, Staffs, Customers, Payout, Holidays
& Leave, Coupons, Offers, Reviews (static page), Enquiries, Earnings, Chat**.

### Source of truth (`core/navigation/role-navigation-mvp.ts`)
`PROVIDER_MVP_SIDEBAR` trimmed to the same set + Blog;
`DEFERRED_NAV_LABELS.provider` now lists the 11 removed labels. The
`@navigation` Playwright contract test asserts the sidebar shows exactly the MVP
items and excludes the deferred labels.

### Public header provider dropdown (`site-header-nav-config.ts`)
Trimmed to Dashboard / My Services / Job Feed / Proposals / Blog / My Jobs /
Settings (Account, Social, Security, Notifications). Removed Booking, Payout,
Holidays, Coupons, Offers, Reviews, Earnings, Chat, and demo settings sub-items.

Customer sidebar already used the curated `CUSTOMER_MVP_SIDEBAR` (no change).

## 3. Routes inventory

Regenerated `scripts/routes-inventory.json` via
`node scripts/extract-routes.mjs` — now includes the 4 GHST-49 provider blog
routes. No routes removed.

## 4. Deferred (kept, not in MVP nav)

- Provider demo pages: bookings, staff, customers, payout, holidays, coupons,
  offers, provider-review (static), enquiry, earnings, chat — return when wired.
- `customers/user-Job/customerEditJob.tsx` — orphaned demo edit page (still
  imports `dropDownData`); not linked from any live MVP UI, reachable by direct
  URL only. Wire or remove when customer job editing enters scope.
- Provider active-jobs variant detail templates (`jobDetails{Inprogress,
  Delivered,Completed,Cancelled}.tsx`) — the MVP detail uses `jobDetails.tsx`
  (`ProviderJobDetailPanel`); variants are demo, reachable by direct URL only.
- `core/data/json/dropDownData.ts` retained (still used by deferred demo pages).

## 5. Verification

- `npm run build` → **PASS**.
- Lint clean on all edited files.
- No fake services/providers/reviews/jobs render on MVP surfaces when PocketBase
  returns empty (panels show honest empty states).
- Nav contract: update/extend `tests/e2e/navigation/role-navigation.spec.ts`
  expectations are driven by `PROVIDER_MVP_SIDEBAR` / `DEFERRED_NAV_LABELS`, so
  they stay in sync automatically (full run covered in GHST-51).
