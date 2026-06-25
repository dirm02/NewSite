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
