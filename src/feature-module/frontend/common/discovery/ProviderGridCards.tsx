import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import type { PbProviderProfile } from "../../../../core/api/pocketbase/types";
import {
  formatHourlyRate,
  formatRating,
  providerDetailUrl,
  providerImage,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import DiscoveryStatus from "./DiscoveryStatus";

interface ProviderGridCardsProps {
  providers: PbProviderProfile[];
  loading?: boolean;
  error?: string | null;
  source?: "pocketbase" | "mock";
  /** GHST-55: real active-service counts per provider id (honest, computed). */
  serviceCounts?: Record<string, number>;
}

/** Renders provider listing cards from PocketBase — GHST-5 */
const ProviderGridCards: React.FC<ProviderGridCardsProps> = ({
  providers,
  loading,
  error,
  source,
  serviceCounts,
}) => {
  return (
    <DiscoveryStatus
      loading={loading}
      error={error}
      source={source}
      empty={!loading && providers.length === 0}
      emptyMessage="No providers found."
    >
      <div className="row">
        {providers.map((provider, index) => {
          const city = provider.expand?.city;
          const location = serviceLocationLabel(city?.name, city?.region);
          const trade =
            provider.bio?.split(".")[0]?.slice(0, 40) ?? "Service Provider";

          return (
            <div key={provider.id} className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={providerDetailUrl(provider.id)}>
                      <ImageWithBasePath
                        src={providerImage(index)}
                        alt={provider.business_name}
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={providerDetailUrl(provider.id)}>
                            {provider.business_name}
                          </Link>
                          {provider.verified && (
                            <span className="text-success ms-2">
                              <i className="fa fa-check-circle" />
                            </span>
                          )}
                        </h5>
                        <span>{trade}</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark mb-0">
                        {formatHourlyRate(provider.hourly_rate_min)}
                        <span className="fw-normal fs-13 text-default">/hr</span>
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs-14 mb-0">
                        <i className="feather-map-pin me-2" />
                        {location}
                      </p>
                      <p className="fs-14 mb-0">
                        <i className="fa fa-star filled text-warning me-1" />
                        {formatRating(provider.rating_avg, provider.rating_count)}
                      </p>
                    </div>
                    <p className="fs-13 text-muted mt-2 mb-0">
                      {(serviceCounts?.[provider.id] ?? 0)} services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DiscoveryStatus>
  );
};

export default ProviderGridCards;
