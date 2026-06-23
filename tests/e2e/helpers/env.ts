/** E2E environment — never commit real secrets; use .env.e2e locally. */

export function getBaseUrl(): string {
  return process.env.BASE_URL ?? "https://lif3line.me";
}

export function getPocketBaseUrl(): string {
  return (
    process.env.POCKETBASE_URL ??
    process.env.VITE_POCKETBASE_URL ??
    "https://pocket.lif3line.me/api"
  );
}

export function getSeedCustomer() {
  return {
    email: process.env.E2E_SEED_CUSTOMER_EMAIL ?? "",
    password: process.env.E2E_SEED_CUSTOMER_PASSWORD ?? "",
  };
}

export function getSeedProvider() {
  return {
    email: process.env.E2E_SEED_PROVIDER_EMAIL ?? "",
    password: process.env.E2E_SEED_PROVIDER_PASSWORD ?? "",
  };
}

export function hasSeedCredentials(role: "customer" | "provider"): boolean {
  const creds = role === "customer" ? getSeedCustomer() : getSeedProvider();
  return Boolean(creds.email && creds.password);
}

export function uniqueE2eEmail(prefix: string): string {
  const ts = Date.now();
  const rand = Math.random().toString(36).slice(2, 8);
  return `e2e.${prefix}.${ts}.${rand}@test.lif3line.ca`;
}

export const E2E_TEST_PASSWORD = "E2eTestPass2026!";
