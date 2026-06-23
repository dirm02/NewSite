# PocketBase MVP Hooks (GHST-12)

**Backend:** https://pocket.lif3line.me
**Hooks path (VM):** `/opt/pocketbase/pb_hooks/`
**Local source:** `NewSite/pocketbase/pb_hooks/`

## Purpose

Enforce sensitive marketplace transitions server-side before GHST-6 wires the job/quote UI. Prevents spoofing accepted quotes, admin self-signup, and reviews on incomplete jobs.

## Hook files

| File | Responsibility |
|------|----------------|
| `00_lif3line_auth.pb.js` | Signup role guards; block admin signup; default role `customer`; block role elevation on profile update |
| `10_lif3line_transitions.pb.js` | Block direct status PATCH on `quotes` / `service_requests`; review validation; custom transition routes |

## Custom API routes (require auth)

Base URL: `https://pocket.lif3line.me`

Custom hook routes are **not** under `/api` (PocketBase registers them at the server root). Nginx proxies all paths to PocketBase.

| Method | Path | Actor | Body | Effect |
|--------|------|-------|------|--------|
| POST | `/lif3line/accept-quote` | customer (request owner) | `{ "quoteId": "..." }` | Quote → `accepted`; sibling pending quotes → `rejected`; request → `in_progress` |
| POST | `/lif3line/complete-request` | customer owner or admin | `{ "requestId": "..." }` | Request `in_progress` → `completed` |
| POST | `/lif3line/cancel-request` | customer owner or admin | `{ "requestId": "..." }` | Request → `cancelled`; pending quotes → `withdrawn` |

### Frontend helper (GHST-6)

```typescript
import { acceptQuote, completeRequest, cancelRequest } from "@/core/api/pocketbase/transitions";
import { useAuth } from "@/core/auth/AuthContext";

const { token } = useAuth();
await acceptQuote(token!, quoteId);
```

## Blocked direct API operations

| Collection | Blocked via hook | Allowed exception |
|------------|------------------|-------------------|
| `users` | `role=admin` on signup; any role change on self-update | Admin API/admin UI |
| `quotes` | PATCH `status` → `accepted` / `rejected` | Provider PATCH `pending` → `withdrawn` (own quote) |
| `service_requests` | Any PATCH `status` change | Use custom routes (admin bypass in hooks) |
| `reviews` | Create without `request` link; create if request not `completed`; create if not request owner | — |

## Auth signup rules

1. Public signup with `role: "admin"` → **403 Forbidden**
2. Missing role → defaults to **`customer`**
3. Provider signup requires non-empty **`name`**
4. Provider profile still created by frontend (GHST-11); hooks do not auto-create profiles

## Review rules

On `reviews` create:

- `request` relation **required**
- Request must belong to authenticated customer
- Request `status` must be **`completed`**
- Default `status` → **`published`** if omitted

## Status model (canonical)

```
service_requests: open → in_progress → completed
                              ↘ cancelled

quotes: pending → accepted | rejected | withdrawn
```

## Deployment (VM)

```bash
# Copy from dev machine
scp -r NewSite/pocketbase/pb_hooks root@146.190.240.66:/opt/pocketbase/

# On the VM, restart is required after hook deploy:
# systemctl restart pocketbase

## Verification checklist

```bash
# 1. Admin signup blocked
curl -s -X POST https://pocket.lif3line.me/api/collections/users/records \
  -H 'Content-Type: application/json' \
  -d '{"email":"evil@example.com","password":"Test123456!","passwordConfirm":"Test123456!","role":"admin"}'
# Expect 403

# 2. Accept-quote without auth
curl -s -X POST https://pocket.lif3line.me/lif3line/accept-quote \
  -H 'Content-Type: application/json' \
  -d '{"quoteId":"x"}'
# Expect 401

# 3. Direct quote status PATCH (when authenticated as provider) should fail for accepted
# PATCH /api/collections/quotes/records/:id  body: {"status":"accepted"}
# Expect 403 from hook
```

## Known gaps (post-MVP)

- Rating aggregate recompute on review publish (deferred — can add `onRecordAfterCreateSuccess` hook)
- Provider-initiated complete (currently customer or admin only)
- Payment / booking hooks not included
- `users` create hook for auto `provider_profiles` (frontend handles today)

## Related docs

- [pocketbase-mvp-schema.md](./pocketbase-mvp-schema.md) — collection fields & rules
- [GHST-10-canonical-workflow.md](./GHST-10-canonical-workflow.md) — journey & deferrals
