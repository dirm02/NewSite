# GHST-58 — Demo surface treatment policy + visible labels

Keeps the **full Customer and Provider feature map visible** (we are not
shrinking the template) while making every not-yet-wired surface **honest**: a
visible, non-confusing "sample data / coming soon" label so demo content is
never mistaken for live data. **No pages, routes, sidebar/header/footer links,
or sections were deleted.**

## Mechanism (central, single source of truth)

- `src/core/navigation/demo-surfaces.ts` — `DEMO_SURFACES`: a map of
  `route path → { message }` classifying each demo surface, with three honest
  messages: **sample-data** (mock lists), **future-feature** (no backend yet),
  **settings-preview** (forms not yet saved).
- `src/feature-module/frontend/common/state/DemoSurfaceBanner.tsx` — reads the
  current path; renders an honest banner on demo surfaces, **nothing** on live
  surfaces.
- Rendered once by `customerLayout` / `providerLayout` (inside `RequireAuth`,
  above `<Outlet/>`), so no individual template page needed editing and the
  banner can't be forgotten on a new demo route.
- **To "promote" a surface to live:** wire it to PocketBase, then delete its
  entry from `DEMO_SURFACES` — the banner disappears automatically.
- Chat is handled by `FeatureComingSoon` (GHST-57), so it is intentionally not
  in `DEMO_SURFACES`.

## Per-surface treatment

`live` = real PB data (no banner). `sample-data`/`future`/`settings-preview` =
visible banner. `coming-soon` = `FeatureComingSoon` panel. All routes stay
registered and reachable.

### Guest / public
| Surface | Treatment |
|---|---|
| Home, service grid/list/search, providers list/details, service-details1, blog (published) | **live** |
| About, How It Works, Pricing, FAQ, Contact, Privacy, Terms | static marketing (acceptable as-is) |
| Booking demo, categories templates, alt homes `/index-2..12` | not in MVP nav; reachable by URL only |

### Customer
| Surface | Status | Treatment |
|---|---|---|
| Dashboard, Create Job, Jobs, Job Details, Quote Comparison, Reviews | live | none |
| Bookings, Booking Calendar, Job Bookings (+details/completed) | future | banner (future-feature) |
| Favorites, Wallet | future | banner (future-feature) |
| Edit Job | mock | banner (sample-data) |
| Chat | demo | **coming-soon panel** (GHST-57) |
| Settings: Profile, Security, Notifications, Connected Apps | demo | banner (settings-preview) |

### Provider
| Surface | Status | Treatment |
|---|---|---|
| Dashboard, My Services (+list), **Add/Edit Service** (fixed GHST-56), Job Feed, Apply, Proposals, My Jobs, Job Details (base), Blog (all/add/edit/submitted) | live | none |
| Bookings (+details) | sample-data | banner |
| Staffs (list/grid/details), Customers (list/grid/details) | mock | banner (sample-data) |
| Payout (+transaction), Earnings, Subscription, Plan, Payment | future | banner (future-feature) |
| Holidays (+leave), Coupons, Offers, Enquiries, Reviews page, Verification | mock/demo | banner (sample-data) |
| Job-detail variants (delivered/completed/inprogress/cancelled) | demo | banner (sample-data) |
| Chat | demo | **coming-soon panel** (GHST-57) |
| Settings: Account, Appointment, Social, Security, Notifications, Connected Apps, Device, Login Activity | demo | banner (settings-preview) |

## What this task did NOT do (by policy)
- Did not delete or hide any page, route, or nav entry.
- Did not wire new backends or create PocketBase collections.
- Did not deploy or restart PocketBase.

## Verification
- New `tests/e2e/navigation/demo-surface-policy.spec.ts` (`@demopolicy`) — **2/2
  pass** (provider + customer): banner shows on a demo route, is **absent** on a
  live route, and chat shows the coming-soon panel.
- `@navigation` regression — **13/13 pass** (role shells/sidebars unaffected).
- `npm run build` → PASS; lint clean on changed files.

## Files
- `core/navigation/demo-surfaces.ts` (new policy config)
- `common/state/DemoSurfaceBanner.tsx` (new), `common/state/FeatureComingSoon.tsx` (GHST-57)
- `router/customerLayout.tsx`, `router/providerLayout.tsx` (render banner)
- `tests/e2e/navigation/demo-surface-policy.spec.ts` (new)
