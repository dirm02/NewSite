# Homepage entrypoints — `/index` (GHST-31)

Surface: **Home** (guest). Route `/index` → `NewHome` (`src/feature-module/frontend/home/new-home/index.tsx`).
Shell: `HomeHeader type={1}` → `SiteHeader` variant 1 (`components/site-header/SiteHeader.tsx`) + `NewFooter`.

Schema/legend: see `README.md`. Evidence = code `path:line` + runtime capture `_runtime/home.json` (gitignored) from a Playwright guest load of `/index`.

> Method: static read of every section component + runtime enumeration (links/buttons/`data-bs-toggle`). React Router renders `to="#"` as `href="/index"`; those are treated as **no-op** anchors.

---

## 1. Public header — `SiteHeader` + `SiteHeaderMainNav` + `SiteHeaderRightActions`

| ID | Area | Label / icon | Selector / text | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes / evidence |
|----|------|--------------|-----------------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|------------------|
| HOME-HDR-01 | Header | Logo | `.navbar-brand.logo` | nav-link | `/index` | guest | Reloads home | `NewHome` | none | duplicate | — | self-link; `SiteHeader.tsx:130` |
| HOME-HDR-02 | Header | Categories (btn) | `.dropdown-toggle` "Categories" | dropdown-toggle | `#` → `/index` | guest | Opens dropdown | Construction/Removals/Interior items | none | demo-later | — | items are `to="#"`; `SiteHeaderMainNav.tsx:63-93` |
| HOME-HDR-03 | Nav-dropdown | Home (mega) | submenu "Home" | dropdown-toggle | `#` | guest | Opens mega menu | "General Home" → `/index` | none | duplicate | — | only one demo; `site-header-nav-config.ts:14` |
| HOME-HDR-04 | Nav-dropdown | Services → Service Grid | submenu link | nav-link | `/services/service-grid` | guest | Navigates | Service grid (PB) | services list | MVP-live | — | `site-header-nav-config.ts:30` |
| HOME-HDR-05 | Nav-dropdown | Services → Service List | submenu link | nav-link | `/services/service-list` | guest | Navigates | Service list (PB) | services list | MVP-live | — | nav-config:31 |
| HOME-HDR-06 | Nav-dropdown | Services → Service Details 1 | submenu link | nav-link | `/services/service-details/service-details1` | guest | Navigates | Static demo detail | none (static) | demo-later | — | hardcoded template detail page |
| HOME-HDR-07 | Nav-dropdown | Services → Service Details 2 | submenu link | nav-link | `/services/service-details/service-details2` | guest | Navigates | Static demo detail | none | demo-later | — | template |
| HOME-HDR-08 | Nav-dropdown | Services → Service Request | submenu link | nav-link | `/services/service-request` | guest | Navigates | Service request page | unknown | demo-later | — | not in MVP flow; verify wiring |
| HOME-HDR-09 | Nav-dropdown | Services → Search | submenu link | nav-link | `/services/search` | guest | Navigates | Discovery search (PB) | services/categories | MVP-live | — | canonical discovery |
| HOME-HDR-10 | Nav-dropdown | Services → Providers List | submenu link | nav-link | `/services/providers/provider-list` | guest | Navigates | Providers list (PB) | providers list | MVP-live | — | nav-config:46 |
| HOME-HDR-11 | Nav-dropdown | Services → Providers Details | submenu link | nav-link | `/services/providers/provider-details` | guest | Navigates | Provider details (static id?) | providers | demo-later | — | static details template |
| HOME-HDR-12 | Nav-dropdown | Services → Categories 1 | submenu link | nav-link | `/pages/categories` | guest | Navigates | Categories page | unknown | demo-later | — | template categories |
| HOME-HDR-13 | Nav-dropdown | Services → Categories 2 | submenu link | nav-link | `/pages/categories-2` | guest | Navigates | Categories page 2 | none | demo-later | — | template |
| HOME-HDR-14 | Nav-dropdown | Services → Create Service | submenu link | nav-link | `/services/create-service` | guest | Navigates | Create service form | needs provider+services | demo-later | services (provider) | provider action exposed publicly; confusion risk |
| HOME-HDR-15 | Nav-dropdown | Pages → About | submenu link | nav-link | `/pages/about-us` | guest | Navigates | About page | none | external/static | — | marketing |
| HOME-HDR-16 | Nav-dropdown | Pages → Blog (Grid/List/Details) | submenu links | nav-link | `/blog/blog-grid`, `/blog/blog-list`, `/blog/blog-details` | guest | Navigates | Blog pages (static) | none | demo-later | blog (later) | static blog template |
| HOME-HDR-17 | Nav-dropdown | Pages → Contact Us | submenu link | nav-link | `/pages/contact-us` | guest | Navigates | Contact page | contact form? | demo-later | — | verify form submit |
| HOME-HDR-18 | Nav-dropdown | Pages → How It Works | submenu link | nav-link | `/pages/how-it-works` | guest | Navigates | How it works | none | external/static | — | marketing |
| HOME-HDR-19 | Nav-dropdown | Pages → 404 / 500 Error | submenu links | nav-link | `/authentication/error-404`, `/authentication/error-500` | guest | Navigates | Error templates | none | demo-later | — | template error pages |
| HOME-HDR-20 | Nav-dropdown | Pages → Auth (Login/Customer Signup/Provider Signup/Reset/Phone OTP/Email OTP) | submenu links | nav-link | `/authentication/*` | guest | Navigates | Auth pages | users (PB) | MVP-live | — | Login/signups wired (GHST-11); OTP pages demo |
| HOME-HDR-21 | Nav-dropdown | Pages → Booking (1/2/Checkout/Success/Details) | submenu links | nav-link | `/pages/booking`, `/customers/user-bookings`, `/customers/booking-payment`, `/customers/booking-done`, `/pages/booking/booking-details` | guest | Navigates | Booking demo flow | none | demo-later | bookings (later) | template booking flow, not MVP |
| HOME-HDR-22 | Nav-dropdown | Pages → Categories/Pricing/FAQ/Privacy/Terms/Session Expired | submenu links | nav-link | `/pages/*` | guest | Navigates | Static pages | none | external/static | — | marketing/legal templates |
| HOME-HDR-23 | Header | Become a Provider | `.nav-link` "Become a Provider" | nav-link | `/authentication/provider-signup` | guest | Navigates | Provider signup | users (PB) | MVP-live | — | `SiteHeaderMainNav.tsx:217` |
| HOME-HDR-24 | Header | Sign In | `.btn-light` "Sign In" | nav-link | `/authentication/login` | guest | Navigates | Login | users (PB) | MVP-live | — | `SiteHeaderRightActions.tsx:16` |
| HOME-HDR-25 | Header | Join Us | `.btn-linear-primary` "Join Us" | nav-link | `/authentication/choose-signup` | guest | Navigates | Choose signup | users (PB) | MVP-live | — | RightActions:25 |
| HOME-HDR-26 | Mobile-menu | Sign In (mobile) | `.d-sm-none` "Sign In" | nav-link | `/authentication/login` | guest | Navigates | Login | users | duplicate | — | mobile dup of HOME-HDR-24; MainNav:238 |
| HOME-HDR-27 | Mobile-menu | Join Us (mobile) | `.d-sm-none` "Join Us" | nav-link | `/authentication/choose-signup` | guest | Navigates | Choose signup | users | duplicate | — | MainNav:246 |

> Admin link previously in header was **removed in GHST-26** — confirmed absent in `_runtime/home.json` (no "Admin" anchor).

## 2. Hero section (`new-home/index.tsx:27-164`)

| ID | Area | Label / icon | Selector / text | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|--------------|-----------------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-HERO-01 | Hero | "Search for Service" input | `input[placeholder="Search for Service"]` | form-input | none | guest | Text entry; not bound to search | — | none | broken | search params | value ignored; Search btn goes to static `/services/search`; index.tsx:52 |
| HOME-HERO-02 | Hero | "Enter Location" input | `input[placeholder="Enter Location"]` | form-input | none | guest | Text entry; not bound | — | none | broken | location filter | ignored; index.tsx:62 |
| HOME-HERO-03 | Hero | Search (btn) | `.btn-linear-primary` "Search" | nav-link | `/services/search` | guest | Navigates (no query) | Discovery search | services | MVP-live | pass query params | inputs not passed; index.tsx:70 |
| HOME-HERO-04 | Hero | Popular: Plumber | `.badge` "Plumber" | nav-link | `/services/search` | guest | Navigates (no filter) | Search | services | MVP-needs-backend | category/keyword filter | chip doesn't filter; index.tsx:85 |
| HOME-HERO-05 | Hero | Popular: Interior | `.badge` "Interior" | nav-link | `/services/search` | guest | Navigates | Search | services | MVP-needs-backend | filter | index.tsx:91 |
| HOME-HERO-06 | Hero | Popular: Nail Technicians | `.badge` | nav-link | `/services/search` | guest | Navigates | Search | services | MVP-needs-backend | filter | index.tsx:97 |
| HOME-HERO-07 | Hero | Stat counters (Providers/Services/Reviews) | `.banner-info h6` | display | none | guest | Static text | — | none | external/static | — | hardcoded numbers; index.tsx:104-125 |

## 3. Category section (`HomeCategorySection.tsx`) — PocketBase

| ID | Area | Label | Selector / text | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|-----------------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-CAT-01 | Section-Categories | Category card "View All" (×N) | `.category-item a` "View All" | nav-link | `/services/search?category=<slug>` | guest | Navigates filtered | Search by category | `categories` + `services` | MVP-live | — | `useCategories`; `searchWithCategory()`; HomeCategorySection.tsx:62 |
| HOME-CAT-02 | Section-Categories | Section "View All" | `.view-all .btn-dark` | nav-link | `/services/search` | guest | Navigates | Search | services | MVP-live | — | :79 |

## 4. Featured services (`feature-section.tsx`) — PocketBase

| ID | Area | Label | Selector / text | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|-----------------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-FEAT-01 | Section-Featured | Service image/title (×N) | `.service-item a` | nav-link | `/services/service-details/<id>` | guest | Navigates | Service detail (PB) | `services` | MVP-live | — | `serviceDetailUrl(id)`; feature-section.tsx:114,137 |
| HOME-FEAT-02 | Section-Featured | Favorite heart | `.fav-icon` | no-op | `#` | guest | Nothing | — | none | broken | favorites | not wired; needs auth+favorites; :130 |
| HOME-FEAT-03 | Section-Featured | "View All" | `.btn-dark` | nav-link | `/services/search` | guest | Navigates | Search | services | MVP-live | — | :156 |

## 5. Popular services tabs (`popular-section.tsx`) — PocketBase

| ID | Area | Label | Selector / text | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|-----------------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-POP-01 | Section-Popular | Category tab (×N) | `.nav-link[data-bs-toggle=tab]` | dropdown-toggle | `#pb-<slug>` | guest | Switches tab pane | In-page tab | `categories` | MVP-live | — | popular-section.tsx:71 |
| HOME-POP-02 | Section-Popular | Service card (×N) | `.service-item a` | nav-link | `/services/service-details/<id>` | guest | Navigates | Service detail | `services` | MVP-live | — | :98,113 |
| HOME-POP-03 | Section-Popular | Favorite heart | `.fav-icon` | no-op | `#` | guest | Nothing | — | none | broken | favorites | :106 |
| HOME-POP-04 | Section-Popular | "View All" | `.btn-dark` | nav-link | `/services/search` | guest | Navigates | Search | services | MVP-live | — | :132 |

## 6. How-it-works (`workSection.tsx`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-WORK-01 | Section-Work | 3 step blurbs | `.work-item` | display | none | guest | Static | — | none | external/static | — | no links; copy says "Truelysell" (brand leftover) |

## 7. Preferred services (`preferredSection.tsx`) — static JSON `home-work`

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-PREF-01 | Section-Preferred | Service slide image (×N) | `.slide-images a` | nav-link | `/services/service-details/service-details1` | guest | Navigates | Static demo detail | none (JSON) | demo-later | — | uses `home-work` mock; all point to details1; preferredSection.tsx:110 |
| HOME-PREF-02 | Section-Preferred | Provider info link | `.service-pro-info` | nav-link | `/services/service-details/service-details1` | guest | Navigates | Static detail | none | demo-later | — | :137 |
| HOME-PREF-03 | Section-Preferred | Title link | `h6 a` | no-op | `#` | guest | Nothing | — | none | broken | — | :153 |
| HOME-PREF-04 | Section-Preferred | Favorite heart | `.fav-icon` | no-op | `#` | guest | Nothing | — | none | broken | favorites | :128 |

## 8. Popular providers (`provider-section.tsx`) — PocketBase

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-PROV-01 | Section-Providers | Provider avatar/name (×≤8) | `.provider-item a` | nav-link | `/services/providers/provider-details?... <id>` | guest | Navigates | Provider detail (PB) | `provider_profiles` | MVP-live | — | `providerDetailUrl(id)`; provider-section.tsx:52,63 |
| HOME-PROV-02 | Section-Providers | "View All" | `.btn-dark` | nav-link | `/services/providers/provider-list` | guest | Navigates | Providers list | providers | MVP-live | — | :84 |

## 9. High-rated services (`rateServiceSection.tsx`) — static

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-RATE-01 | Section-Rated | Category tabs (7) | `.nav-link[data-bs-toggle=tab]` | dropdown-toggle | `#rate-*` | guest | Switches tab | In-page | none | external/static | — | rateServiceSection.tsx:24-63 |
| HOME-RATE-02 | Section-Rated | Rated service cards (×28) | `.rated-wrap` | nav-link | `/services/service-details/service-details1` | guest | Navigates | Static demo detail | none | demo-later | — | all hardcoded to details1; :69+ |
| HOME-RATE-03 | Section-Rated | "View All" | `.btn-dark` | nav-link | `/services/service-grid` | guest | Navigates | Service grid | services | MVP-live | — | :376 |

## 10. Testimonials (`customerSection.tsx`) — PocketBase

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-TEST-01 | Section-Testimonials | Review cards (×N) | `.testimonial-item` | display | none | guest | Static (no link) | — | `reviews` | MVP-live | — | data from `useReviews` (PB); no action; customerSection.tsx:57 |

## 11. Provider / Business CTAs + Blog (`blogAndJoinus.tsx`, `bussinessWithUs.tsx`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-CTA-01 | Section-Provider | "Join Us" (provider CTA) | `.btn-linear-primary` "Join Us" | no-op | `#` | guest | Nothing | — | none | broken | — | should go to provider-signup; blogAndJoinus.tsx:65 |
| HOME-CTA-02 | Section-Business | "Join Us" (business CTA) | `.btn-linear-primary` "Join Us" | no-op | `#` | guest | Nothing | — | none | broken | — | bussinessWithUs.tsx:23 |
| HOME-BLOG-01 | Section-Blog | Blog card image/title (×5) | `.blog-item a` | nav-link | `/blog/blog-details` | guest | Navigates | Static blog detail | none | demo-later | blog (later) | all point to same static detail; blogAndJoinus.tsx:111,125 |
| HOME-BLOG-02 | Section-Blog | "View All" | `.btn-dark` | nav-link | `/blog/blog-grid` | guest | Navigates | Blog grid | none | demo-later | blog (later) | :263 |

## 12. Service cities / professions (`serviceCities.tsx`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-CITY-01 | Section-Links | "Our Professions Near You" (accordion) | `.accordion-button[data-bs-target=#professional]` | dropdown-toggle | collapse `#professional` | guest | Expand/collapse | In-page | none | external/static | — | serviceCities.tsx:29 |
| HOME-CITY-02 | Section-Links | Profession links (×24) | `.main-links a` | no-op | `#` | guest | Nothing | — | none | broken | category→search | should link to filtered search; :47-90 |
| HOME-CITY-03 | Section-Links | "Popular Cities in Canada" (accordion) | `.accordion-button[data-bs-target=#city]` | dropdown-toggle | collapse `#city` | guest | Expand/collapse | In-page | `cities` | MVP-live | — | toggle; data from `useCities` (PB); :102 |
| HOME-CITY-04 | Section-Links | City links (×N) | `.main-links a` | no-op | `#` | guest | Nothing | — | `cities` | MVP-needs-backend | location filter | city names from PB but link is `#`; :126 |

## 13. Footer (`newFooter.tsx`)

| ID | Area | Label | Selector | Action type | href | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-FOOT-01 | Footer | Product col (Features/Pricing/Case studies/Reviews/Updates) | `.footer-menu a` | no-op | `#` | guest | Nothing | — | none | broken | — | newFooter.tsx:18-32 |
| HOME-FOOT-02 | Footer | Support col (×5) | `.footer-menu a` | no-op | `#` | guest | Nothing | — | none | broken | — | :40-54 |
| HOME-FOOT-03 | Footer | For Provider → About | `a` | nav-link | `/pages/about-us` | guest | Navigates | About | none | external/static | — | :63 |
| HOME-FOOT-04 | Footer | For Provider → Contact us | `a` | nav-link | `/pages/contact-us` | guest | Navigates | Contact | none | demo-later | — | :66 |
| HOME-FOOT-05 | Footer | For Provider → Careers | `a` | no-op | `#` | guest | Nothing | — | none | broken | — | :69 |
| HOME-FOOT-06 | Footer | For Provider → Faq's | `a` | nav-link | `/pages/faq` | guest | Navigates | FAQ | none | external/static | — | :72 |
| HOME-FOOT-07 | Footer | For Provider → Blog | `a` | nav-link | `/blog/blog-grid` | guest | Navigates | Blog grid | none | demo-later | — | :75 |
| HOME-FOOT-08 | Footer | Support col 2 (×5) | `.footer-menu a` | no-op | `#` | guest | Nothing | — | none | broken | — | :84-98 |
| HOME-FOOT-09 | Footer | Newsletter email input | `input[placeholder="Enter Email Address"]` | form-input | none | guest | Text entry | — | none | broken | newsletter | not bound; :108 |
| HOME-FOOT-10 | Footer | Subscribe (btn) | `button[type=submit]` "Subscribe" | form-submit | none | guest | No handler; no-op | — | none | broken | newsletter collection | :114 |
| HOME-FOOT-11 | Footer | Social icons (FB/IG/Twitter/WhatsApp/YT/LinkedIn) | `.social-icon a` | no-op | `#` | guest | Nothing | — | none | broken | external links | should be external URLs; :139-189 |
| HOME-FOOT-12 | Footer | App Store / Google Play | `img` | display | none | guest | Static images (not links) | — | none | external/static | — | :124-133 |
| HOME-FOOT-13 | Footer | Language dropdown (English/Japanese/Chinese) | `.dropdown-toggle` | dropdown-toggle | `#` | guest | Opens menu; items `#` | — | none | demo-later | i18n | no i18n; :192-236 |
| HOME-FOOT-14 | Footer | Currency dropdown (USD/EURO/YEN) | `.dropdown-toggle` | dropdown-toggle | `#` | guest | Opens menu; items `#` | — | none | demo-later | — | :238-262 |
| HOME-FOOT-15 | Footer-bottom | Terms and Conditions | `.menu-links a` | no-op | `#` | guest | Nothing | — | none | broken | — | should link `/pages/terms-condition`; :279 |
| HOME-FOOT-16 | Footer-bottom | Privacy Policy | `.menu-links a` | no-op | `#` | guest | Nothing | — | none | broken | — | should link `/pages/privacy-policy`; :282 |
| HOME-FOOT-17 | Footer-bottom | Copyright "Truelysell" | `p` | display | none | guest | Static | — | none | external/static | — | brand leftover ("Truelysell"); :275 |

## 14. Modals rendered on `/index` (orphaned)

| ID | Area | Label | Selector | Action type | href / action | Auth | What happens | Destination | Backend | Classification | PB need | Notes |
|----|------|-------|----------|-------------|---------------|------|--------------|-------------|---------|----------------|---------|-------|
| HOME-MOD-01 | Modal | Quote wizard (`#quote_modal`) | `#quote_modal` | modal-trigger | — | guest | **No trigger on `/index`** | 13-step quote wizard → success → `bookingDetails` | none | demo-later | quote/lead capture | rendered via `<QuoteModal/>` but no opener on this page (trigger only in `home-2`); not reachable; quote-modal.tsx |
| HOME-MOD-02 | Modal | Become a Provider wizard (`#provider`) | `#provider` | modal-trigger | — | guest | **No trigger on `/index`** | 4-step provider wizard → `#success_modal` | none | demo-later | provider onboarding | rendered via `<BecomeProvider/>`; trigger only in `home/header/new-header.tsx:235`; not reachable here; provider-modal.tsx |
| HOME-MOD-03 | Modal | Quote: Continue/Back/Submit | `.next_btn`/`.prev_btn` | button-action | `setActiveTab()` | guest | Steps wizard; Submit shows success modal | success modal | none | demo-later | — | client-only; no network; quote-modal.tsx:119+ |
| HOME-MOD-04 | Modal | Quote success → "Booking Details" | `a` | nav-link | `/pages/booking/booking-details` | guest | Navigates | Static booking detail | none | demo-later | — | quote-modal.tsx:1043 |
| HOME-MOD-05 | Modal | Provider wizard: Get Started/Add Location/Submit/Confirm | `.next_btn` | button-action | `setActiveTab()` | guest | Steps wizard; Confirm → success modal | `#success_modal` | none | demo-later | provider onboarding | client-only; provider-modal.tsx:126+ |

---

## Tally

### Classification

| Classification | Count |
|----------------|------:|
| MVP-live | 18 |
| MVP-needs-backend | 5 |
| demo-later | 22 |
| broken (no-op/unbound) | 16 |
| duplicate | 4 |
| external/static | 8 |
| auth-only | 0 |
| unknown | 0 |

*(Counts are by row; many rows represent repeated card sets ×N.)*

### Key findings

1. **Hero search is not functional** — service/location inputs (HOME-HERO-01/02) are not bound; Search and popular chips navigate to `/services/search` with **no query/filter** (HOME-HERO-03/04/05/06). Highest-value MVP fix.
2. **Two CTAs are dead** — both "Join Us" buttons in body sections (HOME-CTA-01/02) are `to="#"`. Should route to `/authentication/choose-signup` or `/authentication/provider-signup`.
3. **Footer is mostly non-functional** — Product/Support columns, social icons, Careers, Terms/Privacy (footer-bottom), and the newsletter Subscribe are all no-op (`#` / no handler).
4. **Large demo surface** — Preferred services (×N) and High-rated services (×28) all hardcode `/services/service-details/service-details1`; blog cards all hardcode `/blog/blog-details`. These are template fillers, not live data.
5. **Orphaned modals** — `#quote_modal` and `#provider` are mounted on `/index` but have **no trigger**; not reachable by a user here.
6. **Brand leftovers** — "How Truelysell Works" and footer copyright "Truelysell" instead of Lif3line.
7. **Genuinely live (PocketBase)**: categories grid, featured services, popular services tabs, popular providers, testimonials, and "Popular Cities in Canada" data — all sourced from discovery hooks (`useCategories/useServices/useProviders/useReviews/useCities`). City links themselves are still `#`.

Runtime evidence: `docs/entrypoint-audit/_runtime/home.json`, `home.png` (gitignored).
