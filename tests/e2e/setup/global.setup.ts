/** Optional setup project — ensures output dirs exist; logs seed skip expectations. */
import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { logSeedCredentialStatus } from "../helpers/seed";

test("e2e setup @smoke", async () => {
  logSeedCredentialStatus();
  const dirs = ["test-results", "playwright-report", "docs/e2e"];
  for (const dir of dirs) {
    fs.mkdirSync(path.resolve(process.cwd(), dir), { recursive: true });
  }
});
