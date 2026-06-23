import { test } from "@playwright/test";
import { getSeedCustomer, getSeedProvider, hasSeedCredentials } from "../helpers/env";
import { loginViaUi } from "../helpers/auth-ui";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.cwd(), "docs/e2e/role-nav");

test.describe("Role nav inventory screenshots @role-nav", () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  });

  test("guest home top nav", async ({ page }) => {
    await page.goto("/index");
    await page.screenshot({
      path: path.join(OUT_DIR, "guest-home-nav.png"),
      fullPage: false,
    });
  });

  test("customer dashboard nav", async ({ page }) => {
    test.skip(!hasSeedCredentials("customer"), "Set E2E_SEED_CUSTOMER_* in .env.e2e");
    const { email, password } = getSeedCustomer();
    await loginViaUi(page, email, password);
    await page.goto("/customers/customer-dashboard");
    await page.screenshot({
      path: path.join(OUT_DIR, "customer-dashboard-nav.png"),
      fullPage: false,
    });
  });

  test("provider dashboard nav", async ({ page }) => {
    test.skip(!hasSeedCredentials("provider"), "Set E2E_SEED_PROVIDER_* in .env.e2e");
    const { email, password } = getSeedProvider();
    await loginViaUi(page, email, password);
    await page.goto("/providers/dashboard");
    await page.screenshot({
      path: path.join(OUT_DIR, "provider-dashboard-nav.png"),
      fullPage: false,
    });
  });
});
