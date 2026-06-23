# Customer dashboard entrypoints (GHST-32)

Surface: **Customer** (`customer` role). Route `/customers/customer-dashboard` → `CustomerDashboard`.
Shell: `CustomerLayout` → `CustomerHeader` (`customers/common/header.tsx`) + sidebar (`customerSidebarData.ts` from `CUSTOMER_MVP_SIDEBAR`).
Login: seed customer via `loginViaUi` (✅ succeeded; runtime user shown as "Robert Anderson"). No login failure to report.

Schema/legend: see `README.md`. Evidence = code `path:line` + `_runtime/customer-dashboard.json` (gitignored).

> React renders `to="javascript:void(0);"` (the dashboard's `Cancel` / sidebar toggle / notification items) as a **blocked `javascript:` URL** — confirmed in runtime JSON. Treated as **no-op** unless an `onClick` handler exists.

---

## 1. Customer header (`customers/common/header.tsx`)

| ID | Area | Label / icon | Selector / text | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes / evidence |
|----|------|--------------|-----------------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|------------------|
| CUST-HDR-01 | Header | Logo (normal) | `.logo-normal` | nav-link | `/index` | customer | Leaves dashboard → public home | `NewHome` | none | MVP-live | — | header.tsx:147 |
| CUST-HDR-02 | Header | Logo (small) | `.logo-small` | nav-link | `/index` | customer | Same as above | `NewHome` | none | duplicate | — | :150 |
| CUST-HDR-03 | Header | Sidebar collapse toggle | `#toggle_btn` `ti-menu-deep` | button-action | `toggleSidebar()` | customer | Mini/expand sidebar; persists `sidebar-state` in localStorage | — | none | MVP-live | — | :153, onClick |
| CUST-HDR-04 | Header | Mobile hamburger | `#mobile_btn` | button-action | `toggleMobileMenu()` | customer | Opens mobile sidebar | — | none | MVP-live | — | :158 |
| CUST-HDR-05 | Header | Home (btn) | `.btn-light` "Home" | nav-link | `/index` | customer | Navigates to public home | `NewHome` | none | MVP-live | — | :168 |
| CUST-HDR-06 | Header | Notifications bell | `.notify-link` `isax-notification` | dropdown-toggle | dropdown | customer | Opens notification panel | dropdown | none (static) | demo-later | `notifications` | hardcoded 2 demo items; :176 |
| CUST-HDR-07 | Notification | "Mark all as read" | `a` | no-op | `#` | customer | Nothing | — | none | broken | notifications | :189 |
| CUST-HDR-08 | Notification | "Today" filter dropdown | `.dropdown-toggle` | dropdown-toggle | `javascript:void(0)` | customer | Opens This/Last Week list (no-op items) | — | none | demo-later | — | :193 |
| CUST-HDR-09 | Notification | Notification item (×4) | `a` → notifications | nav-link | `/customers/customer-notifications` | customer | Navigates | Notifications page | `notifications`? | demo-later | notifications | static items; :234,262,296,319 |
| CUST-HDR-10 | Notification | "Deny" / "Accept" (item 2) | `span.btn` | display | none | customer | Nothing (spans, not buttons) | — | none | broken | bookings/requests | :286-289 |
| CUST-HDR-11 | Notification | "Cancel" / "View All" (footer) | `a` | no-op | `#` | customer | Nothing | — | none | broken | notifications | :343,346 |
| CUST-HDR-12 | Profile-menu | Avatar dropdown | `.booking-user` | dropdown-toggle | dropdown | customer | Opens profile menu | dropdown | none | MVP-live | — | :352 |
| CUST-HDR-13 | Profile-menu | Logout (with name) | `button` "Logout (…)" | button-action | `handleLogout()` | customer | PB logout + navigate `/authentication/login` | Login | `users` (PB auth) | MVP-live | — | `useAuth().logout`; :367 |
| CUST-HDR-14 | Mobile-menu | ⋮ menu → My Profile | `.dropdown-item` | nav-link | `/customers/settings/customer-profile` | customer | Navigates | Profile settings | `users` | MVP-live | — | :392 |
| CUST-HDR-15 | Mobile-menu | ⋮ menu → Settings | `.dropdown-item` | nav-link | `/customers/settings/customer-profile` | customer | Navigates | Profile settings | same | duplicate | — | dup of My Profile; :395 |
| CUST-HDR-16 | Mobile-menu | ⋮ menu → Logout | `button` | button-action | `handleLogout()` | customer | PB logout | Login | users | duplicate | — | dup of CUST-HDR-13; :398 |

## 2. Customer sidebar (`customerSidebarData.ts` ← `CUSTOMER_MVP_SIDEBAR`)

| ID | Area | Label | Selector / text | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|-----------------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-SIDE-01 | Sidebar | Dashboard | "Dashboard" | nav-link | `/customers/customer-dashboard` | customer | Navigates | This dashboard | none (static body) | MVP-live | — | mvp:14 |
| CUST-SIDE-02 | Sidebar | Create Job | "Create Job" | nav-link | `/customers/customer-create-job` | customer | Navigates | Create job form | `service_requests` (PB) | MVP-needs-backend | `service_requests` create | core MVP flow; mvp:15 |
| CUST-SIDE-03 | Sidebar | Jobs | "Jobs" | nav-link | `/customers/user-jobs` | customer | Navigates | Jobs list | `service_requests` (PB) | MVP-needs-backend | `service_requests` list/filter by customer | mvp:17 |
| CUST-SIDE-04 | Sidebar | Quote Comparison | "Quote Comparison" | nav-link | `/customers/user-quote-comparison` | customer | Navigates | Quote comparison | `quotes` | MVP-needs-backend | `quotes` per `service_requests` | mvp:22 |
| CUST-SIDE-05 | Sidebar | Reviews | "Reviews" | nav-link | `/customers/customer-reviews` | customer | Navigates | Customer reviews | `reviews` (PB) | MVP-needs-backend | `reviews` by author | mvp:23 |
| CUST-SIDE-06 | Sidebar | Profile & Settings (submenu) | "Profile & Settings" | dropdown-toggle | `javascript:void(0)` | customer | Expands submenu | — | none | MVP-live | — | mvp:24; isModal off |
| CUST-SIDE-07 | Sidebar-sub | → Account Settings | "Account Settings" | nav-link | `/customers/settings/customer-profile` | customer | Navigates | Profile settings | `users` | MVP-needs-backend | profile fields on `users` | sidebarData:33 |
| CUST-SIDE-08 | Sidebar-sub | → Security Settings | "Security Settings" | nav-link | `/customers/settings/customer-security` | customer | Navigates | Security settings | `users` auth | demo-later | password/2FA | sidebarData:38 |
| CUST-SIDE-09 | Sidebar-sub | → Notifications | "Notifications" | nav-link | `/customers/settings/notification` | customer | Navigates | Notification prefs | none | demo-later | notification prefs | sidebarData:43 |
| CUST-SIDE-10 | Sidebar-sub | → Connected Apps | "Connected Apps" | nav-link | `/customers/settings/connected-apps` | customer | Navigates | Connected apps | none | demo-later | — | sidebarData:48 |
| CUST-SIDE-11 | Sidebar | Logout | "Logout" | nav-link | `/authentication/login` | customer | Navigates to login (no PB logout call) | Login | users | broken | — | **link-only**, doesn't clear PB session unlike header logout; mvp:34 |

> Cross-role leak check (evidence only): sidebar contains **no** provider/admin items — confirmed by `_runtime/customer-dashboard.json` (only customer routes present). Matches GHST-24 fix.

## 3. Dashboard body — metric cards (`customer-dashboard.tsx:15-108`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-BODY-01 | Card | Total Orders (27, +16%) | `.dash-widget` | display | none | customer | Static counter | — | none | demo-later | orders agg | hardcoded `CountUp end={27}`; :27 |
| CUST-BODY-02 | Card | Total Spend ($2500, -5%) | `.dash-widget` | display | none | customer | Static counter | — | none | demo-later | payments agg | :50 |
| CUST-BODY-03 | Card | Wallet ($200) | `.dash-widget` | display | none | customer | Static counter | — | none | demo-later | wallet | :73 |
| CUST-BODY-04 | Card | Total Savings ($354, +16%) | `.dash-widget` | display | none | customer | Static counter | — | none | demo-later | — | :96 |

## 4. Dashboard body — Recent Booking (`:112-446`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-BODY-05 | Card-header | Recent Booking "View All" | `a` | nav-link | `/customers/user-job-booking-details` | customer | Navigates | Job booking details (demo) | none | demo-later | bookings | :116 |
| CUST-BODY-06 | Table-row | Booking service link (×6) | `a` | nav-link | `/pages/booking/booking-details` | customer | Navigates | Static booking detail template | none | demo-later | bookings | hardcoded; :131 |
| CUST-BODY-07 | Table-row | Customer profile link (×6) | `a` | no-op | `#` / `javascript:void(0)` | customer | Nothing | — | none | broken | — | first row `#`, rest void; :153,205 |
| CUST-BODY-08 | Table-row | Cancel (×6) | `.btn-light` "Cancel" | no-op | `javascript:void(0)` | customer | Nothing (no handler) | — | none | broken | bookings cancel | :173 — key action not wired |

## 5. Dashboard body — Recent Transaction (`:447-615`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-BODY-09 | Card-header | Recent Transaction "View All" | `a` | nav-link | `/customers/user-job-booking-details` | customer | Navigates | Job booking details (demo) | none | demo-later | payments | :451 |
| CUST-BODY-10 | Table-row | Transaction rows (×6) | `tr` | display | none | customer | Static (no link) | — | none | demo-later | payments | hardcoded amounts; :463 |

## 6. Dashboard body — Recent Jobs / Proposals / Activities (`:618-1071`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-BODY-11 | Card-header | Recent Jobs "View All" | `a` | nav-link | `/customers/user-jobs` | customer | Navigates | Jobs list | `service_requests` | MVP-needs-backend | `service_requests` | :622 |
| CUST-BODY-12 | Card | Recent Jobs cards (×3) | `.card` | display | none | customer | Static (no link) | — | none | demo-later | `service_requests` | hardcoded Mobile App Launch etc; :633 |
| CUST-BODY-13 | Card-header | Recent Proposals "View All" | `a` | nav-link | `/customers/user-job-booking-details` | customer | Navigates | Demo route | none | demo-later | `quotes` | :745 |
| CUST-BODY-14 | Card | Proposal author link (×3) | `a` "Ethan Parker"… | no-op | `#` | customer | Nothing | — | none | broken | `provider_profiles` | :760,818,876 |
| CUST-BODY-15 | Card | Proposal "Accept" (×3) | `.btn-success` | no-op | `#` | customer | Nothing (no handler) | — | none | broken | `quotes` accept (accept-quote hook ✅) | key action unwired; :792 |
| CUST-BODY-16 | Card | Proposal "Decline" (×3) | `.btn` text-danger | no-op | `#` | customer | Nothing | — | none | broken | `quotes` decline | :798 |
| CUST-BODY-17 | Card-header | Recent Activities "View All" | `a` | nav-link | `/customers/user-job-booking-details` | customer | Navigates | Demo route | none | demo-later | activity log | :929 |
| CUST-BODY-18 | Card | Activity items (×3 visible, 1 `d-none`) | `div` | display | none | customer | Static | — | none | demo-later | activity log | :938 |
| CUST-BODY-19 | CTA | "Post a Job Directly" arrow | `.btn-icon-lg` | no-op | `#` | customer | Nothing | — | none | broken | `service_requests` create | should link Create Job; :1038 |
| CUST-BODY-20 | CTA | "Review Proposals" arrow | `.btn-icon-lg` | no-op | `#` | customer | Nothing | — | none | broken | `quotes` | should link proposals; :1057 |

## 7. Modals (`customer-dashboard/modal.tsx`)

| ID | Area | Label | Selector | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|-------|
| CUST-MOD-01 | Modal | Delete Account (`#del-account`) | `#del-account` | modal-trigger | — | customer | **No trigger on dashboard** | password-confirm form | none | demo-later | account delete | rendered but no opener on dashboard; modal.tsx:14 |
| CUST-MOD-02 | Modal | Delete Account password field | `input[type=password]` | form-input | none | customer | Toggle visibility only | — | none | demo-later | — | :34 |
| CUST-MOD-03 | Modal | "Delete Account" submit | `button[type=submit]` | form-submit | none (no handler) | customer | Submits empty form (no-op) | — | none | broken | account delete | :68 — runtime shows this as the only `submit` button |

---

## Tally

### Classification

| Classification | Count |
|----------------|------:|
| MVP-live | 9 |
| MVP-needs-backend | 6 |
| demo-later | 16 |
| broken (no-op/unwired) | 11 |
| duplicate | 3 |
| external/static | 0 |
| auth-only | 0 |
| unknown | 0 |

### Key findings

1. **The dashboard body is 100% static demo data** — metric cards, Recent Booking, Recent Transaction, Recent Jobs, Recent Proposals, Recent Activities are all hardcoded (no PocketBase fetch). No `useDiscoveryData`/`useAuth` data binding in `customer-dashboard.tsx`.
2. **Critical actions are dead** — every `Cancel` (bookings), `Accept`/`Decline` (proposals), and the "Post a Job Directly" / "Review Proposals" CTAs are `to="#"`/`javascript:void(0)` with no handler. These are the customer's primary actions and need wiring + backend.
3. **Two logout paths diverge** — header `Logout` (CUST-HDR-13) calls `useAuth().logout()` (correct, clears PB session); sidebar `Logout` (CUST-SIDE-11) is a plain link to `/authentication/login` that does **not** clear the session. Bug-class inconsistency.
4. **Confusion risk: demo routes** — "View All" links point to `/customers/user-job-booking-details` and booking rows to `/pages/booking/booking-details` (template booking flow), not the MVP jobs flow.
5. **Sidebar is correctly role-scoped** — no provider/admin leakage (GHST-24 holds).
6. **MVP-needs-backend cluster**: Create Job, Jobs list, Quote Comparison, Reviews, Account Settings → `service_requests`, `quotes`, `reviews`, `users` collections (all exist; work is frontend wiring).
7. **Orphaned modal** — `#del-account` mounted with no trigger on the dashboard; its submit has no handler.

Runtime evidence: `docs/entrypoint-audit/_runtime/customer-dashboard.json`, `customer-dashboard.png` (gitignored).
