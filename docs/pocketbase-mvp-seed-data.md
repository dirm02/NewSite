# Lif3line MVP PocketBase Seed Data (GHST-4)

**Task:** GHST-4 — Seed MVP PocketBase data for homepage and discovery
**Applied:** 2026-06-21 via migration `1740523700_lif3line_mvp_seed.js`
**Location rule:** Canada-only (GHST-9) — all cities use `country: "Canada"`
**API:** https://pocket.lif3line.me/api

---

## Summary

| Collection | Records | Public API |
|---|---|---|
| `cities` | 17 | Yes — all Canada |
| `service_categories` | 12 | Yes |
| `services` | 18 | Yes — `status=active` |
| `provider_profiles` | 6 | Yes — `status=active` |
| `reviews` | 12 | Yes — `status=published` |

**Not seeded:** `service_requests`, `quotes`, `bookings`, chat, notifications, wallet, payouts, subscriptions.

---

## Migration

**Local path:** `pocketbase/pb_migrations/1740523700_lif3line_mvp_seed.js`
**VM path:** `/opt/pocketbase/pb_migrations/1740523700_lif3line_mvp_seed.js`

```bash
sudo -u pocketbase /opt/pocketbase/pocketbase migrate up \
  --dir=/opt/pocketbase/pb_data \
  --migrationsDir=/opt/pocketbase/pb_migrations
```

Idempotent: skips if `cities` record with `slug=toronto-on` already exists.

Revert last seed migration:

```bash
sudo -u pocketbase /opt/pocketbase/pocketbase migrate down 1 \
  --dir=/opt/pocketbase/pb_data \
  --migrationsDir=/opt/pocketbase/pb_migrations
```

---

## Cities (17 — from GHST-9)

Source: `src/core/data/locations/canada-locations.ts` → `pocketBaseCitySeed`

All records: `country = "Canada"`, `region` = province code.

| Slug | City | Region |
|---|---|---|
| toronto-on | Toronto | ON |
| mississauga-on | Mississauga | ON |
| brampton-on | Brampton | ON |
| ottawa-on | Ottawa | ON |
| hamilton-on | Hamilton | ON |
| montreal-qc | Montreal | QC |
| laval-qc | Laval | QC |
| quebec-city-qc | Quebec City | QC |
| vancouver-bc | Vancouver | BC |
| surrey-bc | Surrey | BC |
| burnaby-bc | Burnaby | BC |
| calgary-ab | Calgary | AB |
| edmonton-ab | Edmonton | AB |
| winnipeg-mb | Winnipeg | MB |
| halifax-ns | Halifax | NS |
| saskatoon-sk | Saskatoon | SK |
| regina-sk | Regina | SK |

---

## Service categories (12)

Mapped from `/index` homepage category grid (GHST-2).

| Slug | Name | Featured |
|---|---|---|
| construction | Construction | yes |
| removals | Removals | yes |
| cleaning | Cleaning | yes |
| computer-service | Computer Service | yes |
| electrical | Electrical | yes |
| man-van | Man & Van | yes |
| deliveries | Deliveries | no |
| mobile-barber | Mobile Barber | no |
| interior | Interior | no |
| plumbing | Plumbing | no |
| nail-technicians | Nail Technicians | no |
| hair-dressers | Hair Dressers | no |

---

## Provider profiles (6)

Source: `/index` `ProviderSection` names + Canadian cities.

| Business | Provider user | City | From |
|---|---|---|---|
| Thompson Trade Services | hendry.thompson@seed.lif3line.ca | Toronto, ON | $60 |
| Patterson Home Services | william.patterson@seed.lif3line.ca | Vancouver, BC | $70 |
| Verduzco Cleaning Co. | lorenzo.verduzco@seed.lif3line.ca | Montreal, QC | $55 |
| Smith Plumbing & Heating | rafael.smith@seed.lif3line.ca | Calgary, AB | $65 |
| Boyd IT & Computer Repair | robert.boyd@seed.lif3line.ca | Ottawa, ON | $70 |
| Fletcher Moving & Delivery | joe.fletcher@seed.lif3line.ca | Edmonton, AB | $50 |

All: `status=active`, `verified=true`.

---

## Services (18)

Sources: `services-slide.tsx`, homepage categories, provider assignments.

5 featured (homepage carousel): delivery, manicure, water heater, cleaning, PC builds.

All services: `status=active`, linked to a Canadian city and MVP category.

Examples:
- `professional-delivery-services` — Edmonton
- `custom-pc-builds` — Ottawa
- `mobile-barber-home-visit` — Vancouver
- `same-day-courier-gta` — Brampton

---

## Reviews (12)

Source: `home-testimonial.tsx` (+ variations), `status=published`.

6 seed customer accounts authored 12 reviews linked to providers and services.

---

## Seed auth accounts (dev/test only)

Seed account passwords are set outside git with `LIF3LINE_SEED_PASSWORD`.

| Email | Role |
|---|---|
| hendry.thompson@seed.lif3line.ca | provider |
| william.patterson@seed.lif3line.ca | provider |
| lorenzo.verduzco@seed.lif3line.ca | provider |
| rafael.smith@seed.lif3line.ca | provider |
| robert.boyd@seed.lif3line.ca | provider |
| joe.fletcher@seed.lif3line.ca | provider |
| robert.anderson@seed.lif3line.ca | customer |
| delois.coffin@seed.lif3line.ca | customer |
| matthew.hicks@seed.lif3line.ca | customer |
| daniel.davis@seed.lif3line.ca | customer |
| sarah.martin@seed.lif3line.ca | customer |
| james.wilson@seed.lif3line.ca | customer |

These exist to satisfy `provider_profiles.user` and `reviews.author` relations. Not for production use.

---

## Verification (2026-06-21)

Public API on `pocket.lif3line.me`:

```
GET /api/collections/cities/records           → totalItems: 17, country: Canada
GET /api/collections/service_categories/records → totalItems: 12
GET /api/collections/services/records         → totalItems: 18
GET /api/collections/provider_profiles/records → totalItems: 6
GET /api/collections/reviews/records          → totalItems: 12
```

Sample queries for GHST-5 frontend wiring:

```
GET /api/collections/service_categories/records?filter=(featured=true)&sort=sort_order
GET /api/collections/services/records?filter=(status='active'&&featured=true)
GET /api/collections/provider_profiles/records?filter=(status='active')&sort=-rating_avg
GET /api/collections/reviews/records?filter=(status='published')&expand=provider,service
GET /api/collections/cities/records?filter=(country='Canada')
```

---

## Next

**GHST-5:** Connect frontend discovery pages (`/index`, search, service grid, provider list) to these PocketBase endpoints. Frontend mock JSON remains until wired.
