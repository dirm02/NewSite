import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import type { PbService } from "../../../../core/api/pocketbase/types";
import {
  formatPrice,
  serviceDetailUrl,
  serviceImage,
  serviceLocationLabel,
  serviceReviewDisplay,
} from "../../../../core/api/pocketbase/format";
import { useReviewStats } from "../../../../core/hooks/useDiscoveryData";
import DiscoveryStatus from "./DiscoveryStatus";

interface ServiceGridCardsProps {
  services: PbService[];
  loading?: boolean;
  error?: string | null;
  source?: "pocketbase" | "mock";
}

/** Renders service listing cards from PocketBase — GHST-5 */
const ServiceGridCards: React.FC<ServiceGridCardsProps> = ({
  services,
  loading,
  error,
  source,
}) => {
  const { data: reviewStats } = useReviewStats();

  return (
    <DiscoveryStatus
      loading={loading}
      error={error}
      source={source}
      empty={!loading && services.length === 0}
      emptyMessage="No services match your search."
    >
      <div className="row">
        {services.map((service, index) => {
          const categoryName = service.expand?.category?.name ?? "Service";
          const providerName =
            service.expand?.provider?.business_name ?? "Provider";
          const city = service.expand?.city;
          const location = serviceLocationLabel(city?.name, city?.region);
          const ratingLabel = serviceReviewDisplay(
            reviewStats.byService,
            reviewStats.byProvider,
            service.id,
            service.provider,
          );

          return (
            <div key={service.id} className="col-xl-4 col-md-6">
              <div className="card p-0">
                <div className="card-body p-0">
                  <div className="img-sec w-100">
                    <Link to={serviceDetailUrl(service.id)}>
                      <ImageWithBasePath
                        src={serviceImage(index)}
                        className="img-fluid rounded-top w-100"
                        alt={service.title}
                      />
                    </Link>
                    <div className="fav-item">
                      <span className="item-info">{categoryName}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h5 className="mb-2 text-truncate">
                      <Link to={serviceDetailUrl(service.id)}>{service.title}</Link>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="fs-14 mb-0">
                        <i className="ti ti-map-pin me-1" />
                        {location}
                      </p>
                      <span className="rating">
                        <i className="fa fa-star filled me-1" />
                        {ratingLabel}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fs-14">
                        <i className="ti ti-user me-1" />
                        {providerName}
                      </span>
                      <h5 className="text-primary mb-0">
                        {formatPrice(service.price_from, service.price_to)}
                      </h5>
                    </div>
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

export default ServiceGridCards;
