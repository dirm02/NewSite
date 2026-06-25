# Customer entrypoints (GHST-54)

Role: **customer** (authenticated, `RequireAuth allowedRoles=['customer']`,
`customerLayout`). Shell: `customers/common/header.tsx` + `customerSidebar`
(`customerSidebarData.ts`, full feature map restored in GHST-53).

## Customer sidebar (`customerSidebarData.ts`) — full feature map

| Item | Route | Page data status | Recommendation |
|---|---|---|---|
| Dashboard | `customerDashboard` | **live** — metrics + recent requests from PB `service_requests`/`quotes` (honest empty state; 0 requests now) | keep |
| Create Job | `customerCreateJob` | **live** — `CustomerCreateJobPanel` writes `service_requests` | keep |
| Bookings | `customerBooking` (rel: `customerBookingCalendar`) | **demo** — static booking template (imports none/JSON) | future / coming-soon |
| Job Bookings | `userJobBooking` (rel: details, completed) | **demo** — static template | future / coming-soon |
| Jobs | `userJob` (rel: jobDetails, create, edit) | **live** — `CustomerJobsPanel` lists real `service_requests` | keep |
| Quote Comparison | `userQuoteComparison` | **live** — `QuoteComparisonPanel` (real quotes; 0 now) | keep |
| Favorites | `customerFavourite` | **demo** — static; no `favorites` collection | future (needs PB) |
| Wallet | `customerWallet` | **demo** — static; no wallet/payments backend | future (needs PB) |
| Reviews | `customerReviews` | **live** — `useCustomerReviews` real authored reviews | keep |
| Chat | `customerChat` | **demo** — static chat template; no messaging backend | needs-decision (GHST-57) |
| Profile & Settings ▸ | `javascript:void(0)` parent | parent toggle | keep |
| ↳ Account Settings | `customerProfile` | **demo/partial** — static profile form | wire (profile→users) |
| ↳ Security Settings | `customerSecurity` | **demo** — static; **broken inner links** → `customerLoginActivity`, `deviceManagement` (404) | wire / fix links |
| ↳ Notifications | `customerNotification` (`/customers/settings/notification`) | **demo** — static settings | future |
| ↳ Connected Apps | `customerConnectedApps` | **demo** — static | future |
| Logout | `login` (via `handleLogout`) | **live** — clears PB session (verified by @navigation E2E) | keep |

## Customer header (`customers/common/header.tsx`)

| Element | Route/action | Status | Recommendation |
|---|---|---|---|
| Logo | `home` | live | keep |
| Responsive search input | none (no submit handler) | demo | wire/coming-soon |
| Notifications bell dropdown | items + "View All" → `customerNotifications` (`/customers/customer-notifications`) | **broken** (path not registered → 404) + static demo items | fix route + empty-state |
| Profile dropdown ▸ My Profile / Settings | `customerProfile` | demo/partial | wire |
| Profile dropdown ▸ Logout | `handleLogout` → `login` | live | keep |

## Customer pages (route → component → data)

| Route | Component | Data | Status | Key entrypoints on page | Recommendation |
|---|---|---|---|---|---|
| `/customers/customer-dashboard` | CustomerDashboard | PB `service_requests` (auth) | live | Create Job CTA, recent-request rows → job details / quotes | keep |
| `/customers/customer-create-job` | CustomerCreateJob | `CustomerCreateJobPanel` (PB create) | live | category/city selects (PB), submit → creates request | keep |
| `/customers/user-jobs` | UserJob | `CustomerJobsPanel` (PB list) | live | row → `customerJobDetails`, quotes → `userQuoteComparison` | keep |
| `/customers/customer-job-details` | CustomerJobDetails | `CustomerJobDetailPanel` (PB) | live | accept-quote (hook), complete/cancel (hook), leave review | keep |
| `/customers/user-quote-comparison` | UserQuoteComparison | `QuoteComparisonPanel` (PB) | live | compare quotes, accept → hook | keep |
| `/customers/customer-reviews` | CustomerReviews | `useCustomerReviews` (PB) | live | authored review cards | keep |
| `/customers/customer-edit-job` | CustomerEditJob | **imports `core/data/json`** | mock | static edit form (not wired) | wire or hide entry (no live link to it) |
| `/customers/customer-booking` | CustomerBooking | static (broken `booking1` link) | demo/broken | future bookings flow | future |
| `/customers/customer-booking-calendar` | CustomerBookingCalendar | static | demo | future |
| `/customers/customer-job-booking` | UserJobBooking | static | demo | future |
| `/customers/user-job-booking-details` | UserJobBookingDetails | static | demo | future |
| `/customers/user-job-booking-completed` | UserJobBookingCompleted | static | demo | future |
| `/customers/customer-favourite` | CustomerFavourite | static | demo | future (needs `favorites`) |
| `/customers/customer-wallet` | CustomerWallet | static | demo | future (needs wallet) |
| `/customers/customer-chat` | CustomerChat | static | demo | needs-decision (GHST-57) |
| `/customers/settings/customer-profile` | CustomerProfile | static form | demo/partial | wire (users) |
| `/customers/settings/customer-security` | SecuritySetting | static; broken inner links | demo/broken | wire / fix |
| `/customers/settings/notification` | CustomerNotification | static | demo | future |
| `/customers/settings/connected-apps` | CustomerConnectedApp | static | demo | future |

## Customer dashboard actions summary

- **Live actions (PB-backed):** create job, view jobs, open job details,
  accept quote (`/lif3line/accept-quote` hook), complete request, cancel
  request, leave review. No direct PATCH from client (hook-guarded).
- **Demo actions (no backend):** bookings/calendar, favorites toggle, wallet
  top-up/transactions, chat send, profile save, notification prefs.

## Summary

- 6 customer surfaces are **live** (dashboard, create-job, jobs, job-details,
  quote-comparison, reviews) — all honest with empty states (0 requests/quotes
  now).
- The rest of the restored sidebar (Bookings, Job Bookings, Favorites, Wallet,
  Chat, settings) are **demo/future** — keep visible, add coming-soon/empty
  states (GHST-58); Chat timing is GHST-57.
- **Broken to fix:** customer header notifications (`customerNotifications`),
  Security settings inner links (`customerLoginActivity`, `deviceManagement`).
