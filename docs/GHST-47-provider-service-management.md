# GHST-47 — Provider service management wired to PocketBase

**Task:** GHST-47 (Milestone: PocketBase Wiring)

## Summary

Providers can now manage real `services` records that flow into public
discovery/homepage/search. My Services lists the provider's own services; Add /
Edit Service write to PocketBase with categories + Canada-only cities from PB.

## Surfaces → data sources

| Surface | Page | Panel | PocketBase |
|---|---|---|---|
| My Services (grid) | `/providers/provider-service` | `ProviderServicesPanel` | `fetchProviderServices` → `services?filter=(provider='<pid>')` |
| My Services (list) | `/providers/provider-service-list` | `ProviderServicesPanel` | same |
| Add Service | `/providers/provider-edit-service` | `ProviderServiceFormPanel` | `createService` → `POST services` |
| Edit Service | `/providers/provider-edit-service?id=<id>` | `ProviderServiceFormPanel` | `fetchProviderService` + `updateService` → `PATCH services/<id>` |
| Category options | — | `useCategories` | `service_categories` |
| City options | — | `useCities` | `cities?filter=(country='Canada')` |

## New code

- `client.ts`: `pbUpdate()` (PATCH) — generic owner-editable update (used for `services`; **not** used for request/quote status, which still use the GHST-12 hook routes).
- `jobs.ts`: `ServiceFormInput`, `createService`, `updateService`, `fetchProviderService`.
- `useJobData.ts`: `useProviderServices()`, `useProviderServiceRecord(id)`, `useProviderServiceActions()` (`createService` / `updateService`, resolves the provider profile).
- `ProviderServicesPanel.tsx`, `ProviderServiceFormPanel.tsx` (new shared panels).
- Pages render the panels; static demo on the two list pages hidden via `d-none`; the edit page body was replaced with the form panel.

## Status / approval decision (scope item 5)

**MVP decision: provider services are created with `status = active`** — there is
no admin approval workflow yet, so new services appear in public discovery
immediately. Public discovery (`fetchServices`) still filters to
`status='active'`, and the form lets a provider set a service `inactive` to hide
it. When an admin moderation phase is added, switch the create default to
`pending` and discovery will already exclude it.

## Location scope

Cities come from `fetchCities` which filters `country='Canada'` — no non-Canada
locations can be selected (`docs/canada-location-scope.md`).

## Ownership (scope item 3 / acceptance)

- My Services only lists the signed-in provider's services, so edit links target
  owned records.
- `updateService` PATCHes `services/<id>`; PocketBase update rules reject edits to
  services owned by another provider (403 → surfaced as a form error).

## Acceptance check

- [x] New provider service created → appears on homepage/search when `active`.
- [x] Provider cannot edit another provider's service (PB update rule enforced).
- [x] Empty state encourages Add Service.
- [x] `npm run build` passes.
- [x] Status/approval behavior documented (active-on-create for MVP).

## Files changed

```
src/core/api/pocketbase/client.ts
src/core/api/pocketbase/jobs.ts
src/core/hooks/useJobData.ts
src/feature-module/frontend/common/jobs/ProviderServicesPanel.tsx        (new)
src/feature-module/frontend/common/jobs/ProviderServiceFormPanel.tsx     (new)
src/feature-module/frontend/providers/provider-service/provider-service.tsx
src/feature-module/frontend/providers/provider-service-list/provider-service-list.tsx
src/feature-module/frontend/providers/provider-edit-service/provider-edit-service.tsx
docs/GHST-47-provider-service-management.md
```

No schema/collection creation, no route deletion, no deploy.
