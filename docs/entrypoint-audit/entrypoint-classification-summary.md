# Entrypoint classification summary (GHST-34)

Merges GHST-31/32/33 into a keep / wire / hide / delete-later decision pack, grouped by surface.

Inputs: `homepage-entrypoints.md`, `customer-dashboard-entrypoints.md`, `provider-dashboard-entrypoints.md`, `docs/pocketbase-mvp-schema.md`, `docs/GHST-10-canonical-workflow.md`, `docs/GHST-2-route-inventory-and-schema.md`.

**Decision vocabulary**

| Decision | Meaning |
|----------|---------|
| **keep** | Works and is correct for MVP — leave as-is. |
| **wire** | Keep the UI, connect it to an existing/known PocketBase collection or route. |
| **hide** | Keep the route/page but remove from primary nav/visible CTAs for the demo (no deletion). |
| **delete-later** | Out-of-scope template page/action; candidate for removal after demo (tracked, not deleted now). |
| **fix** | Broken link/no-op that should point somewhere or get a handler. |

> Critical context: the **`service_requests`, `quotes`, `reviews`** collections **already exist** (`pocketbase-mvp-schema.md`). The customer job/quote flow and reviews are mostly **wire** (not new-collection) work. `bookings`, `notifications`, `messages`, `payments/subscriptions`, `staff`, `coupons`, `offers`, `enquiries`, `favorites` are **not** created (later).

---

## A. Home page (`/index`)

| Entrypoint(s) | Current | Decision | Reason | Route / component | PB dependency |
|---------------|---------|----------|--------|-------------------|---------------|
| Category grid, Featured/Popular services, Popular providers, Testimonials, "Cities in Canada" data | MVP-live | **keep** | Already PocketBase-backed via discovery hooks | `new-home/*`, `useDiscoveryData` | `service_categories`, `services`, `provider_profiles`, `reviews`, `cities` |
| Header Services/Pages nav → Search, Service Grid/List, Providers List | MVP-live | **keep** | Real discovery routes | `SiteHeaderMainNav` | services/providers |
| Sign In / Join Us / Become a Provider | MVP-live | **keep** | Auth wired (GHST-11) | `SiteHeaderRightActions` | `users` |
| Hero search inputs + Search button + popular chips | broken / MVP-needs-backend | **wire** | Inputs ignored; navigate to `/services/search` with no query | `new-home/index.tsx` hero | pass query → `services` filter |
| Category "View All" (per card) | MVP-live | **keep** | Already `searchWithCategory(slug)` | `HomeCategorySection` | `services` filter |
| City links, profession links (`#`) | broken | **fix** | Should link to filtered search | `serviceCities.tsx` | `cities`/`services` filter |
| Favorite hearts (services) | broken | **delete-later** | Favorites not in MVP scope | feature/popular sections | `favorites` (later) |
| Both "Join Us" body CTAs (`#`) | broken | **fix** | Dead primary CTA | `blogAndJoinus`, `bussinessWithUs` | route to choose-signup |
| Preferred services (×N), High-rated services (×28) → `service-details1` | demo-later | **delete-later** | Static template fillers, hardcoded single detail | `preferredSection`, `rateServiceSection` | — |
| Blog cards + Blog grid/list/details | demo-later | **hide** | Blog not in MVP; keep pages | `blogAndJoinus`, blog module | `posts` (later) |
| Footer Product/Support cols, social icons, Careers, Terms/Privacy (bottom), newsletter Subscribe | broken | **fix** (Terms/Privacy/social) / **delete-later** (Product/Support cols, newsletter) | All `#`/no handler | `newFooter.tsx` | `newsletter` (later) for Subscribe |
| Footer About / Contact / FAQ / Blog links | external/static | **keep** | Real static pages | `newFooter.tsx` | — |
| Footer language/currency dropdowns | demo-later | **delete-later** | No i18n/multi-currency in MVP | `newFooter.tsx` | — |
| `#quote_modal`, `#provider` modals (orphaned, no trigger) | demo-later | **delete-later** | Mounted on `/index` with no opener | `new-home/index.tsx` | quote/lead capture (later) |
| Service Details 1/2, Categories 1/2, Booking 1/2/checkout/success, Error 404/500, Pricing, Session Expired (nav) | demo-later | **hide** | Template pages reachable from Pages menu | header nav | — |
| "Create Service" in public Services menu | demo-later | **hide** | Provider action exposed to guests (confusion) | `SiteHeaderMainNav` | services (provider) |

## B. Customer dashboard (`/customers/customer-dashboard`)

| Entrypoint(s) | Current | Decision | Reason | Route / component | PB dependency |
|---------------|---------|----------|--------|-------------------|---------------|
| Logo/Home, sidebar toggle, mobile menu | MVP-live | **keep** | Navigation works | `customers/common/header.tsx` | — |
| Header profile-menu **Logout** | MVP-live | **keep** | Calls `useAuth().logout()` | header.tsx:367 | `users` auth |
| Sidebar **Logout** (link to `/authentication/login`) | broken | **fix** | Does not clear PB session (inconsistent with header) | `CUSTOMER_MVP_SIDEBAR` | `users` auth |
| Sidebar: Create Job, Jobs | MVP-needs-backend | **wire** | `service_requests` exists | `customerCreateJob`, `userJob` | **`service_requests`** (exists) |
| Sidebar: Quote Comparison | MVP-needs-backend | **wire** | `quotes` exists | `userQuoteComparison` | **`quotes`** (exists) |
| Sidebar: Reviews | MVP-needs-backend | **wire** | `reviews` exists | `customerReviews` | **`reviews`** (exists) |
| Sidebar: Account Settings | MVP-needs-backend | **wire** | Profile edit | `customerProfile` | `users` |
| Sidebar sub: Security / Notifications / Connected Apps | demo-later | **hide** | Not MVP | settings/* | — |
| Body: metric cards (Orders/Spend/Wallet/Savings) | demo-later | **delete-later** | Hardcoded; Wallet out of scope | `customer-dashboard.tsx` | aggregates (later) |
| Body: Recent Booking table + Cancel buttons | broken / demo-later | **delete-later** | Bookings out of MVP scope; Cancel no-op | `customer-dashboard.tsx` | `bookings` (later) |
| Body: Recent Transaction | demo-later | **delete-later** | Payments out of scope | `customer-dashboard.tsx` | payments (later) |
| Body: Recent Jobs (cards + View All) | demo-later / MVP-needs-backend | **wire** (View All) / **delete-later** (static cards) | Jobs is MVP; cards are static | `userJob` | `service_requests` |
| Body: Recent Proposals (Accept/Decline/author) | broken | **wire** | Accept/Decline are core; currently no-op | `customer-dashboard.tsx` | `quotes` + accept-quote hook |
| Body: Recent Activities | demo-later | **delete-later** | No activity model | `customer-dashboard.tsx` | activity log (later) |
| Body: "Post a Job Directly" / "Review Proposals" CTAs (`#`) | broken | **fix** | Should link Create Job / proposals | `customer-dashboard.tsx` | `service_requests`/`quotes` |
| Header notifications dropdown (+ items, mark-read, filters) | demo-later | **hide** | Notifications out of scope; static | header.tsx | `notifications` (later) |
| `#del-account` modal (orphaned) + submit | demo-later / broken | **delete-later** | No trigger, no handler | `customer-dashboard/modal.tsx` | account delete (later) |
| Mobile ⋮ Settings (dup of My Profile) | duplicate | **fix** | Points to same route as My Profile | header.tsx:395 | — |

## C. Provider dashboard (`/providers/dashboard`)

| Entrypoint(s) | Current | Decision | Reason | Route / component | PB dependency |
|---------------|---------|----------|--------|-------------------|---------------|
| Logo/Home, toggles, Visit Website, dark mode, fullscreen | MVP-live | **keep** | Work correctly | `providers/common/header.tsx` | — |
| Header profile-menu **Logout** | MVP-live | **keep** | Calls `useAuth().logout()` | header.tsx:421 | `users` auth |
| Sidebar **Logout** (link) | broken | **fix** | No PB session clear | `providerSidebarData.ts:209` | `users` auth |
| Header notification items → `/customers/notification` | broken | **fix** | **Cross-role leak**: provider links to customer route | header.tsx:279 | provider notifications (later) |
| Header search (icon + form → `#`) | broken | **fix** or **hide** | No handler | header.tsx:173,176 | search (later) |
| Sidebar: Job Feed | MVP-needs-backend | **wire** | Providers read open `service_requests` | `providerJobFeed` | **`service_requests`** (exists) |
| Sidebar: Proposals | MVP-needs-backend | **wire** | `quotes` exists | `providerProposal` | **`quotes`** (exists) |
| Sidebar: My Jobs | MVP-needs-backend | **wire** | Awarded jobs from accepted quotes | `providerActiveJobs` | `service_requests`/`quotes` |
| Sidebar: My Services | MVP-needs-backend | **wire** | `services` exists | `providerService` | **`services`** (exists) |
| Sidebar: Reviews | MVP-needs-backend | **wire** | `reviews` exists | `providerReview` | **`reviews`** (exists) |
| Sidebar: Customers, Earnings | MVP-needs-backend | **wire**/**hide** | Customers derivable; Earnings needs payments | `providerCustomerList`, `providerEarnings` | bookings/payments (later) |
| Sidebar: Bookings | MVP-needs-backend | **hide** | `bookings` out of MVP scope | `providerBooking` | `bookings` (later) |
| Sidebar: Staffs, Payout, Holidays, Coupons, Offers, Enquiries, Chat | demo-later | **hide** | Later provider-ops; keep routes | various | staff/payments/coupons/offers/enquiries/messages (later) |
| Sidebar Settings submenu (Account) | MVP-needs-backend | **wire** | Provider profile edit | `providerProfileSettings` | `provider_profiles` |
| Sidebar Settings submenu (others) | demo-later | **hide** | Not MVP | settings/* | — |
| Settings → Profile Verification | demo-later | **hide** | Admin-driven (`provider_profiles.verified`) | `verfication` | `provider_profiles` + admin hook |
| Body: appointment widgets, earnings chart, subscription, transactions | demo-later | **delete-later** | All static; bookings/payments/subscriptions out of scope | `dashboard.tsx` | bookings/payments/subscriptions (later) |
| Body: Upgrade/Cancel Plan, Bookings/Transactions "View All" (`#`) | broken | **delete-later** | No-op, out of scope | `dashboard.tsx` | subscriptions/payments (later) |
| Body: Top Services rows + View All → `service-details1` | demo-later | **fix**/**delete-later** | Mis-targeted to static detail | `dashboard.tsx:202+` | `services` |
| Body: Bookings calendar + cards | demo-later | **delete-later** | Bookings out of scope; calendar no-op | `dashboard.tsx:449+` | `bookings` (later) |
| Body: Top Locations (Saudi/Hongkong/Germany) | demo-later | **delete-later** | Non-Canada, conflicts with location scope | `dashboard.tsx:596+` | — |
| Body: Latest Reviews (View All + names) | MVP-needs-backend | **wire** | `reviews` exists | `dashboard.tsx:666+` | **`reviews`** |
| Body: Highly Rated Staffs + Add New Staff modal | demo-later | **hide** | Staff out of MVP | `dashboard.tsx:876+`, `dashboard/modal.tsx` | `staff` (later) |
| `#del-account`, `#add-staff` modals submit | broken | **delete-later** | No handlers | modals | account/staff (later) |

---

## Roll-up counts (by decision)

| Decision | Home | Customer | Provider | Notes |
|----------|-----:|---------:|---------:|-------|
| keep | many (live PB) | 3 | 6 | mostly already-wired |
| wire | 3 | 6 | 8 | **most use existing collections** |
| fix | 6 | 4 | 4 | broken links/no-ops/leaks |
| hide | ~8 | 4 | ~12 | keep routes, drop from nav |
| delete-later | ~10 | 7 | ~10 | static template fillers |

## Cross-cutting issues (all surfaces)

1. **Sidebar Logout doesn't clear PB session** (customer + provider) — `fix`.
2. **Provider header notification → customer route** — cross-role `fix`.
3. **Brand leftovers** — fixed; homepage work section + footer now use "Lif3Line".
4. **Static demo data dominates dashboards** — both dashboards render zero PocketBase data today.
5. **Existing collections are under-used** — the biggest MVP win is *wiring* `service_requests`/`quotes`/`reviews`/`services` into the dashboards, not building new collections.

See `pocketbase-backlog-from-entrypoints.md` and `demo-cleanup-candidates.md` for the split-out backlogs.

---

## GHST-37 fixes applied (broken/confusing entrypoints)

Status of the high-impact `fix` items, implemented in code (no backend schema changes, no route deletion):

| # | Fixed item | Surface | Change | File(s) | Status |
|---|-----------|---------|--------|---------|--------|
| 1 | Sidebar **Logout** now clears the PocketBase session | Customer + Provider | Added `useAuth().logout()` + redirect on the sidebar logout link (matches header) | `customers/common/customerSidebar.tsx`, `providers/common/sidebar.tsx`, `customers/common/sidebar.tsx` | ✅ done |
| 2 | Provider notification items no longer link to customer route | Provider | `routes.commonNotification` → `routes.providerNotification` (×4) | `providers/common/header.tsx` | ✅ done |
| 3 | Homepage body **Join Us** CTAs route to canonical signup | Home | `to="#"` → `routes.chooseSignUp` | `new-home/blogAndJoinus.tsx`, `new-home/bussinessWithUs.tsx` | ✅ done |
| 4 | Footer **Terms / Privacy** link to real pages | Home | `#` → `routes.termsCondition` / `routes.privacyPolicy` | `home/footer/newFooter.tsx` | ✅ done |
| 5 | Hero **search** + popular chips navigate to `/services/search` with query params | Home | Controlled inputs + submit → `buildSearchUrl(...)`; search page now reads `query` | `new-home/index.tsx`, `services/search/search.tsx`, `core/api/pocketbase/format.ts` | ✅ done |
| 6 | City / profession links prefer filtered search | Home | `#` → `buildSearchUrl({ location })` / `buildSearchUrl({ query })` | `new-home/serviceCities.tsx` | ✅ done |
| 7 | Admin nav hidden from guest/customer/provider | All | **Verified already absent** — no Admin entry in `site-header-nav-config.ts` and no admin-route links in any frontend surface; covered by `@navigation` guest/customer/provider header tests | (n/a — verification + tests) | ✅ verified |
| 8 | Replace visible legacy branding with Lif3Line | Home | "How Lif3Line Works"; footer copyright → Lif3Line | `new-home/workSection.tsx`, `home/footer/newFooter.tsx` | ✅ done |

**Verification:** `npm run build` passes (tsc -b + vite build). Focused `@navigation` Playwright suite: **13/13 passing** (incl. new tests: hero search query, popular chip, customer+provider sidebar logout clears `lif3line_pb_auth`, provider header has no `/customers/` links).

**Intentionally deferred (out of GHST-37 scope):**
- Footer Product/Support columns, social icons, newsletter Subscribe (`delete-later` / needs `newsletter`).
- `SiteHeaderRightActions` variant 11 (a non-audited template header variant) still references `commonNotification`/`customerChat`; not on the audited `/index` or dashboard surfaces.
- Sample brand/address text on the non-audited `customers/invoice/invoice.tsx` template page now uses Lif3Line/support@lif3line.me.
- Hardcoded hero stat counters and dashboard demo data (tracked in `demo-cleanup-candidates.md`).
