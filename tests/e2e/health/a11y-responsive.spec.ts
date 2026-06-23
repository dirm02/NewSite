import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";
import {
  CUSTOMER_PROTECTED,
  PROVIDER_PROTECTED,
} from "../helpers/routes";
import { getBaseUrl, getSeedCustomer, getSeedProvider, hasSeedCredentials } from "../helpers/env";
import { isFirstPartyAssetUrl } from "../helpers/first-party";
import { seedSkipReason } from "../helpers/seed";
import { loginViaUi } from "../helpers/auth-ui";

const A11Y_ROUTES = [
  "/index",
  "/authentication/login",
  "/authentication/user-signup",
  "/services/search",
  "/services/providers/provider-list",
];

const AUTH_DASHBOARD_ROUTES = [
  {
    path: "/customers/customer-dashboard",
    role: "customer" as const,
    label: "customer dashboard",
  },
  {
    path: "/providers/dashboard",
    role: "provider" as const,
    label: "provider dashboard",
  },
];

const MOBILE_SCREENSHOT_ROUTES = [
  { path: "/index", name: "index" },
  { path: "/authentication/login", name: "login" },
  { path: "/authentication/user-signup", name: "user-signup" },
  { path: "/services/search", name: "search" },
  { path: "/customers/customer-create-job", name: "customer-create-job" },
  { path: "/providers/job-feed", name: "provider-job-feed" },
];

async function runAxeScan(
  page: import("@playwright/test").Page,
  route: string,
  testInfo: import("@playwright/test").TestInfo,
) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto(route, { waitUntil: "domcontentloaded" });
  const results = await new AxeBuilder({ page })
    .exclude(".d-none")
    .exclude(".theiaStickySidebar")
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  const reportDir = path.resolve(process.cwd(), "docs/e2e");
  fs.mkdirSync(reportDir, { recursive: true });
  const violations = results.violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    description: v.description,
    nodes: v.nodes.length,
  }));

  fs.appendFileSync(
    path.join(reportDir, "a11y-report.md"),
    `\n## ${route} (${testInfo.project.name})\n${violations.length} violations\n${violations.map((v) => `- **${v.id}** (${v.impact}): ${v.description} — ${v.nodes} nodes`).join("\n") || "_none_"}\n`,
  );

  const critical = results.violations.filter((v) => v.impact === "critical");
  expect(errors).toEqual([]);
  expect(
    critical,
    `a11y critical on ${route}: ${critical.map((v) => v.id).join(", ")}`,
  ).toEqual([]);
}

test.describe("Accessibility and health @health", () => {
  for (const route of A11Y_ROUTES) {
    test(`axe scan ${route}`, async ({ page }, testInfo) => {
      await runAxeScan(page, route, testInfo);
    });
  }

  for (const route of AUTH_DASHBOARD_ROUTES) {
    test(`axe scan ${route.path} (authenticated ${route.label})`, async ({ page }, testInfo) => {
      test.skip(!hasSeedCredentials(route.role), seedSkipReason(route.role));

      const creds =
        route.role === "customer" ? getSeedCustomer() : getSeedProvider();
      await loginViaUi(page, creds.email, creds.password);
      await runAxeScan(page, route.path, testInfo);
    });
  }

  test("authenticated dashboard scans documented when seed missing", async () => {
    test.skip(
      hasSeedCredentials("customer") && hasSeedCredentials("provider"),
      "Seed credentials configured — dashboard axe scans run above",
    );
    test.info().annotations.push({
      type: "skipped-dashboard-a11y",
      description:
        "Customer/provider dashboard axe scans skipped without E2E_SEED_* in .env.e2e",
    });
  });

  test("MVP routes have no failed first-party assets", async ({ page }) => {
    const failed: string[] = [];
    const assetTypes = new Set([
      "document",
      "script",
      "stylesheet",
      "image",
      "font",
      "media",
    ]);

    page.on("response", (res) => {
      const url = res.url();
      const type = res.request().resourceType();
      if (!assetTypes.has(type)) {
        return;
      }
      if (
        isFirstPartyAssetUrl(url) &&
        res.status() >= 400 &&
        !url.includes("favicon") &&
        !url.endsWith(".map")
      ) {
        failed.push(`${res.status()} ${type} ${url}`);
      }
    });

    for (const route of ["/index", "/authentication/login", "/services/search"]) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
    }

    expect(
      failed,
      `first-party asset failures (BASE_URL=${getBaseUrl()})`,
    ).toEqual([]);
  });

  test("protected routes redirect when logged out", async ({ page }) => {
    await page.goto(CUSTOMER_PROTECTED);
    await expect(page).toHaveURL(/authentication\/login/);
    await page.goto(PROVIDER_PROTECTED);
    await expect(page).toHaveURL(/authentication\/login/);
  });
});

test.describe("Mobile screenshots @health", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const route of MOBILE_SCREENSHOT_ROUTES) {
    test(`mobile screenshot ${route.name}`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await page.screenshot({
        path: `test-results/mobile-${route.name}.png`,
        fullPage: true,
      });
    });
  }
});
