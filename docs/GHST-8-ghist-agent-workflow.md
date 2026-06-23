# GHST-8 — Ghist workflow for Lif3line agents

Central tracker: **`/opt/ghist/tracker`** on VM `146.190.240.66`.

## Universal agent prompt

```text
You are continuing the Lif3line / NewSite / PocketBase project.

Your first responsibility is to sync with ghist. Do not rely only on chat history.

Central ghist tracker lives on the VM:
- VM: 146.190.240.66
- SSH key: C:\Users\LocalAccountHPT25\.ssh\id_ed25519_digitalocean
- SSH command:
  C:\Windows\System32\OpenSSH\ssh.exe -i C:\Users\LocalAccountHPT25\.ssh\id_ed25519_digitalocean root@146.190.240.66

Once connected:
  cd /opt/ghist/tracker
  ghist status
  ghist task list

Pick the next task that is `todo`, respects dependencies, and matches your assigned area. Before starting:
  ghist task show <TASK_ID>
  ghist task update <TASK_ID> --status in_progress

While working:
- Read the task plan and referenced docs.
- Add notes/decisions with:
  ghist log "message" --task <TASK_ID> --type note
- Do not start a task whose prerequisites are not complete unless the user explicitly says to waive them.
- Do not deploy, restart services, create VM resources, or create new ghist instances unless explicitly approved.
- Do not delete mock/demo data unless the task explicitly authorizes deletion and build is verified.

When complete:
- Document local artifacts and verification.
- Add implementation notes to the ghist task.
- Move the task to done only when acceptance criteria are met:
  ghist task update <TASK_ID> --status done
```

## Task order (MVP sequence)

| Order | Task | Notes |
|-------|------|-------|
| 1 | GHST-11 | Auth/session before job UI |
| 2 | GHST-12 | Backend hooks before job UI |
| 3 | GHST-6 | Customer request / provider quote flow |
| 4 | GHST-7 | Cleanup after live-data parity |

Prerequisites already done: GHST-2–5, GHST-9–10.

## Status flow

`todo` → `in_progress` → `done` (or `blocked`)

## Separate ghist instances

Use `/opt/ghist/tracker` only for Lif3line. Create another ghist instance only for an independent repo with its own backlog — not on the VM without approval.

## Short handoff prompt

> Follow ghist as source of truth. SSH to the VM, `cd /opt/ghist/tracker`, pick the next unblocked `todo` task in dependency order, mark `in_progress`, complete acceptance criteria, mark `done`.

## Related

- VM tracker: `AGENTS.md` in `/opt/ghist/tracker`
- Repo docs: `docs/GHST-10-canonical-workflow.md`, `docs/pocketbase-mvp-schema.md`
