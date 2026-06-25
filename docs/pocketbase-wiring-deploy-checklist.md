# PocketBase wiring + blog — phased deploy checklist (GHST-52)

Deployment & rollback guide for the PocketBase-wiring work (GHST-42 → GHST-51)
and the provider blog rewrite (GHST-48/49).

> **No deploy is performed by this document.** Every PocketBase schema change,
> service restart, and production mutating E2E run requires **explicit user
> approval** at the marked points below.

## Baseline

- Git baseline: **`aabf8cf`** (`fix: rebrand frontend to Lif3Line`).
- The wiring/blog/cleanup/E2E work (GHST-42 → GHST-51) currently lives in the
  working tree. **Commit it first** so the deployed release maps to a known
  commit (record the new commit hash in the deploy log; it must be `aabf8cf` or
  newer).

## Infrastructure (verified on VM `146.190.240.66`)

| Component | Location |
|---|---|
| Frontend web root | `/var/www/lif3line.me/` → `current` symlink + `releases/<id>/` |
| Frontend owner | `www-data:www-data` |
| nginx sites | `lif3line.me`, `pocket.lif3line.me`, `cafe.lif3line.me` |
| PocketBase service | systemd `pocketbase.service` |
| PocketBase binary | `/opt/pocketbase/pocketbase serve --http=127.0.0.1:8090 --dir=/opt/pocketbase/pb_data` |
| PB migrations dir | `/opt/pocketbase/pb_migrations/` |
| PB hooks dir | `/opt/pocketbase/pb_hooks/` |
| PB public API | `https://pocket.lif3line.me/api` |

## Two independent deploy types

1. **Frontend-only** (static `dist/`): GHST-42, 43, 44, 45, 46, 47, 50, 51, and
   the **blog UI** (GHST-49) **render fine before** the blog schema exists —
   they show empty/not-found states. Safe to ship without touching PocketBase.
2. **PocketBase schema/hooks** (GHST-48): copy migration + hook, then **restart
   PocketBase** (approval required). Only after this do blog posts persist and
   the provider blog submit path work end to end.

Recommended order: **Frontend first**, verify empty states, then **PocketBase**
when ready to enable the blog.

---

## Pre-deploy (local / CI) — all phases

```bash
cd NewSite
npm run build                                   # must pass
BASE_URL=http://127.0.0.1:4173 npx playwright test --grep @navigation --project=chromium
BASE_URL=http://127.0.0.1:4173 npx playwright test --grep @blog --project=chromium
# Seed-dependent / mutating suites (@marketplace, @blog provider-submit) skip
# loudly unless .env.e2e creds exist AND (for blog) the schema is deployed.
```

`node --check` the PB files before shipping them:

```bash
node --check pocketbase/pb_migrations/1740524000_lif3line_provider_blog.js
node --check pocketbase/pb_hooks/20_lif3line_blog.pb.js
```

---

## Phase 1 — Frontend deploy (no PocketBase change)

Covers all wiring UIs + blog UI + demo cleanup.

1. Build locally (`npm run build`) → produces `NewSite/dist/`.
2. Create a **new** timestamped release dir (never overwrite `current`):
   ```bash
   ts=$(date +%Y%m%d%H%M%S)
   ssh root@146.190.240.66 "mkdir -p /var/www/lif3line.me/releases/$ts"
   rsync -az --delete NewSite/dist/ root@146.190.240.66:/var/www/lif3line.me/releases/$ts/
   ```
3. Fix ownership + repoint the `current` symlink atomically:
   ```bash
   ssh root@146.190.240.66 "chown -R www-data:www-data /var/www/lif3line.me/releases/$ts && ln -sfn /var/www/lif3line.me/releases/$ts /var/www/lif3line.me/current"
   ```
4. Reload nginx only if config changed (symlink swap usually needs none):
   ```bash
   ssh root@146.190.240.66 "nginx -t && systemctl reload nginx"
   ```
5. Record `$ts` and the git commit in the deploy log.

**No PocketBase restart in this phase.**

### Phase 1 verification (guest + seed accounts)
- `https://lif3line.me/index` — loads, Lif3Line brand, hero search → `/services/search?...`, **no role dashboard menus** as guest.
- `https://lif3line.me/services/search` — discovery returns Canada-only data.
- Customer login → `https://lif3line.me/customers/customer-dashboard` — live metrics or honest empty state; sidebar = MVP only.
- Provider login → `https://lif3line.me/providers/dashboard` — live metrics/empty; sidebar = Dashboard, My Services, Job Feed, Proposals, **Blog**, My Jobs, Settings, Logout.
- `https://lif3line.me/blog/blog-grid` — shows **"No blog posts yet"** (expected until Phase 2).
- `https://lif3line.me/blog/blog-details?slug=anything` — **"Post not found"** (expected until Phase 2).

### Phase 1 rollback
```bash
# point current back to the previous release id, then reload nginx if needed
ssh root@146.190.240.66 "ln -sfn /var/www/lif3line.me/releases/<PREV_ID> /var/www/lif3line.me/current && nginx -t && systemctl reload nginx"
```
Record the prior release id **before** switching. Frontend rollback is safe and
non-destructive (no data involved).

---

## Phase 2 — PocketBase blog schema + hooks (GHST-48) — APPROVAL REQUIRED

> **⚠ Manual approval required**: copying a migration + restarting
> `pocketbase.service`. PocketBase auto-applies new `pb_migrations/*.js` and
> reloads `pb_hooks/*` **on restart**.

1. **Backup pb_data first** (enables restore if the migration misbehaves):
   ```bash
   ssh root@146.190.240.66 "systemctl stop pocketbase && cp -a /opt/pocketbase/pb_data /opt/pocketbase/pb_data.bak.$(date +%Y%m%d%H%M%S)"
   ```
   (If you prefer zero-downtime backup, snapshot the DB file per PocketBase docs;
   otherwise stop → copy → start.)
2. Copy the migration + hook:
   ```bash
   scp pocketbase/pb_migrations/1740524000_lif3line_provider_blog.js root@146.190.240.66:/opt/pocketbase/pb_migrations/
   scp pocketbase/pb_hooks/20_lif3line_blog.pb.js root@146.190.240.66:/opt/pocketbase/pb_hooks/
   ```
3. **Restart (approval point):**
   ```bash
   ssh root@146.190.240.66 "systemctl restart pocketbase && sleep 2 && systemctl status pocketbase --no-pager | head -n 5"
   ```
4. Confirm migration applied / no boot errors:
   ```bash
   ssh root@146.190.240.66 "journalctl -u pocketbase -n 50 --no-pager"
   ```

### Phase 2 verification
- `https://pocket.lif3line.me/api/health` — `200`.
- Collections exist & rules work:
  ```bash
  curl -s "https://pocket.lif3line.me/api/collections/blog_posts/records?filter=(status='published')"     # 200, items: [] (not 404)
  curl -s "https://pocket.lif3line.me/api/collections/blog_categories/records?filter=(status='active')"    # 200
  ```
- Provider flow (UI, seed provider): `/providers/blog/add-blog` → fill → **Submit
  for Approval** → `/providers/blog/submitted` shows status **Submitted**.
- Guest still sees **no** unpublished post at `/blog/blog-grid`.
- Admin (PocketBase Admin UI) sets the post `published` → it appears at
  `/blog/blog-grid`, `/blog/blog-details?slug=...`, and homepage preview.
- Re-run `--grep @blog` (the provider-submit test now runs instead of skipping).

### Phase 2 rollback — CAUTION (data-affecting)
- **Hook-only rollback** (safe): remove the hook + restart.
  ```bash
  ssh root@146.190.240.66 "rm /opt/pocketbase/pb_hooks/20_lif3line_blog.pb.js && systemctl restart pocketbase"
  ```
- **Schema rollback** drops `blog_posts` + `blog_categories` (the migration's
  `down` deletes them) → **destroys all blog data**. Only do this if necessary
  and after backup. Prefer restoring `pb_data.bak.*`:
  ```bash
  ssh root@146.190.240.66 "systemctl stop pocketbase && mv /opt/pocketbase/pb_data /opt/pocketbase/pb_data.failed && mv /opt/pocketbase/pb_data.bak.<TS> /opt/pocketbase/pb_data && systemctl start pocketbase"
  ```
  Also remove the migration file from `pb_migrations/` so it isn't re-applied.

---

## Phase 3 — Post-deploy E2E (production) — APPROVAL for mutating

- Read-only/nav (safe): `--grep @navigation`, `--grep @blog` (guest cases),
  `--grep @discovery`, smoke.
- **Mutating (approval required):** `--grep @marketplace` and the `@blog`
  provider-submit test create records in production PocketBase. Run only with
  explicit approval, ideally with dedicated seed accounts.

---

## Manual-approval summary

| Action | Approval |
|---|---|
| Frontend release + symlink swap | standard deploy approval |
| Copy PB migration/hook | **required** |
| `systemctl restart pocketbase` | **required** |
| Schema-down rollback (drops blog data) | **required** (data loss) |
| Production mutating E2E (`@marketplace`, blog submit) | **required** |

## Related docs
- `docs/provider-blog-flow.md` (GHST-48 schema/rules/lifecycle)
- `docs/GHST-49-provider-blog-ui.md`, `docs/GHST-50-demo-cleanup.md`, `docs/GHST-51-e2e-coverage.md`
- `docs/e2e/AGENT-RUNBOOK.md` (env vars + skip matrix)
- `docs/role-flow-deploy-checklist.md` (nav-phase deploy)
