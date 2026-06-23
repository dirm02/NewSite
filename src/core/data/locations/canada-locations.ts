/**
 * Canonical Canada-only location data for Lif3line MVP.
 * GHST-9 source of truth — GHST-4 PocketBase city seed must use MVP_CITIES.
 */

export const CANADA = {
  code: "CA",
  name: "Canada",
  dialCode: "+1",
  flagAdmin: "assets/admin/img/flags/ca.png",
} as const;

/** All provinces and territories (region dropdowns). */
export const CANADA_PROVINCES = [
  { code: "ON", name: "Ontario", slug: "ontario" },
  { code: "QC", name: "Quebec", slug: "quebec" },
  { code: "BC", name: "British Columbia", slug: "british-columbia" },
  { code: "AB", name: "Alberta", slug: "alberta" },
  { code: "MB", name: "Manitoba", slug: "manitoba" },
  { code: "NS", name: "Nova Scotia", slug: "nova-scotia" },
  { code: "SK", name: "Saskatchewan", slug: "saskatchewan" },
  { code: "NB", name: "New Brunswick", slug: "new-brunswick" },
  {
    code: "NL",
    name: "Newfoundland and Labrador",
    slug: "newfoundland-and-labrador",
  },
  {
    code: "PE",
    name: "Prince Edward Island",
    slug: "prince-edward-island",
  },
  {
    code: "NT",
    name: "Northwest Territories",
    slug: "northwest-territories",
  },
  { code: "YT", name: "Yukon", slug: "yukon" },
  { code: "NU", name: "Nunavut", slug: "nunavut" },
] as const;

/** MVP city seed list (GHST-4). Display as "City, PP". */
export const MVP_CITIES = [
  { id: 1, name: "Toronto", provinceCode: "ON", slug: "toronto-on" },
  { id: 2, name: "Mississauga", provinceCode: "ON", slug: "mississauga-on" },
  { id: 3, name: "Brampton", provinceCode: "ON", slug: "brampton-on" },
  { id: 4, name: "Ottawa", provinceCode: "ON", slug: "ottawa-on" },
  { id: 5, name: "Hamilton", provinceCode: "ON", slug: "hamilton-on" },
  { id: 6, name: "Montreal", provinceCode: "QC", slug: "montreal-qc" },
  { id: 7, name: "Laval", provinceCode: "QC", slug: "laval-qc" },
  { id: 8, name: "Quebec City", provinceCode: "QC", slug: "quebec-city-qc" },
  { id: 9, name: "Vancouver", provinceCode: "BC", slug: "vancouver-bc" },
  { id: 10, name: "Surrey", provinceCode: "BC", slug: "surrey-bc" },
  { id: 11, name: "Burnaby", provinceCode: "BC", slug: "burnaby-bc" },
  { id: 12, name: "Calgary", provinceCode: "AB", slug: "calgary-ab" },
  { id: 13, name: "Edmonton", provinceCode: "AB", slug: "edmonton-ab" },
  { id: 14, name: "Winnipeg", provinceCode: "MB", slug: "winnipeg-mb" },
  { id: 15, name: "Halifax", provinceCode: "NS", slug: "halifax-ns" },
  { id: 16, name: "Saskatoon", provinceCode: "SK", slug: "saskatoon-sk" },
  { id: 17, name: "Regina", provinceCode: "SK", slug: "regina-sk" },
] as const;

export type CanadaProvince = (typeof CANADA_PROVINCES)[number];
export type MvpCity = (typeof MVP_CITIES)[number];

export function cityLabel(city: MvpCity): string {
  return `${city.name}, ${city.provinceCode}`;
}

export function provinceName(code: string): string {
  return (
    CANADA_PROVINCES.find((p) => p.code === code)?.name ?? code
  );
}

/** Dropdown options used across customer/provider/admin forms. */
export const countryOption = [{ label: CANADA.name, value: CANADA.code }];

export const stateOption = CANADA_PROVINCES.map((p) => ({
  label: p.name,
  value: p.code,
}));

export const cityOption = MVP_CITIES.map((c) => ({
  label: cityLabel(c),
  value: String(c.id),
}));

/** Admin location tables (`countries.tsx`, redux initial state). */
export const countriesData = [
  {
    id: 1,
    countryCode: CANADA.code,
    countryId: 1,
    img: CANADA.flagAdmin,
    countryName: `${CANADA.name}(${CANADA.dialCode})`,
    Action: "",
  },
];

/** Admin states table — provinces/territories under Canada. */
export const statesData = CANADA_PROVINCES.map((p, index) => ({
  id: index + 1,
  countryName: `${CANADA.name}(${CANADA.dialCode})`,
  img: CANADA.flagAdmin,
  countryCode: CANADA.code,
  stateName: p.name,
  Action: "",
}));

/** Admin cities table — MVP cities only. */
export const citiesData = MVP_CITIES.map((c) => ({
  id: c.id,
  img: CANADA.flagAdmin,
  countryName: `${CANADA.name}(${CANADA.dialCode})`,
  stateName: provinceName(c.provinceCode),
  cityName: c.name,
  Action: "",
}));

/** PocketBase `cities` collection seed shape for GHST-4. */
export const pocketBaseCitySeed = MVP_CITIES.map((c) => ({
  name: c.name,
  slug: c.slug,
  region: c.provinceCode,
  country: CANADA.name,
}));
