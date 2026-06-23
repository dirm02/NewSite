import { test, expect } from "@playwright/test";
import { PUBLIC_SMOKE_ROUTES } from "../helpers/routes";

test.describe("Public route smoke @smoke", () => {
  for (const route of PUBLIC_SMOKE_ROUTES) {
    test(`loads ${route.path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (err) => errors.push(err.message));

      const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
      expect(response?.status(), `HTTP status for ${route.path}`).toBeLessThan(500);

      await expect(page.locator("body")).toBeVisible();

      if ("heading" in route && route.heading) {
        await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible({
          timeout: 20_000,
        });
      }

      if ("text" in route && route.text) {
        await expect(page.locator("body")).toContainText(route.text);
      }

      expect(errors, "uncaught page errors").toEqual([]);
    });
  }

  test("homepage auth actions use routed PocketBase auth pages", async ({ page }) => {
    await page.goto("/index", { waitUntil: "domcontentloaded" });

    await page.getByRole("link", { name: /join us/i }).first().click();
    await expect(page).toHaveURL(/\/authentication\/choose-signup$/);

    await page.goto("/index", { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: /sign in/i }).first().click();
    await expect(page).toHaveURL(/\/authentication\/login$/);
  });

  test("signup choice page exposes customer and provider routes", async ({ page }) => {
    await page.goto("/authentication/choose-signup", { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { name: /provider/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /customer/i })).toBeVisible();
    await expect(page.locator('a[href="/authentication/provider-signup"]')).toBeVisible();
    await expect(page.locator('a[href="/authentication/user-signup"]')).toBeVisible();
  });
});
