# External Agent Onboarding Prompt — Lif3Line (GHST-54 → GHST-58)

> Copy everything in the fenced block below and give it to the external agent as
> its task prompt. It routes the agent through the audit + the docs produced in
> this work cycle, states the non-negotiable product rules, and explains how to
> verify every claim independently.

```prompt
You are joining the Lif3Line marketplace project mid-stream. Your job is to fully
study the current state of the codebase using the audit and documentation
produced in the GHST-54→GHST-58 cycle, verify the findings yourself, and be ready
to continue the work. Do NOT take any prior report at face value — confirm with
code, the live PocketBase API, the browser, and the test suites.

== WHAT LIF3LINE IS ==
A Canada-only services marketplace built on a large purchased React/Vite admin
template. Backend is PocketBase. The product goal is NOT to shrink the template —
it is to replace fancy mock/demo/static data with real PocketBase-backed data
while preserving the template's useful product structure.

== ENVIRONMENT ==
- Repo (local): C:\Users\LocalAccountHPT25\Desktop\Online\NewSite  (branch main)
- Production frontend: https://lif3line.me
- Production PocketBase API: https://pocket.lif3line.me/api
- Task tracker "ghist" on the VM:
    ssh -i C:\Users\LocalAccountHPT25\.ssh\id_ed25519_digitalocean root@146.190.240.66
    cd /opt/ghist/tracker && ghist status && ghist task list
- E2E seed credentials live in NewSite/.env.e2e (NEVER print or commit secrets).
- Deployed commit is a581cf9. IMPORTANT: the GHST-55/56/57/58 changes are in the
  working tree, UNCOMMITTED and UNDEPLOYED — production still shows the pre-fix
  behavior. Do not assume prod == local.

== NON-NEGOTIABLE PRODUCT RULES ==
1. Do NOT trim, delete, or hide pages, buttons, sidebar/header/footer links,
   dashboard sections, or features unless a ghist task explicitly says so AND
   ghist records approval. Keep the FULL customer and provider sidebars visible.
2. Replace mock/demo/static data with real PocketBase data. Never fake
   popularity: if PB has 0 services show 0 / an honest empty state; if 1, show
   exactly 1 real card. Cards must be generated from PB records, not hand-authored.
3. If a surface isn't wired, classify it honestly (live/mock/demo/broken/future)
   and give it a visible non-confusing state — never delete it.
4. Do NOT deploy, do NOT restart PocketBase, and do NOT create/delete PocketBase
   collections unless a ghist task explicitly requires it and approval is recorded.
   Record/record-level create+delete for verification is OK only if self-cleaning.

== REQUIRED READING (in this order) ==
Start with the v2 entrypoint audit (the map of everything), then the four task
docs, then the supporting/older docs.

1. docs/entrypoint-audit-v2/README.md
   - Overview, verified live PB data snapshot, headline findings, method.
2. docs/entrypoint-audit-v2/broken-entrypoints.md
   - Every route a CTA points at that 404s, triaged by severity. Re-runnable via
     `node scripts/audit-broken-routes.mjs` (path-resolved checker).
3. docs/entrypoint-audit-v2/guest-entrypoints.md
   docs/entrypoint-audit-v2/customer-entrypoints.md
   docs/entrypoint-audit-v2/provider-entrypoints.md
   - Per-role tables: role, location, label, route/action, behavior, live vs mock,
     PB collection needed, status, recommendation.
4. docs/entrypoint-audit-v2/knowledge-graph.md (Mermaid) and knowledge-graph.json
   - Role → shell → surface → PocketBase mapping + data-honesty hotspots.
5. docs/GHST-56-provider-service-flow.md
   - The provider Add/Edit-Service flow: it was BROKEN (route unregistered) and is
     now fixed; documents the PB `services` schema contract and remaining gaps.
6. docs/GHST-55-honest-data-contract.md
   - How fake popularity (seeded services_count/rating_count/listing_count and
     "?? 255 reviews") was replaced with real computed values + empty states.
7. docs/GHST-57-chat-plan.md
   - Chat decision (deferred, kept visible, honest "coming soon") + a DRAFT
     conversations/messages schema (NOT created — needs approval).
8. docs/GHST-58-demo-surface-policy.md
   - The central policy that labels unwired surfaces ("sample data / coming soon")
     without hiding them: src/core/navigation/demo-surfaces.ts.
9. Supporting/older docs to skim for context:
   - docs/provider-blog-flow.md (GHST-48 blog schema/rules/lifecycle)
   - docs/GHST-49-provider-blog-ui.md, docs/GHST-43/44/45/46/47-*.md (PB wiring)
   - docs/pocketbase-wiring-deploy-checklist.md (how deploys/migrations work)
   - docs/e2e/AGENT-RUNBOOK.md (test tags, env vars, skip matrix)
   - docs/role-navigation-contract.md (role nav rules)

== KEY VERIFIED FACTS (re-verify; don't trust blindly) ==
- Live PocketBase counts at audit time: services 18 (all active, 5 featured,
  images: []), provider_profiles 6, service_categories 12 (6 featured), cities 17
  (Canada), reviews 14; service_requests 0, quotes 0, blog_posts 0,
  blog_categories 0; users list is rule-hidden. Re-check with:
    curl "https://pocket.lif3line.me/api/collections/services/records?perPage=1&filter=(status='active')"
- Seeded aggregate fields overstate reality (e.g. a provider with
  services_count=52, rating_count=270 while only 18 services / 14 reviews exist).
  GHST-55 now computes real counts on the frontend; recomputing them via a
  PocketBase hook is a recommended backend follow-up.
- The provider service create flow was unreachable (the providerEditService route
  was never registered). GHST-56 registered it and fixed the create contract
  (required unique slug + required category) and added image upload. Verify with:
    node scripts/verify-service-create.mjs   (logs in as seed provider, creates a
    service, asserts the shape, then DELETES it — self-cleaning, no residue)
- Nav drift to decide on: role sidebars were restored to the full feature map
  (GHST-53), but the guest header customer/provider dropdowns and the footer are
  still trimmed from earlier cleanup passes (documented, not yet reconciled).

== HOW TO VERIFY EVERYTHING ==
- Build: `npm run build` (must pass).
- Broken-route scan: `node scripts/audit-broken-routes.mjs`.
- Targeted Playwright suites (run against local dist via the config's vite
  preview by setting BASE_URL=http://127.0.0.1:4173; seed-dependent tests skip
  loudly without .env.e2e creds; NEVER print secrets):
    npx playwright test --grep @navigation     (role shells/sidebars: 13)
    npx playwright test --grep @datahonesty     (rendered counts == live PB: 5)
    npx playwright test --grep @demopolicy       (demo banner vs live: 2)
    npx playwright test --grep @blog             (public blog read-only)
  Mutating suites (@marketplace and the @blog provider-submit test) create real
  PB records — run ONLY with explicit approval.
- Browser: load production or a local preview and confirm behavior directly.

== HOW THE DEMO-SURFACE POLICY WORKS (so you don't re-break it) ==
- src/core/navigation/demo-surfaces.ts maps each not-yet-wired route path to an
  honest message. src/feature-module/frontend/common/state/DemoSurfaceBanner.tsx
  is rendered once by customerLayout/providerLayout and shows the banner only on
  those paths. To "promote" a surface to live: wire it to PocketBase, then DELETE
  its entry from demo-surfaces.ts (the banner disappears automatically). Chat uses
  FeatureComingSoon (same folder) instead and is intentionally excluded.

== SUGGESTED NEXT WORK (after you've studied + verified) ==
- Deploy GHST-55/56/57/58 (frontend-only; no PB schema change needed). Follow
  docs/pocketbase-wiring-deploy-checklist.md. Requires explicit approval.
- Wire the highest-value still-mock surfaces to PocketBase one at a time (each
  removes a demo-surfaces.ts entry): provider Reviews page, provider Account
  settings/profile, then evaluate bookings/payments/staff as product decides.
- If chat is approved, implement docs/GHST-57-chat-plan.md (create collections +
  hook + chat.ts/useChat + replace the d-none template) — approval required first.
- Add the recommended PocketBase hook to recompute provider services_count /
  rating aggregates so denormalized fields stay truthful.
- Prefer real uploaded service.images[0] on cards (now that GHST-56 enables
  upload), falling back to the placeholder only when none exist.

== DELIVERABLE FROM YOU ==
A short written confirmation that you have read each doc, the results of your
own verification (build + the test tags above + a PB API spot-check + the two
scripts), any discrepancies you found vs the docs, and your proposed next ghist
task. Update ghist with an event summarizing what you verified. Do not deploy or
mutate PocketBase without approval.
```
