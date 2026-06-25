import React from "react";
import {
  useProviders,
  useServiceCounts,
} from "../../../../core/hooks/useDiscoveryData";
import ProviderGridCards from "./ProviderGridCards";

/** PocketBase-backed provider grid for providers-list — GHST-5 */
const ProviderDiscoveryPanel: React.FC = () => {
  const { data, loading, error, source } = useProviders();
  const { data: counts } = useServiceCounts();

  return (
    <ProviderGridCards
      providers={data}
      loading={loading}
      error={error}
      source={source}
      serviceCounts={counts.byProvider}
    />
  );
};

export default ProviderDiscoveryPanel;
