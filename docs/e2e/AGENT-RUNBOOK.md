# E2E Agent Runbook

## Start every session

```bash
ssh -i ~/.ssh/id_ed25519_digitalocean root@146.190.240.66
cd /opt/ghist/tracker
ghist status
ghist task list
```

Pick **one** E2E task (`GHST-13` … `GHST-19`) that is `todo`. Do not start a task already `in_progress` unless assigned.

```bash
ghist task show GHST-XX
ghist task update GHST-XX --status in_progress
```

## While working

1. Read the task plan and linked docs in `NewSite/docs/e2e/`.
2. Implement in `C:\Users\LocalAccountHPT25\Desktop\Online\NewSite` (or VM checkout if applicable).
3. Run verification before marking done:
   - `npm run build`
   - Task-specific test command (see README.md)
4. Log progress:
   ```bash
   ghist log "GHST-XX: <what you did>" --task XX
   ```

## When complete

```bash
ghist log "GHST-XX complete: <summary, commands run, artifact paths>"
ghist task update GHST-XX --status done
```

Include in the log:
- Commands that passed
- Paths to reports (`playwright-report/`, `docs/e2e/`)
- Any skipped tests and why (e.g. missing seed credentials)

## When blocked

```bash
ghist log "GHST-XX blocked: <exact reason and what is needed>"
ghist task update GHST-XX --status blocked
```

## Rules (non-negotiable)

| Rule | Detail |
|------|--------|
| One task per agent | Avoid parallel edits on the same spec files |
| No deploy | Unless task + user explicitly approve |
| No paid resources | No new VMs, domains, or billing services |
| No secrets in git | No `.env.e2e`, storageState, tokens in reports |
| Prefer Playwright Test | For deterministic E2E |
| Use Crawlee | For route crawl audits only |
| Use axe-core | For accessibility via `@axe-core/playwright` |

## Task → command map

| Task | Command |
|------|---------|
| GHST-13 | `npm run test:e2e:smoke` |
| GHST-14 | `npm run audit:crawl` |
| GHST-15 | `npm run test:e2e -- --grep @auth` |
| GHST-16 | `npm run test:e2e -- --grep @marketplace` |
| GHST-17 | `npm run test:e2e -- --grep @discovery` |
| GHST-18 | `npm run audit:a11y` |
| GHST-19 | Docs only — verify README + this runbook |
| GHST-20 | E2E audit fixes — smoke, discovery, a11y (not marketplace without approval) |
| GHST-51 | `npm run test:e2e -- --grep @blog` and `--grep @navigation` |

## GHST-51 — coverage + skip matrix

Suites by tag: `@navigation` (role nav + homepage), `@auth`, `@marketplace`
(mutates PB), `@discovery`, `@blog` (provider blog), `health` (a11y/responsive).

Env vars (local only, `.env.e2e` — never commit):

| Var | Purpose | Default |
|-----|---------|---------|
| `BASE_URL` | Target site | `https://lif3line.me` (set `http://127.0.0.1:4173` to test the local `dist` via auto vite preview) |
| `POCKETBASE_URL` / `VITE_POCKETBASE_URL` | PB API | `https://pocket.lif3line.me/api` |
| `E2E_SEED_CUSTOMER_EMAIL` / `_PASSWORD` | seed customer | — |
| `E2E_SEED_PROVIDER_EMAIL` / `_PASSWORD` | seed provider | — |

Skip matrix (production-safe by default):

| Test | Mutates PB? | Skips when |
|------|-------------|-----------|
| `@navigation` guest homepage / hero search | no | never |
| `@navigation` customer/provider shell | no (login + read) | seed creds for that role missing |
| `@blog` guest grid / unknown-slug detail | no | never (shows empty/not-found states) |
| `@blog` provider submit + guest-hidden | yes (creates a *submitted* post) | provider seed missing **or** `blog_posts` collection not deployed (GHST-48 migration not applied) |
| `@marketplace` lifecycle | yes | either seed missing; run only with explicit approval |

Run `npm run build` first, then the tagged suite. After the GHST-48 migration is
applied on the VM, re-run `--grep @blog` to exercise the provider submit path.

## Handoff prompt

> Connect to ghist, pick the next `todo` E2E task (GHST-13–19), mark `in_progress`, run build + task tests, update ghist, mark `done` or `blocked`.
