# Demo cleanup candidates (GHST-34)

Template/demo/broken entrypoints to **hide** (remove from nav/CTAs) or **delete-later** (remove route/page after demo).
**Nothing is deleted in this task** — this is a tracked candidate list only. No routes/pages/mock data removed.

Legend: **hide** = keep route, remove from visible nav/CTA; **delete-later** = remove page/route after demo; **fix** = repair broken link/handler (kept here because it surfaces broken UI).

---

## 1. Broken / no-op (fix or hide before demo) — highest visible-quality risk

| Item | Surface | Location | Issue | Suggested action |
|------|---------|----------|-------|------------------|
| Hero search inputs + Search + popular chips | Home | `new-home/index.tsx` | Inputs ignored; navigate without query | fix (pass query) |
| Both "Join Us" body CTAs | Home | `blogAndJoinus.tsx:65`, `bussinessWithUs.tsx:23` | `to="#"` dead | fix → choose-signup |
| Footer Product/Support columns, social icons, Careers | Home | `newFooter.tsx` | All `#` | hide / fix social to real URLs |
| Footer Terms & Conditions / Privacy (bottom) | Home | `newFooter.tsx:279,282` | `#` though pages exist | fix → `/pages/terms-condition`, `/pages/privacy-policy` |
| Newsletter Subscribe | Home | `newFooter.tsx:114` | No handler | hide until `newsletter` |
| City + profession links | Home | `serviceCities.tsx` | `#` | fix → filtered search |
| Favorite hearts | Home | feature/popular sections | `#`, no favorites | hide until `favorites` |
| Customer Cancel (bookings) ×6 | Customer | `customer-dashboard.tsx` | `javascript:void(0)` no-op | hide (bookings later) |
| Customer Accept/Decline (proposals) ×3 | Customer | `customer-dashboard.tsx:792,798` | no-op; core action | fix/wire (`quotes`) |
| Customer "Post a Job"/"Review Proposals" CTAs | Customer | `customer-dashboard.tsx:1038,1057` | `#` | fix → Create Job / proposals |
| Sidebar Logout (customer + provider) | Both | sidebars | Doesn't clear PB session | fix (call logout) |
| Provider header search (icon + form) | Provider | `providers/common/header.tsx:173,176` | submit `#` | hide / fix |
| Provider notification items → `/customers/notification` | Provider | header.tsx:279 | **cross-role leak** | fix → provider route |
| Provider Upgrade/Cancel Plan, Bookings/Transactions View All | Provider | `dashboard.tsx` | `javascript:void(0)` | hide (later scope) |
| Provider Top Services rows + View All | Provider | `dashboard.tsx:202+` | all → `service-details1` | fix → real services |
| Add Staff / Delete Account modal submits | Provider/Customer | modals | No handler | hide until backend |

## 2. Duplicate entrypoints

| Item | Surface | Location | Duplicate of | Action |
|------|---------|----------|--------------|--------|
| Mobile Sign In / Join Us | Home | `SiteHeaderMainNav` | Header Sign In / Join Us | keep (responsive) — acceptable |
| Customer mobile ⋮ "Settings" | Customer | header.tsx:395 | "My Profile" (same route) | fix (distinct route) or remove |
| Logo small | Both dashboards | headers | Logo normal | keep (responsive) |

## 3. Static template pages to hide from nav (keep route, not MVP)

| Item | Surface | Route | Reason | Action |
|------|---------|-------|--------|--------|
| Service Details 1 / 2 | Home (Pages menu) | `/services/service-details/*` | Static template detail | hide |
| Categories 1 / 2 | Home | `/pages/categories`, `/pages/categories-2` | Template | hide |
| Booking 1/2/checkout/success/details | Home | `/pages/booking*`, `/customers/booking-*` | Template booking flow (bookings out of scope) | hide |
| Error 404 / 500 (from nav) | Home | `/authentication/error-*` | Reachable from Pages menu | hide |
| Pricing Plan, Session Expired, Coming Soon, Maintenance, Installer | Home | `/pages/*` | Templates | hide |
| Phone OTP / Email OTP | Home (auth menu) | `/authentication/*-otp` | Not in MVP auth flow | hide |
| "Create Service" in **public** Services menu | Home | `/services/create-service` | Provider action shown to guests | hide (guests) |
| Blog grid/list/details + cards | Home | `/blog/*` | Blog not in MVP | hide |
| Footer language / currency dropdowns | Home | `#` | No i18n/multi-currency | delete-later |

## 4. Orphaned components (mounted, no reachable trigger)

| Item | Surface | Location | Reason | Action |
|------|---------|----------|--------|--------|
| `#quote_modal` (QuoteModal) | Home `/index` | `new-home/index.tsx` | No trigger on this page | delete-later (or wire trigger) |
| `#provider` (BecomeProvider wizard) | Home `/index` | `new-home/index.tsx` | No trigger on `/index` | delete-later (or wire trigger) |
| `#del-account` modal | Customer dashboard | `customer-dashboard/modal.tsx` | No trigger on dashboard | delete-later |

## 5. Static-only dashboard sections (delete-later after wiring real data)

| Item | Surface | Reason |
|------|---------|--------|
| Metric cards (Orders/Spend/Wallet/Savings) | Customer | Hardcoded; Wallet out of scope |
| Recent Booking / Recent Transaction tables | Customer | Bookings/payments out of scope |
| Recent Activities | Customer | No activity model |
| Appointment widgets, earnings chart, subscription card | Provider | Static; out of scope |
| Bookings calendar + cards | Provider | Bookings later |
| Top Locations (Saudi Arabia/Hongkong/Germany) | Provider | **Non-Canada**, conflicts with `canada-location-scope.md` |
| Highly Rated Staffs, Recent Transactions | Provider | Staff/payments later |

## 6. Content/brand fixes (not deletion)

| Item | Surface | Location | Issue |
|------|---------|----------|-------|
| "How Truelysell Works" | Home | `workSection.tsx:14` | Brand leftover → Lif3line |
| Footer copyright "Truelysell" | Home | `newFooter.tsx:275` | Brand leftover → Lif3line |
| Stat counters (215,292 providers etc.) | Home | `new-home/index.tsx:104+` | Hardcoded marketing numbers |

---

## Summary

- **Fix-before-demo (broken/leaks):** hero search, dead "Join Us" CTAs, footer Terms/Privacy/social, customer Accept/Decline + CTAs, both sidebar Logouts, provider cross-role notification leak, provider Top Services targets.
- **Hide-from-nav (keep routes):** template detail/category/booking/error/auth-OTP/blog pages, public "Create Service", language/currency.
- **Delete-later (after MVP wiring):** orphaned modals, static dashboard sections, non-Canada demo data.
- **No deletions performed in GHST-30–35.** Use this list to drive a later cleanup task.
