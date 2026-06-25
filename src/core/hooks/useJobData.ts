import { useCallback, useEffect, useState } from "react";
import {
  createQuote,
  createReview,
  createService,
  createServiceRequest,
  fetchCustomerRequests,
  fetchCustomerReviews,
  fetchOpenJobFeed,
  fetchProviderAcceptedQuotes,
  fetchProviderPendingQuotes,
  fetchProviderProfileForUser,
  fetchProviderQuoteForRequest,
  fetchProviderQuotes,
  fetchProviderReviews,
  fetchProviderService,
  fetchProviderServices,
  fetchQuotesForRequest,
  fetchServiceRequest,
  updateService,
  type CreateQuoteInput,
  type CreateReviewInput,
  type CreateServiceRequestInput,
  type ServiceFormInput,
} from "../api/pocketbase/jobs";
import { acceptQuote, cancelRequest, completeRequest } from "../api/pocketbase/transitions";
import {
  createBlogPost,
  fetchProviderBlogPost,
  fetchProviderBlogPosts,
  updateBlogPost,
  type BlogPostInput,
} from "../api/pocketbase/blog";
import type {
  PbBlogPost,
  PbProviderProfile,
  PbQuote,
  PbReview,
  PbService,
  PbServiceRequest,
} from "../api/pocketbase/types";
import { useAuth } from "../auth/AuthContext";

interface AsyncJobState<T> {
  data: T;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

function useAsyncJob<T>(
  loader: () => Promise<T>,
  initial: T,
  enabled: boolean,
  deps: unknown[] = [],
): AsyncJobState<T> {
  const [data, setData] = useState<T>(initial);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const reload = useCallback(() => setTick((n) => n + 1), []);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const result = await loader();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, tick, ...deps]);

  return { data, loading, error, reload };
}

export function useCustomerRequests(status?: PbServiceRequest["status"]) {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const result = await fetchCustomerRequests(token!, user!.id, { status });
      return result.items;
    },
    [] as PbServiceRequest[],
    enabled,
    [token, user?.id, status],
  );
}

export function useOpenJobFeed(search?: string) {
  const { token } = useAuth();
  const enabled = Boolean(token);

  return useAsyncJob(
    async () => {
      const result = await fetchOpenJobFeed(token!, { search });
      return result.items;
    },
    [] as PbServiceRequest[],
    enabled,
    [token, search],
  );
}

export function useServiceRequest(id: string | null) {
  const { token } = useAuth();
  const enabled = Boolean(token && id);

  return useAsyncJob(
    async () => fetchServiceRequest(token!, id!),
    null as PbServiceRequest | null,
    enabled,
    [token, id],
  );
}

export function useRequestQuotes(requestId: string | null) {
  const { token } = useAuth();
  const enabled = Boolean(token && requestId);

  return useAsyncJob(
    async () => {
      const result = await fetchQuotesForRequest(token!, requestId!);
      return result.items;
    },
    [] as PbQuote[],
    enabled,
    [token, requestId],
  );
}

export function useProviderAcceptedJobs() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return [] as PbQuote[];
      const result = await fetchProviderAcceptedQuotes(token!, profile.id);
      return result.items;
    },
    [] as PbQuote[],
    enabled,
    [token, user?.id],
  );
}

/** Loads this provider's existing quote for a request (null if none). */
export function useProviderRequestQuote(requestId: string | null) {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id && requestId);

  return useAsyncJob(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return null;
      return fetchProviderQuoteForRequest(token!, profile.id, requestId!);
    },
    null as PbQuote | null,
    enabled,
    [token, user?.id, requestId],
  );
}

export function useProviderPendingQuotes() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return [] as PbQuote[];
      const result = await fetchProviderPendingQuotes(token!, profile.id);
      return result.items;
    },
    [] as PbQuote[],
    enabled,
    [token, user?.id],
  );
}

export interface ProviderDashboardData {
  profile: PbProviderProfile | null;
  services: PbService[];
  quotes: PbQuote[];
  reviews: PbReview[];
  openOpportunities: number;
}

const EMPTY_PROVIDER_DASHBOARD: ProviderDashboardData = {
  profile: null,
  services: [],
  quotes: [],
  reviews: [],
  openOpportunities: 0,
};

export function useProviderDashboard() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob<ProviderDashboardData>(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return EMPTY_PROVIDER_DASHBOARD;

      const [services, quotes, reviews, openFeed] = await Promise.all([
        fetchProviderServices(token!, profile.id),
        fetchProviderQuotes(token!, profile.id),
        fetchProviderReviews(token!, profile.id),
        fetchOpenJobFeed(token!),
      ]);

      return {
        profile,
        services: services.items,
        quotes: quotes.items,
        reviews: reviews.items,
        openOpportunities: openFeed.totalItems,
      };
    },
    EMPTY_PROVIDER_DASHBOARD,
    enabled,
    [token, user?.id],
  );
}

export function useProviderServices() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return [] as PbService[];
      const result = await fetchProviderServices(token!, profile.id);
      return result.items;
    },
    [] as PbService[],
    enabled,
    [token, user?.id],
  );
}

export function useProviderServiceRecord(id: string | null) {
  const { token } = useAuth();
  const enabled = Boolean(token && id);

  return useAsyncJob(
    async () => fetchProviderService(token!, id!),
    null as PbService | null,
    enabled,
    [token, id],
  );
}

export function useProviderServiceActions() {
  const { token, user } = useAuth();

  const requireAuth = () => {
    if (!token || !user) throw new Error("Sign in required");
    return { token, user };
  };

  return {
    createService: async (input: ServiceFormInput) => {
      const { token: t, user: u } = requireAuth();
      const profile = await fetchProviderProfileForUser(t, u.id);
      if (!profile) throw new Error("Provider profile not found");
      return createService(t, profile.id, input);
    },
    updateService: async (id: string, input: ServiceFormInput) => {
      const { token: t } = requireAuth();
      return updateService(t, id, input);
    },
  };
}

export function useCustomerReviews() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const result = await fetchCustomerReviews(token!, user!.id);
      return result.items;
    },
    [] as PbReview[],
    enabled,
    [token, user?.id],
  );
}

export function useProviderBlogPosts() {
  const { token, user } = useAuth();
  const enabled = Boolean(token && user?.id);

  return useAsyncJob(
    async () => {
      const profile = await fetchProviderProfileForUser(token!, user!.id);
      if (!profile) return [] as PbBlogPost[];
      const result = await fetchProviderBlogPosts(token!, profile.id);
      return result.items;
    },
    [] as PbBlogPost[],
    enabled,
    [token, user?.id],
  );
}

export function useProviderBlogPost(id: string | null) {
  const { token } = useAuth();
  const enabled = Boolean(token && id);

  return useAsyncJob(
    async () => fetchProviderBlogPost(token!, id!),
    null as PbBlogPost | null,
    enabled,
    [token, id],
  );
}

export function useBlogActions() {
  const { token, user } = useAuth();

  const requireAuth = () => {
    if (!token || !user) throw new Error("Sign in required");
    return { token, user };
  };

  return {
    createPost: async (input: BlogPostInput) => {
      const { token: t, user: u } = requireAuth();
      const profile = await fetchProviderProfileForUser(t, u.id);
      if (!profile) throw new Error("Provider profile not found");
      return createBlogPost(t, profile.id, u.id, input);
    },
    updatePost: async (id: string, input: BlogPostInput) => {
      const { token: t } = requireAuth();
      return updateBlogPost(t, id, input);
    },
  };
}

export function useJobActions() {
  const { token, user } = useAuth();

  const requireAuth = () => {
    if (!token || !user) throw new Error("Sign in required");
    return { token, user };
  };

  return {
    createRequest: async (input: CreateServiceRequestInput) => {
      const { token: t, user: u } = requireAuth();
      return createServiceRequest(t, u.id, input);
    },
    submitReview: async (input: CreateReviewInput) => {
      const { token: t, user: u } = requireAuth();
      return createReview(t, u.id, input);
    },
    submitQuote: async (input: Omit<CreateQuoteInput, "providerId">) => {
      const { token: t, user: u } = requireAuth();
      const profile = await fetchProviderProfileForUser(t, u.id);
      if (!profile) throw new Error("Provider profile not found");
      const existing = await fetchProviderQuoteForRequest(
        t,
        profile.id,
        input.requestId,
      );
      if (existing) {
        throw new Error("You have already submitted a proposal for this job.");
      }
      return createQuote(t, { ...input, providerId: profile.id });
    },
    acceptQuote: async (quoteId: string) => {
      const { token: t } = requireAuth();
      return acceptQuote(t, quoteId);
    },
    completeRequest: async (requestId: string) => {
      const { token: t } = requireAuth();
      return completeRequest(t, requestId);
    },
    cancelRequest: async (requestId: string) => {
      const { token: t } = requireAuth();
      return cancelRequest(t, requestId);
    },
  };
}
