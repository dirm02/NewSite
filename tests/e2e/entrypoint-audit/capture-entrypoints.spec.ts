import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { loginViaUi } from "../helpers/auth-ui";
import {
  getSeedCustomer,
  getSeedProvider,
  hasSeedCredentials,
} from "../helpers/env";
import { seedSkipReason } from "../helpers/seed";

/**
 * Read-only entrypoint enumeration for GHST-31/32/33.
 * Dumps visible links/buttons per surface to docs/entrypoint-audit/_runtime/*.json
 * and a screenshot. NEVER submits mutating forms. Never logs passwords.
 */

const OUT_DIR = path.resolve(
  process.cwd(),
  "docs/entrypoint-audit/_runtime",
);

type Captured = {
  surface: string;
  url: string;
  links: { text: string; href: string | null }[];
  buttons: { text: string; type: string | null }[];
  dataToggles: { text: string; toggle: string | null; target: string | null }[];
};

async function enumerate(
  page: import("@playwright/test").Page,
  surface: string,
): Promise<Captured> {
  const links = await page.$$eval("a", (els) =>
    els
      .filter((e) => (e as HTMLElement).offsetParent !== null || e.getClientRects().length > 0)
      .map((e) => ({
        text: (e.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
        href: e.getAttribute("href"),
      })),
  );
  const buttons = await page.$$eval("button", (els) =>
    els.map((e) => ({
      text: (e.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
      type: e.getAttribute("type"),
    })),
  );
  const dataToggles = await page.$$eval("[data-bs-toggle]", (els) =>
    els.map((e) => ({
      text: (e.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60),
      toggle: e.getAttribute("data-bs-toggle"),
      target: e.getAttribute("data-bs-target"),
    })),
  );
  return { surface, url: page.url(), links, buttons, dataToggles };
}

function write(name: string, data: unknown) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, `${name}.json`),
    JSON.stringify(data, null, 2),
  );
}

test("home guest entrypoints", async ({ page }) => {
  await page.goto("/index", { waitUntil: "networkidle" });
  const data = await enumerate(page, "home");
  write("home", data);
  await page.screenshot({
    path: path.join(OUT_DIR, "home.png"),
    fullPage: true,
  });
});

test("customer dashboard entrypoints", async ({ page }) => {
  test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
  const { email, password } = getSeedCustomer();
  await loginViaUi(page, email, password);
  await page.goto("/customers/customer-dashboard", {
    waitUntil: "networkidle",
  });
  const data = await enumerate(page, "customer-dashboard");
  write("customer-dashboard", data);
  await page.screenshot({
    path: path.join(OUT_DIR, "customer-dashboard.png"),
    fullPage: true,
  });
});

test("provider dashboard entrypoints", async ({ page }) => {
  test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
  const { email, password } = getSeedProvider();
  await loginViaUi(page, email, password);
  await page.goto("/providers/dashboard", { waitUntil: "networkidle" });
  const data = await enumerate(page, "provider-dashboard");
  write("provider-dashboard", data);
  await page.screenshot({
    path: path.join(OUT_DIR, "provider-dashboard.png"),
    fullPage: true,
  });
});
