# Lif3line role navigation contract (GHST-23)

Source of truth for guest, customer, provider, and admin navigation. Agents implementing nav changes must follow this document.

**Related:** `docs/role-flow-navigation-inventory.md`, `src/core/navigation/role-navigation-mvp.ts`

## Principles

1. Each authenticated role gets **one workspace shell** (customer `/customers/*`, provider `/providers/*`).
2. Cross-role dashboard menus and admin links must **not** appear in another role's shell or in the public header for guests.
3. Deferred template features (booking demos, wallet, payout, chat) stay in the codebase but are **hidden from MVP nav**.
4. Wrong-role direct URLs redirect to the logged-in user's dashboard (`RequireAuth`).

## Canonical dashboard routes

| Role | Dashboard route | Guard |
|------|-----------------|-------|
| Guest | — | — |
| Customer | `/customers/customer-dashboard` | `RequireAuth` `customer` |
| Provider | `/providers/dashboard` | `RequireAuth` `provider` |
| Admin | `/admin/dashboard` | Template only; not linked from MVP nav |

## Guest / public header

**Allowed top nav:** Home, Services (discovery), Pages (marketing/legal), Become a Provider, Sign In, Join Us.

**Must not show:** Customers mega-menu, Providers mega-menu, Admin link, any dashboard shortcut.

**Auth entrypoints:**

- Sign In → `/authentication/login`
- Join Us → `/authentication/choose-signup`
- Customer signup → `/authentication/user-signup`
- Provider signup → `/authentication/provider-signup`
- Legacy `/authentication/register` → redirects to choose-signup

## Customer shell

**Top nav (MVP):** Dashboard, Create Job, Jobs, Quote Comparison, Visit Website.

**Sidebar (MVP):** Dashboard, Create Job, Jobs, Quote Comparison, Reviews, Profile & Settings (submenu), Logout.

**Must not show:** Providers menu, Admin link, provider-only actions (Create Service in customer context).

**Deferred (Later — not in MVP nav):** Bookings, Job Bookings, Favorites, Wallet, Chat, notification demo widgets.

## Provider shell

**Top nav (MVP):** Dashboard, Job Feed, Proposals, My Jobs, Visit Website.

**Sidebar (MVP):** Dashboard, Job Feed, Proposals, My Jobs, My Services, Reviews, Profile & Settings (submenu), Logout.

**Must not show:** Customers mega-menu, Admin link, customer-only booking/wallet flows.

**Visit Website:** **Keep** as a public-site escape hatch (`/index`). Providers need to preview marketing/discovery pages without logging out.

**Deferred (Later):** Bookings, Staffs, Customers list, Payout, Holidays, Coupons, Offers, Enquiries, Earnings, Chat, plan/billing settings.

## Admin

Admin template routes exist for future use. They are **not** exposed in public, customer, or provider navigation unless the user is explicitly authenticated as admin (not in current PocketBase MVP).

## Role detection

| Surface | Source |
|---------|--------|
| Public `SiteHeader` | `useSiteHeaderRole` → PocketBase `AuthContext` / `lif3line_pb_auth` |
| Customer / provider shells | `RequireAuth` + dedicated MVP nav components |
| Route guards | `RequireAuth` redirects wrong role to `dashboardPathForRole` |

## E2E expectations

See `tests/e2e/navigation/role-navigation.spec.ts` for automated checks of this contract.
