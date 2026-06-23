# Role-flow link audit (GHST-26)

Audit date: 2026-06-23
Contract: `docs/role-navigation-contract.md`

## Surfaces audited

| Surface | Finding | Action |
|---------|---------|--------|
| `SiteHeaderMainNav` | Admin link visible to all guests | **Removed** Admin link |
| `CustomerHeader` | Full template mega-menu incl. Providers + Admin | **Replaced** with utility-only header; MVP navigation lives in sidebar |
| `ProviderHeader` | No cross-role menus; orphan search bar | **Kept** utility-only header; MVP navigation lives in sidebar |
| `useSiteHeaderRole` | Read legacy keys, not PocketBase session | **Fixed** — uses `AuthContext` + `lif3line_pb_auth` |
| `customerSidebarData` | Bookings, wallet, chat in MVP path | **Trimmed** to MVP sidebar |
| `providerSidebarData` | Payout, staffs, customers list, etc. | **Trimmed** to MVP sidebar |
| `router.link.tsx` | `/authentication/register` | Already redirects to choose-signup |
| `home/header/new-header.tsx` | Admin link in legacy header | **Removed** |
| `home/home-6/header-nine.tsx` | Admin + stale `/login`, `/choose-signup` | **Fixed** auth routes; removed Admin |
| `providers/authentication/common/header2.tsx` | Admin link | **Removed** |
| Homepage `/index` (`HomeHeader` → `SiteHeader`) | Admin removed via SiteHeaderMainNav | OK |
| Footer | No admin or stale register links found | OK |
| Auth pages (`login.tsx`, etc.) | Use `chooseSignUp`, canonical signup paths | OK |

## Deferred template links (Later — routes remain, hidden from MVP nav)

**Customer:** Bookings, Job Bookings, Favorites, Wallet, Chat
**Provider:** Bookings, Staffs, Customers, Payout, Holidays, Coupons, Offers, Enquiries, Earnings, Chat, plan/billing

## Stale routes replaced in nav

| Stale | Canonical |
|-------|-----------|
| `/authentication/register` | `/authentication/choose-signup` (redirect) |
| `/choose-signup` | `/authentication/choose-signup` |
| `/login` | `/authentication/login` |

## E2E coverage

`tests/e2e/navigation/role-navigation.spec.ts` asserts:

- Guest: no Admin / cross-role dashboard menus
- Customer shell: no Providers or Admin; MVP sidebar labels
- Provider shell: no Customers or Admin; MVP sidebar labels
- Wrong-role URLs redirect to own dashboard

## Remaining non-MVP surfaces (acceptable)

Legacy home variants (`home-2` … `home-12`) and demo blog/installer pages may still contain template copy mentioning "Admin" as content — not navigation entrypoints. Canonical MVP homepage uses `SiteHeader` without Admin link.
