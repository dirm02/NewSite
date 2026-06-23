import { useEffect, useState } from "react";

export type DataSource = "pocketbase" | "mock";

export interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
  source: DataSource;
}

/**
 * Loads async data with optional MOCK_FALLBACK when PocketBase is unreachable.
 * Mock fallback is temporary (GHST-5) — remove after GHST-7 cleanup.
 */
export function useAsyncDiscovery<T>(
  loader: () => Promise<T>,
  mockFallback: T,
  deps: unknown[] = [],
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: mockFallback,
    loading: true,
    error: null,
    source: "mock",
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const data = await loader();
        if (!cancelled) {
          setState({ data, loading: false, error: null, source: "pocketbase" });
        }
      } catch (err) {
        if (!cancelled) {
          const message =
            err instanceof Error ? err.message : "Failed to load data";
          setState({
            data: mockFallback,
            loading: false,
            error: message,
            source: "mock",
          });
        }
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
