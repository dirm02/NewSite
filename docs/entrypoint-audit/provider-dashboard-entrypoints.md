# Provider dashboard entrypoints (GHST-33)

Surface: **Provider** (`provider` role). Route `/providers/dashboard` → `ProviderDashboard` (`providers/dashboard/dashboard.tsx`).
Shell: `ProviderLayout` → `ProviderHeader` (`providers/common/header.tsx`) + sidebar (`providerSidebarData.ts`).
Login: seed provider via `loginViaUi` (✅ succeeded; runtime user "Hendry Thompson"). No login failure to report.

Schema/legend: see `README.md`. Evidence = code `path:line` + `_runtime/provider-dashboard.json` (gitignored).

> Per GHST-33: provider operations are broader than the customer MVP — items are classified by **actual destination/functionality**, not trimmed. Sidebar destinations resolve to real template pages (no 404s) but are driven by static template data unless noted; those are `MVP-needs-backend`.

---

## 1. Provider header (`providers/common/header.tsx`)

| ID | Area | Label / icon | Selector / text | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes / evidence |
|----|------|--------------|-----------------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|------------------|
| PROV-HDR-01 | Header | Logo (normal/small) | `.logo` | nav-link | `/index` | provider | Leaves to public home | `NewHome` | none | MVP-live | — | header.tsx:150,153 |
| PROV-HDR-02 | Header | Sidebar collapse toggle | `#toggle_btn` | button-action | `toogle()` (redux + localStorage) | provider | Mini/expand sidebar | — | none | MVP-live | — | :156 |
| PROV-HDR-03 | Header | Mobile hamburger | `#mobile_btn` | button-action | `handleClick()` | provider | Opens mobile sidebar | — | none | MVP-live | — | :161 |
| PROV-HDR-04 | Header | Search (responsive icon) | `.responsive-search` | no-op | `#` | provider | Toggles search input (visual) | — | none | broken | global search | :173 |
| PROV-HDR-05 | Header | Search input + form | `form[action="#"] input` | form-submit | `#` | provider | Submits to `#` (no handler) | — | none | broken | search | :176 — not wired |
| PROV-HDR-06 | Header | Visit Website | `.btn-primary` "Visit Website" | nav-link | `/index` | provider | Navigates to public home | `NewHome` | none | MVP-live | — | :190 |
| PROV-HDR-07 | Header | Dark mode toggle (moon) | `#dark-mode-toggle` | button-action | `setDarkMode("enabled")` | provider | Enables dark theme; persists localStorage | — | none | MVP-live | — | :200 |
| PROV-HDR-08 | Header | Light mode toggle (sun) | `#light-mode-toggle` | button-action | `setDarkMode("disabled")` | provider | Disables dark theme | — | none | MVP-live | — | :208 |
| PROV-HDR-09 | Header | Notifications bell | `.notify-link` | dropdown-toggle | dropdown | provider | Opens notification panel | dropdown | none (static) | demo-later | `notifications` | hardcoded 2 items; :219 |
| PROV-HDR-10 | Notification | "Mark all as read" | `a` | no-op | `#` | provider | Nothing | — | none | broken | notifications | :234 |
| PROV-HDR-11 | Notification | "Today" filter | `.dropdown-toggle` | dropdown-toggle | `#` | provider | Opens week list (no-op items) | — | none | demo-later | — | :238 |
| PROV-HDR-12 | Notification | Notification item (×4) | `a` | nav-link | `/customers/notification` | provider | Navigates | **Customer** notification page | none | broken | notifications | ⚠ points to `commonNotification` = `/customers/notification` (customer route) from provider header; :279 |
| PROV-HDR-13 | Notification | "Cancel" (footer) | `a` | no-op | `#` | provider | Nothing | — | none | broken | — | :390 |
| PROV-HDR-14 | Notification | "View All" (footer) | `a` | nav-link | `/providers/settings/provider-notification` | provider | Navigates | Notification settings | none | demo-later | notifications | :393 |
| PROV-HDR-15 | Header | Fullscreen toggle | `.feather-maximize` | button-action | `toggleFullscreen()` | provider | Browser fullscreen API | — | none | MVP-live | — | :403 |
| PROV-HDR-16 | Profile-menu | Avatar dropdown | `.booking-user` | dropdown-toggle | dropdown | provider | Opens profile menu | dropdown | none | MVP-live | — | :411 |
| PROV-HDR-17 | Profile-menu | Logout (with name) | `button` "Logout (…)" | button-action | `handleLogout()` | provider | PB logout + navigate login | Login | `users` (PB auth) | MVP-live | — | `useAuth().logout`; :421 |
| PROV-HDR-18 | Mobile-menu | ⋮ → My Profile | `.dropdown-item` | nav-link | `/providers/settings/provider-social-profile` | provider | Navigates | Social profile settings | profiles | demo-later | provider_profiles | :446 |
| PROV-HDR-19 | Mobile-menu | ⋮ → Settings | `.dropdown-item` | nav-link | `/providers/settings/provider-profile-settings` | provider | Navigates | Profile settings | profiles | MVP-needs-backend | provider_profiles | :449 |
| PROV-HDR-20 | Mobile-menu | ⋮ → Logout | `button` | button-action | `handleLogout()` | provider | PB logout | Login | users | duplicate | — | dup of PROV-HDR-17; :452 |

## 2. Provider sidebar (`providerSidebarData.ts`) — full operations menu

| ID | Area | Label | Selector / text | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|-----------------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-SIDE-01 | Sidebar | Dashboard | "Dashboard" | nav-link | `/providers/dashboard` | provider | Navigates | This dashboard | static | MVP-live | — | :22 |
| PROV-SIDE-02 | Sidebar | My Services | "My Services" | nav-link | `/providers/provider-service` | provider | Navigates | Services list (template) | `services` | MVP-needs-backend | `services` by provider | :28 |
| PROV-SIDE-03 | Sidebar | Bookings | "Bookings" | nav-link | `/providers/provider-booking` | provider | Navigates | Bookings (template) | `bookings` | MVP-needs-backend | `bookings` | :34 |
| PROV-SIDE-04 | Sidebar | Job Feed | "Job Feed" | nav-link | `/providers/job-feed` | provider | Navigates | Job feed (template) | `service_requests` | MVP-needs-backend | `service_requests` open feed | core MVP (provider sees customer requests); :41 |
| PROV-SIDE-05 | Sidebar | Proposals (badge 4) | "Proposals" | nav-link | `/providers/proposal` | provider | Navigates | Proposals (template) | `quotes` | MVP-needs-backend | `quotes` by provider | badge hardcoded "4"; :48 |
| PROV-SIDE-06 | Sidebar | My Jobs (badge 9) | "My Jobs" | nav-link | `/providers/active-jobs` | provider | Navigates | Active jobs (template) | `service_requests` (via accepted `quotes`) | MVP-needs-backend | awarded `service_requests` | badge hardcoded "9"; :58 |
| PROV-SIDE-07 | Sidebar | Staffs | "Staffs" | nav-link | `/providers/staff/staff-list` | provider | Navigates | Staff list (template) | `staff` | demo-later | `staff` | not MVP; :75 |
| PROV-SIDE-08 | Sidebar | Customers | "Customers" | nav-link | `/providers/customer-list` | provider | Navigates | Customers list (template) | `users`/`bookings` | MVP-needs-backend | customer relations | :82 |
| PROV-SIDE-09 | Sidebar | Payout | "Payout" | nav-link | `/providers/provider-payout` | provider | Navigates | Payout (template) | payments | demo-later | payouts | needs payments; :89 |
| PROV-SIDE-10 | Sidebar | Holidays & Leave | "Holidays & Leave" | nav-link | `/providers/provider-holiday` | provider | Navigates | Holidays (template) | availability | demo-later | availability | :96 |
| PROV-SIDE-11 | Sidebar | Coupons | "Coupons" | nav-link | `/providers/provider-coupons` | provider | Navigates | Coupons (template) | coupons | demo-later | coupons | :103 |
| PROV-SIDE-12 | Sidebar | Offers | "Offers" | nav-link | `/providers/provider-offer` | provider | Navigates | Offers (template) | offers | demo-later | offers | :109 |
| PROV-SIDE-13 | Sidebar | Reviews | "Reviews" | nav-link | `/providers/provider-review` | provider | Navigates | Reviews (template) | `reviews` | MVP-needs-backend | `reviews` for provider | :115 |
| PROV-SIDE-14 | Sidebar | Enquiries | "Enquiries" | nav-link | `/providers/provider-enquiry` | provider | Navigates | Enquiries (template) | enquiries | demo-later | enquiries | :121 |
| PROV-SIDE-15 | Sidebar | Earnings | "Earnings" | nav-link | `/providers/provider-earnings` | provider | Navigates | Earnings (template) | payments | MVP-needs-backend | earnings agg | :127 |
| PROV-SIDE-16 | Sidebar | Chat | "Chat" | nav-link | `/providers/provider-chat` | provider | Navigates | Chat (template) | messages | demo-later | `messages` | :133 |
| PROV-SIDE-17 | Sidebar | Settings (submenu) | "Settings" | dropdown-toggle | `#` | provider | Expands submenu | — | none | MVP-live | — | :139 |
| PROV-SIDE-18 | Sidebar-sub | → Appointment | "Appointment" | nav-link | `/providers/settings/provider-appointment-settings` | provider | Navigates | Appointment settings | none | demo-later | — | :146 |
| PROV-SIDE-19 | Sidebar-sub | → Account | "Account" | nav-link | `/providers/settings/provider-profile-settings` | provider | Navigates | Profile settings | profiles | MVP-needs-backend | provider_profiles | :151 |
| PROV-SIDE-20 | Sidebar-sub | → Social Profiles | "Social Profiles" | nav-link | `/providers/settings/provider-social-profile` | provider | Navigates | Social profile | profiles | demo-later | — | :157 |
| PROV-SIDE-21 | Sidebar-sub | → Security | "Security" | nav-link | `/providers/settings/provider-security-settings` | provider | Navigates | Security settings | users auth | demo-later | password/2FA | :163 |
| PROV-SIDE-22 | Sidebar-sub | → Plan & Billings | "Plan & Billings" | nav-link | `/providers/settings/provider-plan` | provider | Navigates | Plan/billing | subscriptions | demo-later | subscriptions | :169 |
| PROV-SIDE-23 | Sidebar-sub | → Payment | "Payment" | nav-link | `/providers/settings/payment-setting` | provider | Navigates | Payment settings | payments | demo-later | payment methods | :175 |
| PROV-SIDE-24 | Sidebar-sub | → Notifications | "Notifications" | nav-link | `/providers/settings/provider-notification` | provider | Navigates | Notification prefs | none | demo-later | — | :181 |
| PROV-SIDE-25 | Sidebar-sub | → Connected Apps | "Connected Apps" | nav-link | `/providers/settings/provider-connected-apps` | provider | Navigates | Connected apps | none | demo-later | — | :187 |
| PROV-SIDE-26 | Sidebar-sub | → Profile Verification | "Profile Verification" | nav-link | `/providers/settings/verification` | provider | Navigates | Verification | verification | demo-later | provider verification | :193 |
| PROV-SIDE-27 | Sidebar-sub | → Delete Account | "Delete Account" | modal-trigger | `#del-account` | provider | Opens delete-account modal | modal | none | demo-later | account delete | `isModal`; :199; runtime confirms toggle |
| PROV-SIDE-28 | Sidebar | Logout | "Logout" | nav-link | `/authentication/login` | provider | Navigates to login (no PB logout) | Login | users | broken | — | **link-only**, doesn't clear PB session (same bug as customer); :209 |

> Cross-role check: sidebar has **no** customer/admin items — matches GHST-25. (One leak in body/header: PROV-HDR-12 notification links target a `/customers/...` route — see findings.)

## 3. Dashboard body — appointment widgets + earnings (`dashboard.tsx:18-196`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-01 | Card | Upcoming/Completed/Canceled Appointments (12/68/08) | `.prov-widget` | display | none | provider | Static counters | — | none | demo-later | bookings agg | hardcoded; :24-88 |
| PROV-BODY-02 | Card | Earnings summary + DailyChart | `#daily-chart` | display | none | provider | Static chart ($8145 etc) | — | none | demo-later | earnings | :116 |
| PROV-BODY-03 | Card | "View All Earnings" | `.btn-dark` | nav-link | `/providers/provider-earnings` | provider | Navigates | Earnings page | payments | MVP-needs-backend | earnings | :123 |

## 4. Dashboard body — Subscription card (`:131-196`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-04 | Card | "Upgrade Plan" | `.btn-dark` | no-op | `javascript:void(0)` | provider | Nothing | — | none | broken | subscriptions | :156 |
| PROV-BODY-05 | Card | "Cancel Plan" | `.btn-white` | no-op | `javascript:void(0)` | provider | Nothing | — | none | broken | subscriptions | :164 |
| PROV-BODY-06 | Card | "View All Plans" | `.text-info` | nav-link | `/providers/provider-subscription` | provider | Navigates | Subscription plans | subscriptions | demo-later | subscriptions | :181 |

## 5. Dashboard body — Top Services (`:197-448`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-07 | Card-header | Top Services "View All" | `.btn` | nav-link | `/services/service-details/service-details1` | provider | Navigates | Static demo detail | none | demo-later | `services` | wrong target (should be services list); :202 |
| PROV-BODY-08 | Card | Top service rows (×8: Installation Box…Cieling Fan) | `a` (image/title/chevron) | nav-link | `/services/service-details/service-details1` | provider | Navigates | Static demo detail | none | demo-later | `services` | all hardcoded to details1; :208+ |

## 6. Dashboard body — Bookings calendar (`:449-595`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-09 | Card-header | Bookings "View All" | `.btn` | no-op | `javascript:void(0)` | provider | Nothing | — | none | broken | `bookings` | :454 |
| PROV-BODY-10 | Card | Calendar (react-calendar) | `.custom-full-calender` | button-action | local state | provider | Month nav + date select (UI only) | — | none | demo-later | `bookings` | `onChange` is a no-op (`() => onChange`); :459 |
| PROV-BODY-11 | Card | Booking cards (×3) links | `a` | nav-link | `/pages/booking/booking-details` | provider | Navigates | Static booking detail | none | demo-later | `bookings` | :467,477,etc |

## 7. Dashboard body — Top Locations (`:596-665`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-12 | Card | DealsChart + locations (Saudi Arabia/Hongkong/Germany) | `#deals-chart` | display | none | provider | Static | — | none | demo-later | bookings by location | ⚠ non-Canada data, conflicts with Canada scope; :600-661 |

## 8. Dashboard body — Latest Reviews (`:666-875`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-13 | Card-header | Latest Reviews "View All" | `.btn` | nav-link | `/providers/provider-review` | provider | Navigates | Reviews page | `reviews` | MVP-needs-backend | `reviews` | :671 |
| PROV-BODY-14 | Card | Reviewer avatar (×4) | `a` | no-op | `javascript:void(0)` | provider | Nothing | — | none | broken | `reviews` | :678,728,776,829 |
| PROV-BODY-15 | Card | Reviewer name (×4) | `a` | nav-link | `/providers/provider-review` | provider | Navigates | Reviews page | `reviews` | MVP-needs-backend | `reviews` | :689,739,787,840 |

## 9. Dashboard body — Highly Rated Staffs (`:876-1072`)

| ID | Area | Label | Selector | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-16 | Card-header | "Add New Staff" | `.btn` | modal-trigger | `#add-staff` | provider | Opens Add Staff modal | modal | none | demo-later | `staff` | :881; runtime confirms |
| PROV-BODY-17 | Card | Staff avatar/name (×6) | `a` | nav-link | `/providers/staff/staff-details` | provider | Navigates | Staff details (template) | `staff` | demo-later | `staff` | :892+ |

## 10. Dashboard body — Recent Transactions (`:1073-1150`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-BODY-18 | Card-header | Recent Transactions "View All" | `.btn` | no-op | `javascript:void(0)` | provider | Nothing | — | none | broken | payments | :1078 |
| PROV-BODY-19 | Card | Transaction rows (×6) | `div` | display | none | provider | Static | — | none | demo-later | payments | hardcoded; :1082 |

## 11. Modals on provider dashboard

| ID | Area | Label | Selector | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|-------|
| PROV-MOD-01 | Modal | Add Staff (`#add-staff`) | `#add-staff` | modal-trigger | opened by PROV-BODY-16 | provider | Form: name/email/phone/address/country/state/city/zip/desc/services/status | form | none | demo-later | `staff` create | dashboard/modal.tsx:9 |
| PROV-MOD-02 | Modal | Add Staff "Submit" | `button[type=submit]` | form-submit | none (no handler) | provider | No-op submit | — | none | broken | `staff` create | :141 |
| PROV-MOD-03 | Modal | Add Staff "Cancel" / close | `[data-bs-dismiss=modal]` | button-action | dismiss | provider | Closes modal | — | none | demo-later | — | :134 |
| PROV-MOD-04 | Modal | Delete Account (`#del-account`) | `#del-account` | modal-trigger | opened by PROV-SIDE-27 | provider | Password-confirm form | form | none | demo-later | account delete | shared `common`-style modal; runtime "Delete Account" button present |

---

## Tally

### Classification

| Classification | Count |
|----------------|------:|
| MVP-live | 11 |
| MVP-needs-backend | 12 |
| demo-later | 28 |
| broken (no-op/unwired) | 12 |
| duplicate | 1 |
| external/static | 0 |
| auth-only | 0 |
| unknown | 0 |

### Key findings

1. **Dashboard body is fully static template data** — appointment counts, earnings/charts, subscription, Top Services, calendar, Top Locations, Latest Reviews, Highly Rated Staffs, Recent Transactions are all hardcoded (no PocketBase fetch in `dashboard.tsx`).
2. **Cross-role leak (header)** — provider notification items (PROV-HDR-12) link to `routes.commonNotification` = `/customers/notification`, a **customer** route, from inside the provider shell. Should target a provider notification route. Flag for role-flow follow-up.
3. **Header search is non-functional** — both the responsive search icon and the search form submit to `#` with no handler (PROV-HDR-04/05).
4. **Subscription + transactions actions dead** — Upgrade/Cancel Plan, Bookings/Transactions "View All" are `javascript:void(0)` no-ops.
5. **Top Services mis-targeted** — all 8 rows + "View All" point to the static `/services/service-details/service-details1` instead of the provider's own service pages.
6. **Non-Canada demo data** — Top Locations shows Saudi Arabia / Hongkong / Germany, conflicting with the Canada location scope (`docs/canada-location-scope.md`).
7. **Sidebar Logout bug (shared with customer)** — sidebar Logout is a plain link to `/authentication/login` and does not clear the PB session; only the header/profile-menu Logout calls `useAuth().logout()`.
8. **Sidebar is broad but correctly role-scoped (intentional — do not trim)** — 17 top items + 10 settings children; navigation works and is provider-only. Operational pages (services, bookings, job-feed → `service_requests`, proposals → `quotes`, my-jobs, customers, reviews, earnings) are the MVP-needs-backend core; staff/coupons/offers/holidays/chat/enquiries/payout are later provider-ops. The provider sidebar is intentionally fuller than the customer sidebar.
9. **Add Staff & Delete Account modals** render and open correctly but their submits have no handlers (no backend).

Runtime evidence: `docs/entrypoint-audit/_runtime/provider-dashboard.json`, `provider-dashboard.png` (gitignored).
