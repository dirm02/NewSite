import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"

const TrendSection = () => {
  return (
   <>
  {/* Trend Service Section */}
  <section className="section trend-section">
    <div className="container">
      <div className="section pt-0">
        <div className="row g-0">
          <div className="col-lg-6 d-flex">
            <div className="about-content-two flex-fill">
              <span className="badge bg-danger">Limited Time Offer</span>
              <div className="offer">15% OFF</div>
              <h3>On All Electrical Services</h3>
              <p>
                Combine 3 or more services and get 15% off your total bill.
                Perfect for home makeovers!
              </p>
              <Link to={all_routes.serviceGrid} className="btn btn-dark">
                Know More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="about-img-two flex-fill">
              <ImageWithBasePath
                src="assets/img/about/about-02.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Header*/}
      <div
        className="section-header-two section-btn wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div>
          <div className="section-subtitle">
            <span>
              <i className="isax isax-save-25" />
            </span>
            Most Booked This Month
          </div>
          <h2 className="section-title">
            Trending <span>Services</span>
          </h2>
        </div>
        <Link to={all_routes.serviceGrid} className="btn btn-primary theme-btn">
          View All Services
          <span className="btn-icon">
            <i className="isax isax-arrow-right-14" />
          </span>
        </Link>
      </div>
      {/* End Section Header*/}
      <div className="row g-4">
        {/* Service Item */}
        <div className="col-sm-6 col-lg-3 d-flex">
          <div
            className="service-item-three flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-img">
              <Link to={all_routes.serviceDetails1}>
                <ImageWithBasePath
                  src="assets/img/services/bark-service-05.jpg"
                  alt="service"
                  className="img-fluid"
                />
              </Link>
              <span className="badge bg-info text-white">#1 This Month</span>
            </div>
            <div className="service-content">
              <h3 className="custom-title">
                <Link to={all_routes.serviceDetails1}>
                  AC Deep Service &amp; Gas Refill
                </Link>
              </h3>
              <p>From $89</p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="col-sm-6 col-lg-3 d-flex">
          <div
            className="service-item-three flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-img">
              <Link to={all_routes.serviceDetails1}>
                <ImageWithBasePath
                  src="assets/img/services/bark-service-06.jpg"
                  alt="Emergency Plumbing"
                  className="img-fluid"
                />
              </Link>
              <span className="badge bg-danger text-white">Most Popular</span>
            </div>
            <div className="service-content">
              <h3 className="custom-title">
                <Link to={all_routes.serviceDetails1}>Emergency Plumbing</Link>
              </h3>
              <p>From $49</p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="col-sm-6 col-lg-3 d-flex">
          <div
            className="service-item-three flex-fill wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="service-img">
              <Link to={all_routes.serviceDetails1}>
                <ImageWithBasePath
                  src="assets/img/services/bark-service-07.jpg"
                  alt="Full Room Painting"
                  className="img-fluid"
                />
              </Link>
              <span className="badge bg-info text-white">High Demand</span>
            </div>
            <div className="service-content">
              <h3 className="custom-title">
                <Link to={all_routes.serviceDetails1}>Full Room Painting</Link>
              </h3>
              <p>From $129</p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="col-sm-6 col-lg-3 d-flex">
          <div
            className="service-item-three flex-fill wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="service-img">
              <Link to={all_routes.serviceDetails1}>
                <ImageWithBasePath
                  src="assets/img/services/bark-service-08.jpg"
                  alt="Home Deep Clean"
                  className="img-fluid"
                />
              </Link>
              <span className="badge bg-info text-white">High Demand</span>
            </div>
            <div className="service-content">
              <h3 className="custom-title">
                <Link to={all_routes.serviceDetails1}>Home Deep Clean</Link>
              </h3>
              <p>From $89</p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>
      <div className="offers-sec section pb-0">
        <div className="row g-4 justify-content-center">
          {/* Offer Item */}
          <div className="col-sm-6 col-xl-4 d-flex">
            <div
              className="offer-item-two flex-fill wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div>
                <span className="badge bg-danger text-white">New Offer</span>
                <h3 className="main-title">All Home Services in One Place</h3>
                <p>Limited Time Offer – Save 25%</p>
              </div>
              <div>
                <Link to={all_routes.serviceList} className="btn btn-white">
                  Get Started
                </Link>
              </div>
              <ImageWithBasePath
                src="assets/img/about/offer-01.jpg"
                alt="offer"
                className="img-fluid"
              />
            </div>
          </div>
          {/* End Offer Item */}
          {/* Offer Item */}
          <div className="col-sm-6 col-xl-4 d-flex">
            <div
              className="offer-item-two flex-fill wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div>
                <span className="badge bg-purple text-white">
                  Summer Special
                </span>
                <h3 className="main-title">Complete AC Care at Best Prices</h3>
                <p>Limited Time Offer – Save 25%</p>
              </div>
              <div>
                <Link to={all_routes.booking1} className="btn btn-dark">
                  Book Now
                </Link>
              </div>
              <ImageWithBasePath
                src="assets/img/about/offer-02.jpg"
                alt="offer"
                className="img-fluid"
              />
            </div>
          </div>
          {/* End Offer Item */}
          {/* Offer Item */}
          <div className="col-sm-12 col-md-6 col-xl-4 d-flex">
            <div
              className="offer-item-three flex-fill wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="offer-content">
                <span className="badge bg-warning text-white">
                  Home Services
                </span>
                <h3 className="main-title">Quality Services You Can Trust</h3>
                <p>Up to 30% Off</p>
                <Link to={all_routes.register} className="btn btn-white">
                  Get Free Quote
                </Link>
              </div>
              <div className="offer-img">
                <ImageWithBasePath
                  src="assets/img/about/offer-03.jpg"
                  alt="offer"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          {/* End Offer Item */}
        </div>
      </div>
    </div>
  </section>
  {/* End Trend Service Section */}
</>

  )
}

export default TrendSection