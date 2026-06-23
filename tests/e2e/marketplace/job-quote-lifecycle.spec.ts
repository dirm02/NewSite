import { test, expect } from "@playwright/test";
import {
  getSeedCustomer,
  getSeedProvider,
} from "../helpers/env";
import { loginViaUi, logoutViaUi } from "../helpers/auth-ui";
import {
  loginPb,
  fetchFirstCityId,
  fetchFirstCategoryId,
  getRecord,
  patchRecordStatus,
  fetchProviderProfileForUser,
  createRecord,
} from "../helpers/pocketbase";
import { hasAllSeedCredentials, seedSkipReason } from "../helpers/seed";

test.describe("Marketplace job quote lifecycle @marketplace", () => {
  test.beforeAll(() => {
    if (!hasAllSeedCredentials()) {
      console.warn(`[e2e] ${seedSkipReason("both")}`);
    }
  });

  test("full customer request → quote → accept → complete → review", async ({
    page,
  }) => {
    test.skip(!hasAllSeedCredentials(), seedSkipReason("both"));

    const jobTitle = `E2E Job ${Date.now()}`;
    const customerCreds = getSeedCustomer();
    const providerCreds = getSeedProvider();

    const customerAuth = await loginPb(customerCreds.email, customerCreds.password);
    const city = await fetchFirstCityId(customerAuth.token);
    const category = await fetchFirstCategoryId();

    // --- Customer: create service request ---
    await loginViaUi(page, customerCreds.email, customerCreds.password);
    await page.goto("/customers/customer-create-job");
    await page.getByTestId("job-title-input").fill(jobTitle);
    await page.getByTestId("job-description-input").fill("Automated E2E marketplace test job.");
    await page.locator("select").nth(0).selectOption(city.id);
    await page.locator("select").nth(1).selectOption(category.id);
    await page.getByTestId("post-job-submit").click();
    await page.waitForURL(/customer-job-details\?id=/);

    const requestUrl = page.url();
    const requestId = new URL(requestUrl).searchParams.get("id");
    expect(requestId).toBeTruthy();

    // --- Verify in job list ---
    await page.goto("/customers/user-jobs");
    await expect(page.getByText(jobTitle)).toBeVisible();

    // --- Provider: submit quote ---
    await logoutViaUi(page);
    await loginViaUi(page, providerCreds.email, providerCreds.password);
    await page.goto("/providers/job-feed");
    await expect(page.getByText(jobTitle)).toBeVisible({ timeout: 30_000 });

    await page.getByRole("link", { name: jobTitle }).click();
    await page.waitForURL(/provider-apply-job\?id=/);
    await page.getByTestId("quote-amount-input").fill("275");
    await page.getByTestId("quote-cover-letter-input").fill("E2E automated proposal.");
    await page.getByTestId("submit-proposal-btn").click();
    await page.waitForURL(/providers\/active-jobs|providers\/proposal/, {
      timeout: 30_000,
    });

    const providerAuth = await loginPb(providerCreds.email, providerCreds.password);
    const providerProfile = await fetchProviderProfileForUser(
      providerAuth.token,
      providerAuth.record.id,
    );
    expect(providerProfile).toBeTruthy();

    const quotes = await (
      await import("../helpers/pocketbase")
    ).listRecords<{ id: string; status: string; amount: number }>(
      "quotes",
      customerAuth.token,
      {
        filter: `(request='${requestId}') && (provider='${providerProfile!.id}')`,
        perPage: "5",
      },
    );
    expect(quotes.items.length).toBeGreaterThan(0);
    const quoteId = quotes.items[0].id;

    // --- Customer: accept quote ---
    await logoutViaUi(page);
    await loginViaUi(page, customerCreds.email, customerCreds.password);
    await page.goto(`/customers/customer-job-details?id=${requestId}`);
    await page.getByTestId(`accept-quote-${quoteId}`).click();
    await expect(page.getByText(/in progress/i).first()).toBeVisible({ timeout: 20_000 });

    const requestAfterAccept = await getRecord<{ status: string }>(
      "service_requests",
      requestId!,
      customerAuth.token,
    );
    expect(requestAfterAccept.status).toBe("in_progress");

    const quoteAfterAccept = await getRecord<{ status: string }>(
      "quotes",
      quoteId,
      customerAuth.token,
    );
    expect(quoteAfterAccept.status).toBe("accepted");

    const patchBlocked = await patchRecordStatus(
      "service_requests",
      requestId!,
      customerAuth.token,
      "completed",
    );
    expect(patchBlocked.status).toBe(403);

    // --- Complete request ---
    await page.getByTestId("mark-job-completed-btn").click();
    await expect(page.getByTestId("mark-job-completed-btn")).toBeHidden({
      timeout: 20_000,
    });

    const requestCompleted = await getRecord<{ status: string }>(
      "service_requests",
      requestId!,
      customerAuth.token,
    );
    expect(requestCompleted.status).toBe("completed");

    // --- Create review ---
    const reviewRes = await createRecord(
      "reviews",
      customerAuth.token,
      {
        author: customerAuth.record.id,
        request: requestId,
        provider: providerProfile!.id,
        rating: 5,
        comment: "E2E automated review.",
        status: "published",
      },
    );
    expect(reviewRes.status).toBe(200);

    test.info().annotations.push({
      type: "e2e-records",
      description: JSON.stringify({ requestId, quoteId, jobTitle }),
    });
  });
});
