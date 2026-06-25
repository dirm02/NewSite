// GHST-56 verification: prove a provider can create a service against live PB
// rules (required unique slug + required category), then delete it (no residue).
// Reads creds from .env.e2e. Never prints secrets. Run: node scripts/verify-service-create.mjs
import fs from "node:fs";

function loadEnv(p) {
  const env = {};
  if (!fs.existsSync(p)) return env;
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

const j = async (r) => ({ status: r.status, body: await r.json().catch(() => ({})) });

async function main() {
  const e = { ...loadEnv(".env.e2e"), ...process.env };
  const API = (e.POCKETBASE_URL || e.VITE_POCKETBASE_URL || "https://pocket.lif3line.me/api").replace(/\/$/, "");
  const email = e.E2E_SEED_PROVIDER_EMAIL;
  const password = e.E2E_SEED_PROVIDER_PASSWORD;

  if (!email || !password) {
    console.log("SKIP: no provider seed creds in .env.e2e");
    return 0;
  }

  const auth = await j(
    await fetch(`${API}/collections/users/auth-with-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identity: email, password }),
    }),
  );
  if (auth.status !== 200) {
    console.log(`FAIL: provider login ${auth.status}`);
    return 1;
  }
  const token = auth.body.token;
  const userId = auth.body.record.id;
  const h = { Authorization: token };

  const prof = await j(
    await fetch(`${API}/collections/provider_profiles/records?perPage=1&filter=(user='${userId}')`, { headers: h }),
  );
  const providerId = prof.body.items?.[0]?.id;
  const cat = await j(await fetch(`${API}/collections/service_categories/records?perPage=1`, { headers: h }));
  const categoryId = cat.body.items?.[0]?.id;
  const city = await j(await fetch(`${API}/collections/cities/records?perPage=1&filter=(country='Canada')`, { headers: h }));
  const cityId = city.body.items?.[0]?.id;
  if (!providerId || !categoryId) {
    console.log("FAIL: missing provider profile or category");
    return 1;
  }

  const form = new FormData();
  form.set("provider", providerId);
  form.set("slug", `ghst56-verify-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`);
  form.set("status", "active");
  form.set("title", "GHST-56 Verify Service (auto-delete)");
  form.set("description", "Temporary verification record.");
  form.set("category", categoryId);
  if (cityId) form.set("city", cityId);
  form.set("price_from", "25");
  form.set("price_to", "75");
  form.set("duration_minutes", "60");

  const created = await j(
    await fetch(`${API}/collections/services/records`, { method: "POST", headers: h, body: form }),
  );
  if (created.status !== 200) {
    console.log(`FAIL: create service ${created.status}: ${JSON.stringify(created.body.data || created.body.message || {})}`);
    return 1;
  }
  const id = created.body.id;
  const okShape =
    created.body.slug && created.body.status === "active" && created.body.provider === providerId && created.body.category === categoryId;
  console.log(`CREATE OK: id=${id} slug=${created.body.slug} status=${created.body.status} category=${created.body.category === categoryId}`);

  const del = await fetch(`${API}/collections/services/records/${id}`, { method: "DELETE", headers: h });
  console.log(`CLEANUP: delete status=${del.status}`);

  if (okShape && (del.status === 204 || del.status === 200)) {
    console.log("PASS: provider create+delete service round-trip works against live PB rules.");
    return 0;
  }
  console.log("FAIL: shape or cleanup check failed");
  return 1;
}

process.exitCode = await main();
