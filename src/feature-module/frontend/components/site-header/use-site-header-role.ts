import { useCallback, useEffect, useState } from 'react';
import type { SiteHeaderRole } from './site-header-types';

const ROLE_STORAGE_KEY = 'truelysell_user_role';
const TOKEN_STORAGE_KEYS = ['truelysell_auth_token', 'authToken', 'token'];

function readRoleFromStorage(): SiteHeaderRole {
  if (typeof window === 'undefined') return 'guest';
  try {
    const hasToken = TOKEN_STORAGE_KEYS.some(
      (k) => !!localStorage.getItem(k)?.length,
    );
    if (!hasToken) return 'guest';
    const raw = localStorage.getItem(ROLE_STORAGE_KEY)?.toLowerCase();
    if (raw === 'provider') return 'provider';
    if (raw === 'customer' || raw === 'user') return 'customer';
    return 'guest';
  } catch {
    return 'guest';
  }
}

/**
 * Resolves public header role from optional localStorage keys.
 * - No token → guest (full marketing nav, backward compatible).
 * - Token + `truelysell_user_role` = `customer` | `provider` narrows duplicate account menus.
 */
export function useSiteHeaderRole(
  roleOverride?: SiteHeaderRole,
): SiteHeaderRole {
  const [role, setRole] = useState<SiteHeaderRole>(() =>
    roleOverride ?? readRoleFromStorage(),
  );

  const refresh = useCallback(() => {
    if (roleOverride) {
      setRole(roleOverride);
      return;
    }
    setRole(readRoleFromStorage());
  }, [roleOverride]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (roleOverride) return;
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === ROLE_STORAGE_KEY ||
        (e.key && TOKEN_STORAGE_KEYS.includes(e.key))
      ) {
        refresh();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [roleOverride, refresh]);

  return roleOverride ?? role;
}

export function setSiteHeaderRoleForTesting(role: SiteHeaderRole | null) {
  if (typeof window === 'undefined') return;
  if (role === null) {
    localStorage.removeItem(ROLE_STORAGE_KEY);
    return;
  }
  localStorage.setItem(ROLE_STORAGE_KEY, role);
}
