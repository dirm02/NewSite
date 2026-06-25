/** Format helpers for PocketBase discovery records — GHST-5 */

export function formatPrice(from?: number, to?: number): string {
  if (from != null && to != null && from !== to) {
    return `$${from.toFixed(0)} - $${to.toFixed(0)}`;
  }
  if (from != null) return `$${from.toFixed(0)}`;
  if (to != null) return `$${to.toFixed(0)}`;
  return "Contact for price";
}

export function formatHourlyRate(rate?: number): string {
  if (rate == null) return "—";
  return `$${rate.toFixed(0)}`;
}

export function formatRating(avg?: number, count?: number): string {
  const rating = avg != null ? avg.toFixed(1) : "0.0";
  const reviews = count != null ? count : 0;
  return `${rating} (${reviews})`;
}

export function serviceLocationLabel(
  cityName?: string,
  region?: string,
): string {
  if (cityName && region) return `${cityName}, ${region}`;
  if (cityName) return cityName;
  return "Canada";
}

export function providerCategoryLabel(fallback = "Service Provider"): string {
  return fallback;
}

const SERVICE_IMAGES = [
  "assets/img/services/service-01.jpg",
  "assets/img/services/service-02.jpg",
  "assets/img/services/service-03.jpg",
  "assets/img/services/service-04.jpg",
  "assets/img/services/service-05.jpg",
  "assets/img/services/service-06.jpg",
];

const PROVIDER_IMAGES = [
  "assets/img/providers/provider-01.jpg",
  "assets/img/providers/provider-02.jpg",
  "assets/img/providers/provider-03.jpg",
  "assets/img/providers/provider-04.jpg",
  "assets/img/providers/provider-05.jpg",
  "assets/img/providers/provider-06.jpg",
];

export function serviceImage(index: number): string {
  return SERVICE_IMAGES[index % SERVICE_IMAGES.length];
}

export function providerImage(index: number): string {
  return PROVIDER_IMAGES[index % PROVIDER_IMAGES.length];
}

const CATEGORY_ICONS: Record<string, string> = {
  cleaning: "assets/img/icons/category-01.svg",
  plumbing: "assets/img/icons/category-02.svg",
  electrical: "assets/img/icons/category-03.svg",
  carpentry: "assets/img/icons/category-04.svg",
  painting: "assets/img/icons/category-05.svg",
  landscaping: "assets/img/icons/category-06.svg",
  "hvac-repair": "assets/img/icons/category-07.svg",
  moving: "assets/img/icons/category-08.svg",
  "pest-control": "assets/img/icons/category-09.svg",
  roofing: "assets/img/icons/category-10.svg",
  "appliance-repair": "assets/img/icons/category-11.svg",
  "handyman-services": "assets/img/icons/category-12.svg",
};

export function categoryIcon(slug: string, index: number): string {
  return (
    CATEGORY_ICONS[slug] ??
    `assets/img/icons/category-${String((index % 12) + 1).padStart(2, "0")}.svg`
  );
}

export function serviceDetailUrl(id: string): string {
  return `/services/service-details/service-details1?id=${encodeURIComponent(id)}`;
}

export function providerDetailUrl(id: string): string {
  return `/services/provider-details?id=${encodeURIComponent(id)}`;
}

export function searchWithCategory(slug: string): string {
  return `/services/search?category=${encodeURIComponent(slug)}`;
}

/**
 * Builds a `/services/search` URL with optional keyword / location / category
 * query params. Empty/blank values are omitted so the resulting URL stays clean.
 */
export function buildSearchUrl(params: {
  query?: string;
  location?: string;
  category?: string;
}): string {
  const sp = new URLSearchParams();
  if (params.query?.trim()) sp.set("query", params.query.trim());
  if (params.location?.trim()) sp.set("location", params.location.trim());
  if (params.category?.trim()) sp.set("category", params.category.trim());
  const qs = sp.toString();
  return qs ? `/services/search?${qs}` : "/services/search";
}

export function customerJobDetailUrl(id: string): string {
  return `/customers/customer-job-details?id=${encodeURIComponent(id)}`;
}

export function quoteComparisonUrl(requestId: string): string {
  return `/customers/user-quote-comparison?requestId=${encodeURIComponent(requestId)}`;
}

export function providerApplyJobUrl(requestId: string): string {
  return `/providers/provider-apply-job?id=${encodeURIComponent(requestId)}`;
}

export function providerJobDetailUrl(requestId: string): string {
  return `/providers/job-details?id=${encodeURIComponent(requestId)}`;
}

export function formatJobBudget(min?: number, max?: number): string {
  if (min != null && max != null && min !== max) {
    return `$${min.toFixed(0)} - $${max.toFixed(0)}`;
  }
  if (min != null) return `$${min.toFixed(0)}`;
  if (max != null) return `$${max.toFixed(0)}`;
  return "Budget TBD";
}

export function requestStatusLabel(status: string): string {
  switch (status) {
    case "open":
      return "Open";
    case "in_progress":
      return "In Progress";
    case "completed":
      return "Completed";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
}

export function requestStatusBadgeClass(status: string): string {
  switch (status) {
    case "open":
      return "badge-success";
    case "in_progress":
      return "badge-info";
    case "completed":
      return "badge-secondary";
    case "cancelled":
      return "badge-danger";
    default:
      return "badge-light";
  }
}

export function quoteStatusLabel(status: string): string {
  switch (status) {
    case "pending":
      return "Pending";
    case "accepted":
      return "Accepted";
    case "rejected":
      return "Rejected";
    case "withdrawn":
      return "Withdrawn";
    default:
      return status;
  }
}

export function providerDisplayName(
  profile?: { business_name?: string; expand?: { user?: { name?: string } } },
): string {
  return (
    profile?.business_name ||
    profile?.expand?.user?.name ||
    "Provider"
  );
}

export function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function blogStatusLabel(status: string): string {
  switch (status) {
    case "draft":
      return "Draft";
    case "submitted":
      return "Submitted";
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    case "published":
      return "Published";
    default:
      return status;
  }
}

export function blogStatusBadgeClass(status: string): string {
  switch (status) {
    case "draft":
      return "bg-light text-dark border";
    case "submitted":
      return "bg-info";
    case "approved":
      return "bg-primary";
    case "rejected":
      return "bg-danger";
    case "published":
      return "bg-success";
    default:
      return "bg-light text-dark border";
  }
}

/** Public blog detail URL for a published post slug. */
export function blogDetailUrl(slug: string): string {
  return `/blog/blog-details?slug=${encodeURIComponent(slug)}`;
}

/** URL-safe slug from a title. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatBlogDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}
