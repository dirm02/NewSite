/**
 * Patches discovery pages to use PocketBase components — GHST-5 one-time helper.
 * Run: node scripts/patch-discovery-pages.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function patchServiceListing(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("ServiceGridCards")) {
    console.log(`Skip ${filePath} (already patched)`);
    return;
  }

  content = content.replace(
    "import NewFooter from '../../home/footer/newFooter';",
    `import NewFooter from '../../home/footer/newFooter';
import { useSearchParams } from 'react-router-dom';
import { useServices } from '../../../../core/hooks/useDiscoveryData';
import ServiceGridCards from '../../common/discovery/ServiceGridCards';`,
  );

  content = content.replace(
    /const (ServiceGrid|Search) = \(\) => \{\n  const routes = all_routes;/,
    `const $1 = () => {
  const routes = all_routes;
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category') ?? undefined;
  const { data: discoveryServices, loading: discoveryLoading, error: discoveryError, source: discoverySource } = useServices({ categorySlug });`,
  );

  content = content.replace(
    /Found <span className="text-primary">\d+ Services<\/span>/,
    "Found <span className=\"text-primary\">{discoveryLoading ? '…' : discoveryServices.length} Services</span>",
  );

  const startMarker =
    '<div className="row justify-content-center align-items-center">';
  const endMarker = '<nav aria-label="Page navigation">';
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const replacement = `<ServiceGridCards
                    services={discoveryServices}
                    loading={discoveryLoading}
                    error={discoveryError}
                    source={discoverySource}
                  />
                  `;

  content = content.slice(0, startIdx) + replacement + content.slice(endIdx);
  fs.writeFileSync(filePath, content);
  console.log(`Patched ${filePath}`);
}

function patchProvidersList(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("ProviderDiscoveryPanel")) {
    console.log(`Skip ${filePath} (already patched)`);
    return;
  }

  content = content.replace(
    "import NewFooter from '../../home/footer/newFooter';",
    `import NewFooter from '../../home/footer/newFooter';
import ProviderDiscoveryPanel from '../../common/discovery/ProviderDiscoveryPanel';`,
  );

  const startMarker = '<div className="col-xl-9 col-lg-8">\n                <div className="row">';
  const endMarker = "</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <NewFooter";

  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const replacement = `<div className="col-xl-9 col-lg-8">
                <ProviderDiscoveryPanel />
              `;

  content =
    content.slice(0, startIdx) +
    replacement +
    content.slice(endIdx + "</div>\n              </div>".length);

  fs.writeFileSync(filePath, content);
  console.log(`Patched ${filePath}`);
}

function patchIndexCategories(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("HomeCategorySection")) {
    console.log(`Skip ${filePath} (already patched)`);
    return;
  }

  content = content.replace(
    "import AuthModals from './authModals'",
    `import AuthModals from './authModals'
import HomeCategorySection from './HomeCategorySection'`,
  );

  const start = "  {/* Category Section */}";
  const end = "  {/* /Category Section */}";
  const startIdx = content.indexOf(start);
  const endIdx = content.indexOf(end);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Category markers not found in ${filePath}`);
  }

  content =
    content.slice(0, startIdx) +
    "  <HomeCategorySection/>\n  " +
    content.slice(endIdx + end.length);

  fs.writeFileSync(filePath, content);
  console.log(`Patched ${filePath}`);
}

patchServiceListing(
  path.join(root, "src/feature-module/frontend/services/service-grid/service-grid.tsx"),
);
patchServiceListing(
  path.join(root, "src/feature-module/frontend/services/search/search.tsx"),
);
patchProvidersList(
  path.join(root, "src/feature-module/frontend/services/providers/providers-list.tsx"),
);
patchIndexCategories(
  path.join(root, "src/feature-module/frontend/home/new-home/index.tsx"),
);

console.log("Done.");
