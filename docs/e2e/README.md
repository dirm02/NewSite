# Lif3line E2E QA

Automated end-to-end tests for the Lif3line MVP frontend (`NewSite/`).

## Stack

| Tool | Purpose |
|------|---------|
| [@playwright/test](https://playwright.dev) | Browser E2E (primary runner) |
| [Crawlee](https://crawlee.dev) + PlaywrightCrawler | Route crawl audit |
| [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm) | Accessibility scans |

## Setup

```bash
cd NewSite
npm install
npx playwright install chromium
```

Copy env template (never commit `.env.e2e` with real passwords):

```bash
cp .env.example .env.e2e
# Edit .env.e2e — set BASE_URL and seed credentials for auth/marketplace tests
```

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://lif3line.me` | Frontend under test |
| `POCKETBASE_URL` | `https://pocket.lif3line.me/api` | PocketBase REST API |
| `E2E_SEED_CUSTOMER_EMAIL` | — | Seed customer for login/guard tests |
| `E2E_SEED_CUSTOMER_PASSWORD` | — | Seed customer password |
| `E2E_SEED_PROVIDER_EMAIL` | — | Seed provider for marketplace tests |
| `E2E_SEED_PROVIDER_PASSWORD` | — | Seed provider password |
| `CRAWL_MAX_REQUESTS` | `80` | Crawler page limit |
| `CRAWL_MAX_DEPTH` | `4` | Crawler link depth |

## Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Typecheck + production build |
| `npm run test:e2e:smoke` | Public route smoke (`@smoke`) |
| `npm run test:e2e -- --grep @auth` | Auth lifecycle tests |
| `npm run test:e2e -- --grep @marketplace` | Full job/quote flow |
| `npm run test:e2e -- --grep @discovery` | Discovery + Canada-only |
| `npm run audit:a11y` | Accessibility + health (`@health`) |
| `npm run audit:crawl` | Crawlee route audit → `docs/e2e/crawl-report.md` |
| `npm run test:e2e:report` | Open HTML report |

## Test layout

```
tests/e2e/
  helpers/       env, PocketBase API, auth UI helpers
  setup/         global setup
  smoke/         @smoke public routes
  auth/          @auth signup/login/guards
  marketplace/   @marketplace job quote lifecycle
  discovery/     @discovery Canada-only checks
  health/        @health axe + mobile screenshots
```

## Safety rules

- **No deploy** unless a ghist task explicitly requires it and the user approves.
- **No paid resources** or new VM instances.
- **No production data deletion** — use `e2e.*@test.lif3line.ca` emails for signups; marketplace jobs use `E2E Job` title prefix.
- **Never commit** `.env.e2e`, `storageState`, tokens, or reports containing secrets.

### What runs without seed credentials

| Tag | Without `.env.e2e` seed | With seed credentials |
|-----|-------------------------|------------------------|
| `@smoke` | All tests run | All tests run |
| `@discovery` | All tests run | All tests run |
| `@health` | Public axe + asset checks; dashboard scans **skipped** (documented) | + authenticated customer/provider dashboard axe |
| `@auth` | Public flows only (bad login, signup, reset/verify warnings) | + seed login, guards, forgot-password |
| `@marketplace` | **Entire suite skipped** (logged at startup) | Mutates PocketBase — **requires explicit user approval** |

Global setup prints seed status to the console on every run. Skipped tests show `SKIPPED:` in the skip reason.

PocketBase API helpers use `Authorization: Bearer <token>` (not raw tokens).

## Artifacts

| Path | Contents |
|------|----------|
| `playwright-report/` | HTML test report |
| `test-results/` | Traces, screenshots, videos |
| `docs/e2e/crawl-report.md` | Crawler summary (generated) |
| `docs/e2e/a11y-report.md` | Axe violations (generated, gitignored) |

## Local vs production

- **Production (default):** `BASE_URL=https://lif3line.me` — read-only smoke/discovery; auth tests need seed creds.
- **Local preview:** `npm run dev` then `BASE_URL=http://localhost:5173 npm run test:e2e:smoke`

## ghist tasks

E2E work is tracked as **GHST-13** through **GHST-19** on `/opt/ghist/tracker`. See [AGENT-RUNBOOK.md](./AGENT-RUNBOOK.md).
