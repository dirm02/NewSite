# Lif3line entrypoint audit — schema & protocol (GHST-30)

Source of truth for how agents inventory **every visible entrypoint/action** across the homepage, customer dashboard, and provider dashboard before any demo cleanup or new PocketBase collection work.

**Hard rules (apply to GHST-30 → GHST-35):**

- No deploy.
- Do not delete routes/pages/mock data.
- Do not create PocketBase collections.
- Do not print secrets from `.env` / `.env.e2e`.
- Do not create new users unless explicitly approved.
- This is an **audit only** — no app behavior changes.

---

## 1. Surfaces in scope

| Surface | Route entry | Shell component | Auth |
|---------|-------------|-----------------|------|
| **Home** | `/index` → `NewHome` | `HomeHeader` (`SiteHeader` variant 1) + `NewFooter` | guest |
| **Customer** | `/customers/customer-dashboard` | `CustomerLayout` → `CustomerHeader` + `CustomerSidebar` | `customer` |
| **Provider** | `/providers/dashboard` | `ProviderLayout` → `ProviderHeader` + `ProviderSidebar` | `provider` |

---

## 2. Entrypoint row schema

Every entrypoint is one row. Use this exact column order so all three audits are comparable and mergeable in GHST-34.

| # | Column | Definition |
|---|--------|------------|
| 1 | **ID** | Stable id: `<SURFACE>-<AREA>-<n>`, e.g. `HOME-HDR-01`, `CUST-SIDE-03`, `PROV-BODY-07`. |
| 2 | **Surface** | `Home` / `Customer` / `Provider`. |
| 3 | **Area** | Header, Hero, Nav-dropdown, Section-<name>, Sidebar, Profile-menu, Notification, Card, Table-row, Modal, Footer, Mobile-menu. |
| 4 | **Label / icon** | Visible text or icon description (e.g. `Search`, `ti ti-bell (no text)`). |
| 5 | **Selector / identifying text** | Role+name, `data-testid`, CSS class, or unique text used to find it. |
| 6 | **Action type** | `nav-link` / `button-action` / `dropdown-toggle` / `modal-trigger` / `form-submit` / `external` / `no-op`. |
| 7 | **href / route / action** | Target route, `#`, `javascript:void(0)`, or described JS action. |
| 8 | **Auth role** | `guest` / `customer` / `provider` / `any`. |
| 9 | **What happens when clicked** | Observed/derived behavior. |
| 10 | **Destination** | Page/component reached or UI state changed. |
| 11 | **Backend dependency** | Network call / PocketBase collection / hook, or `none`. |
| 12 | **Classification** | See legend below. |
| 13 | **PB need** | Likely PocketBase collection/API/hook if `MVP-needs-backend`, else `—`. |
| 14 | **Notes / evidence** | Source file:line, screenshot path, console/network note. |

---

## 3. Classification legend

| Label | Meaning |
|-------|---------|
| **MVP-live** | Wired to real data/route today; works for the MVP flow. |
| **MVP-needs-backend** | Part of the intended MVP, but destination/action needs a PocketBase collection/API/hook not yet present. |
| **demo-later** | Template page/action not in MVP scope; keep for later, hide from primary nav. |
| **broken** | Leads to 404, JS error, or visibly fails. |
| **duplicate** | Same destination as another canonical entrypoint. |
| **external/static** | External URL, mailto/tel, or purely static/visual (no real destination). |
| **auth-only** | Only meaningful when authenticated; gated by `RequireAuth`. |
| **unknown** | Behavior could not be determined from code or runtime; flag for follow-up. |

A row may carry a **secondary tag** in Notes (e.g. classification `demo-later` + note `also duplicate of HOME-HDR-04`).

---

## 4. Evidence rules

Each row must have at least one of:

- **Code evidence** — `path:line` of the component rendering the entrypoint (preferred; always include when known).
- **Runtime evidence** — Playwright observation (URL after click, visible result) and/or screenshot path under an ignored artifact folder.

Screenshots are optional and only when they add evidence. Store generated images under `docs/e2e/role-nav/` or `test-results/` (already gitignored). **Never** commit screenshots containing seed emails/tokens.

Network evidence: note the request path (e.g. `GET /api/collections/service_requests/records`) but never the Authorization header value.

---

## 4a. Collection name glossary / alias note

The audit uses the **real PocketBase MVP collection names** (`docs/pocketbase-mvp-schema.md`). Informal UI words used in earlier drafts map as follows — always cite the canonical name in the PB-need column:

| Informal word (UI label) | Canonical PocketBase collection |
|--------------------------|---------------------------------|
| "jobs" / "Create Job" / "Job Feed" / "My Jobs" | `service_requests` |
| "proposals" / "Proposals" | `quotes` |
| "customer profile" / "customer_profiles" | `users` (customer profile fields live on `users`; no separate collection) |

> "jobs", "proposals", and "customer_profiles" are **UI/informal terms only** — they are **not** PocketBase collections. They appear in this repo only as visible button/label text or in this glossary, never as a backend recommendation.

---

## 5. Login protocol (customer / provider)

Use the **existing Playwright helpers** and `.env.e2e` seed credentials. Never echo passwords.

- Helper: `tests/e2e/helpers/auth-ui.ts` → `loginViaUi(page, email, password)`.
- Credentials: `tests/e2e/helpers/env.ts` → `getSeedCustomer()` / `getSeedProvider()`; presence check via `hasSeedCredentials(role)`.
- Local preview base URL: set `BASE_URL=http://127.0.0.1:4173` in `.env.e2e` (gitignored) and run `npx vite preview` (Playwright `webServer` auto-starts it).

**Capture spec pattern** (read-only, no mutations):

```ts
import { test } from "@playwright/test";
import { loginViaUi } from "../helpers/auth-ui";
import { getSeedCustomer, hasSeedCredentials } from "../helpers/env";
import { seedSkipReason } from "../helpers/seed";

test("capture customer entrypoints", async ({ page }) => {
  test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
  const { email, password } = getSeedCustomer();
  await loginViaUi(page, email, password);
  // navigate + page.locator(...).all() to enumerate links/buttons; do NOT submit mutating forms
});
```

### If login fails — STOP and report

Report immediately with:

- Which role failed (customer/provider).
- The route used (e.g. `/authentication/login`).
- HTTP/API error if visible (status + message, no token).
- Screenshot path (e.g. `test-results/<spec>/test-failed-1.png`).

Do **not** create a new user to work around a failed login unless explicitly approved.

---

## 6. Enumeration method (manual + automated)

Automated crawling alone is **not** sufficient. For each surface:

1. **Static pass** — read the shell + section components; list every `<Link>`, `<button>`, `data-bs-toggle`, `onClick`, and form. Record `path:line`.
2. **Runtime pass** — load the surface in Playwright; enumerate visible `a`, `button`, `[role=button]`, `[data-bs-toggle]`. Open dropdowns, profile menus, notification panels, and modals to reveal nested actions.
3. **Reconcile** — merge static + runtime so hidden-by-default actions (mobile menu, collapsed submenus, modal bodies) are not missed.
4. **Follow destinations** — for nav links, confirm the resolved component/route; classify by what actually renders (real flow vs demo vs 404).

---

## 7. Stop condition (do not stop early)

A surface audit is complete only when **all** of these are mapped or explicitly marked not-reachable:

- [ ] Every header item (logo, nav, dropdowns, right-actions)
- [ ] Hero / top section actions (search, chips, CTAs)
- [ ] Every page section top→bottom (cards, lists, view-all links)
- [ ] Every sidebar item + submenu (dashboards)
- [ ] Profile menu + notification panel actions
- [ ] Every modal trigger and the actions inside opened modals
- [ ] Card actions and table-row actions
- [ ] Footer links (legal, social, newsletter)
- [ ] Mobile menu (where it exposes different/extra actions)

---

## 8. Deliverables map

| Task | Deliverable(s) |
|------|----------------|
| GHST-30 | `docs/entrypoint-audit/README.md` (this file) + `templates/entrypoint-table.md` |
| GHST-31 | `homepage-entrypoints.md` (+ optional `.json`) |
| GHST-32 | `customer-dashboard-entrypoints.md` (+ optional `.json`) |
| GHST-33 | `provider-dashboard-entrypoints.md` (+ optional `.json`) |
| GHST-34 | `entrypoint-classification-summary.md`, `pocketbase-backlog-from-entrypoints.md`, `demo-cleanup-candidates.md` |
| GHST-35 | `entrypoint-flow-graph.md` (+ optional `entrypoint-flow-graph.json`) |

## 9. Related references

- `docs/role-flow-navigation-inventory.md` — earlier nav inventory + leak table
- `docs/role-navigation-contract.md` — allowed nav per role
- `docs/pocketbase-mvp-schema.md` — existing collections
- `docs/GHST-10-canonical-workflow.md` — canonical demo workflow
- `docs/GHST-2-route-inventory-and-schema.md` — route inventory
