import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useCategories, useServices } from '../../../../core/hooks/useDiscoveryData';
import {
  formatPrice,
  serviceDetailUrl,
  serviceImage,
} from '../../../../core/api/pocketbase/format';
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus';

/** Popular services tabs from PocketBase categories — GHST-5 */
const PopularSection = () => {
  const routes = all_routes;
  const { data: categories, loading: catLoading, error: catError, source: catSource } = useCategories(true);
  const { data: services, loading: svcLoading, error: svcError, source: svcSource } = useServices();

  const loading = catLoading || svcLoading;
  const error = catError ?? svcError;
  const source = catSource === 'mock' || svcSource === 'mock' ? 'mock' : 'pocketbase';

  const imgslideroption = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    swipe: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  const servicesByCategory = (categoryId: string) =>
    services.filter((s) => s.category === categoryId);

  return (
    <>
      <section className="section popular-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="section-header text-center mb-4">
                <h2 className="mb-1">
                  Our Popular{' '}
                  <span className="text-linear-primary">Services</span>
                </h2>
                <p className="sub-title">
                  Each listing is designed to be clear and concise, providing customers
                </p>
              </div>
            </div>
          </div>
          <DiscoveryStatus
            loading={loading}
            error={error}
            source={source}
            empty={!loading && categories.length === 0}
            emptyMessage="No popular services available."
          >
            <ul className="nav nav-tabs nav-tabs-solid justify-content-center mb-4">
              {categories.map((category, index) => (
                <li className="nav-item mb-3" key={category.id}>
                  <Link
                    className={`nav-link${index === 0 ? ' active' : ''}`}
                    to={`#pb-${category.slug}`}
                    data-bs-toggle="tab"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {categories.map((category, catIndex) => {
                const categoryServices = servicesByCategory(category.id);
                return (
                  <div
                    className={`tab-pane fade${catIndex === 0 ? ' active show' : ''}`}
                    id={`pb-${category.slug}`}
                    key={category.id}
                  >
                    <Slider {...imgslideroption} className="main-slider owl-carousel nav-center">
                      {categoryServices.map((service, index) => (
                        <div
                          className="service-item wow fadeInUp"
                          data-wow-delay="0.2s"
                          key={service.id}
                        >
                          <div className="service-img">
                            <Link to={serviceDetailUrl(service.id)}>
                              <ImageWithBasePath
                                src={serviceImage(catIndex + index)}
                                className="img-fluid"
                                alt={service.title}
                              />
                            </Link>
                            <div className="fav-item d-flex align-items-center justify-content-between w-100">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-content">
                            <h6 className="mb-1 text-truncate">
                              <Link to={serviceDetailUrl(service.id)}>{service.title}</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="fs-14 mb-0">
                                <i className="ti ti-star-filled text-warning me-1" />
                                {(service.rating_avg ?? 0).toFixed(1)}
                              </p>
                              <small>{formatPrice(service.price_from, service.price_to)}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                );
              })}
            </div>
          </DiscoveryStatus>
          <div className="text-center wow fadeInUp mt-4" data-wow-delay="0.2s">
            <Link to={routes.search} className="btn btn-dark">
              View All
              <i className="ti ti-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularSection;
