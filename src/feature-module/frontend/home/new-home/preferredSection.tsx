import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useReviewStats, useServices } from '../../../../core/hooks/useDiscoveryData';
import {
  formatPrice,
  providerDisplayName,
  serviceDetailUrl,
  serviceImage,
  serviceReviewDisplay,
  serviceReviewSortScore,
} from '../../../../core/api/pocketbase/format';
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus';

// GHST-41: "Most Preferred Services" is now backed by the PocketBase `services`
// collection (active services, highest rating first). No static/demo cards: an
// empty state renders when there are no active services.
const PreferredSection = () => {
  const { data: services, loading, error, source } = useServices();
  const { data: reviewStats } = useReviewStats();
  const preferred = [...services]
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

  const imgslideroption = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="section service-section white-section pt-0 pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-header text-center">
              <h2 className="mb-1">
                Most <span className="text-linear-primary">Preferred Services</span>
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
          empty={!loading && preferred.length === 0}
          emptyMessage="No services available yet."
        >
          <Slider {...imgslideroption} className="service-slider  owl-carousel nav-center">
            {preferred.map((service, index: number) => (
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s" key={service.id}>
                <div className="service-img">
                  <div className="slide-images">
                    <Link to={serviceDetailUrl(service.id)}>
                      <ImageWithBasePath
                        src={serviceImage(index)}
                        className="img-fluid"
                        alt={service.title}
                      />
                    </Link>
                  </div>
                  {service.featured ? (
                    <div className="trend-icon">
                      <span className="bg-success">
                        <i className="feather icon-trending-up" />
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="service-content">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Link
                      to={serviceDetailUrl(service.id)}
                      className="d-flex align-items-center mb-2 service-pro-info"
                    >
                      <p className="fs-14">
                        {providerDisplayName(service.expand?.provider)}
                      </p>
                    </Link>
                    <small className="mb-2">
                      {formatPrice(service.price_from, service.price_to)}
                    </small>
                  </div>
                  <h6 className="mb-2">
                    <Link to={serviceDetailUrl(service.id)}>{service.title}</Link>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-14 mb-0">
                      <i className="ti ti-star-filled text-warning me-1" />
                      {serviceReviewDisplay(
                        reviewStats.byService,
                        reviewStats.byProvider,
                        service.id,
                        service.provider,
                      )}
                    </p>
                    {service.expand?.category?.name ? (
                      <span className="badge badge-dark-transparent fw-medium p-2">
                        {service.expand.category.name}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </DiscoveryStatus>
      </div>
    </section>
  );
};

export default PreferredSection;
