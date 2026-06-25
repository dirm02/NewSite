# Guest entrypoints (GHST-54)

Role: **guest** (unauthenticated). Shell: public site header
(`SiteHeaderMainNav` + `SiteHeaderRightActions` variant 1) + `NewFooter`.
Source of truth for nav: `site-header-nav-config.ts`, `newFooter.tsx`.

## Header — top bar (`SiteHeaderRightActions` variant 1)

| Label | Route/action | Behavior | Data | Status | Recommendation |
|---|---|---|---|---|---|
| Logo | `home` (`/index`) | navigates home | — | live | keep |
| Sign In | `login` (`/authentication/login`) | login page | live auth | live | keep |
| Join Us | `chooseSignUp` (`/authentication/choose-signup`) | role chooser | live auth | live | keep |
| Mobile menu toggle | client toggle | opens mobile nav | — | live | keep |

## Header — primary nav (`site-header-nav-config.ts`)

| Menu | Item | Route | Status | Recommendation |
|---|---|---|---|---|
| Home | General Home | `home` | live | keep |
| Services | Service Grid | `serviceGrid` | live (18 svc) | keep |
| Services | Service List | `serviceList` | live | keep |
| Services | Search | `search` | live | keep |
| Services | Providers | `provider` | live (6 prov) | keep |
| Customers* | Dashboard/Booking/Jobs/… (10) | customer routes | role-gated (shown only to customer) | keep |
| Providers* | Dashboard/My Services/Job Feed/… | provider routes | role-gated; **trimmed** vs sidebar | needs-decision (drift) |
| Pages | Blog | `blogGrid` | live (published-only) | keep |
| Pages | About | `aboutUs` | demo (static marketing) | keep/coming-soon |
| Pages | How It Works | `howItWorks` | demo (static, rebranded) | keep |
| Pages | Pricing Plan | `pricingPlan` | demo (static) | keep/coming-soon |
| Pages | FAQ | `faq` | demo (static) | keep |
| Pages | Contact Us | `contactUs` | demo (form, no backend) | wire/coming-soon |
| Pages | Privacy Policy | `privacyPolicy` | demo (static legal) | keep |
| Pages | Terms & Conditions | `termsCondition` | demo (static legal) | keep |

\* The `customers`/`providers` dropdowns are defined in the public header config
with `roles` filters; a guest does not see them. The **providers** dropdown list
is the trimmed GHST-50 subset and no longer matches the restored full provider
sidebar — see drift note in README.

### Header "Categories" mega-dropdown (variant 1, `SiteHeaderMainNav`)
Construction / Removals / Interior → `searchWithCategory(slug)` →
`/services/search?category=…`. **live** (real category search). keep.

## Homepage `/index` sections (`new-home/index.tsx`)

| Section | Component | Data | Status | Recommendation |
|---|---|---|---|---|
| Hero search (service + location + Search) | index | controlled inputs → `/services/search?query&location` | live | keep |
| Popular chips (Plumber/Interior/Nail Technicians) | index | keyword search links | live (Nail Technicians = real category) | keep |
| Stat counters | index | live counts (providers/services/reviews) | live | keep — verify no seed-inflated aggregate used |
| Explore our Categories | `HomeCategorySection` | PB `service_categories` | live | keep |
| Our Featured Services | `feature-section`/`preferredSection` | PB `services` (featured) | live (5 featured) | keep |
| Our Popular Services | `popular-section` | PB `services` | live | keep |
| How Lif3Line Works | `workSection` | static (rebranded copy) | demo | keep |
| Most Preferred Services | `preferredSection` | PB `services` (top rating) | live | keep |
| Popular Providers | `provider-section` | PB `provider_profiles` | live (6) | keep |
| Browse High Rated Services | `rateServiceSection` | PB `services` | live | keep |
| Genuine reviews from Customers | `customerSection` | PB `reviews` | live (14) | keep |
| Our Professions Near You | `serviceCities` | PB categories | live | keep |
| Popular Cities in Canada | `serviceCities` | PB `cities` | live (17) | keep |
| "Post your service in a minute" / "Add Services…" CTAs | `blogAndJoinus`/`bussinessWithUs` | `chooseSignUp` | live | keep |
| **Orphan: cleaning-quote wizard modal** | `QuoteModal` mounted | static multi-step demo, **no trigger on /index** | demo | needs-decision (wire trigger or remove later) |
| **Orphan: become-provider lead wizard modal** | `BecomeProvider` mounted | static multi-step demo ("Maximise your leads", "Registration Successful"), no trigger | demo | needs-decision |

## Public pages (route → component, data status)

| Route | Component | Data | Status | Recommendation |
|---|---|---|---|---|
| `/services/service-grid` | ServiceGrid | live `ServiceDiscoveryPanel` ("Found 18 Services") + static filter facets | live (+demo facets) | keep; wire/dedupe facets (GHST-55) |
| `/services/service-list` | ServiceList | live discovery panel + static facets | live | keep |
| `/services/search` | Search | live discovery (consumes query/location/category) | live | keep |
| `/services/providers/provider-list` | ProvidersList | live `ProviderDiscoveryPanel` | live | keep |
| `/services/providers/provider-details` | ProviderDetails | live provider + services | live | keep |
| `/services/service-details/service-details1` | ServiceDetails1 | live service detail | live | keep |
| `/services/service-details/service-details2` | ServiceDetails2 | static template detail | demo | keep (hidden from nav) |
| `/services/service-request` | ServiceRequest | static template | demo | future |
| `/services/create-service` | CreateService | static multi-step template | demo | future (provider action; real flow = GHST-56) |
| `/blog/blog-grid` `/blog/blog-list` | BlogGrid/List | live published `blog_posts` (0 now → empty state) | live | keep |
| `/blog/blog-details` | BlogDetails | live published post by `?slug` | live | keep |
| `/pages/about-us` | AboutUs | static marketing | demo | keep |
| `/pages/how-it-works` | Howitworks | static | demo | keep |
| `/pages/pricing-plan` | Pricing | static | demo | coming-soon |
| `/pages/faq` | Faq | static | demo | keep |
| `/pages/contact-us` | ContactUs | static form (no backend) | demo | wire/coming-soon |
| `/pages/privacy-policy` `/pages/terms-condition` | legal | static | demo | keep |
| `/pages/booking`, `/pages/booking/booking-details` | BookingWizard/Details | static booking demo (broken inner links: booking1/invoice) | demo/broken | future (bookings out of MVP) |
| `/pages/categories`, `/pages/categories-2` | Categories | static template | demo | keep (hidden) |
| `/pages/maintenance` `/pages/coming-soon` `/pages/session-expired` `/pages/installer` | system templates | static | demo | keep (system) |
| `/authentication/error-404` `/authentication/error-500` | error templates | static | demo | keep (system) |
| `/index-2`…`/index-12` | Home variants | static alt templates (several have broken `userSignup`/`booking1`/`freeTrail`/`providersList` links) | demo | future (not the live home) |

## Footer (`NewFooter`) — all live routes

Explore (Search Services, Service Grid, Service List, Providers) · Company
(About, How It Works, Pricing, FAQ) · Support (Contact, Privacy, Terms) · Get
Started (Sign In, Join Us, Become a Provider) · bottom (Terms, Privacy). All
targets registered → **live**. Footer is **trimmed** vs the original template
(no Product/Support-links/social/newsletter/app-badges/language-currency) — see
drift note. Recommendation: needs-decision (restore columns vs keep lean).
