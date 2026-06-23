import { hasSeedCredentials } from "./env";

export function hasAllSeedCredentials(): boolean {
  return hasSeedCredentials("customer") && hasSeedCredentials("provider");
}

export function seedSkipReason(role: "customer" | "provider" | "both"): string {
  if (role === "both") {
    return (
      "SKIPPED: set E2E_SEED_CUSTOMER_* and E2E_SEED_PROVIDER_* in .env.e2e (local only, never commit). " +
      "Marketplace mutates production PocketBase — run only with explicit approval."
    );
  }
  return `SKIPPED: set E2E_SEED_${role.toUpperCase()}_EMAIL and E2E_SEED_${role.toUpperCase()}_PASSWORD in .env.e2e`;
}

/** Printed once per run from global setup so CI logs show skip expectations. */
export function logSeedCredentialStatus(): void {
  const customer = hasSeedCredentials("customer");
  const provider = hasSeedCredentials("provider");
  const lines = [
    "[e2e] Seed credential status:",
    `  customer: ${customer ? "configured" : "MISSING — seed customer auth tests skip"}`,
    `  provider: ${provider ? "configured" : "MISSING — seed provider auth tests skip"}`,
    `  marketplace: ${customer && provider ? "eligible (mutates PB — approval required)" : "SKIPPED — needs both seed users"}`,
  ];
  console.log(lines.join("\n"));
}
