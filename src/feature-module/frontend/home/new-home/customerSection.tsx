import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useReviews } from '../../../../core/hooks/useDiscoveryData';
import { providerImage } from '../../../../core/api/pocketbase/format';
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus';

const CustomerSection = () => {
  const { data: reviews, loading, error, source } = useReviews();

  const imgslideroption = {
      dots: false,
      nav: false,
      infinite: true,
      speed: 500,
      swipe:true,
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
<>
  {/* Testimonial Section */}
  <section className="section service-section white-section testimonial-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Genuine reviews from{" "}
              <span className="text-linear-primary">Customers</span>
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
        empty={!loading && reviews.length === 0}
        emptyMessage="No reviews yet."
      >
      <Slider {...imgslideroption} className="service-slider owl-carousel nav-center">
        {reviews.map((review, index) => (
        <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s" key={review.id}>
          <div className="d-flex align-items-center mb-3">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <i
                key={starIndex}
                className={`fa-solid fa-star text-warning${starIndex < Math.round(review.rating) ? (starIndex < 4 ? ' me-1' : '') : ' text-muted' + (starIndex < 4 ? ' me-1' : '')}`}
              />
            ))}
          </div>
          <h5 className="mb-2">{review.expand?.service?.title ?? 'Great service'}</h5>
          <p className="mb-4">
            &ldquo;{review.comment ?? 'Excellent work.'}&rdquo;
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center overflow-hidden">
              <span className="avatar avatar-lg flex-shrink-0">
                <ImageWithBasePath
                  src={providerImage(index)}
                  className="img-fluid rounded-circle"
                  alt="img"
                />
              </span>
              <h6 className="text-truncate ms-2">
                {review.expand?.author?.name ?? 'Customer'}
              </h6>
            </div>
            <p>{review.rating.toFixed(1)} / 5</p>
          </div>
        </div>
        ))}
      </Slider>
      </DiscoveryStatus>
      <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
        <h6 className="mb-2">
          Each listing is designed to be clear and concise, providing customers
        </h6>
        <p>
          <span className="text-dark fw-medium">Excellent</span>
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <span className="fs-14">Based on {reviews.length} reviews</span>
        </p>
      </div>
    </div>
  </section>
  {/* /Testimonial Section */}
</>


  )
}

export default CustomerSection
