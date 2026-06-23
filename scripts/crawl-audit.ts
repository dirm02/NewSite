/**
 * GHST-14 — Crawlee PlaywrightCrawler route audit for lif3line.me
 * Read-only: no form submissions or production mutations.
 */
import { PlaywrightCrawler, Dataset } from "crawlee";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = (process.env.BASE_URL ?? "https://lif3line.me").replace(/\/$/, "");
const MAX_REQUESTS = Number(process.env.CRAWL_MAX_REQUESTS ?? 80);
const MAX_DEPTH = Number(process.env.CRAWL_MAX_DEPTH ?? 4);

const STALE_PATTERNS = [
  "/authentication/register",
  "/booking-payment",
  "/customer-wallet",
  "/providers/payout",
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
];

/** Cloudflare RUM / telemetry — not product assets; ignore in crawl error counts. */
const IGNORABLE_FAILED_URL = /\/cdn-cgi\/rum|cloudflareinsights\.com|\/cdn-cgi\/challenge/i;

function shouldIgnoreFailedRequest(url: string, errorText?: string): boolean {
  if (IGNORABLE_FAILED_URL.test(url)) {
    return true;
  }
  if (
    errorText?.includes("ERR_ABORTED") &&
    (/\/cdn-cgi\//i.test(url) || /rum|telemetry|beacon/i.test(url))
  ) {
    return true;
  }
  return false;
}

interface PageRecord {
  url: string;
  finalUrl: string;
  status: number | null;
  title: string;
  h1: string[];
  h2: string[];
  forms: number;
  buttons: number;
  internalLinks: string[];
  consoleErrors: string[];
  failedRequests: string[];
  isStaleTemplate: boolean;
  screenshot?: string;
}

const pages: PageRecord[] = [];

const crawler = new PlaywrightCrawler({
  maxRequestsPerCrawl: MAX_REQUESTS,
  maxConcurrency: 2,
  requestHandlerTimeoutSecs: 60,
  launchContext: { launchOptions: { headless: true } },
  async requestHandler({ request, page, enqueueLinks, log }) {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("requestfailed", (req) => {
      const url = req.url();
      const errorText = req.failure()?.errorText;
      if (shouldIgnoreFailedRequest(url, errorText)) {
        return;
      }
      failedRequests.push(`${errorText ?? "failed"} ${url}`);
    });

    const response = await page.goto(request.url, {
      waitUntil: "domcontentloaded",
      timeout: 45_000,
    });
    const status = response?.status() ?? null;

    const title = await page.title();
    const h1 = await page.locator("h1").allTextContents();
    const h2 = (await page.locator("h2").allTextContents()).slice(0, 5);
    const forms = await page.locator("form").count();
    const buttons = await page.locator("button").count();

    const internalLinks = await page.$$eval("a[href]", (anchors) =>
      anchors
        .map((a) => (a as HTMLAnchorElement).href)
        .filter((href) => href.includes("lif3line.me") && !href.startsWith("mailto:")),
    );

    const pathname = new URL(request.url).pathname;
    const isStaleTemplate = STALE_PATTERNS.some((p) => pathname.includes(p));

    let screenshot: string | undefined;
    if (status && status >= 400) {
      const shotDir = path.resolve("test-results/crawl");
      fs.mkdirSync(shotDir, { recursive: true });
      const safe = pathname.replace(/\W+/g, "_").slice(0, 60) || "root";
      screenshot = path.join(shotDir, `${safe}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
    }

    const record: PageRecord = {
      url: request.url,
      finalUrl: page.url(),
      status,
      title,
      h1: h1.map((t) => t.trim()).filter(Boolean),
      h2: h2.map((t) => t.trim()).filter(Boolean),
      forms,
      buttons,
      internalLinks: [...new Set(internalLinks)].slice(0, 30),
      consoleErrors: [...new Set(consoleErrors)].slice(0, 10),
      failedRequests: [...new Set(failedRequests)].slice(0, 10),
      isStaleTemplate,
      screenshot,
    };

    pages.push(record);
    await Dataset.pushData(record);
    log.info(`Crawled ${pathname} [${status}]`);

    if (request.userData.depth < MAX_DEPTH) {
      await enqueueLinks({
        strategy: "same-domain",
        transformRequestFunction: (req) => {
          req.userData = { depth: (request.userData.depth ?? 0) + 1 };
          return req;
        },
      });
    }
  },
});

await crawler.run([{ url: `${BASE_URL}/index`, userData: { depth: 0 } }]);

const outDir = path.resolve("docs/e2e");
fs.mkdirSync(outDir, { recursive: true });

const broken = pages.filter((p) => (p.status ?? 0) >= 400 || p.status === null);
const withErrors = pages.filter(
  (p) => p.consoleErrors.length > 0 || p.failedRequests.length > 0,
);
const stale = pages.filter((p) => p.isStaleTemplate);

fs.writeFileSync(
  path.join(outDir, "crawl-results.json"),
  JSON.stringify({ crawledAt: new Date().toISOString(), baseUrl: BASE_URL, pages }, null, 2),
);

const md = `# Lif3line crawl report

Generated: ${new Date().toISOString()}
Base URL: ${BASE_URL}
Pages crawled: ${pages.length}

## Summary

| Metric | Count |
|--------|------:|
| Broken (4xx/5xx) | ${broken.length} |
| Console/network errors | ${withErrors.length} |
| Stale template routes hit | ${stale.length} |

_Note: Cloudflare RUM (\`/cdn-cgi/rum\`) and similar telemetry aborts are excluded from network error counts._

## Broken routes

${broken.length ? broken.map((p) => `- **${p.status}** ${p.url}`).join("\n") : "_none_"}

## Pages with runtime errors

${withErrors.length ? withErrors.map((p) => `- ${p.url}\n  - console: ${p.consoleErrors.join("; ") || "—"}\n  - network: ${p.failedRequests.join("; ") || "—"}`).join("\n") : "_none_"}

## Stale / deferred template routes encountered

${stale.length ? stale.map((p) => `- ${p.url}`).join("\n") : "_none during crawl_"}

## Route inventory

${pages.map((p) => `- [${p.status}] ${p.url} — _${p.title}_`).join("\n")}
`;

fs.writeFileSync(path.join(outDir, "crawl-report.md"), md);
console.log(`Crawl complete: ${pages.length} pages → docs/e2e/crawl-report.md`);
