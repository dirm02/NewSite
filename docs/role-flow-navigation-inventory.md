# Lif3line role-flow navigation inventory (GHST-22)

Generated: 2026-06-23
Repo: `NewSite/`
Graph artifact: `.understand-anything/knowledge-graph.json`

## Purpose

Trusted map of **who sees what** in top navigation and sidebars before GHST-23–28 role-separation fixes. No app behavior was changed for this task.

## Role shells

| Shell | Layout / header source | Route prefix | Auth guard |
|-------|------------------------|--------------|------------|
| **Guest / public** | `SiteHeader` via `HomeHeader` | `/index`, `/services/*`, `/pages/*`, `/authentication/*` | None |
| **Customer** | `CustomerLayout` → `CustomerHeader` + `CustomerSidebar` | `/customers/*` | `RequireAuth` `customer` |
| **Provider** | `ProviderLayout` → `ProviderHeader` + `ProviderSidebar` | `/providers/*` | `RequireAuth` `provider` |
| **Admin** | Separate admin template | `/admin/*` | Not wired to PocketBase MVP auth |

## Role resolution (public header)

| Mechanism | Storage keys | Used by |
|-----------|--------------|---------|
| `useSiteHeaderRole` | `truelysell_auth_token`, `truelysell_user_role` | `SiteHeaderMainNav` filtering |
| `AuthContext` (PocketBase) | `lif3line_pb_auth` | Dashboard layouts, `RequireAuth` |

**Gap:** Public header role filtering reads **legacy** token keys, not `lif3line_pb_auth`. Logged-in PocketBase users often appear as **guest** in `SiteHeader`, so both Customers and Providers mega-menus may show until GHST-23/24/25 align role detection.

---

## 1. Guest / public — `SiteHeaderMainNav`

**Source:** `site-header-nav-config.ts` → filtered by `filterNavSections(role)`
**Admin link:** hardcoded in `SiteHeaderMainNav.tsx` (all variants except type 10)

### Top nav when `role = guest` (default, no legacy token)

| Section | Visible | Notes |
|---------|---------|-------|
| Home | Yes | `/index` |
| Services | Yes | Grid, list, details, search, providers list, categories, create service |
| Customers | **No** | `roles: ['customer']` — filtered out |
| Providers | **No** | `roles: ['provider']` — filtered out |
| Pages | Yes | About, blog, auth links, **booking demo**, errors, legal |
| Admin | **Yes** | `/admin/dashboard` — **cross-role leak for guests** |
| Become a Provider | Yes (variant 1 only) | `/authentication/provider-signup` |

### Top nav when legacy token + `truelysell_user_role=customer`

| Section | Visible |
|---------|---------|
| Home, Services, **Customers**, Pages, **Admin** | Yes |
| Providers | No |

### Top nav when legacy token + `truelysell_user_role=provider`

| Section | Visible |
|---------|---------|
| Home, Services, **Providers**, Pages, **Admin** | Yes |
| Customers | No |

### Public header right actions (`SiteHeaderRightActions`)

Sign In / Join Us / Register / Login only — no dashboard links (variant-dependent).

---

## 2. Customer shell — top nav (`CustomerHeader`)

**Source:** `customers/common/header.tsx` — **full template mega-menu, not role-filtered**

| Top-level item | Always visible to logged-in customer? | Cross-role leak |
|----------------|--------------------------------------|-----------------|
| Home | Yes | — |
| Services | Yes | Includes Create Service (provider action) |
| **Customers** | Yes | Expected |
| **Providers** | **Yes** | **LEAK — entire provider dashboard menu** |
| Pages | Yes | Auth, booking demos, installer, etc. |
| **Admin** | **Yes** | **LEAK — `/admin/dashboard`** |

### Customer sidebar (`customerSidebarData.ts`)

| Item | Route |
|------|-------|
| Dashboard | `/customers/customer-dashboard` |
| Bookings | `/customers/customer-booking` |
| Job Bookings | `/customers/customer-job-booking` |
| Jobs | `/customers/user-jobs` |
| Quote Comparison | `/customers/user-quote-comparison` |
| Favorites | `/customers/customer-favourite` |
| Wallet | `/customers/customer-wallet` |
| Reviews | `/customers/customer-reviews` |
| Chat | `/customers/customer-chat` |
| Settings (sub) | Profile, security, notifications, connected apps, delete |
| Logout | `/authentication/login` |

**Sidebar leaks:** None to provider/admin (customer-only items).

---

## 3. Provider shell — top nav (`ProviderHeader`)

**Source:** `providers/common/header.tsx` — **no mega-menu**; utility bar only

| Item | Route / action |
|------|----------------|
| Visit Website | `/index` (public) |
| Search | (demo, no route) |
| Notifications | dropdown mock |
| Chat | provider chat route |
| User menu | Social profile, account settings, logout |
| Dark mode / fullscreen | UI chrome |

**Top nav leaks:** No Customer/Provider/Admin mega-menus (good).

### Provider sidebar (`providerSidebarData.ts`)

| Item | Route | MVP status |
|------|-------|------------|
| Dashboard | `/providers/dashboard` | MVP |
| My Services | `/providers/provider-service` | Later |
| Bookings | `/providers/provider-booking` | Deferred (GHST-10) |
| Job Feed | `/providers/job-feed` | MVP |
| Proposals | `/providers/proposal` | MVP |
| My Jobs | `/providers/active-jobs` | MVP |
| Staffs | `/providers/staff-list` | Demo |
| Customers | `/providers/customer-list` | Demo |
| Payout | `/providers/payout` | Later |
| Holidays & Leave | `/providers/provider-holiday` | Later |
| Coupons / Offers / Reviews / Enquiries / Earnings / Chat | various | Later/demo |
| Settings (sub) | appointment, account, social, security, plan, payment, notifications, connected apps, verification, delete | Mixed |
| Logout | `/authentication/login` | — |

**Sidebar leaks:** None to customer routes directly; "Customers" is provider's client list (not customer dashboard).

---

## 4. Admin

| Entry point | Who can see link today |
|-------------|------------------------|
| `/admin/dashboard` | Guest (SiteHeader), Customer (CustomerHeader top nav) |
| Direct URL | Anyone (no PocketBase role guard on admin routes in MVP) |

---

## Cross-role leak summary

| ID | Severity | Observation | Affected role | Fix task |
|----|----------|-------------|---------------|----------|
| L-01 | **Critical** | Customer top nav shows full **Providers** mega-menu | Customer | GHST-24 |
| L-02 | **Critical** | Customer top nav shows **Admin** link | Customer | GHST-24 |
| L-03 | **High** | Guest/public **Admin** link in SiteHeader | Guest | GHST-26 |
| L-04 | **High** | Customer top nav shows **Pages → Booking** demo flows | Customer | GHST-24 / GHST-26 |
| L-05 | **High** | Customer top nav **Services → Create Service** | Customer | GHST-24 |
| L-06 | **Medium** | `useSiteHeaderRole` uses legacy storage; PocketBase session ignored | Guest/customer/provider on public pages | GHST-23 |
| L-07 | **Medium** | Provider header "Visit Website" returns guest nav with Admin link | Provider | GHST-25 / GHST-26 |
| L-08 | **Low** | Customer/provider sidebars expose deferred MVP items (wallet, booking) | Both | GHST-26 (prune) |
| L-09 | **Info** | `RequireAuth` redirects wrong role to own dashboard (good) but nav still exposes cross-links | Both | GHST-24/25 |

---

## Stale / template flows still linked in nav

| Flow | Where linked | MVP status |
|------|--------------|------------|
| Appointment booking | Pages menu, customer Bookings sidebar | Deferred |
| Wallet / payouts | Customer sidebar, provider sidebar | Deferred |
| Admin panel | SiteHeader, CustomerHeader | Out of MVP scope |
| Create Service | Services menus | Provider action |
| Home variants `/index-2`…`/index-12` | Removed from primary nav (GHST-7) | Demo only |
| Phone/email OTP auth | Pages → Authentication | Not MVP |

---

## Playwright capture notes

Screenshots (when seed credentials configured, local preview `BASE_URL=http://127.0.0.1:4173`):

| File | Route | Role |
|------|-------|------|
| `docs/e2e/role-nav/customer-dashboard-nav.png` | `/customers/customer-dashboard` | customer |
| `docs/e2e/role-nav/provider-dashboard-nav.png` | `/providers/dashboard` | provider |
| `docs/e2e/role-nav/guest-home-nav.png` | `/index` | guest |

Capture command:

```bash
npx playwright test tests/e2e/role-nav/capture-nav-screenshots.spec.ts
```

If screenshots are missing, re-run after `npm run build` and with `.env.e2e` seed users.

---

## Source file index

| Concern | Primary files |
|---------|---------------|
| Public nav config | `src/feature-module/frontend/components/site-header/site-header-nav-config.ts` |
| Public nav filter | `site-header-nav-utils.ts`, `SiteHeaderMainNav.tsx` |
| Public role detection | `use-site-header-role.ts` |
| Customer top nav | `src/feature-module/frontend/customers/common/header.tsx` |
| Customer sidebar | `customerSidebarData.ts`, `customerSidebar.tsx` |
| Provider top nav | `src/feature-module/frontend/providers/common/header.tsx` |
| Provider sidebar | `providerSidebarData.ts`, `sidebar.tsx` |
| Route guards | `src/core/auth/RequireAuth.tsx` |
| Layouts | `customerLayout.tsx`, `providerLayout.tsx` |

---

## Next tasks (GHST-23+)

1. **GHST-23** — Role navigation contract: allowed sections per role, remove Admin from non-admin, unify role detection with `AuthContext`.
2. **GHST-24** — Customer shell: customer-only top nav (no Providers/Admin/Pages booking).
3. **GHST-25** — Provider shell: provider-only chrome; safe "Visit Website" behavior.
4. **GHST-26** — Prune cross-role route entrypoints in shared configs.
5. **GHST-27** — E2E regression: assert nav items per role.
6. **GHST-28** — Deployment checklist (no deploy in GHST-22).
