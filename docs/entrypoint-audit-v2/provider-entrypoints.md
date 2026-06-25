# Provider entrypoints (GHST-54)

Role: **provider** (authenticated, `RequireAuth allowedRoles=['provider']`,
`providerLayout`). Shell: `providers/common/header.tsx` + `ProviderSidebar`
(`providerSidebarData.ts`, full feature map restored in GHST-53).

## Provider sidebar (`providerSidebarData.ts`) — full feature map

| Item | Route | Page data status | Recommendation |
|---|---|---|---|
| Dashboard | `providerDashboard` | **live** — `useProviderDashboard` (profile, services, quotes, reviews, open-feed count); honest empty states | keep |
| My Services | `providerService` (rel: `providerServiceList`) | **live** — `ProviderServicesPanel` lists provider's PB `services` | keep |
| ↳ "Add Service" / "Edit" CTA | `providerEditService` (`/providers/provider-edit-service`) | 🔴 **BROKEN** — route not registered → Error404 (verified on prod) | **wire (register route) — GHST-56** |
| Bookings | `providerBooking` (rel: `providerBookDetails`) | **demo** — static booking template | future / coming-soon |
| Job Feed | `providerJobFeed` (rel: `providerApplyJobs`) | **live** — `ProviderJobFeedPanel` (open `service_requests`; 0 now → empty state) | keep |
| Proposals | `providerProposal` | **live** — `ProviderProposalsPanel` (provider quotes) | keep |
| My Jobs | `providerActiveJobs` (rel: 5 job-detail variants) | **live** — `ProviderActiveJobsPanel`; `JobDetails` live; the 4 variant detail pages are demo | keep (variants=demo) |
| Staffs | `staffList` (rel: grid, details) | **mock** — `core/data/json` staff data | future (needs PB) |
| Customers | `providerCustomerList` (rel: grid, details) | **mock** — `core/data/json` | future (needs PB) |
| Payout | `providerPayout` (rel: `providerTransaction`) | **mock** — `core/data/json` | future (needs payments) |
| Holidays & Leave | `providerHoliday` (rel: `providerLeaveHistory`) | **mock** — `core/data/json` | future |
| Coupons | `providerCoupons` | **mock** — `core/data/json` | future |
| Offers | `providerOffer` | **mock** — `core/data/json` | future |
| Reviews | `providerReview` | **demo** — static template (provider received reviews not wired to this page; dashboard shows live review count) | wire (reviews) |
| Enquiries | `providerEnquiry` | **mock** — `core/data/json` | future |
| Earnings | `providerEarnings` | **demo** — static charts | future (needs payments) |
| Chat | `providerChat` | **demo** — static chat template | needs-decision (GHST-57) |
| Blog ▸ | `#` parent | parent toggle | keep |
| ↳ All Blogs | `providerBlog` | **live** — `ProviderAllBlog` (provider's `blog_posts`) | keep |
| ↳ Add Blog | `providerAddBlog` | **live** — `ProviderAddBlog` create→submit (PB) | keep |
| ↳ Submitted Blogs | `providerSubmittedBlog` | **live** — `ProviderSubmittedBlog` (moderation state) | keep |
| ↳ (Edit Blog) | `providerEditBlog` | **live** — registered (`ProviderAddBlog` reused) | keep |
| Settings ▸ | `#` parent | parent toggle | keep |
| ↳ Appointment | `providerAppointmentSettings` | demo | future |
| ↳ Account | `providerProfileSettings` | demo/partial (profile) | wire (provider_profiles) |
| ↳ Social Profiles | `providerSocialProfile` | demo | future |
| ↳ Security | `ProviderSecuritySettings` | demo | future |
| ↳ Plan & Billings | `providerPlan` | demo | future (needs billing) |
| ↳ Payment | `paymentSetting` | demo | future |
| ↳ Notifications | `providerNotification` | demo | future |
| ↳ Connected Apps | `providerConnectedApps` | demo | future |
| ↳ Profile Verification | `verfication` | **mock** — `core/data/json` | future |
| ↳ Delete Account | modal `#del-account` | demo (no handler) | future |
| Logout | `login` (via `handleLogout`) | **live** — clears PB session | keep |

## Provider header (`providers/common/header.tsx`)

| Element | Route/action | Status | Recommendation |
|---|---|---|---|
| Logo | `home` | live | keep |
| Responsive search input | none | demo | wire/coming-soon |
| Notifications bell dropdown | items → `providerNotification` (registered) | demo data, valid route | empty-state |
| Profile dropdown ▸ Social/Account | `providerSocialProfile`/`providerProfileSettings` | demo/partial | wire |
| Profile dropdown ▸ Logout | `handleLogout` → `login` | live | keep |

(Provider header notification links resolve to the registered `providerNotification`
route — no cross-role `/customers/...` leak, unlike the old template.)

## Provider pages (route → component → data)

| Route | Component | Data | Status | Recommendation |
|---|---|---|---|---|
| `/providers/dashboard` | ProviderDashboard | `useProviderDashboard` (PB) | live | keep |
| `/providers/provider-service` | ProviderServices | `ProviderServicesPanel` (PB) | live | keep |
| `/providers/provider-service-list` | ProviderServiceList | `ProviderServicesPanel` (PB) | live | keep |
| `/providers/provider-edit-service` | ProviderEditService → `ProviderServiceFormPanel` | PB create/update | 🔴 **broken (route unregistered)** | **wire (GHST-56)** |
| `/providers/job-feed` | ProviderJobFeed | `ProviderJobFeedPanel` (PB) | live | keep |
| `/providers/provider-apply-job` | ProviderApplyJob | `ProviderApplyPanel` (PB, dup-guard) | live | keep |
| `/providers/proposal` | ProviderProposal | `ProviderProposalsPanel` (PB) | live | keep |
| `/providers/active-jobs` | ProviderActiveJobs | `ProviderActiveJobsPanel` (PB) | live | keep |
| `/providers/job-details` | JobDetails | `ProviderJobDetailPanel` (PB) | live | keep |
| `/providers/job-details-{delivered,completed,inprogress,cancelled}` | variants | static demo | demo | future (consolidate into live detail) |
| `/providers/blog`, `/blog/add-blog`, `/blog/edit-blog`, `/blog/submitted` | blog pages | PB `blog_posts` | live | keep |
| `/providers/provider-booking`, `/provider-book-details` | booking | static/JSON | mock/demo | future |
| `/providers/staff/*` | Staff list/grid/details | `core/data/json` | mock | future |
| `/providers/customer-{list,grid,details}` | provider customers | `core/data/json` | mock | future |
| `/providers/provider-payout`, `/provider-transaction` | payout | `core/data/json` | mock | future |
| `/providers/provider-holiday`, `/leave-history` | holidays | `core/data/json` | mock | future |
| `/providers/provider-coupons` | coupons | `core/data/json` | mock | future |
| `/providers/provider-offer` | offers | `core/data/json` | mock | future |
| `/providers/provider-enquiry` | enquiries | `core/data/json` | mock | future |
| `/providers/provider-review` | reviews | static | demo | wire (reviews) |
| `/providers/provider-earnings` | earnings | static charts | demo | future |
| `/providers/provider-chat` | chat | static | demo | needs-decision (GHST-57) |
| `/providers/provider-subscription` | subscription | static | demo | future (billing) |
| `/providers/settings/*` | settings pages | static (verification=JSON) | demo/mock | wire account; rest future |

## Provider dashboard / flow actions summary

- **Live actions (PB-backed):** view dashboard metrics, list/own services
  (read), browse job feed, submit quote (dup-guarded, `createQuote`), view
  proposals, view active jobs + job detail, write/submit blog posts. No direct
  PATCH for request/quote status (hook-guarded).
- 🔴 **Broken core action:** **create/edit a service** — the only way to add a
  service from the UI (My Services → Add Service) 404s. The form
  (`ProviderServiceFormPanel`), hooks (`useProviderServiceActions`), and API
  (`createService`/`updateService`) all exist; only the **route registration**
  is missing in `router.link.tsx`. This is GHST-56's central fix.
- **Mock/demo actions:** staff CRUD, customers, payout, holidays, coupons,
  offers, enquiries, earnings, chat, subscription, most settings.

## Summary

- **Live:** dashboard, my-services (read), job-feed, apply, proposals,
  active-jobs, job-detail, blog. ~11 surfaces.
- 🔴 **Broken (MVP-critical):** provider service create/edit route.
- **Mock (JSON-dressed):** staff, customers, payout/transaction, holiday/leave,
  coupons, offers, enquiry, verification.
- **Demo (static):** bookings, reviews page, earnings, chat, subscription,
  settings, job-detail variants.
- Keep all visible (philosophy); classify per surface in GHST-58.
