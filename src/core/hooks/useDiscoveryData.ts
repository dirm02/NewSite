import {
  fetchBlogCategories,
  fetchCategories,
  fetchCities,
  fetchProviders,
  fetchPublishedBlogPostBySlug,
  fetchPublishedBlogPosts,
  fetchReviews,
  fetchServiceById,
  fetchServices,
  fetchProviderById,
} from "../api/pocketbase/discovery";
import type {
  PbBlogCategory,
  PbBlogPost,
  PbCity,
  PbProviderProfile,
  PbReview,
  PbService,
  PbServiceCategory,
} from "../api/pocketbase/types";
import { useAsyncDiscovery } from "./useAsyncDiscovery";

export function useCategories(featuredOnly = false) {
  return useAsyncDiscovery<PbServiceCategory[]>(
    async () => (await fetchCategories({ featuredOnly })).items,
    [],
    [featuredOnly],
  );
}

export function useCities() {
  return useAsyncDiscovery<PbCity[]>(
    async () => (await fetchCities()).items,
    [],
    [],
  );
}

export function useServices(options?: {
  featuredOnly?: boolean;
}) {
  return useAsyncDiscovery<PbService[]>(
    async () => (await fetchServices(options)).items,
    [],
    [options?.featuredOnly],
  );
}

export function useProviders() {
  return useAsyncDiscovery<PbProviderProfile[]>(
    async () => (await fetchProviders()).items,
    [],
    [],
  );
}

export interface ServiceCounts {
  byProvider: Record<string, number>;
  byCategory: Record<string, number>;
  total: number;
}

/**
 * GHST-55 (honest data): real counts of **active** services grouped by provider
 * and by category, computed from the live `services` collection — used instead
 * of the seeded/denormalized `provider_profiles.services_count` and
 * `service_categories.listing_count` fields, which overstate reality.
 */
export function useServiceCounts() {
  return useAsyncDiscovery<ServiceCounts>(
    async () => {
      const res = await fetchServices({ perPage: 200 });
      const byProvider: Record<string, number> = {};
      const byCategory: Record<string, number> = {};
      for (const s of res.items) {
        if (s.provider) byProvider[s.provider] = (byProvider[s.provider] ?? 0) + 1;
        if (s.category) byCategory[s.category] = (byCategory[s.category] ?? 0) + 1;
      }
      return { byProvider, byCategory, total: res.items.length };
    },
    { byProvider: {}, byCategory: {}, total: 0 },
    [],
  );
}

export interface ReviewStats {
  byProvider: Record<string, { count: number; avg: number }>;
  byService: Record<string, { count: number; avg: number }>;
}

/**
 * GHST-63 (honest data): real rating/count aggregates from published reviews,
 * grouped by provider and by service — replaces seeded rating_avg/rating_count.
 */
export function useReviewStats() {
  return useAsyncDiscovery<ReviewStats>(
    async () => {
      const res = await fetchReviews({ perPage: 200 });
      const rawProvider: Record<string, { sum: number; count: number }> = {};
      const rawService: Record<string, { sum: number; count: number }> = {};
      for (const r of res.items) {
        if (r.provider) {
          const cur = rawProvider[r.provider] ?? { sum: 0, count: 0 };
          cur.sum += r.rating;
          cur.count += 1;
          rawProvider[r.provider] = cur;
        }
        if (r.service) {
          const cur = rawService[r.service] ?? { sum: 0, count: 0 };
          cur.sum += r.rating;
          cur.count += 1;
          rawService[r.service] = cur;
        }
      }
      const finalize = (raw: Record<string, { sum: number; count: number }>) => {
        const out: Record<string, { count: number; avg: number }> = {};
        for (const [id, v] of Object.entries(raw)) {
          out[id] = { count: v.count, avg: v.count ? v.sum / v.count : 0 };
        }
        return out;
      };
      return {
        byProvider: finalize(rawProvider),
        byService: finalize(rawService),
      };
    },
    { byProvider: {}, byService: {} },
    [],
  );
}

export function useReviews() {
  return useAsyncDiscovery<PbReview[]>(
    async () => (await fetchReviews()).items,
    [],
    [],
  );
}

export function useService(id: string | null) {
  return useAsyncDiscovery<PbService | null>(
    async () => (id ? fetchServiceById(id) : null),
    null,
    [id],
  );
}

export function useProvider(id: string | null) {
  return useAsyncDiscovery<PbProviderProfile | null>(
    async () => (id ? fetchProviderById(id) : null),
    null,
    [id],
  );
}

/** Public published blog posts (GHST-49). Empty list when none/collection absent. */
export function usePublishedBlogPosts(perPage?: number) {
  return useAsyncDiscovery<PbBlogPost[]>(
    async () => (await fetchPublishedBlogPosts({ perPage })).items,
    [],
    [perPage],
  );
}

/** Public published blog post by slug (null when not found). */
export function usePublishedBlogPost(slug: string | null) {
  return useAsyncDiscovery<PbBlogPost | null>(
    async () => (slug ? fetchPublishedBlogPostBySlug(slug) : null),
    null,
    [slug],
  );
}

/** Active blog categories. */
export function useBlogCategories() {
  return useAsyncDiscovery<PbBlogCategory[]>(
    async () => (await fetchBlogCategories()).items,
    [],
    [],
  );
}
