import { pbGetOne, pbList } from "./client";
import type {
  PbCity,
  PbProviderProfile,
  PbReview,
  PbService,
  PbServiceCategory,
} from "./types";

const SERVICE_EXPAND = "category,provider,city";
const PROVIDER_EXPAND = "city,user";
const REVIEW_EXPAND = "author,provider,service";

export async function fetchCategories(options?: {
  featuredOnly?: boolean;
  perPage?: number;
}) {
  const filter = options?.featuredOnly ? "(featured=true)" : "";
  return pbList<PbServiceCategory>("service_categories", {
    perPage: String(options?.perPage ?? 50),
    sort: "sort_order",
    ...(filter ? { filter } : {}),
  });
}

export async function fetchCities(perPage = 50) {
  return pbList<PbCity>("cities", {
    perPage: String(perPage),
    sort: "name",
    filter: "(country='Canada')",
  });
}

export async function fetchServices(options?: {
  featuredOnly?: boolean;
  perPage?: number;
  sort?: string;
}) {
  const parts = ["(status='active')"];
  if (options?.featuredOnly) parts.push("(featured=true)");
  return pbList<PbService>("services", {
    perPage: String(options?.perPage ?? 50),
    sort: options?.sort ?? "-created",
    expand: SERVICE_EXPAND,
    filter: parts.join("&&"),
  });
}

export async function fetchServiceById(id: string) {
  return pbGetOne<PbService>("services", id, SERVICE_EXPAND);
}

export async function fetchProviders(options?: { perPage?: number }) {
  return pbList<PbProviderProfile>("provider_profiles", {
    perPage: String(options?.perPage ?? 50),
    sort: "-rating_avg",
    expand: PROVIDER_EXPAND,
    filter: "(status='active')",
  });
}

export async function fetchProviderById(id: string) {
  return pbGetOne<PbProviderProfile>("provider_profiles", id, PROVIDER_EXPAND);
}

export async function fetchReviews(options?: { perPage?: number }) {
  return pbList<PbReview>("reviews", {
    perPage: String(options?.perPage ?? 50),
    sort: "-@rowid",
    expand: REVIEW_EXPAND,
    filter: "(status='published')",
  });
}
