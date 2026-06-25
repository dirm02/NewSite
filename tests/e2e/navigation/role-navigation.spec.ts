import { test, expect } from "@playwright/test";
import {
  CUSTOMER_MVP_SIDEBAR,
  DEFERRED_NAV_LABELS,
  PROVIDER_MVP_SIDEBAR,
} from "../../../src/core/navigation/role-navigation-mvp";
import { loginViaUi } from "../helpers/auth-ui";
import { getSeedCustomer, getSeedProvider, hasSeedCredentials } from "../helpers/env";
import { seedSkipReason } from "../helpers/seed";

test.describe("Role navigation contract @navigation", () => {
  test("guest homepage has no admin or role dashboard menus", async ({ page }) => {
    await page.goto("/index", { waitUntil: "domcontentloaded" });

    // Assert by dashboard route href, not label text: a public "Providers"
    // directory link (footer / Services menu) is legitimate and must not trip
    // this check. The contract is that guests never see role *dashboard* nav.
    await expect(page.locator('a[href^="/admin"]')).toHaveCount(0);
    await expect(
      page.locator('a[href*="/customers/customer-dashboard"]'),
    ).toHaveCount(0);
    await expect(
      page.locator('a[href*="/providers/dashboard"]'),
    ).toHaveCount(0);

    await page.getByRole("link", { name: /join us/i }).first().click();
    await expect(page).toHaveURL(/\/authentication\/choose-signup$/);

    await page.goto("/index", { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: /sign in/i }).first().click();
    await expect(page).toHaveURL(/\/authentication\/login$/);
  });

  test("hero search navigates to /services/search with query params", async ({
    page,
  }) => {
    await page.goto("/index", { waitUntil: "domcontentloaded" });

    await page.getByPlaceholder("Search for Service").fill("Plumbing");
    await page.getByPlaceholder("Enter Location").fill("Toronto");
    await page.locator('.banner-form button[type="submit"]').click();

    await expect(page).toHaveURL(/\/services\/search\?/);
    await expect(page).toHaveURL(/query=Plumbing/);
    await expect(page).toHaveURL(/location=Toronto/);
  });

  test("popular search chip navigates to search with its keyword", async ({
    page,
  }) => {
    await page.goto("/index", { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Plumber", exact: true }).first().click();
    await expect(page).toHaveURL(/\/services\/search\?query=Plumber/);
  });

  test.describe("customer shell", () => {
    test.beforeEach(async ({ page }) => {
      test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
      const { email, password } = getSeedCustomer();
      await loginViaUi(page, email, password);
    });

    test("top header is utility-only", async ({ page }) => {
      await page.goto("/customers/customer-dashboard", {
        waitUntil: "domcontentloaded",
      });
      const header = page.locator(".customer-header");
      await expect(header.getByRole("link", { name: /^providers$/i })).toHaveCount(0);
      await expect(header.getByRole("link", { name: /^admin$/i })).toHaveCount(0);
      await expect(header.getByRole("link", { name: "Dashboard" })).toHaveCount(0);
      await expect(header.getByRole("link", { name: "Create Job" })).toHaveCount(0);
      await expect(header.getByRole("link", { name: "Quote Comparison" })).toHaveCount(0);
      await expect(header.getByRole("link", { name: /home/i }).first()).toBeVisible();
    });

    test("sidebar shows the customer feature map", async ({ page }) => {
      await page.goto("/customers/customer-dashboard", {
        waitUntil: "domcontentloaded",
      });
      const sidebar = page.locator("#sidebar");
      for (const item of CUSTOMER_MVP_SIDEBAR) {
        await expect(sidebar.getByRole("link", { name: item.label }).first()).toBeVisible();
      }
      for (const label of DEFERRED_NAV_LABELS.customer) {
        await expect(sidebar.getByRole("link", { name: label, exact: true })).toHaveCount(0);
      }
    });

    test("wrong-role provider route redirects to customer dashboard", async ({
      page,
    }) => {
      await page.goto("/providers/dashboard", { waitUntil: "domcontentloaded" });
      await expect(page).toHaveURL(/\/customers\/customer-dashboard/, {
        timeout: 45_000,
      });
    });

    test("sidebar logout clears the PocketBase session", async ({ page }) => {
      await page.goto("/customers/customer-dashboard", {
        waitUntil: "domcontentloaded",
      });
      await expect(page).toHaveURL(/\/customers\/customer-dashboard/);

      const sidebar = page.locator("#sidebar");
      await sidebar.getByRole("link", { name: /logout/i }).click();

      await expect(page).toHaveURL(/\/authentication\/login/, { timeout: 45_000 });
      const stored = await page.evaluate(() =>
        localStorage.getItem("lif3line_pb_auth"),
      );
      expect(stored).toBeNull();
    });
  });

  test.describe("provider shell", () => {
    test.beforeEach(async ({ page }) => {
      test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
      const { email, password } = getSeedProvider();
      await loginViaUi(page, email, password);
    });

    test("top header is utility-only", async ({ page }) => {
      await page.goto("/providers/dashboard", { waitUntil: "domcontentloaded" });
      const header = page.locator(".provider-header");
      await expect(header.getByRole("link", { name: /^customers$/i })).toHaveCount(0);
      await expect(header.getByRole("link", { name: /^admin$/i })).toHaveCount(0);
      await expect(header.getByRole("link", { name: "Job Feed" })).toHaveCount(0);
      await expect(header.getByRole("link", { name: "Proposals" })).toHaveCount(0);
      await expect(header.getByRole("link", { name: /visit website/i })).toBeVisible();
    });

    test("sidebar shows the provider feature map", async ({ page }) => {
      await page.goto("/providers/dashboard", { waitUntil: "domcontentloaded" });
      const sidebar = page.locator("#sidebar");
      for (const item of PROVIDER_MVP_SIDEBAR) {
        await expect(sidebar.getByRole("link", { name: item.label }).first()).toBeVisible();
      }
      for (const label of DEFERRED_NAV_LABELS.provider) {
        await expect(sidebar.getByRole("link", { name: label, exact: true })).toHaveCount(0);
      }
    });

    test("wrong-role customer route redirects to provider dashboard", async ({
      page,
    }) => {
      await page.goto("/customers/customer-dashboard", {
        waitUntil: "domcontentloaded",
      });
      await expect(page).toHaveURL(/\/providers\/dashboard/, { timeout: 45_000 });
    });

    test("header notifications do not link to customer-only routes", async ({
      page,
    }) => {
      await page.goto("/providers/dashboard", { waitUntil: "domcontentloaded" });
      const header = page.locator(".provider-header");
      await expect(
        header.locator('a[href*="/customers/"]'),
      ).toHaveCount(0);
    });

    test("sidebar logout clears the PocketBase session", async ({ page }) => {
      await page.goto("/providers/dashboard", { waitUntil: "domcontentloaded" });
      await expect(page).toHaveURL(/\/providers\/dashboard/);

      const sidebar = page.locator("#sidebar");
      await sidebar.getByRole("link", { name: /logout/i }).click();

      await expect(page).toHaveURL(/\/authentication\/login/, { timeout: 45_000 });
      const stored = await page.evaluate(() =>
        localStorage.getItem("lif3line_pb_auth"),
      );
      expect(stored).toBeNull();
    });
  });
});
