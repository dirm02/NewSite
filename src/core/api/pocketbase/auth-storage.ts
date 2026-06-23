import type { PbAuthResponse, PbUser } from "./types";

const AUTH_STORAGE_KEY = "lif3line_pb_auth";

export interface StoredAuthSession {
  token: string;
  record: PbUser;
}

export function loadAuthSession(): StoredAuthSession | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAuthSession;
    if (!parsed?.token || !parsed?.record?.id) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveAuthSession(session: PbAuthResponse): void {
  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({ token: session.token, record: session.record }),
  );
}

export function clearAuthSession(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function getStoredAuthToken(): string | null {
  return loadAuthSession()?.token ?? null;
}
