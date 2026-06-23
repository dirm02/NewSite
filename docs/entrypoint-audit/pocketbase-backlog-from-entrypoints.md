# PocketBase backlog from entrypoints (GHST-34)

Derived from the entrypoint maps (GHST-31/32/33) + `docs/pocketbase-mvp-schema.md`.
**No collections are created in this task.** This is a prioritized backlog only.

## Existing collections (already migrated — GHST-3)

`users`, `cities`, `service_categories`, `provider_profiles`, `services`, `service_requests`, `quotes`, `reviews`.

> Naming note: the frontend calls customer jobs "Jobs/Create Job" and provider "Job Feed/Proposals". These map to the existing **`service_requests`** (jobs) and **`quotes`** (proposals) collections — see schema §6/§7. So most job/quote work is **frontend wiring + hooks**, not new collections.

---

## Tier 1 — Immediate MVP (wire existing collections; minimal/no new schema)

These entrypoints are core to the job→quote→review MVP and map to **collections that already exist**. Work = frontend data wiring + a few server hooks.

| Capability | Entrypoints | Collection (status) | Work needed |
|-----------|-------------|---------------------|-------------|
| Post a job | CUST-SIDE-02 Create Job, CUST-BODY-19 CTA, HOME-CTA Join/Create | `service_requests` (exists) | Wire create form → `POST /service_requests`; default `customer`, `status=open` |
| My jobs list | CUST-SIDE-03 Jobs, CUST-BODY-11 Recent Jobs View All | `service_requests` (exists) | List `filter=(customer=@request.auth.id)` |
| Provider job feed | PROV-SIDE-04 Job Feed | `service_requests` (exists) | List `filter=(status='open')` for providers |
| Submit proposal/quote | (provider apply) | `quotes` (exists) | `POST /quotes`; unique (request, provider) |
| Quote comparison | CUST-SIDE-04 Quote Comparison | `quotes` (exists) | List quotes per request; expand provider |
| Accept / decline proposal | CUST-BODY-15/16 Accept/Decline | `quotes` + `service_requests` | **Hook exists ✅** (GHST-12): `/lif3line/accept-quote` (set accepted, reject others, request→in_progress). Work = frontend wiring only. |
| Provider proposals list | PROV-SIDE-05 Proposals, PROV-SIDE-06 My Jobs | `quotes`/`service_requests` (exists) | List `filter=(provider.user=@request.auth.id)` |
| Provider services | PROV-SIDE-02 My Services | `services` (exists) | List/create by provider owner |
| Reviews (read/write) | CUST-SIDE-05, PROV-SIDE-13, PROV-BODY-13/15 | `reviews` (exists) | List by author/provider; **review validation hook exists ✅** (GHST-12). Rating aggregate recompute still deferred. |
| Profile settings | CUST-SIDE-07 Account, PROV-SIDE-19 Account | `users`, `provider_profiles` (exists) | Wire edit forms (PATCH own record) |
| Discovery (home) | all homepage live sections | `categories/services/providers/reviews/cities` (exists) | Already wired — keep |
| Search filter | HOME-HERO-03/04, city/profession links | `services` (exists) | Pass query/category/city params into existing search |

**Tier 1 hooks (pb_hooks) — status (GHST-12):**

| Hook | Status |
|------|--------|
| `/lif3line/accept-quote` | **implemented ✅** |
| `/lif3line/complete-request` | **implemented ✅** |
| `/lif3line/cancel-request` | **implemented ✅** |
| Review validation | **implemented ✅** |
| Rating aggregate recompute | **deferred** (still pending) |

So the remaining Tier 1 work is **frontend wiring** to these existing hooks/collections, plus the deferred rating-aggregate recompute. No new backend hooks are required for the core accept/complete/cancel/review transitions.

---

## Tier 2 — Later: provider operations, payments, comms (NEW collections)

Out of current MVP scope (`pocketbase-mvp-schema.md` explicitly excludes these). Needed before the corresponding entrypoints become real.

| Proposed collection | Driven by entrypoints | Rough fields |
|---------------------|-----------------------|--------------|
| `bookings` (appointments) | CUST Recent Booking, PROV Bookings sidebar + calendar | request/service, provider, customer, datetime, status |
| `notifications` | CUST/PROV header bell + items + "Mark all read" | user, type, message, read, link |
| `messages` / `chat` | CUST? / PROV-SIDE-16 Chat | thread, sender, recipient, body, read |
| `payments` / `transactions` | CUST Recent Transaction, PROV Recent Transactions, Earnings, Payout | user, amount, type, status, ref |
| `subscriptions` / `plans` | PROV subscription card, Plan & Billings, Upgrade/Cancel Plan | provider, plan, status, renewal_date |
| `staff` | PROV Staffs sidebar, Highly Rated Staffs, Add Staff modal | provider, name, email, phone, role, status |
| `coupons` | PROV Coupons | provider, code, discount, validity |
| `offers` | PROV Offers | provider, title, discount, window |
| `enquiries` | PROV Enquiries | from, provider, subject, message, status |
| `favorites` | Home/service favorite hearts | user, service/provider |
| `newsletter_subscribers` | Footer Subscribe | email, created |
| `activity_log` (optional) | CUST Recent Activities | user, type, ref, ts |
| `posts` / `blog` (optional) | Home blog cards + blog module | title, slug, body, author, published |

---

## Tier 3 — Admin / governance (later)

| Capability | Entrypoints | Collection / mechanism |
|-----------|-------------|------------------------|
| Provider verification | PROV-SIDE-26 Profile Verification | `provider_profiles.verified` + admin hook (schema §"Sensitive transitions") |
| Account deletion | CUST/PROV Delete Account modals | `users` delete (admin) + self-delete flow |

---

## Recommended sequencing

1. **Wire Tier 1 reads** (jobs list, job feed, proposals, reviews, services) — collections exist, lowest risk.
2. **Wire Tier 1 writes + hooks** (create job, submit/accept quote, review) — completes the canonical workflow in `GHST-10-canonical-workflow.md`.
3. **Hide** Tier 2 entrypoints from nav until their collections exist (see `demo-cleanup-candidates.md`).
4. **Tier 2 collections** only after MVP job/quote/review loop is demoable.

> Do not create collections as part of GHST-30–35. This backlog feeds a future schema task.
