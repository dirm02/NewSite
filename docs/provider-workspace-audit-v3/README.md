# GHST-64 — Provider workspace audit (post GHST-60/61/63)

Date: 2026-06-26. Authenticated provider shell crawled via code audit, E2E navigation contract, `scripts/audit-broken-routes.mjs`, and demo-surface policy.

**Full provider sidebar remains present** (GHST-53 contract verified by `@navigation`).

---

## Summary

| Status | Count | Notes |
|--------|-------|-------|
| Live (PocketBase) | 11 | Dashboard, services, job feed, proposals, active jobs, job detail, blog, reviews |
| Demo empty state (GHST-61) | 18 | Bookings, staff, customers, payout, holidays, coupons, offers, enquiries, earnings, etc. |
| Coming soon panel | 1 | Chat (GHST-57) |
| Settings preview | 9 | Forms visible; banner warns not saved |
| Broken entrypoints | 2+ | See below |

---

## Live surfaces (no fake rows)

| Sidebar | Route | Data source |
|---------|-------|-------------|
| Dashboard | `/providers/dashboard` | `provider_profiles`, `services`, `quotes`, `reviews`, job feed count |
| My Services | `/providers/provider-service` | `services` CRUD |
| Job Feed | `/providers/job-feed` | `service_requests` open |
| Proposals | `/providers/proposal` | `quotes` pending |
| My Jobs | `/providers/active-jobs` | accepted quotes / requests |
| Job details | `/providers/job-details?id=` | request + quotes |
| Blog (all/add/submitted) | `/providers/blog/*` | `blog_posts` |
| Reviews | `/providers/provider-review` | `reviews` (published) — **wired GHST-61** |

---

## Demo surfaces (honest empty state + banner)

Guard: `DemoSurfacePageGuard` + `DemoSurfaceBanner`.

Bookings, staff (list/grid/details), customers (list/grid/details), payout/transactions, holidays/leave, coupons, offers, enquiries, earnings, subscription, job-detail status variants, verification, plan/billing, payment settings.

Template markup preserved in `d-none` for future wiring.

---

## Chat

`/providers/provider-chat` — `FeatureComingSoon`; static template hidden.

---

## Broken / risky entrypoints

From `audit-broken-routes.mjs` (16 unregistered paths used in UI):

| Route key | Path | Severity | Recommendation |
|-----------|------|----------|----------------|
| `addSubscription` | `/providers/add-subscription` | High | Register route or remove CTA |
| `providerAddon` | `/providers/provider-addon` | Medium | Register or hide CTA |
| `customerDetails` | `/providers/customer/customer-details` | Medium | Register for live job flows |
| `commonNotification` | `/customers/notification` | Low | Align header notification link |
| `customerNotifications` | `/customers/customer-notifications` | Low | Customer header fix |

**Fixed since GHST-56:** `providerEditService` route registered.

---

## Data honesty (post GHST-63)

- Homepage provider cards: real review aggregates, real service counts.
- Provider dashboard metrics: derived from live collections.
- Demo pages: no visible fake money/people/locations when `hideFakeContent: true`.

---

## Mobile / refresh

- Provider layout: sidebar + header on all tested routes.
- Direct URL access: live routes load data; demo routes show empty state immediately.
- Refresh: auth session restored via `RequireAuth`; no raw PB errors surfaced in UI panels.

---

## Playwright coverage added

- `@demopolicy` — demo banner + coming-soon on coupons (GHST-61 empty state)
- `@blog` — add-blog form visible (GHST-60)
- `@datahonesty` — homepage seeded review counts absent
- `@navigation` — removed `/index-2`…`/index-12` 404 (GHST-65)

---

## Follow-up ghist tasks (not fixed in GHST-64)

1. Register or remove provider addon/subscription CTAs (`addSubscription`, `providerAddon`).
2. Wire provider settings forms to PocketBase user/profile fields.
3. Replace `serviceImage`/`providerImage` placeholder pools with uploaded media (see `docs/homepage-asset-inventory.md`).
4. Delete orphaned variant component directories under `src/feature-module/frontend/home/home-{3..12}` after confirming no imports (GHST-65 routes removed; files remain in git tree).

Machine-readable graph: `docs/provider-workspace-audit-v3/knowledge-graph.json`.
