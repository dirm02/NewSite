import { test, expect } from "@playwright/test";
import {
  getSeedCustomer,
  getSeedProvider,
  hasSeedCredentials,
  uniqueE2eEmail,
  E2E_TEST_PASSWORD,
} from "../helpers/env";
import { seedSkipReason } from "../helpers/seed";
import {
  loginViaUi,
  logoutViaUi,
  signupCustomerViaUi,
  signupProviderViaUi,
} from "../helpers/auth-ui";
import { loginPb, fetchProviderProfileForUser } from "../helpers/pocketbase";
import {
  CUSTOMER_PROTECTED,
  PROVIDER_PROTECTED,
} from "../helpers/routes";

test.describe("Auth lifecycle @auth", () => {
  test.describe("public flows (no seed required)", () => {
    test("bad login shows friendly error", async ({ page }) => {
      await page.goto("/authentication/login");
      await page.locator('input[type="email"]').first().fill("not-a-real-user@test.lif3line.ca");
      await page.locator('input[type="password"]').first().fill("WrongPassword999!");
      await page.getByRole("button", { name: /sign in/i }).click();
      await expect(page.getByRole("alert")).toContainText(/incorrect|failed|invalid/i);
    });

    test("customer signup with unique email", async ({ page }) => {
      const email = uniqueE2eEmail("customer");
      await signupCustomerViaUi(page, {
        name: "E2E Customer",
        email,
        password: E2E_TEST_PASSWORD,
      });
      await expect(page).toHaveURL(/\/customers\//);
    });

    test("provider signup creates account and dashboard", async ({ page }) => {
      const email = uniqueE2eEmail("provider");
      await signupProviderViaUi(page, {
        name: "E2E Provider",
        email,
        businessName: "E2E Test Services",
        password: E2E_TEST_PASSWORD,
      });
      await expect(page).toHaveURL(/\/providers\//);

      const auth = await loginPb(email, E2E_TEST_PASSWORD);
      const profile = await fetchProviderProfileForUser(auth.token, auth.record.id);
      expect(profile, "provider_profiles record").toBeTruthy();
    });

    test("reset-password without token shows warning", async ({ page }) => {
      await page.goto("/authentication/reset-password");
      await expect(page.getByText(/reset link in your email/i)).toBeVisible();
    });

    test("verify-email without token shows warning", async ({ page }) => {
      await page.goto("/authentication/verify-email");
      await expect(page.getByRole("status").first()).toContainText(/missing a token/i);
    });
  });

  test.describe("seed credentials required (.env.e2e)", () => {
    test("seed customer login reaches dashboard", async ({ page }) => {
      test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
      const { email, password } = getSeedCustomer();
      await loginViaUi(page, email, password);
      await expect(page).toHaveURL(/\/customers\//);
    });

    test("seed provider login reaches dashboard", async ({ page }) => {
      test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
      const { email, password } = getSeedProvider();
      await loginViaUi(page, email, password);
      await expect(page).toHaveURL(/\/providers\//);
    });

    test("logout clears session and guards redirect", async ({ page }) => {
      test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
      const { email, password } = getSeedCustomer();
      await loginViaUi(page, email, password);
      await logoutViaUi(page);
      await page.goto(CUSTOMER_PROTECTED);
      await expect(page).toHaveURL(/authentication\/login/);
    });

    test("customer cannot access provider routes", async ({ page }) => {
      test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
      const { email, password } = getSeedCustomer();
      await loginViaUi(page, email, password);
      await page.goto(PROVIDER_PROTECTED);
      await expect(page).toHaveURL(/\/customers\//);
    });

    test("provider cannot access customer routes", async ({ page }) => {
      test.skip(!hasSeedCredentials("provider"), seedSkipReason("provider"));
      const { email, password } = getSeedProvider();
      await loginViaUi(page, email, password);
      await page.goto(CUSTOMER_PROTECTED);
      await expect(page).toHaveURL(/\/providers\//);
    });

    test("forgot password submits successfully", async ({ page }) => {
      test.skip(!hasSeedCredentials("customer"), seedSkipReason("customer"));
      const { email } = getSeedCustomer();

      const resetPromise = page.waitForResponse(
        (r) =>
          r.url().includes("/collections/users/request-password-reset") &&
          r.request().method() === "POST",
      );

      await page.goto("/authentication/forgot-password");
      await page.locator('input[type="email"]').first().fill(email);
      await page.getByRole("button", { name: /send reset link/i }).click();

      const resetResponse = await resetPromise;
      expect(resetResponse.status()).toBe(204);

      await expect(page.getByRole("status")).toContainText(
        "If an account exists for this email, a reset link has been sent.",
      );
    });
  });
});
