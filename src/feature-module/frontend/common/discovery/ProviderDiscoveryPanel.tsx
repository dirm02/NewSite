import React from "react";
import { useProviders } from "../../../../core/hooks/useDiscoveryData";
import ProviderGridCards from "./ProviderGridCards";

/** PocketBase-backed provider grid for providers-list — GHST-5 */
const ProviderDiscoveryPanel: React.FC = () => {
  const { data, loading, error, source } = useProviders();

  return (
    <ProviderGridCards
      providers={data}
      loading={loading}
      error={error}
      source={source}
    />
  );
};

export default ProviderDiscoveryPanel;
