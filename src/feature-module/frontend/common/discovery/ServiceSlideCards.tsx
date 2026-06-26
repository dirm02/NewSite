import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import type { PbService } from "../../../../core/api/pocketbase/types";
import {
  formatPrice,
  serviceDetailUrl,
  serviceImage,
  serviceReviewDisplay,
} from "../../../../core/api/pocketbase/format";
import { useReviewStats } from "../../../../core/hooks/useDiscoveryData";
import DiscoveryStatus from "./DiscoveryStatus";

interface ServiceSlideCardsProps {
  services: PbService[];
  loading?: boolean;
  error?: string | null;
  source?: "pocketbase" | "mock";
}

/** Compact service cards for homepage sliders — GHST-5 */
const ServiceSlideCards: React.FC<ServiceSlideCardsProps> = ({
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
      emptyMessage="No featured services yet."
    >
      {services.map((service, index) => (
        <div key={service.id} className="service-slide">
          <div className="service-wrap">
            <div className="service-img">
              <Link to={serviceDetailUrl(service.id)}>
                <ImageWithBasePath
                  className="img-fluid"
                  alt={service.title}
                  src={serviceImage(index)}
                />
              </Link>
              <div className="item-info">
                <span>{service.expand?.category?.name ?? "Service"}</span>
              </div>
            </div>
            <div className="service-content">
              <h3 className="title">
                <Link to={serviceDetailUrl(service.id)}>{service.title}</Link>
              </h3>
              <p className="serv-info">
                {formatPrice(service.price_from, service.price_to)}
                <span>
                  <i className="fa-solid fa-star" />
                  {serviceReviewDisplay(
                    reviewStats.byService,
                    reviewStats.byProvider,
                    service.id,
                    service.provider,
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </DiscoveryStatus>
  );
};

export default ServiceSlideCards;
