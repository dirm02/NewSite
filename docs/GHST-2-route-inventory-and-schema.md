# GHST-2: Frontend Route Inventory & MVP PocketBase Schema

**Task:** Inventory frontend routes and derive MVP PocketBase schema
**Status:** Planning deliverable (local analysis only — no deploy, no deletions)
**Date:** 2026-06-21
**Selected homepage:** `/index` → `NewHome` → `src/feature-module/frontend/home/new-home/index.tsx`
**Repo:** `C:\Users\LocalAccountHPT25\Desktop\Online\NewSite`
**Backend target:** `https://pocket.lif3line.me/_/`

---

## Executive Summary

The NewSite frontend is a large React/Vite service-marketplace **template** with **233 wired routes** across public, auth, customer, provider, and admin groups. There is **no PocketBase (or other API) integration yet** — pages render hardcoded JSX, local React state, or static modules under `src/core/data/json/` (89 files).

**Key decisions (confirmed in GHST-2):**
- MVP public homepage is **`/index` (NewHome)**, not `/index-11`.
- Backend collections must be derived from **MVP user flows only**, not from every demo/admin screen.
- **Do not delete** routes, mock data, or assets until this inventory is reviewed.

**Route counts by recommendation:**

| Recommendation | Count | Notes |
|---|---|---|
| **MVP** | ~45 | Homepage, search, auth, core service/job/quote flows |
| **Later** | ~55 | Wallet, chat, staff, membership, most admin CRUD |
| **Delete/demo only** | ~133 | Home variants, template admin settings, duplicate wiring |

---

## 1. Route Wiring Reference

| File | Role |
|---|---|
| `src/feature-module/router/router.tsx` | Mounts route groups into layouts |
| `src/feature-module/router/router.link.tsx` | Route → component map (233 entries) |
| `src/core/data/routes/all_routes.tsx` | Path constants |
| `src/feature-module/router/feature.tsx` | Public layout wrapper |
| `src/feature-module/router/customerLayout.tsx` | Customer dashboard shell |
| `src/feature-module/router/providerLayout.tsx` | Provider dashboard shell |
| `src/feature-module/router/authFeature.tsx` | Auth pages shell |
| `src/feature-module/router/adminFeature.tsx` | Admin shell |

**Notable wiring issues (flag for cleanup review):**
- `*` and unknown paths **redirect to `/index`** instead of a 404 page (despite `/authentication/error-404` existing).
- `providerNotification` is registered **3 times** in `providerRoutes`.
- `customerRoutes` includes `CustomerList` / `CustomerGrid` at **`/providers/customer/*`** paths — provider-scoped components in the customer route group.
- `home10` (`/index-10`) is defined in `all_routes.tsx` but **not wired** in `router.link.tsx`.
- Admin route paths are inconsistent (`/admin/booking` vs `/admin/bookings/cancelled-booking`).

---

## 2. Frontend Route Inventory

Legend:
- **Data source:** `hardcoded` = inline JSX; `json` = `src/core/data/json/*`; `form` = local form state only; `mixed` = combination
- **Rec:** MVP | Later | Delete/demo

### 2.1 Public routes (47)

| Path | Component | Source file (typical) | Data source | Backend need | Rec | Notes |
|---|---|---|---|---|---|---|
| `/` | Navigate | router.link.tsx | — | — | MVP | Redirects to `/index` |
| `*` | Navigate | router.link.tsx | — | — | Later | Should eventually 404; currently redirects home |
| `/index` | **NewHome** | `frontend/home/new-home/index.tsx` | hardcoded + json | categories, services, providers, testimonials, blog, stats | **MVP** | **Selected homepage** |
| `/index-2` | HomeTwo | `frontend/home/home-3/` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-3` | HomeThree | `frontend/home/home-4/` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-4` | HomeFour | `frontend/home/home-four/` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-5` | HomeFive | `frontend/home/home-six` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-6` | HomeSix | `frontend/home/home-6` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-7` | HomeSeven | `frontend/home/home-seven/` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-8` | HomeEight | `frontend/home/home-eight` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-9` | HomeNine | `frontend/home/home-9/` | hardcoded | — | Delete/demo | Alternate home variant |
| `/index-11` | HomeEleven | `frontend/home/home-11/` | hardcoded | — | Delete/demo | Previous homepage candidate — do not drive schema |
| `/index-12` | HomeTwelve | `frontend/home/home-12/` | hardcoded | — | Delete/demo | Niche demo (painting) |
| `/pages/about-us` | AboutUs | `frontend/pages/about-us/` | hardcoded | `cms_pages` | Later | Static marketing page |
| `/blog/blog-grid` | BlogGrid | `frontend/blog/blog-grid/` | hardcoded | `cms_blog_posts` | Later | Blog listing |
| `/blog/blog-list` | BlogList | `frontend/blog/blog-list/` | hardcoded | `cms_blog_posts` | Later | Blog listing alt layout |
| `/blog/blog-details` | BlogDetails | `frontend/blog/blog-details/` | hardcoded | `cms_blog_posts` | Later | Single post |
| `/pages/contact-us` | ContactUs | `frontend/pages/contact-us/` | form | `contact_messages` | Later | Contact form submission |
| `/pages/how-it-works` | Howitworks | `frontend/pages/how-it-works/` | hardcoded | `cms_pages` | Later | Marketing |
| `/authentication/error-404` | Error404 | `frontend/pages/Error page/` | hardcoded | — | Later | Not used as catch-all today |
| `/authentication/error-500` | Error500 | `frontend/pages/Error page/` | hardcoded | — | Later | Error page |
| `/pages/booking` | BookingWizard | `frontend/pages/booking/` | form | `bookings` | Later | Direct booking wizard (appointment model) |
| `/pages/booking/booking-details` | BookingDetails | `frontend/pages/booking/` | hardcoded | `bookings` | Later | Booking detail view |
| `/pages/categories` | Categories | `frontend/pages/categories/` | hardcoded | `service_categories` | **MVP** | Category browse |
| `/pages/categories-2` | Categories2 | `frontend/pages/categories/` | hardcoded | `service_categories` | Delete/demo | Duplicate layout |
| `/pages/pricing-plan` | Pricing | `frontend/pages/pricing/` | hardcoded | — | Delete/demo | SaaS template pricing |
| `/pages/faq` | Faq | `frontend/pages/faq/` | hardcoded/json | `cms_faq` | Later | FAQ page |
| `/pages/maintenance` | Maintenance | `frontend/pages/maintenance/` | hardcoded | — | Delete/demo | Template utility page |
| `/pages/coming-soon` | CommingSoon | `frontend/pages/comming-soon/` | hardcoded | — | Delete/demo | Template utility page |
| `/pages/privacy-policy` | PrivacyPolicy | `frontend/pages/privacy-policy/` | hardcoded | `cms_pages` | Later | Legal |
| `/pages/terms-condition` | TermsCondition | `frontend/pages/terms-condition/` | hardcoded | `cms_pages` | Later | Legal |
| `/pages/session-expired` | SessionExpired | `frontend/pages/session-expired/` | hardcoded | — | Later | Auth UX |
| `/pages/installer` | Installer | `frontend/pages/installer/` | hardcoded | — | Delete/demo | Theme installer — not for production |
| `/services/service-grid` | ServiceGrid | `frontend/services/service-grid/` | hardcoded | `services` | **MVP** | Service listing (grid) |
| `/services/service-list` | ServiceList | `frontend/services/service-list/` | hardcoded | `services` | **MVP** | Service listing (list) |
| `/services/service-details/service-details1` | ServiceDetails1 | `frontend/services/service-details/` | hardcoded | `services`, `reviews` | **MVP** | Primary service detail layout |
| `/services/service-details/service-details2` | ServiceDetails2 | `frontend/services/service-details/` | hardcoded | `services`, `reviews` | Later | Alternate layout — pick one for MVP |
| `/services/service-request` | ServiceRequest | `frontend/services/service-request/` | form | `service_requests` | **MVP** | Request-a-service flow |
| `/services/search` | Search | `frontend/services/search/` | hardcoded + local state | `services`, `service_categories` | **MVP** | Search results + filters |
| `/services/providers/provider-list` | ProvidersList | `frontend/services/providers/` | hardcoded | `provider_profiles` | **MVP** | Provider directory |
| `/services/providers/provider-details` | ProviderDetails | `frontend/services/providers/` | hardcoded | `provider_profiles`, `services`, `reviews` | **MVP** | Provider profile |
| `/services/create-service` | CreateService | `frontend/services/create-service/` | form | `services` | Later | Provider creates listing (also in provider area) |
| `admin` | Navigate | router.link.tsx | — | — | Later | Redirects to admin dashboard |

### 2.2 Auth routes (12)

| Path | Component | Data source | Backend need | Rec | Notes |
|---|---|---|---|---|---|
| `/authentication/login` | Login | form | `users` auth | **MVP** | Email/password login |
| `/authentication/user-signup` | UserSignup | form | `users` create (customer) | **MVP** | Customer registration |
| `/authentication/provider-signup` | ProviderRegister | form | `users` + `provider_profiles` | **MVP** | Provider registration |
| `/authentication/choose-signup` | ChooseSignup | hardcoded | — | **MVP** | Role picker |
| `/authentication/register` | Register | form | `users` | Later | Generic register — overlaps user-signup |
| `/authentication/forgot-password` | PasswordRecovery | form | auth reset | **MVP** | Password recovery |
| `/authentication/reset-password` | ResetPassword | form | auth reset | **MVP** | Reset token flow |
| `/authentication/login-phone1` | LoginPhone1 | form | auth (phone) | Later | Phone login variant |
| `/authentication/phone-otp` | PhoneOtp | form | auth (OTP) | Later | OTP verification |
| `/authentication/email-otp` | EmailOtp | form | auth (OTP) | Later | Email OTP |
| `/authentication/success` | Success | hardcoded | — | Later | Post-auth confirmation |
| `/authentication/free-trail` | FreeTrail | hardcoded | — | Delete/demo | Template SaaS trial page |

### 2.3 Customer routes (21)

| Path | Component | Data source | Backend need | Rec | Notes |
|---|---|---|---|---|---|
| `/customers/customer-dashboard` | CustomerDashboard | json/hardcoded | aggregated stats | **MVP** | Customer home |
| `/customers/user-jobs` | UserJob | json/hardcoded | `service_requests` | **MVP** | Job list |
| `/customers/customer-create-job` | CustomerCreateJob | form + `dropDownData` json | `service_requests` | **MVP** | Create job/request |
| `/customers/customer-edit-job` | CustomerEditJob | form + `dropDownData` json | `service_requests` | **MVP** | Edit job |
| `/customers/customer-job-details` | CustomerJobDetails | hardcoded | `service_requests`, `quotes` | **MVP** | Job detail |
| `/customers/user-quote-comparison` | UserQuoteComparison | hardcoded | `quotes` | **MVP** | Compare provider quotes |
| `/customers/customer-booking` | CustomerBooking | json | `bookings` | Later | Appointment bookings (parallel to jobs) |
| `/customers/customer-job-booking` | UserJobBooking | json | `bookings` | Later | Job-linked booking list |
| `/customers/user-job-booking-details` | UserJobBookingDetails | hardcoded | `bookings` | Later | Booking detail |
| `/customers/user-job-booking-completed` | UserJobBookingCompleted | hardcoded | `bookings` | Later | Completed state view |
| `/customers/customer-booking-calendar` | CustomerBookingCalendar | hardcoded | `bookings` | Later | Calendar view |
| `/customers/customer-favourite` | CustomerFavourite | json | favorites join | Later | Saved services/providers |
| `/customers/customer-wallet` | CustomerWallet | json | wallet/transactions | Later | Payments wallet |
| `/customers/customer-reviews` | CustomerReviews | json | `reviews` | Later | Customer's reviews |
| `/customers/customer-chat` | CustomerChat | hardcoded | messages | Later | Messaging |
| `/customers/settings/customer-profile` | CustomerProfile | form | `users` | **MVP** | Profile settings |
| `/customers/settings/customer-security` | SecuritySetting | form | `users` | Later | Security |
| `/customers/settings/notification` | CustomerNotification | hardcoded | notifications | Later | Notification prefs |
| `/customers/settings/connected-apps` | CustomerConnectedApp | hardcoded | — | Delete/demo | OAuth template |
| `/providers/customer/customer-list` | CustomerList | json | — | Delete/demo | **Misplaced** — provider component in customer routes |
| `/providers/customer/customer-grid` | CustomerGrid | json | — | Delete/demo | **Misplaced** — provider component in customer routes |

### 2.4 Provider routes (44 unique paths; 46 entries with duplicates)

| Path | Component | Data source | Backend need | Rec | Notes |
|---|---|---|---|---|---|
| `/providers/dashboard` | ProviderDashboard | json | stats | **MVP** | Provider home |
| `/providers/job-feed` | ProviderJobFeed | json | `service_requests` | **MVP** | Browse open jobs |
| `/providers/provider-apply-job` | ProviderApplyJob | form | `quotes` create | **MVP** | Submit quote/proposal |
| `/providers/proposal` | ProviderProposal | json | `quotes` | **MVP** | Proposal list |
| `/providers/active-jobs` | ProviderActiveJobs | json | `service_requests` | **MVP** | Active jobs |
| `/providers/job-details` | JobDetails | hardcoded | `service_requests` | **MVP** | Job detail (default) |
| `/providers/job-details-inprogress` | JobDetailsInprogress | hardcoded | `service_requests` | Later | Status-specific duplicate pages |
| `/providers/job-details-delivered` | JobDetailsDelivered | hardcoded | `service_requests` | Later | Status-specific duplicate |
| `/providers/job-details-completed` | JobDetailsCompleted | hardcoded | `service_requests` | Later | Status-specific duplicate |
| `/providers/job-details-cancelled` | JobDetailsCancelled | hardcoded | `service_requests` | Later | Status-specific duplicate |
| `/providers/provider-service` | ProviderServices | json | `services` | **MVP** | Manage services |
| `/providers/provider-service-list` | ProviderServiceList | json | `services` | **MVP** | Service list alt |
| `/providers/provider-booking` | ProviderBooking | json | `bookings` | Later | Appointment bookings |
| `/providers/provider-book-details` | ProviderBookDetails | hardcoded | `bookings` | Later | Booking detail |
| `/providers/provider-review` | ProviderReview | json | `reviews` | Later | Reviews received |
| `/providers/settings/provider-profile-settings` | ProviderProfileSettings | form | `provider_profiles` | **MVP** | Profile edit |
| `/providers/settings/verification` | Verification | form | verification docs | Later | KYC/verification |
| `/providers/settings/provider-notification` | ProviderNotification | hardcoded | notifications | Later | **Registered 3×** — dedupe |
| `/providers/provider-payout` | ProviderPayout | json | payouts | Later | Finance |
| `/providers/provider-transaction` | ProviderTransaction | json | transactions | Later | Finance |
| `/providers/provider-earnings` | ProviderEarnings | json | earnings | Later | Finance |
| `/providers/provider-chat` | ProviderChat | hardcoded | messages | Later | Messaging |
| `/providers/provider-subscription` | ProviderSubscription | json | subscriptions | Delete/demo | SaaS membership template |
| `/providers/provider-holiday` | ProviderHoliday | json | availability | Later | Scheduling |
| `/providers/leave-history` | ProviderLeaveHistory | json | availability | Later | Scheduling |
| `/providers/staff/*` (3 routes) | StaffList/Grid/Details | json | staff | Later | Multi-staff feature |
| `/providers/provider-coupons` | ProviderCoupons | json | coupons | Delete/demo | Marketing template |
| `/providers/provider-offer` | ProviderOffer | json | offers | Delete/demo | Marketing template |
| `/providers/provider-enquiry` | ProviderEnquiry | json | enquiries | Later | Lead inbox |
| `/providers/customer-list` | ProviderCustomerList | json | customers | Later | Provider's customers |
| `/providers/customer-grid` | ProviderCustomerGrid | json | customers | Later | Alt layout |
| `/providers/customer-details` | ProviderCustomerDetails | hardcoded | customers | Later | Customer detail |
| `/providers/settings/*` (remaining) | Various settings | hardcoded/form | — | Later / Delete/demo | Device mgmt, connected apps, plan/billing |

### 2.5 Admin routes (109)

**Bulk recommendation:** Almost all admin routes are **Later** (post-MVP moderation/ops) or **Delete/demo only** (full SaaS CMS/settings surface from the template).

| Sub-area | Example paths | Rec | Notes |
|---|---|---|---|
| Dashboard & services CRUD | `/admin/dashboard`, `/admin/services/*` | Later | Useful for ops; not MVP-critical if PocketBase admin used initially |
| Bookings CRUD | `/admin/booking`, `/admin/booking/*`, `/admin/pending-booking` | Later | Parallel booking model |
| Finance | `/admin/finance-accounts/*`, `/admin/payouts/*` | Later | Payments phase |
| Blog/CMS | `/admin/blog/*`, `/admin/pages/*` | Later | Could use PocketBase admin + collections instead |
| Location | `/admin/location/*` | Later | `cities`/`regions` collections |
| Users & roles | `/admin/users`, `/admin/roles`, `/admin/permissions` | Later | PocketBase auth roles may suffice early |
| Marketing | coupons, offers, newsletter, featured services | Delete/demo | Template marketing |
| Settings (30+ pages) | `/admin/setting/*` | Delete/demo | Theme installer settings — not Lif3line product config |
| Management | plugins, cache, email/sms templates, menus | Delete/demo | Template infrastructure |
| Reports | `/admin/reports/*` | Later | Analytics phase |
| Support | announcements, abuse, contact messages | Later | `contact_messages` collection |

---

## 3. Homepage `/index` Section Inventory

| Section | Component file | Visible purpose | Current data | Static / CMS / Collection | PocketBase collection |
|---|---|---|---|---|---|
| Header | `frontend/home/header/home-header` | Nav, auth links, search entry | hardcoded nav | CMS for nav labels; auth from session | `cms_menus` (Later), `users` |
| Hero + search form | `new-home/index.tsx` (inline) | Headline, service/location search, stats | hardcoded text, links to `/services/search` | Hero: CMS; search: collection query | `cms_home_sections`, `services`, `service_categories` |
| Category grid | `new-home/index.tsx` (inline) | 12 category cards with listing counts | hardcoded names/counts/icons | **Collection-backed** | `service_categories` |
| Featured services carousel | `feature-section.tsx` | Highlighted services slider | `services-slide.tsx` json | **Collection-backed** | `services` (featured flag) |
| Popular services (tabbed) | `popular-section.tsx` | Category-tabbed service cards | 8 json files by category | **Collection-backed** | `services`, `service_categories` |
| How it works | `workSection.tsx` | 3-step explainer | hardcoded JSX | **CMS/static** | `cms_home_sections` or static |
| Preferred / recent work | `preferredSection.tsx` | Portfolio/recent jobs slider | `home-work.tsx` json | Collection-backed | `service_requests` (completed) or portfolio items |
| Popular providers | `provider-section.tsx` | Provider cards | hardcoded profiles | **Collection-backed** | `provider_profiles`, `reviews` |
| High-rated services (tabs) | `rateServiceSection.tsx` | Tabbed rated services | hardcoded JSX per tab | **Collection-backed** | `services`, `reviews` |
| Customer testimonials | `customerSection.tsx` | Review carousel | hardcoded JSX | **Collection-backed** | `reviews` or `testimonials` |
| Blog + Join us CTA | `blogAndJoinus.tsx` | Blog cards + provider CTA | hardcoded | Blog: collection; CTA: static | `cms_blog_posts` |
| Business CTA | `bussinessWithUs.tsx` | Provider recruitment banner | hardcoded | CMS/static | `cms_home_sections` |
| Service cities / SEO links | `serviceCities.tsx` | City × profession link grid | hardcoded `Link to="#"` | Collection-backed (Later) | `cities`, `service_categories` |
| Footer | `frontend/home/footer/newFooter` | Links, contact, social | hardcoded | CMS | `cms_menus`, `cms_pages` |
| Auth modals | `authModals.tsx` | Login/signup modals | form UI only | Auth API | `users` auth endpoints |
| Quote modal | `common/modals/quote-modal` | Request quote popup | form | **Collection-backed** | `service_requests` or `quotes` |
| Provider modal | `common/modals/provider-modal` | Become-a-provider CTA | links to signup | Static + auth | `users` |

**Homepage JSON dependencies to replace first:**
- `services-slide.tsx`, `computerServices.tsx`, `removals.tsx`, `manvan.tsx`, `furniture.tsx`, `electrical.tsx`, `construction.tsx`, `plumbing.tsx`, `moreService.tsx`, `home-work.tsx`

---

## 4. MVP Route Shortlist

Minimum flows for first PocketBase-connected release:

### Public discovery
- `/index` — homepage
- `/services/search` — search + filters
- `/pages/categories` — browse categories
- `/services/service-grid` or `/services/service-list` — service listings (consolidate to one layout)
- `/services/service-details/service-details1` — service detail
- `/services/providers/provider-list` — provider directory
- `/services/providers/provider-details` — provider profile
- `/services/service-request` — lightweight request form

### Auth
- `/authentication/choose-signup`
- `/authentication/login`
- `/authentication/user-signup`
- `/authentication/provider-signup`
- `/authentication/forgot-password`
- `/authentication/reset-password`

### Customer job flow
- `/customers/customer-dashboard`
- `/customers/user-jobs`
- `/customers/customer-create-job`
- `/customers/customer-edit-job`
- `/customers/customer-job-details`
- `/customers/user-quote-comparison`
- `/customers/settings/customer-profile`

### Provider job flow
- `/providers/dashboard`
- `/providers/job-feed`
- `/providers/provider-apply-job`
- `/providers/proposal`
- `/providers/active-jobs`
- `/providers/job-details`
- `/providers/provider-service`
- `/providers/settings/provider-profile-settings`

---

## 5. Proposed MVP PocketBase Schema

PocketBase base URL: `https://pocket.lif3line.me/api`

### 5.1 `users` (auth collection — extend built-in)

| Field | Type | Notes |
|---|---|---|
| `role` | select | `customer`, `provider`, `admin` |
| `name` | text | Display name |
| `phone` | text | Optional |
| `avatar` | file | Profile image |
| `city` | relation → `cities` | Optional |
| `verified` | bool | Email/phone verified |

**Access rules:**
- List/view: owner or admin
- Create: public (signup) with role assignment rules
- Update: owner or admin
- Delete: admin only

### 5.2 `provider_profiles`

| Field | Type | Notes |
|---|---|---|
| `user` | relation → `users` | 1:1 provider account |
| `business_name` | text | |
| `bio` | editor | |
| `services_count` | number | Denormalized or computed |
| `rating_avg` | number | Computed from reviews |
| `rating_count` | number | |
| `hourly_rate_min` | number | For "From $X" display |
| `city` | relation → `cities` | |
| `verified` | bool | Admin-approved |
| `status` | select | `active`, `pending`, `suspended` |

**Access:** public read for active; create/update by owner; admin moderation.

### 5.3 `service_categories`

| Field | Type | Notes |
|---|---|---|
| `name` | text | e.g. Construction |
| `slug` | text | unique, indexed |
| `icon` | file | SVG/icon |
| `listing_count` | number | Optional denormalized |
| `featured` | bool | Homepage visibility |
| `sort_order` | number | |

**Access:** public read; admin write.

### 5.4 `services`

| Field | Type | Notes |
|---|---|---|
| `title` | text | indexed for search |
| `slug` | text | unique |
| `description` | editor | |
| `category` | relation → `service_categories` | |
| `provider` | relation → `provider_profiles` | |
| `price_from` | number | |
| `price_to` | number | optional |
| `duration_minutes` | number | |
| `images` | file (multi) | |
| `featured` | bool | Homepage carousels |
| `status` | select | `active`, `pending`, `inactive` |
| `rating_avg` | number | |
| `city` | relation → `cities` | |

**Access:** public read active; provider CRUD own; admin all.

### 5.5 `service_requests` (customer jobs)

| Field | Type | Notes |
|---|---|---|
| `customer` | relation → `users` | |
| `title` | text | Job title |
| `description` | editor | |
| `category` | relation → `service_categories` | |
| `budget_type` | select | from `dropDownData` |
| `budget_min` / `budget_max` | number | |
| `experience_level` | select | |
| `location` | text | |
| `city` | relation → `cities` | |
| `tags` | json | Skill tags |
| `status` | select | `open`, `in_progress`, `completed`, `cancelled` |
| `preferred_date` | date | |

**Access:** customer CRUD own; providers read open jobs; admin all. Status transitions via hooks.

### 5.6 `quotes`

| Field | Type | Notes |
|---|---|---|
| `request` | relation → `service_requests` | |
| `provider` | relation → `provider_profiles` | |
| `amount` | number | |
| `message` | text | Proposal text |
| `estimated_days` | number | |
| `status` | select | `pending`, `accepted`, `rejected`, `withdrawn` |

**Access:** provider create on open requests; customer read on own requests; accept/reject via **protected hook**.

### 5.7 `bookings` (Later — appointment model parallel to jobs)

| Field | Type | Notes |
|---|---|---|
| `customer` | relation → `users` | |
| `provider` | relation → `provider_profiles` | |
| `service` | relation → `services` | |
| `scheduled_at` | date | |
| `status` | select | `pending`, `confirmed`, `completed`, `cancelled` | |
| `amount` | number | |

Defer to post-MVP unless appointment booking is in scope day one.

### 5.8 `reviews`

| Field | Type | Notes |
|---|---|---|
| `author` | relation → `users` | |
| `provider` | relation → `provider_profiles` | optional |
| `service` | relation → `services` | optional |
| `request` | relation → `service_requests` | optional |
| `rating` | number | 1–5 |
| `comment` | text | |
| `status` | select | `published`, `pending` | |

**Access:** public read published; customer create after completed job; admin moderate.

### 5.9 `cities`

| Field | Type | Notes |
|---|---|---|
| `name` | text | |
| `slug` | text | |
| `region` | text | State/province |
| `country` | text | |

**Access:** public read; admin write.

### 5.10 CMS collections (Later for MVP launch; static OK initially)

| Collection | Purpose |
|---|---|
| `cms_pages` | About, Terms, Privacy, How it works |
| `cms_blog_posts` | Blog grid/list/details |
| `cms_faq` | FAQ entries |
| `cms_home_sections` | Hero text, stats, how-it-works steps |
| `testimonials` | Homepage testimonial carousel (or use `reviews`) |
| `contact_messages` | Contact form submissions |

### Sample records needed (replace mock data)

1. **8–12 `service_categories`** matching homepage category cards (Construction, Removals, Cleaning, etc.)
2. **20–30 `services`** across categories with images from existing assets
3. **10 `provider_profiles`** with avatars from `assets/img/profiles/`
4. **5–10 `service_requests`** in mixed statuses for job feed testing
5. **10–20 `quotes`** linked to open/completed requests
6. **15+ `reviews`** for provider/service ratings
7. **1 admin, 2 customers, 3 providers** test users

---

## 6. Endpoint / API Map

### Default PocketBase CRUD (MVP)

| Endpoint | Used by |
|---|---|
| `POST /api/collections/users/auth-with-password` | Login, AuthModals |
| `POST /api/collections/users/records` | Customer/provider signup |
| `POST /api/collections/users/request-password-reset` | Password recovery |
| `GET /api/collections/service_categories/records` | Homepage categories, search filters, create job |
| `GET /api/collections/services/records?filter=...` | Homepage sections, search, service grid/list/detail |
| `GET /api/collections/provider_profiles/records` | Homepage providers, provider list/detail |
| `GET /api/collections/service_requests/records` | Customer jobs, provider job feed |
| `POST /api/collections/service_requests/records` | Create job, service request, quote modal |
| `PATCH /api/collections/service_requests/records/:id` | Edit job, status updates |
| `GET /api/collections/quotes/records?filter=...` | Quote comparison, proposals |
| `POST /api/collections/quotes/records` | Provider apply job |
| `GET /api/collections/reviews/records` | Testimonials, service/provider ratings |
| `GET /api/collections/cities/records` | Location filters, service cities (Later) |

### Custom hooks / actions (protected transitions)

| Action | Trigger | Reason |
|---|---|---|
| Accept quote | Customer accepts one quote | Reject others; set request → `in_progress`; assign provider |
| Complete job | Provider or customer confirms | Enable review creation |
| Cancel request | Customer/admin | Notify quoted providers |
| Provider verification | Admin approves | Sets `provider_profiles.verified` |
| Notifications | Status changes | Email/in-app (Later) |

### Not in MVP
- Wallet, payouts, subscriptions, staff, chat messages, coupons, membership — no schema until flows are prioritized.

---

## 7. Cleanup Plan (phased — do not execute until reviewed)

### Phase 0 — Documentation & backend (current)
- [x] Route inventory (this document)
- [ ] Review and approve MVP route list
- [ ] Create PocketBase collections + seed data
- [ ] Add PocketBase client to frontend (no route deletion yet)

### Phase 1 — Wire MVP routes to API
- Connect `/index` sections to live collections
- Connect search, service list/detail, provider list/detail
- Connect auth signup/login
- Connect customer job CRUD + provider quote flow
- Redirect `/` → `/index` (already done)

### Phase 2 — Navigation cleanup
- Remove links to `/index-2` … `/index-12` from headers/footers/menus
- Remove installer, maintenance, coming-soon, free-trial from nav
- Fix catch-all `*` to render Error404 instead of redirect home
- Deduplicate `providerNotification` routes
- Move misplaced customer list routes out of `customerRoutes`

### Phase 3 — Route removal (after MVP verified)
- Delete home variant folders: `home-3`, `home-4`, `home-four`, `home-six`, `home-6`, `home-seven`, `home-eight`, `home-9`, `home-11`, `home-12`
- Remove `categories2`, `service-details2` if consolidating layouts
- Remove template admin settings pages not needed (keep dashboard + core moderation)

### Phase 4 — Mock data removal
- Delete homepage JSON: `services-slide`, category service json files, `home-work`
- Remove `src/core/data/json/*` files only after each consuming page is API-backed
- Keep admin json until admin UI is scoped or replaced by PocketBase admin

### Pre-deploy checklist
- [ ] `/index` loads with live data
- [ ] Search returns filtered services
- [ ] Customer can sign up, post job, compare quotes
- [ ] Provider can sign up, browse feed, submit quote
- [ ] No broken links in NewHome header/footer
- [ ] `lif3line.me`, `pocket.lif3line.me`, `cafe.lif3line.me` unchanged until explicit deploy approval

---

## 8. Acceptance Criteria Mapping

| Criterion | Status |
|---|---|
| Explain how `/index` is wired and what each section needs | ✅ Section 3 |
| Know MVP vs Later vs Delete/demo routes | ✅ Sections 2 & 4 |
| First PocketBase schema tied to frontend flows | ✅ Section 5 |
| Safe deletion/migration sequence | ✅ Section 7 |
| No production domains or VM services changed | ✅ Analysis only |

---

## Appendix: Machine-readable route extract

Full JSON extract of 233 routes: `scripts/routes-inventory.json`
Regenerate: `node scripts/extract-routes.mjs`
