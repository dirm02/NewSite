# Role-flow deployment checklist (GHST-28)

Use this checklist when deploying navigation separation to production. **Do not deploy without explicit user approval.**

## Pre-deploy (local or CI)

```bash
cd NewSite
npm run build
BASE_URL=http://127.0.0.1:4173 npx playwright test tests/e2e/smoke/public-routes.spec.ts
BASE_URL=http://127.0.0.1:4173 npx playwright test tests/e2e/auth/auth-lifecycle.spec.ts
BASE_URL=http://127.0.0.1:4173 npx playwright test tests/e2e/navigation/role-navigation.spec.ts
```

All commands must pass (seed-dependent tests skip loudly if `.env.e2e` credentials are missing).

## Test accounts (manual QA)

Use dedicated seed accounts configured in `.env.e2e` locally — **never commit credentials**:

- **Customer test account** — `E2E_SEED_CUSTOMER_EMAIL` / `E2E_SEED_CUSTOMER_PASSWORD`
- **Provider test account** — `E2E_SEED_PROVIDER_EMAIL` / `E2E_SEED_PROVIDER_PASSWORD`

Do not use production admin accounts for MVP nav testing; admin nav is not exposed in MVP.

## Production verification (post-deploy)

1. **Homepage (guest)** — `https://lif3line.me/index`
   - Join Us → `/authentication/choose-signup`
   - Sign In → `/authentication/login`
   - No visible Admin link or customer/provider dashboard menus

2. **Customer login**
   - Log in as customer test account
   - Lands on `/customers/customer-dashboard`
   - Top nav: Dashboard, Create Job, Jobs, Quote Comparison, Visit Website
   - Sidebar: MVP items only (no Bookings/Wallet/Chat)
   - No Providers menu or Admin link

3. **Provider login**
   - Log in as provider test account
   - Lands on `/providers/dashboard`
   - Top nav: Dashboard, Job Feed, Proposals, My Jobs, Visit Website
   - Sidebar: MVP items only
   - No Customers menu or Admin link

4. **Wrong-role redirects**
   - While logged in as customer, open `/providers/dashboard` → redirects to customer dashboard
   - While logged in as provider, open `/customers/customer-dashboard` → redirects to provider dashboard

5. **Password reset**
   - From login page, reset-password flow still reachable at `/authentication/reset-password`

## Rollback

Production releases live under `/var/www/lif3line.me/releases/`. To rollback:

1. Identify previous release symlink target on the server
2. Point `current` symlink to the prior release directory
3. Reload nginx if required
4. Re-run production verification above on the rolled-back build

Document the rollback release path in the deploy log before switching.

## Related docs

- `docs/role-navigation-contract.md` — nav rules
- `docs/role-flow-link-audit.md` — link audit
- `docs/e2e-agent-runbook.md` — full E2E protocol
