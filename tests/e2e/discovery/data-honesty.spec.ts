import { test, expect } from "@playwright/test";
import { getPocketBaseUrl } from "../helpers/env";

/**
 * GHST-55 — honest live-data contract. Read-only / production-safe.
 *
 * Verifies the frontend renders exactly what PocketBase contains (no fake
 * cards, no fabricated counts) by comparing rendered numbers to the live API.
 */
const API = getPocketBaseUrl();

async function pbTotal(
  request: import("@playwright/test").APIRequestContext,
  collection: string,
  filter?: string,
): Promise<number> {
  const q = new URLSearchParams({ perPage: "1" });
  if (filter) q.set("filter", filter);
  const res = await request.get(
    `${API}/collections/${collection}/records?${q.toString()}`,
  );
  expect(res.ok()).toBeTruthy();
  return (await res.json()).totalItems as number;
}

test.describe("Honest live-data contract @datahonesty", () => {
  test("service grid count equals live active services (no fake cards)", async ({
    page,
    request,
  }) => {
    const activeServices = await pbTotal(request, "services", "(status='active')");
    await page.goto("/services/service-grid", { waitUntil: "domcontentloaded" });
    // The discovery panel renders "Found N Services" from live data.
    const heading = page.getByText(/Found\s+\d+\s+Services/i).first();
    await expect(heading).toBeVisible({ timeout: 30_000 });
    const text = (await heading.textContent()) ?? "";
    const rendered = Number(text.replace(/\D+/g, ""));
    expect(rendered).toBe(activeServices);
  });

  test("providers list renders exactly the live provider count", async ({
    page,
    request,
  }) => {
    const activeProviders = await pbTotal(
      request,
      "provider_profiles",
      "(status='active')",
    );
    await page.goto("/services/providers/provider-list", {
      waitUntil: "domcontentloaded",
    });
    // provider detail links are 1:1 with rendered provider cards
    const cards = page.locator('a[href*="/services/provider-details?id="]');
    await expect
      .poll(async () => await cards.count(), { timeout: 30_000 })
      .toBeGreaterThan(0);
    // de-duplicate by href (card has image + name links to same provider)
    const hrefs = await cards.evaluateAll((els) =>
      Array.from(new Set(els.map((e) => (e as HTMLAnchorElement).getAttribute("href")))),
    );
    expect(hrefs.length).toBe(activeProviders);
  });

  test("guest pages contain no fabricated review numbers", async ({ page }) => {
    for (const path of [
      "/index",
      "/services/service-grid",
      "/services/providers/provider-list",
    ]) {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(1500);
      const body = (await page.locator("body").innerText()).toLowerCase();
      // the old fabricated fallback was "(255 reviews)" and "0.0 (0)"
      expect(body).not.toContain("(255 reviews)");
      expect(body).not.toContain("0.0 (0)");
    }
  });

  test("homepage provider cards do not show seeded review counts", async ({
    page,
    request,
  }) => {
    const provRes = await request.get(
      `${API}/collections/provider_profiles/records?perPage=20&filter=(status='active')`,
    );
    expect(provRes.ok()).toBeTruthy();
    const providers = ((await provRes.json()).items ?? []) as Array<{
      id: string;
      rating_count?: number;
    }>;

    const revRes = await request.get(
      `${API}/collections/reviews/records?perPage=200&filter=(status='published')`,
    );
    expect(revRes.ok()).toBeTruthy();
    const reviews = ((await revRes.json()).items ?? []) as Array<{
      provider?: string;
    }>;
    const realByProvider: Record<string, number> = {};
    for (const r of reviews) {
      if (r.provider) realByProvider[r.provider] = (realByProvider[r.provider] ?? 0) + 1;
    }

    await page.goto("/index", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);
    const body = await page.locator("body").innerText();

    for (const p of providers) {
      const seeded = p.rating_count ?? 0;
      const real = realByProvider[p.id] ?? 0;
      if (seeded > real && seeded >= 50) {
        expect(body).not.toContain(`(${seeded})`);
      }
    }
  });
});
