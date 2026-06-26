# Homepage asset inventory (`/index`)

Canonical route: `/index` → `src/feature-module/frontend/home/new-home/index.tsx` (`NewHome`).

This inventory covers every visual from header through footer. **Do not replace assets during this task** — documentation only.

Legend:
- **Source**: `template` (bundled demo asset), `placeholder` (rotating stock pool), `live-pb` (PocketBase record field), `brand` (Lif3Line identity)
- **Manager**: who should own updates in production

---

## Header

| Section | Component | Asset path | Source | Desktop / mobile | Display size (approx.) | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|------------------------|--------------------|--------|----------|---------|----------|
| Logo (main) | `SiteHeader.tsx` | `assets/img/lif3line-logo.svg` | brand | Header left | ~140×40 | SVG master | SVG | "Lif3Line" | Administrator | — |
| Logo (compact) | `SiteHeader.tsx` | `assets/img/lif3line-logo-small.svg` | brand | Mobile / scroll | ~32×32 | SVG master | SVG | "Lif3Line" | Administrator | — |
| Home mega-menu thumb | `site-header-nav-config.ts` | `assets/img/home-01.jpg` | template | Nav dropdown | ~280×180 | Replace with `/index` hero screenshot | JPG/WebP | "Lif3Line home" | Administrator | — |

---

## Hero

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Decorative bg | `index.tsx` | `assets/img/bg/bg-06.svg` | template | Hero backdrop | Full width | Custom SVG or PNG | SVG | decorative (empty alt OK) | System | — |
| Success icons | `index.tsx` | `assets/img/icons/success-01.svg` … `03` | template | Hero chips | 24×24 | Brand icons | SVG | decorative | System | — |
| Hero figure | `index.tsx` | `assets/img/banner.png` | template | Hero right | ~480×520 | Real photo: Canadian marketplace hero | PNG/WebP 960×1040 | "Find trusted local services" | Administrator | — |
| Tick badge | `index.tsx` | `assets/img/icons/tick-banner.svg` | template | On banner | 48×48 | SVG | SVG | decorative | System | — |
| Floating shapes | `index.tsx` | `assets/img/bg/bg-03.svg` … `bg-05.svg` | template | Hero corners | varies | SVG | SVG | decorative | System | — |
| Banner bg (CSS) | `_home.scss` | `assets/img/bg/banner-bg.png` | template | Hero section | Full bleed | 1920×800 gradient/photo | PNG/WebP | — (CSS bg) | Administrator | — |

---

## Categories

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Category icon | `HomeCategorySection.tsx` | `assets/img/icons/category-01.svg` … `12` via `categoryIcon()` | placeholder | 6-col grid / 2-col mobile | 48×48 | Per-category brand icon OR `service_categories.icon` upload | SVG/PNG | `{category.name} icon` | Administrator | `service_categories.icon` (future) |
| Hover bg (CSS) | `_home.scss` | `assets/img/bg/category-bg.svg` | template | Card hover | card size | SVG | SVG | — | System | — |

**Data:** PocketBase `service_categories` (name, slug, counts computed live).

---

## Featured / Popular / Preferred / High-rated services

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Service card image | `feature-section.tsx`, `popular-section.tsx`, `preferredSection.tsx`, `rateServiceSection.tsx` | `assets/img/services/service-01.jpg` … `06` via `serviceImage(index)` | placeholder | Sliders / grids | 360×240 | **Provider upload** | JPG/WebP | `{service.title}` | Provider | `services.images[]` |
| Section bg | `_home.scss` | solid `#F7F7FF` / white | template | Full section | — | — | — | — | System | — |

**Data:** PocketBase `services` (active/featured). Ratings from live `reviews` (GHST-63).

---

## How it works

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Step icons | `workSection.tsx` | `assets/img/icons/work-01.svg`, `work-03.svg` | template | 3-column / stack | 64×64 | Custom step icons | SVG | Step title | Administrator | — |
| Step backgrounds | `workSection.tsx` | `assets/img/bg/work-bg-01.svg`, `work-bg-02.svg` | template | Behind steps | varies | SVG | SVG | decorative | System | — |
| Connector (CSS) | `_home.scss` | `assets/img/icons/work-icon.svg` | template | Between steps | 32×32 | SVG | SVG | decorative | System | — |

---

## Popular providers

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Avatar | `provider-section.tsx` | `assets/img/providers/provider-01.jpg` … `06` via `providerImage()` | placeholder | 4-col / 2-col | 80×80 circle | **Provider logo/avatar upload** | JPG/WebP | `{business_name}` | Provider | `provider_profiles.avatar` (future) |

**Data:** PocketBase `provider_profiles`; service counts + reviews computed live.

---

## Customer reviews

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Reviewer avatar | `customerSection.tsx` | `providerImage(index)` pool | placeholder | Slider | 56×56 | Real reviewer avatar or initials | JPG/SVG | Reviewer name | System | `reviews` expand author |
| Star icon | `customerSection.tsx` | `assets/img/icons/star-01.svg` | template | Inline | 16×16 | SVG | SVG | decorative | System | — |

**Data:** PocketBase published `reviews`.

---

## Blog preview (conditional)

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Cover | `PublicBlogList` (via `blogAndJoinus.tsx`) | — when no posts | live-pb | Hidden if 0 posts | — | — | — | — | — | `blog_posts.cover_image` |
| Cover (when posts exist) | `PublicBlogList` | PB file URL | live-pb | 3-col grid | 360×200 | Provider upload 1200×630 | JPG/WebP | Post title | Provider | `blog_posts.cover_image` |

---

## Become a provider CTA

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Decorative | `blogAndJoinus.tsx` | `assets/img/bg/provide-bg-01.svg`, `provide-bg-02.svg` | template | CTA band | full width | SVG | SVG | decorative | Administrator | — |

---

## Business growth

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| Photo | `bussinessWithUs.tsx` | `assets/img/business.jpg` | template | Split section | ~560×400 | Canadian SMB photo | JPG/WebP 1120×800 | "Grow your service business" | Administrator | — |
| Bg (CSS) | `_home.scss` | `assets/img/bg/business-bg.png` | template | Section overlay | full width | PNG | PNG | — | System | — |

---

## Professions / cities

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| — | `serviceCities.tsx` | None (text links) | live-pb | Accordion | — | — | — | — | System | `cities` |

---

## Footer

| Section | Component | Asset path | Source | Desktop / mobile | Display size | Recommended source | Format | Alt text | Manager | PB field |
|---------|-----------|------------|--------|------------------|--------------|--------------------|--------|----------|---------|----------|
| — | `newFooter.tsx` | None (link columns only) | — | Full width | — | Optional footer logo | SVG | — | Administrator | — |

---

## Modals (mounted on homepage)

| Section | Component | Asset path | Source | Manager |
|---------|-----------|------------|--------|---------|
| Quote wizard | `quote-modal.tsx` | `assets/img/icons/service-icon-01.svg` … `05` | template | System |
| Become provider | `provider-modal.tsx` | same service icons | template | System |

---

## Replacement priority

1. **P0 — Misleading placeholders:** `serviceImage()` / `providerImage()` stock photos → real `services.images` and provider avatars.
2. **P1 — Brand hero:** `banner.png`, `banner-bg.png` → Lif3Line marketing hero (Canada-focused).
3. **P2 — Category icons:** map slugs to custom icons or PB-uploaded icons.
4. **P3 — Decorative SVGs:** work steps, CTA backgrounds (low user impact).
5. **P4 — Footer/header polish:** mega-menu thumb, business section photo.

---

## Verification

Inventory generated from static analysis of `new-home/*`, `SiteHeader*`, `_home.scss`, and `format.ts` helpers. Cross-check in browser at `/index` (desktop + mobile) before any asset swap.
