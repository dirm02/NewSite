import fs from 'fs';

const file = fs.readFileSync('src/feature-module/router/router.link.tsx', 'utf8');
const routesFile = fs.readFileSync('src/core/data/routes/all_routes.tsx', 'utf8');
const routePaths = {};
for (const m of routesFile.matchAll(/(\w+):\s*"([^"]+)"/g)) {
  routePaths[m[1]] = m[2];
}

const groups = [
  ['publicRoutes', 'public'],
  ['customerRoutes', 'customer'],
  ['providerRoutes', 'provider'],
  ['authRoutes', 'auth'],
  ['adminRoutes', 'admin'],
];

const results = [];
for (const [exportName, group] of groups) {
  const marker = exportName === 'publicRoutes' ? 'const publicRoutes' : `export const ${exportName}`;
  const idx = file.indexOf(marker);
  if (idx < 0) continue;
  const rest = file.slice(idx);
  const nextExport = rest.indexOf('\nexport ', 10);
  const block = nextExport > 0 ? rest.slice(0, nextExport) : rest;
  const re = /path:\s*(?:routes\.(\w+)|"([^"]+)")[\s\S]*?element:\s*<(\w+)/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    const routeKey = m[1] || '';
    const literalPath = m[2] || '';
    const path = literalPath || routePaths[routeKey] || `routes.${routeKey}`;
    results.push({ group, routeKey, path, component: m[3] });
  }
}

console.log(JSON.stringify(results, null, 2));
console.error(`Total: ${results.length}`);
