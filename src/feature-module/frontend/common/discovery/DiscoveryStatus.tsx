import React from "react";

interface DiscoveryStatusProps {
  loading?: boolean;
  error?: string | null;
  source?: "pocketbase" | "mock";
  empty?: boolean;
  emptyMessage?: string;
  children?: React.ReactNode;
}

/**
 * Shared loading / empty / error wrapper for GHST-5 discovery pages.
 * When source is mock due to API failure, shows a subtle dev-only banner.
 */
const DiscoveryStatus: React.FC<DiscoveryStatusProps> = ({
  loading,
  error,
  source,
  empty,
  emptyMessage = "No results found.",
  children,
}) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted mb-0">Loading services...</p>
      </div>
    );
  }

  if (empty) {
    return (
      <div className="text-center py-5">
        <p className="text-muted mb-0">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <>
      {source === "mock" && error && (
        <div
          className="alert alert-warning py-2 px-3 mb-3 small"
          role="alert"
          title="MOCK_FALLBACK: PocketBase unreachable — showing empty/mock data until GHST-7"
        >
          Live data unavailable. Showing fallback content. ({error})
        </div>
      )}
      {children}
    </>
  );
};

export default DiscoveryStatus;
