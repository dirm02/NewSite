/** PocketBase API config — GHST-5 */
export const POCKETBASE_API_URL =
  import.meta.env.VITE_POCKETBASE_URL ?? "https://pocket.lif3line.me/api";

/** Origin for custom hook routes (no /api prefix) — GHST-12 */
export const POCKETBASE_BASE_URL = POCKETBASE_API_URL.replace(/\/api\/?$/, "");
