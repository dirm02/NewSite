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

## Handoff prompt

> Connect to ghist, pick the next `todo` E2E task (GHST-13–19), mark `in_progress`, run build + task tests, update ghist, mark `done` or `blocked`.
