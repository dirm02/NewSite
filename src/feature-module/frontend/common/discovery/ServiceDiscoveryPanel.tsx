import React from "react";
import { useSearchParams } from "react-router-dom";
import { useServices } from "../../../../core/hooks/useDiscoveryData";
import ServiceGridCards from "../../common/discovery/ServiceGridCards";

/**
 * PocketBase-backed service results panel for service-grid and search pages.
 * Reads optional ?category= slug from URL. — GHST-5
 */
const ServiceDiscoveryPanel: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category") ?? undefined;
  const { data: allServices, loading, error, source } = useServices();
  const data = categorySlug
    ? allServices.filter((s) => s.expand?.category?.slug === categorySlug)
    : allServices;

  return (
    <>
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
        <h4 className="mb-0">
          Found{" "}
          <span className="text-primary">
            {loading ? "…" : data.length} Services
          </span>
        </h4>
      </div>
      <ServiceGridCards
        services={data}
        loading={loading}
        error={error}
        source={source}
      />
    </>
  );
};

export default ServiceDiscoveryPanel;
