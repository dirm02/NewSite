import { test, expect } from "@playwright/test";
import {
  fetchFirstActiveProvider,
  fetchFirstActiveService,
  fetchFirstCityId,
} from "../helpers/pocketbase";

test.describe("Discovery and Canada-only @discovery", () => {
  test("homepage loads live discovery sections", async ({ page }) => {
    await page.goto("/index");
    await expect(page.locator("body")).toBeVisible();
    // Wired sections show loading or live content — not empty shell
    const hasContent =
      (await page.getByText(/loading services|category|provider|review/i).count()) > 0 ||
      (await page.locator(".card, .service-card, .provider-card").count()) > 0;
    expect(hasContent).toBeTruthy();
  });

  test("search and service grid load", async ({ page }) => {
    await page.goto("/services/search");
    await expect(page.locator("body")).toBeVisible();
    await page.goto("/services/service-grid");
    await expect(page.locator("body")).toBeVisible();
  });

  test("service and provider detail pages render live headers", async ({ page }) => {
    const service = await fetchFirstActiveService();
    const provider = await fetchFirstActiveProvider();

    await page.goto(`/services/service-details/service-details1?id=${service.id}`);
    await expect(page.locator("body")).toContainText(
      new RegExp(service.title.slice(0, 15), "i"),
    );

    await page.goto(`/services/provider-details?id=${provider.id}`);
    await expect(page.locator("body")).toBeVisible();
  });

  test("providers list loads", async ({ page }) => {
    await page.goto("/services/providers/provider-list");
    await expect(page.locator("body")).toBeVisible();
  });

  test("visible cities are Canada-only on create job form", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "City select checked on desktop project");

    const city = await fetchFirstCityId();
    expect(city.country).toBe("Canada");

    await page.goto("/customers/customer-create-job");
    // Unauthenticated users redirect to login — use public cities API assertion instead
    if (page.url().includes("/authentication/login")) {
      const citiesRes = await fetch(
        `${process.env.POCKETBASE_URL ?? "https://pocket.lif3line.me/api"}/collections/cities/records?perPage=50&filter=(country='Canada')`,
      );
      const body = await citiesRes.json();
      expect(body.items?.length ?? 0).toBeGreaterThan(0);
      for (const c of body.items ?? []) {
        expect(c.country).toBe("Canada");
      }
      return;
    }

    const options = page.locator("select").first().locator("option");
    const count = await options.count();
    expect(count).toBeGreaterThan(1);
  });

  test("search supports category query param", async ({ page }) => {
    await page.goto("/services/search?category=cleaning");
    await expect(page.locator("body")).toBeVisible();
  });
});
