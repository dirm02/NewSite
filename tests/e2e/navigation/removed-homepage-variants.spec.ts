import { test, expect } from "@playwright/test";

const isLocalPreview =
  !process.env.BASE_URL ||
  process.env.BASE_URL.includes("localhost") ||
  process.env.BASE_URL.includes("127.0.0.1");

/** GHST-65 — demo homepage variants removed; old URLs 404 (local preview only until deploy). */
test.describe("Removed homepage variants @navigation", () => {
  test.beforeEach(() => {
    test.skip(
      !isLocalPreview,
      "Variant removal verified on local preview; production still serves pre-GHST-65 bundle until deploy",
    );
  });

  for (const path of [
    "/index-2",
    "/index-3",
    "/index-4",
    "/index-5",
    "/index-6",
    "/index-7",
    "/index-8",
    "/index-9",
    "/index-10",
    "/index-11",
    "/index-12",
  ]) {
    test(`${path} returns not-found`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await expect(page.getByText(/404|not found|page not found/i).first()).toBeVisible({
        timeout: 15_000,
      });
      // Must not render a removed variant homepage body
      await expect(page.getByText(/popular providers|how lif3line works/i)).toHaveCount(0);
    });
  }

  test("/index remains the canonical homepage", async ({ page }) => {
    await page.goto("/index", { waitUntil: "domcontentloaded" });
    await expect(page.getByText(/popular providers|how lif3line works/i).first()).toBeVisible({
      timeout: 30_000,
    });
  });
});
