import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useServices } from '../../../../core/hooks/useDiscoveryData';
import { formatPrice, serviceDetailUrl, serviceImage } from '../../../../core/api/pocketbase/format';
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus';
const FeatureSection = () => {
    const routes = all_routes;
    const { data: featuredServices, loading, error, source } = useServices({ featuredOnly: true });
    const imgslideroption = {
        dots: false,
        nav: false,
        infinite: true,
        speed: 500,
        swipe:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      const slideslideroption = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        draggable:true,
        tochMove:true,
        swipe:true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <>
  {/* Service Section */}
  <section className="section service-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Our Featured <span className="text-linear-primary">Services</span>
            </h2>
            <p className="sub-title">
              Each listing is designed to be clear and concise, providing
              customers
            </p>
          </div>
        </div>
      </div>
      <DiscoveryStatus loading={loading} error={error} source={source} empty={!loading && featuredServices.length === 0}>
      <Slider {...imgslideroption} className="service-slider  owl-carousel nav-center">
      {featuredServices.map((service,index:number)=>{
        return(
            <div className="service-item wow fadeInUp" data-wow-delay="0.2s" key={service.id}>
          <div className="service-img">
            <Slider {...slideslideroption} className="img-slider home-sliders feature-new-slide owl-carousel nav-center">
                        <div className="slide-images">
                <Link to={serviceDetailUrl(service.id)}>
                  <ImageWithBasePath
                    src={serviceImage(index)}
                    className="img-fluid"
                    alt={service.title}
                  />
                </Link>
              </div>
            </Slider>
            {service.featured ? <div className="trend-icon">
              <span className="bg-success">
                <i className="feather icon-trending-up" />
              </span>
            </div>:<></>}
            
            <div className="fav-item">
              <Link to="#" className="fav-icon">
                <i className="ti ti-heart" />
              </Link>
            </div>
          </div>
          <div className="service-content">
            <h6 className="text-truncate mb-1">
              <Link to={serviceDetailUrl(service.id)}>{service.title}</Link>
            </h6>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fw-medium fs-14 mb-0">{formatPrice(service.price_from, service.price_to)}</p>
              <span className="d-inline-flex align-items-center fs-14">
                <i className="ti ti-star-filled text-warning me-1" />
                {(service.rating_avg ?? 0).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
        )
    })}
    </Slider>
      </DiscoveryStatus>
      
      <div className="row">
        <div className="col-md-12">
          <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
            <Link to={routes.search} className="btn btn-dark">
              View All
              <i className="ti ti-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Service Section */}
</>

  )
}

export default FeatureSection