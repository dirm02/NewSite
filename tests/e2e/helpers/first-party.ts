import { getBaseUrl } from "./env";

const DEFAULT_FIRST_PARTY_HOSTS = new Set([
  "lif3line.me",
  "www.lif3line.me",
  "127.0.0.1",
  "localhost",
]);

/** Hostnames treated as first-party for static asset health checks. */
export function firstPartyHostnames(): Set<string> {
  const hosts = new Set(DEFAULT_FIRST_PARTY_HOSTS);
  try {
    hosts.add(new URL(getBaseUrl()).hostname);
  } catch {
    // ignore invalid BASE_URL
  }
  return hosts;
}

export function isFirstPartyAssetUrl(url: string): boolean {
  if (url.startsWith("/") && !url.startsWith("//")) {
    return true;
  }

  try {
    const { hostname, protocol } = new URL(url);
    if (protocol !== "http:" && protocol !== "https:") {
      return false;
    }
    return firstPartyHostnames().has(hostname);
  } catch {
    return false;
  }
}
