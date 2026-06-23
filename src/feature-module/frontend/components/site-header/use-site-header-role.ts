import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../../core/auth/AuthContext';
import { loadAuthSession } from '../../../../core/api/pocketbase/auth-storage';
import type { SiteHeaderRole } from './site-header-types';

const ROLE_STORAGE_KEY = 'truelysell_user_role';
const AUTH_STORAGE_KEY = 'lif3line_pb_auth';
const LEGACY_TOKEN_KEYS = ['truelysell_auth_token', 'authToken', 'token'];

function roleFromPbRecord(raw: string | undefined): SiteHeaderRole {
  if (raw === 'provider') return 'provider';
  if (raw === 'customer' || raw === 'user') return 'customer';
  return 'guest';
}

function readRoleFromStorage(): SiteHeaderRole {
  if (typeof window === 'undefined') return 'guest';
  try {
    const pbRaw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (pbRaw) {
      const parsed = JSON.parse(pbRaw) as { record?: { role?: string } };
      if (parsed?.record?.role) {
        return roleFromPbRecord(parsed.record.role.toLowerCase());
      }
    }

    const session = loadAuthSession();
    if (session?.record?.role) {
      return roleFromPbRecord(session.record.role.toLowerCase());
    }

    const hasLegacyToken = LEGACY_TOKEN_KEYS.some(
      (k) => !!localStorage.getItem(k)?.length,
    );
    if (!hasLegacyToken) return 'guest';
    const legacyRole = localStorage.getItem(ROLE_STORAGE_KEY)?.toLowerCase();
    return roleFromPbRecord(legacyRole);
  } catch {
    return 'guest';
  }
}

/**
 * Resolves public header role from PocketBase session (primary) or legacy keys.
 * Unauthenticated users are always `guest` — no cross-role mega-menus.
 */
export function useSiteHeaderRole(
  roleOverride?: SiteHeaderRole,
): SiteHeaderRole {
  const { isAuthenticated, user, loading } = useAuth();
  const [storageRole, setStorageRole] = useState<SiteHeaderRole>(() =>
    roleOverride ?? readRoleFromStorage(),
  );

  const refresh = useCallback(() => {
    if (roleOverride) {
      setStorageRole(roleOverride);
      return;
    }
    setStorageRole(readRoleFromStorage());
  }, [roleOverride]);

  useEffect(() => {
    refresh();
  }, [refresh, isAuthenticated, user?.role, loading]);

  useEffect(() => {
    if (roleOverride) return;
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === AUTH_STORAGE_KEY ||
        e.key === ROLE_STORAGE_KEY ||
        (e.key && LEGACY_TOKEN_KEYS.includes(e.key))
      ) {
        refresh();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [roleOverride, refresh]);

  if (roleOverride) return roleOverride;
  if (!loading && isAuthenticated && user?.role) {
    return roleFromPbRecord(user.role.toLowerCase());
  }
  return storageRole;
}

export function setSiteHeaderRoleForTesting(role: SiteHeaderRole | null) {
  if (typeof window === 'undefined') return;
  if (role === null) {
    localStorage.removeItem(ROLE_STORAGE_KEY);
    return;
  }
  localStorage.setItem(ROLE_STORAGE_KEY, role);
}
