import fs from "node:fs";
import path from "node:path";

const rd = (p) => fs.readFileSync(p, "utf8");
const allroutes = rd("src/core/data/routes/all_routes.tsx");
// key -> path map from all_routes
const keyToPath = {};
for (const m of allroutes.matchAll(/^\s*([A-Za-z0-9_]+)\s*:\s*"([^"]+)"/gm)) {
  keyToPath[m[1]] = m[2];
}
const defined = new Set(Object.keys(keyToPath));
const router = rd("src/feature-module/router/router.link.tsx");
const reg = new Set(
  [...router.matchAll(/routes\.([A-Za-z0-9_]+)/g)].map((m) => m[1]),
);
// registered PATHS (resolve keys + literal path: "..." entries)
const registeredPaths = new Set();
for (const k of reg) if (keyToPath[k]) registeredPaths.add(keyToPath[k]);
for (const m of router.matchAll(/path:\s*"([^"]+)"/g)) registeredPaths.add(m[1]);

const root = "src/feature-module/frontend";
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith(".tsx") || e.name.endsWith(".ts")) files.push(f);
  }
})(root);

const used = new Map();
for (const f of files) {
  const t = rd(f);
  // catch both `all_routes.X` and the common `routes.X` alias (const routes = all_routes)
  for (const m of t.matchAll(/(?:all_routes|routes)\.([A-Za-z0-9_]+)/g)) {
    if (!used.has(m[1])) used.set(m[1], new Set());
    used.get(m[1]).add(f.replace(root + path.sep, ""));
  }
}

// broken = used key whose resolved PATH is not registered anywhere
const broken = [...used.keys()].filter(
  (k) => defined.has(k) && !registeredPaths.has(keyToPath[k]) && k !== "login",
);
const notDefined = [...used.keys()].filter(
  (k) => !defined.has(k) && !["includes", "push", "map", "filter", "find"].includes(k),
);

console.log(`Scanned ${files.length} frontend files.`);
console.log(`Defined routes: ${defined.size} | Registered paths: ${registeredPaths.size}`);
console.log("\n[A] USED but PATH NOT REGISTERED (clicking -> Error404):");
for (const k of broken.sort()) {
  console.log(`  ${k} (${keyToPath[k]})\n      <- ${[...used.get(k)].join(", ")}`);
}
console.log(`  subtotal: ${broken.length}`);
console.log("\n[B] USED but NOT DEFINED in all_routes (typo / undefined):");
for (const k of notDefined.sort()) {
  console.log(`  ${k}  <- ${[...used.get(k)].join(", ")}`);
}
console.log(`  subtotal: ${notDefined.length}`);
