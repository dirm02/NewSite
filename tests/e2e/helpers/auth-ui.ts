import type { Page } from "@playwright/test";
import { E2E_TEST_PASSWORD } from "./env";

function emailInput(page: Page) {
  return page.locator('input[type="email"]:visible').first();
}

async function waitForAuthForm(page: Page) {
  await emailInput(page).waitFor({
    state: "visible",
    timeout: 30_000,
  });
}

async function clearAuthStorage(page: Page) {
  if (!page.url() || page.url() === "about:blank") {
    await page.goto("/authentication/login");
  }
  await page.evaluate(() => localStorage.removeItem("lif3line_pb_auth"));
  await page.reload({ waitUntil: "domcontentloaded" });
  if (!page.url().includes("/authentication/login")) {
    await page.goto("/authentication/login");
  }
}

export async function loginViaUi(
  page: Page,
  email: string,
  password: string,
) {
  await clearAuthStorage(page);
  await waitForAuthForm(page);
  await emailInput(page).fill(email);
  await page.locator('input[type="password"]:visible').first().fill(password);
  await page.getByRole("button", { name: /sign in/i }).click();
  await page.waitForURL(/\/(customers|providers)\//, { timeout: 45_000 });
}

export async function logoutViaUi(page: Page) {
  await page.evaluate(() => localStorage.removeItem("lif3line_pb_auth"));
  await page.reload({ waitUntil: "domcontentloaded" });
}

export async function signupCustomerViaUi(
  page: Page,
  opts: { name: string; email: string; password?: string },
) {
  await page.goto("/authentication/user-signup");
  await page.locator('input[type="text"]').first().waitFor({ state: "visible" });
  await page.locator('input[type="text"]').first().fill(opts.name);
  await page.locator('input[type="email"]').first().fill(opts.email);
  await page.locator('input[type="password"]').first().fill(opts.password ?? E2E_TEST_PASSWORD);
  await page.getByLabel(/terms of use/i).check();
  await page.getByRole("button", { name: /sign up/i }).click();
  await page.waitForURL(/\/customers\//, { timeout: 60_000 });
}

export async function signupProviderViaUi(
  page: Page,
  opts: { name: string; email: string; businessName: string; password?: string },
) {
  await page.goto("/authentication/provider-signup");
  const textInputs = page.locator('input[type="text"]');
  await textInputs.first().waitFor({ state: "visible" });
  await textInputs.nth(0).fill(opts.name);
  await textInputs.nth(1).fill(opts.businessName);
  await page.locator('input[type="email"]').first().fill(opts.email);
  await page.locator('input[type="password"]').first().fill(opts.password ?? E2E_TEST_PASSWORD);
  const terms = page.getByLabel(/terms of use/i);
  if (await terms.isVisible().catch(() => false)) {
    await terms.check();
  }
  await page.getByRole("button", { name: /sign up/i }).click();
  await page.waitForURL(/\/providers\//, { timeout: 60_000 });
}
