import { getStoredAuthToken } from "./auth-storage";

/** Authorization header for authenticated PocketBase API calls — GHST-11 */
export function pbAuthHeaders(token?: string | null): Record<string, string> {
  const authToken = token ?? getStoredAuthToken();
  if (!authToken) return {};
  return { Authorization: `Bearer ${authToken}` };
}
