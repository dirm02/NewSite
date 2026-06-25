# Lif3Line Entrypoint Knowledge Graph v2 (GHST-54)

Recursive role-based entrypoint audit of the Lif3Line marketplace. Maps every
header link, sidebar link, footer link, card CTA, dropdown item, modal trigger,
form submit, and dashboard action for **guest**, **customer**, and **provider**,
classifying each as live / mock / demo / broken / future / unknown with a
recommendation.

> **Audit only — no product surfaces were trimmed, hidden, deleted, or wired in
> this task.** Per the current product philosophy, the full Customer and Provider
> feature maps stay visible; unwired surfaces are classified honestly so they can
> be wired, given an empty state, or labelled "coming soon" in later tasks
> (GHST-55/56/57/58).

## Method (verified, not assumed)

Findings were verified three ways, not taken from prior agent reports:

1. **Code** — read the nav config sources (`customerSidebarData.ts`,
   `providerSidebarData.ts`, `site-header-nav-config.ts`, `newFooter.tsx`,
   `role-navigation-mvp.ts`), the `router.link.tsx` route registrations, and the
   route→component map (`scripts/routes-inventory.json`). Data-source per file
   was classified by import signal (PocketBase API/hooks vs `core/data/json`
   mock vs neither=static).
2. **Browser** — loaded production (`https://lif3line.me`, deployed commit
   `a581cf9` = current local `main`) as guest and checked live rendering.
3. **PocketBase API** — queried `https://pocket.lif3line.me/api` for real
   collection counts and a sample record shape.

A new reusable checker, `scripts/audit-broken-routes.mjs`, resolves every
`all_routes`/`routes` reference in the frontend to its **path** and flags links
whose path has no registered `<Route>` (i.e. click → Error404).

## Verified live PocketBase data (snapshot at audit time)

| Collection | Public total | Notes |
|---|---|---|
| `services` | **18** (18 active, 5 featured) | every sampled record has `images: []` → cards render with no real photo |
| `provider_profiles` | **6** (6 active) | seeded aggregates exceed reality (see honesty note) |
| `service_categories` | **12** (6 featured) | `icon` empty on sample |
| `cities` | **17** | Canada-only (verified `country='Canada'`) |
| `reviews` | **14** published | |
| `service_requests` | **0** | list rule public-visible; genuinely empty |
| `quotes` | **0** | |
| `blog_posts` | **0** | GHST-48 schema deployed; no posts yet |
| `blog_categories` | **0** | |
| `users` | list rule-hidden (0 returned) | expected |

**Browser confirmation of honesty:** `/services/service-grid` renders
**"Found 18 Services"** — exactly the 18 active PB records. Discovery is wired to
real data, not fake cards.

### Data-honesty concerns (for GHST-55)

- **Seeded aggregate fields overstate reality ("fake popularity").** Sample
  provider `Verduzco Cleaning Co.` has `services_count: 52` and
  `rating_count: 270`, but the whole DB has only **18** services and **14**
  reviews. Category `Nail Technicians` has `listing_count: 11`. These stored
  numbers are seed values, not computed — anywhere the UI shows them it is
  overstating. Recommend computing from live relations or hiding.
- **Service images are empty** (`images: []` on all sampled services) → service
  cards currently rely on a placeholder image. Real provider-uploaded images are
  the GHST-56 concern.
- **Discovery filter facets are static**, not derived from PB: the service-grid
  shows a hardcoded 6-category checklist (Construction/Car Wash/Electrical/
  Cleaning/Plumbing/Designing) vs the 12 real categories, **fake rating-filter
  counts** `(55)/(48)/(13)/(05)/(00)`, a price-range slider with static bounds,
  and a **"50% OFF on Christmas" countdown** promo. These are template
  decorations, not live data.

## Headline findings

### 🔴 Broken — live MVP surfaces (fix candidates)

| # | Entrypoint | Where | Behavior | Verified |
|---|---|---|---|---|
| 1 | **Add Service / Edit Service** | Provider → My Services (`ProviderServicesPanel`) → `providerEditService` (`/providers/provider-edit-service`) | Route **not registered** in `router.link.tsx`; the live `ProviderServiceFormPanel` page exists but is unreachable → **Error404** | code + browser (404 on prod) |
| 2 | Customer header notifications | Customer shell header dropdown → `customerNotifications` (`/customers/customer-notifications`) | Path not registered (the registered notification route is `customerNotification` = `/customers/settings/notification`) → 404 | code + path scan |
| 3 | Customer Security → Login Activity / Device Management | `customers/settings/security-setting.tsx` → `customerLoginActivity`, `deviceManagement` | Paths not registered → 404 (these exist only as provider settings) | path scan |

This is the most important deliverable: **the provider service-creation flow is
broken end-to-end** even though the form, hooks, and API all exist. This directly
blocks GHST-56's goal ("provider creates service records"). Recommended fix
(GHST-56): register `ProviderEditService` in `providerRoutes`.

### 🟠 Broken — non-MVP demo / alternate-template pages (low priority)

`booking1`, `bookingPayment`, `bookingDone`, `invoice` (booking demo flow),
`addSubscription`/`providerAddon` (orphan addon page), `providerRegister`,
`providerSignupPayment`, `loginemail`, `home10`, `blog` (alt home-11/12 footers),
`commonNotification` (`SiteHeaderRightActions` variant 11), `customerDetails`
(only inside hidden `d-none` demo blocks). Full list:
`scripts/audit-broken-routes.mjs` output and `broken-entrypoints.md`.

### 🟡 Navigation drift (philosophy mismatch — for GHST-58 decision)

The **role sidebars were restored to the full feature map** (GHST-53), but two
public surfaces are still **trimmed** from earlier cleanup passes and now
disagree with the "keep full feature map visible" philosophy:

- **Guest header dropdowns** (`site-header-nav-config.ts`): the `customers` and
  `providers` mega-dropdowns still list only the trimmed GHST-50 subset (e.g.
  provider dropdown omits Bookings, Payout, Coupons, Offers, Reviews, Earnings,
  Chat that the sidebar now shows).
- **Footer** (`newFooter.tsx`): trimmed in GHST-42 (no Product/Support/social/
  newsletter columns).

Not necessarily wrong, but it is an inconsistency to decide on, not a bug.

### 🟢 Live-wired surfaces (working with real PB data)

Guest: homepage (`/index`) sections, `/services/service-grid`,
`/services/service-list`, `/services/search`, `/services/providers/provider-list`,
provider details, service-details1, blog (published-only).
Customer: dashboard, jobs list, job details, create-job, quote-comparison,
reviews. Provider: dashboard, my-services (list), job-feed, apply-job, proposals,
active-jobs, job-details, blog (all/add/submitted — but **edit/add route broken**,
see above).

## Files in this audit

| File | Contents |
|---|---|
| `README.md` | this overview + verified data + headline findings |
| `guest-entrypoints.md` | guest header, footer, homepage sections, public pages |
| `customer-entrypoints.md` | customer sidebar, header, and every customer page |
| `provider-entrypoints.md` | provider sidebar, header, and every provider page |
| `broken-entrypoints.md` | full broken-route list + severity + recommendation |
| `knowledge-graph.md` | Mermaid graphs (role nav + data-source overlay) |
| `knowledge-graph.json` | machine-readable nodes/edges graph |

## Status legend

- **live** — renders real PocketBase data (or honest empty state).
- **mock** — renders static `core/data/json` data dressed as real.
- **demo** — fully static template markup (no data layer).
- **broken** — entrypoint target 404s or has no working handler.
- **future** — intentionally not built for MVP (kept visible).
- **unknown** — needs runtime/role verification.

## Recommendation legend

- **wire** — connect to PocketBase now.
- **keep** — already live/correct, leave as is.
- **empty-state** — keep visible, render honest empty state when no data.
- **coming-soon** — keep visible, add a non-confusing "coming soon" state.
- **needs-decision** — product call required (e.g. nav drift, chat timing).
