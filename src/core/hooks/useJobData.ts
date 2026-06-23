import { useCallback, useEffect, useState } from "react";
import {
  createQuote,
  createServiceRequest,
  fetchCustomerRequests,
  fetchOpenJobFeed,
  fetchProviderAcceptedQuotes,
  fetchProviderPendingQuotes,
  fetchProviderProfileForUser,
  fetchQuotesForRequest,
  fetchServiceRequest,
  type CreateQuoteInput,
  type CreateServiceRequestInput,
} from "../api/pocketbase/jobs";
import { acceptQuote, cancelRequest, completeRequest } from "../api/pocketbase/transitions";
import type { PbQuote, PbServiceRequest } from "../api/pocketbase/types";
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
    submitQuote: async (input: Omit<CreateQuoteInput, "providerId">) => {
      const { token: t, user: u } = requireAuth();
      const profile = await fetchProviderProfileForUser(t, u.id);
      if (!profile) throw new Error("Provider profile not found");
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
