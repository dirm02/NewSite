# Known E2E gaps

Flows not yet fully automated or requiring manual follow-up.

## Deferred product flows (GHST-10)

| Flow | Routes | Status |
|------|--------|--------|
| Appointment booking | `/pages/booking`, customer/provider booking | Not in MVP — no automated assertions |
| Wallet / payouts | `customer-wallet`, provider earnings | Not in MVP |
| Payment checkout | `booking-payment` | Unwired — crawl may still hit links |

## Auth / email

| Gap | Notes |
|-----|-------|
| Mailgun inbox verification | Password reset returns 204; inbox link click not automated without Mailgun API key |
| Email verification link click | `/authentication/verify-email?token=` tested for missing token only |
| OTP / phone login | `/authentication/login-phone*` not in MVP auth tests |

## UI / selectors

| Gap | Notes |
|-----|-------|
| Hidden template sections | Job pages still contain `d-none` mock blocks — tests target live panels only |
| Provider pending approval | New provider signups may have `pending` profile — job feed requires active provider |
| Detail page lower sections | Service/provider detail pages may show template mock below wired header |

## Discovery

| Gap | Notes |
|-----|-------|
| MOCK_FALLBACK banner | If PocketBase unreachable, discovery shows fallback — test documents API path instead |
| Filter sidebars | Search/grid filter UI still demo — not wired to PocketBase |

## Accessibility

| Gap | Notes |
|-----|-------|
| Template a11y debt | Legacy theme filter sidebars and demo blocks excluded from axe scope (`.d-none`, `.theiaStickySidebar`); auth form labels wired on login/signup |
| Admin routes | Admin panel not in MVP E2E scope |
| Authenticated dashboards | Axe scans run only when `E2E_SEED_CUSTOMER_*` / `E2E_SEED_PROVIDER_*` are set; otherwise a documenting placeholder test runs |

## Production safety

- Marketplace test creates real `service_requests`, `quotes`, and `reviews` when seed credentials are set — titles prefixed with `E2E Job`. **Do not run `@marketplace` without explicit approval.**
- Signup tests create users at `e2e.*@test.lif3line.ca` — safe to leave; no auto-cleanup yet.
- Auth/marketplace seed tests skip loudly when `E2E_SEED_*` are unset (see README skip matrix).
- Crawl audit ignores Cloudflare RUM (`/cdn-cgi/rum`) and similar telemetry aborts.
