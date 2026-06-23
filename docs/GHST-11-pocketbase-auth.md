# GHST-11 — PocketBase Auth & Role Session

**Task:** Wire PocketBase authentication before GHST-6
**Date:** 2026-06-21
**API:** `https://pocket.lif3line.me/api`

## Summary

Frontend auth pages now call PocketBase for login/signup. Session token + user record persist in `localStorage` and restore on refresh via `auth-refresh`. Customer and provider dashboard layouts require the matching role.

## Files added

| Path | Purpose |
|------|---------|
| `src/core/api/pocketbase/auth.ts` | login, signup, refresh, provider profile create |
| `src/core/api/pocketbase/auth-storage.ts` | `localStorage` session (`lif3line_pb_auth`) |
| `src/core/api/pocketbase/auth-headers.ts` | `pbAuthHeaders()` for GHST-6 authenticated fetches |
| `src/core/auth/AuthContext.tsx` | `AuthProvider`, `useAuth()` |
| `src/core/auth/RequireAuth.tsx` | Role guard for dashboard layouts |
| `src/core/auth/roleRoutes.ts` | Post-login dashboard paths |

## Files updated

| Path | Change |
|------|--------|
| `src/main.tsx` | Wrap app in `AuthProvider` |
| `src/feature-module/router/customerLayout.tsx` | `RequireAuth allowedRoles={["customer"]}` |
| `src/feature-module/router/providerLayout.tsx` | `RequireAuth allowedRoles={["provider"]}` |
| `pages/authentication/login.tsx` | PocketBase login |
| `pages/authentication/user-signup.tsx` | Customer signup (`role=customer`) |
| `pages/authentication/provider-signup.tsx` | Provider signup + `provider_profiles` (`status=pending`) |
| `customers/common/header.tsx` | Logout clears session |
| `providers/common/header.tsx` | Logout clears session |

## Behaviour

### Login
- `POST /collections/users/auth-with-password`
- Redirect: `from` state if set, else role dashboard (`/customers/customer-dashboard` or `/providers/dashboard`)

### Customer signup
- `POST /collections/users/records` with `role: "customer"`
- Auto-login after signup

### Provider signup
- User with `role: "provider"`
- Creates `provider_profiles` with `business_name`, `status: "pending"`, `user` relation
- If profile create fails, account still exists; warning shown (complete in profile settings)

### Session
- Stored: `{ token, record }` in `localStorage`
- On load: `POST /collections/users/auth-refresh`
- Logout: clears storage + context

### Route guards
- `/customers/*` → requires `customer` role
- `/providers/*` → requires `provider` role
- Unauthenticated → `/authentication/login` with `state.from`

## Out of scope (as planned)
- OTP / phone / social login
- Admin auth UI
- Password reset wiring (pages unchanged)
- GHST-6 job/quote CRUD

## Verify locally

```bash
npm run build
npm run dev
# Sign up customer → lands on customer dashboard
# Sign up provider → lands on provider dashboard + pending profile
# Refresh page → still logged in
# Logout → login page; /customers/* redirects to login
```

## GHST-6 usage

```typescript
import { useAuth } from '@/core/auth/AuthContext';
import { pbAuthHeaders } from '@/core/api/pocketbase/auth-headers';

const { token, user, hasRole } = useAuth();
// fetch with Authorization header for owned records
```
