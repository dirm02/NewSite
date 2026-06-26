import { test, expect } from "@playwright/test";
import { getSeedProvider, hasSeedCredentials } from "../helpers/env";
import { loginViaUi } from "../helpers/auth-ui";
import { blogCollectionExists } from "../helpers/pocketbase";
import { seedSkipReason } from "../helpers/seed";

/**
 * GHST-51 — Provider blog flow + public visibility.
 *
 * Read-only guest checks are production-safe and always run. The mutating
 * provider test creates a *submitted* (not published) post; it is skipped when
 * the GHST-48 blog_posts collection is not yet deployed or provider seed
 * credentials are absent.
 */
test.describe("Provider blog @blog", () => {
  // --- Read-only, production-safe ---
  test("guest blog grid renders posts or an honest empty state", async ({
    page,
  }) => {
    await page.goto("/blog/blog-grid", { waitUntil: "domcontentloaded" });
    // Either at least one published post link, or the empty-state heading.
    const empty = page.getByText(/no blog posts yet/i);
    const anyCard = page.getByRole("link", { name: /read more/i }).first();
    await expect(empty.or(anyCard)).toBeVisible({ timeout: 30_000 });
    // No old/demo brand leakage.
    await expect(page.getByText(/truelysell/i)).toHaveCount(0);
  });

  test("guest blog detail shows not-found for an unknown slug", async ({
    page,
  }) => {
    await page.goto("/blog/blog-details?slug=__e2e_does_not_exist__", {
      waitUntil: "domcontentloaded",
    });
    await expect(page.getByText(/post not found/i)).toBeVisible({
      timeout: 30_000,
    });
  });

  // --- Read-only: provider add-blog form renders (GHST-60) ---
  test("provider add-blog form fields are visible", async ({ page }) => {
    test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
    const { email, password } = getSeedProvider();
    await loginViaUi(page, email, password);

    await page.goto("/providers/blog/add-blog", { waitUntil: "networkidle" });
    await expect(page.locator("#sidebar")).toBeVisible({ timeout: 30_000 });
    await expect(page.getByTestId("blog-title")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByTestId("blog-content")).toBeVisible();
    await expect(page.getByTestId("blog-cover-input")).toBeVisible();
    await expect(page.getByTestId("save-draft-btn")).toBeVisible();
    await expect(page.getByTestId("submit-blog-btn")).toBeVisible();
  });

  // --- Mutating: provider creates + submits a post (skipped pre-deploy) ---
  test("provider can submit a post; guest cannot see it until published", async ({
    page,
  }) => {
    test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
    const blogReady = await blogCollectionExists();
    test.skip(!blogReady, "blog_posts collection not deployed yet (GHST-48 migration not applied)");

    const title = `E2E Blog ${Date.now()}`;
    const { email, password } = getSeedProvider();
    await loginViaUi(page, email, password);

    await page.goto("/providers/blog/add-blog", { waitUntil: "domcontentloaded" });
    await page.getByTestId("blog-title").fill(title);
    await page.getByTestId("blog-content").fill("Automated E2E blog body content.");
    await page.getByTestId("submit-blog-btn").click();

    // Lands on Submitted Blogs and shows the post with a Submitted badge.
    await page.waitForURL(/providers\/blog\/submitted/, { timeout: 30_000 });
    await expect(page.getByText(title)).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText(/submitted/i).first()).toBeVisible();

    // Guest must NOT see the submitted (unpublished) post on the public blog.
    // The public list filters status='published' regardless of auth, but clear
    // the session too so this is a true guest view.
    await page.goto("/blog/blog-grid", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => {
      localStorage.removeItem("lif3line_pb_auth");
    });
    await page.context().clearCookies();
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByText(title)).toHaveCount(0);
  });
});
