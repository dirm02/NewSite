import { test, expect } from "@playwright/test";
import { getSeedCustomer, getSeedProvider, hasSeedCredentials } from "../helpers/env";
import { loginViaUi } from "../helpers/auth-ui";
import { seedSkipReason } from "../helpers/seed";

/**
 * GHST-58 (demo surface policy) + GHST-57 (chat coming-soon).
 * Demo routes show the honest banner; live routes do NOT; chat shows the
 * coming-soon state. Read-only navigation after login (non-mutating).
 *
 * `networkidle` + an authed-shell wait avoids the auth-load race (the page
 * shows a session spinner before the role layout/banner mount).
 */
const banner = '[data-testid="demo-surface-banner"]';
const comingSoon = '[data-testid="feature-coming-soon"]';

test.describe("Demo surface policy @demopolicy", () => {
  test("provider: banner on demo route, none on live, chat coming-soon", async ({
    page,
  }) => {
    test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
    const { email, password } = getSeedProvider();
    await loginViaUi(page, email, password);

    // Live surface → role shell loads, no demo banner
    await page.goto("/providers/dashboard", { waitUntil: "networkidle" });
    await expect(page.locator("#sidebar")).toBeVisible({ timeout: 30_000 });
    await expect(page.locator(banner)).toHaveCount(0);

    // Demo surface → honest banner
    await page.goto("/providers/provider-coupons", { waitUntil: "networkidle" });
    await expect(page.locator(banner)).toBeVisible({ timeout: 30_000 });

    // Chat → coming-soon state (GHST-57)
    await page.goto("/providers/provider-chat", { waitUntil: "networkidle" });
    await expect(page.locator(comingSoon)).toBeVisible({ timeout: 30_000 });
  });

  test("customer: banner on demo route, none on live, chat coming-soon", async ({
    page,
  }) => {
    test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
    const { email, password } = getSeedCustomer();
    await loginViaUi(page, email, password);

    await page.goto("/customers/customer-dashboard", { waitUntil: "networkidle" });
    await expect(page.locator("#sidebar")).toBeVisible({ timeout: 30_000 });
    await expect(page.locator(banner)).toHaveCount(0);

    await page.goto("/customers/customer-wallet", { waitUntil: "networkidle" });
    await expect(page.locator(banner)).toBeVisible({ timeout: 30_000 });

    await page.goto("/customers/customer-chat", { waitUntil: "networkidle" });
    await expect(page.locator(comingSoon)).toBeVisible({ timeout: 30_000 });
  });
});
