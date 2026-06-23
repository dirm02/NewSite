# Canada-Only Location Scope (GHST-9)

**Task:** Scope Lif3line location data to Canada only
**Date:** 2026-06-21
**Canonical source:** `src/core/data/locations/canada-locations.ts`
**PocketBase seed (GHST-4):** use `pocketBaseCitySeed` from the same module

---

## Decision

Lif3line MVP is a **Canada-only** service marketplace.

- **Country:** Canada (`CA`) only — no multi-country signup, search, or admin location tables.
- **Regions:** Canadian provinces and territories (13 total); `region` field stores **province/territory code** (e.g. `ON`, `QC`).
- **MVP cities:** 17 cities across 7 provinces — the initial seed and homepage “Popular Cities” list. No worldwide or US/UK demo cities in location mock data.

---

## MVP city seed list (GHST-4)

| City | Province | Slug |
|---|---|---|
| Toronto | ON | `toronto-on` |
| Mississauga | ON | `mississauga-on` |
| Brampton | ON | `brampton-on` |
| Ottawa | ON | `ottawa-on` |
| Hamilton | ON | `hamilton-on` |
| Montreal | QC | `montreal-qc` |
| Laval | QC | `laval-qc` |
| Quebec City | QC | `quebec-city-qc` |
| Vancouver | BC | `vancouver-bc` |
| Surrey | BC | `surrey-bc` |
| Burnaby | BC | `burnaby-bc` |
| Calgary | AB | `calgary-ab` |
| Edmonton | AB | `edmonton-ab` |
| Winnipeg | MB | `winnipeg-mb` |
| Halifax | NS | `halifax-ns` |
| Saskatoon | SK | `saskatoon-sk` |
| Regina | SK | `regina-sk` |

All PocketBase `cities` records must use `country: "Canada"` and `region` = province code.

---

## Location data inventory

### A. Central mock / dropdown sources (updated ✅)

| File | Role | Before | After |
|---|---|---|---|
| `src/core/data/locations/canada-locations.ts` | **Canonical source** | — | Canada country, 13 provinces, 17 MVP cities, dropdown options, admin table data, PB seed export |
| `src/core/data/json/countries.tsx` | Admin + redux | 8 worldwide countries | Re-exports `countriesData` (Canada only) |
| `src/core/data/json/state.tsx` | Admin + redux | 8 foreign states | Re-exports `statesData` (13 provinces/territories) |
| `src/core/data/json/cities.tsx` | Admin + redux | 8 foreign cities | Re-exports `citiesData` (17 MVP cities) |
| `src/core/data/json/dropDownData.tsx` | Form dropdowns | Brazil/Canada, UK/US cities | Re-exports `countryOption`, `stateOption`, `cityOption` from canonical module |
| `src/core/data/redux/initial.values.tsx` | Redux bootstrap | Imports old json files | Unchanged import paths; data now Canada-only via re-exports |

### B. MVP homepage / public UI (updated ✅)

| File | Location content | Action |
|---|---|---|
| `src/feature-module/frontend/home/new-home/serviceCities.tsx` | “Popular Cities” US list (Detroit, Miami, …) | Replaced with 17 MVP Canadian cities; heading → “Popular Cities in Canada” |
| `src/feature-module/frontend/home/new-home/index.tsx` | Hero stat “Reviews Globally” | Changed to “Reviews Across Canada” |
| `src/feature-module/frontend/common/modals/provider-modal.tsx` | US/UK country; UK/US city/state options | Uses `countryOption`, `cityOption`, `stateOption` |
| `src/feature-module/frontend/services/create-service/createServices.tsx` | Canada/Brazil country; London/Paris cities | Canada-only country; MVP city list |

### C. Forms using shared dropdowns (inherits Canada data ✅)

| File | Uses |
|---|---|
| `src/feature-module/frontend/providers/staff/staffModal.tsx` | `countryOption`, `stateOption`, `cityOption` |
| `src/feature-module/frontend/providers/customer/customerModal.tsx` | same |
| `src/feature-module/frontend/customers/user-Job/customerCreateJob.tsx` | Free-text location (no country dropdown) |
| `src/feature-module/frontend/customers/user-Job/customerEditJob.tsx` | Free-text location |

### D. Admin location pages (data updated via json re-exports ✅)

| Route | Component | Data source |
|---|---|---|
| `/admin/location/countries` | `admin/location/countries.tsx` | Redux → `countriesData` (Canada only) |
| `/admin/location/state` | `admin/location/states.tsx` | `statesData` (provinces) |
| `/admin/location/cities` | `admin/location/cities.tsx` | `citiesData` (MVP cities) |

**Admin modals updated:** `state-modal.tsx`, `cities-modal.tsx`, `countries-modal.tsx`, `localization.tsx` (country restriction → “Canada only”).

### E. Language / i18n (not location — unchanged)

| File | Notes |
|---|---|
| `src/core/data/service/admin/language.ts` | English/Arabic language admin demo — **not** geographic scope; left unchanged (GHST-9 is location-only) |

### F. Hardcoded non-Canada strings (must stay until route cleanup / PocketBase wiring)

These files embed **US/UK/worldwide location text in service listings, maps, footers, and demo home variants**. They are **not** location mock JSON and were **not** bulk-edited (per “do not touch unrelated service/provider mock data”).

| Category | Example files | Example content | When to fix |
|---|---|---|---|
| Service discovery | `services/search/search.tsx`, `service-grid.tsx`, `service-list.tsx` | “Maryland City, MD, USA”, “California, USA” | GHST-5 (PocketBase) or GHST-7 (cleanup) |
| Service detail maps | `service-details1.tsx`, `service-details2.tsx` | Google Maps embed → California, USA | GHST-5 |
| Provider listings | `provider-service.tsx`, `provider-service-list.tsx` | “New Jersey, USA”, “Chicago, USA” | GHST-5 / GHST-7 |
| Demo home variants | `home-3`, `home-4`, `home-7`, `home-8`, `home-9`, … | US addresses, “London” | GHST-7 (Delete/demo routes) |
| Booking flow (deferred) | `pages/booking/*` | Alabama, Montana, Newyork USA | Later — appointment model out of MVP scope |
| Contact/footer template | `contact-us.tsx`, admin `footer-settings.tsx` | Irvine, California, United States | GHST-5 CMS or static content pass |
| Settings demo | login-activity, device-management (customer/provider/admin) | “Newyork / USA” | GHST-7 or when settings go live |
| Admin dashboard chart | `admin/dashboard/dashboard.tsx` | “Australia” in demo chart | GHST-7 |

**Count estimate:** 40+ files with hardcoded non-Canada location **display strings** remain; 6 core location data files + 5 targeted UI files were updated.

---

## UI dropdown policy (MVP)

| Dropdown | Options | Notes |
|---|---|---|
| Country | Canada only | No country picker needed long-term; can hide or disable |
| Province / territory | All 13 CA provinces & territories | Full list for forms |
| City | 17 MVP cities (`City, PP` label) | Expand when GHST-4+ adds more PB cities |
| Job location (create job) | Free text + map placeholder | Wire to PB `cities` + geocoding later |

---

## Mock files: replace vs keep

### Safe to replace (done in GHST-9)

- `countries.tsx`, `state.tsx`, `cities.tsx` — now thin re-exports
- `dropDownData.tsx` — country/state/city options from canonical module
- `serviceCities.tsx` — homepage city links
- Provider modal / create-service location dropdowns

### Must stay until later tasks

- All `src/core/data/json/*` **non-location** files (services, providers, bookings, etc.)
- Hardcoded US addresses in service/provider **listing JSX** (until GHST-5 live data)
- Demo home variant folders (`home-3` … `home-12`) — GHST-7 deletion candidates
- `language.ts` — unrelated to geography

---

## PocketBase schema alignment

See `docs/pocketbase-mvp-schema.md` — `cities` collection:

- `country` → always `"Canada"` for MVP seed
- `region` → province/territory code (`ON`, `QC`, …)
- `slug` → from `MVP_CITIES[].slug`

No separate `countries` or `provinces` collections in GHST-3; province is a text field on `cities`.

---

## GHST-4 seed requirements

When seeding PocketBase:

1. Import **only** `pocketBaseCitySeed` (17 records).
2. Do **not** seed US, UK, AU, or template foreign locations.
3. Tie services/providers to these city IDs/slugs once GHST-4 defines provider/service seed.

---

## Acceptance checklist

- [x] Canonical Canada location module created
- [x] Location mock JSON replaced (countries, states, cities, dropdowns)
- [x] MVP homepage city section uses Canadian cities
- [x] Provider modal and create-service use Canada-only dropdowns
- [x] Admin location modals default to Canada
- [x] PocketBase schema doc updated for Canada scope
- [x] Inventory documents remaining hardcoded non-Canada strings
- [x] Frontend build passes

---

## Files changed (GHST-9)

```
src/core/data/locations/canada-locations.ts          (new)
src/core/data/json/countries.tsx                     (re-export)
src/core/data/json/state.tsx                         (re-export)
src/core/data/json/cities.tsx                        (re-export)
src/core/data/json/dropDownData.tsx                  (re-export options)
src/feature-module/frontend/home/new-home/serviceCities.tsx
src/feature-module/frontend/home/new-home/index.tsx
src/feature-module/frontend/common/modals/provider-modal.tsx
src/feature-module/frontend/services/create-service/createServices.tsx
src/feature-module/admin/common/modals/state-modal.tsx
src/feature-module/admin/common/modals/cities-modal.tsx
src/feature-module/admin/common/modals/countries-modal.tsx
src/feature-module/admin/setting/localization.tsx
docs/canada-location-scope.md                        (this file)
docs/pocketbase-mvp-schema.md                        (Canada scope note)
```
