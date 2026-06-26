import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { useReviewStats, useServices } from '../../../../core/hooks/useDiscoveryData';
import {
  serviceDetailUrl,
  serviceImage,
  serviceReviewSortScore,
} from '../../../../core/api/pocketbase/format';
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus';

// GHST-41: "Browse High Rated Services" is now backed by the PocketBase
// `services` collection, sorted by rating (highest first). The previous static
// category tabs with hardcoded demo cards were removed so the homepage never
// shows fabricated service cards when PocketBase has no data.
const RateServiceSection = () => {
  const routes = all_routes;
  const { data: services, loading, error, source } = useServices();
  const { data: reviewStats } = useReviewStats();
  const topRated = [...services]
    .sort(
      (a, b) =>
        serviceReviewSortScore(
          reviewStats.byService,
          reviewStats.byProvider,
          b.id,
          b.provider,
        ) -
        serviceReviewSortScore(
          reviewStats.byService,
          reviewStats.byProvider,
          a.id,
          a.provider,
        ),
    )
    .slice(0, 8);

  return (
    <section className="section rated-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-header text-center mb-4">
              <h2 className="mb-1">
                Browse{" "}
                <span className="text-linear-primary">High Rated Services</span>
              </h2>
              <p className="sub-title">
                Each listing is designed to be clear and concise, providing
                customers
              </p>
            </div>
          </div>
        </div>

        <DiscoveryStatus
          loading={loading}
          error={error}
          source={source}
          empty={!loading && topRated.length === 0}
          emptyMessage="No services available yet."
        >
          <div className="row g-4">
            {topRated.map((service, index) => (
              <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s" key={service.id}>
                <Link to={serviceDetailUrl(service.id)} className="rated-wrap">
                  <ImageWithBasePath
                    src={serviceImage(index)}
                    alt={service.title}
                    className="img-fluid"
                  />
                  <h6 className="text-white">{service.title}</h6>
                </Link>
              </div>
            ))}
          </div>
        </DiscoveryStatus>

        <div className="text-center view-all wow fadeInUp" data-wow-delay="0.2s">
          <Link to={routes.serviceGrid} className="btn btn-dark">
            View All
            <i className="ti ti-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RateServiceSection;
