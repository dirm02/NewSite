import { Link } from "react-router-dom";
import { all_routes } from "../../../../../core/data/routes/all_routes";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";

const ServiceSection = () => {
  return (
    <>
      {/* Service Section */}
      <section className="section service-section-eleven">
        <div className="container-fluid">
          <div className="title-section section pt-0">
            <h2 className="image-text">Book Your Service</h2>
          </div>
        </div>
        <div className="container">
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
                Popular Categories
              </div>
              <h2 className="section-title">
                Browse Our <span>Services</span>
              </h2>
            </div>
            <Link
              to={all_routes.categories}
              className="btn btn-primary theme-btn"
            >
              View All Services
              <span className="btn-icon">
                <i className="isax isax-arrow-right-14" />
              </span>
            </Link>
          </div>
          {/* End Section Header*/}
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item-two wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-img">
                  <ImageWithBasePath
                    src="assets/img/services/bark-service-01.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      <ImageWithBasePath
                        src="assets/img/icons/service-06.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      Cleaning{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item-two wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-img">
                  <ImageWithBasePath
                    src="assets/img/services/bark-service-02.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      <ImageWithBasePath
                        src="assets/img/icons/service-07.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      Plumbing{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item-two wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-img">
                  <ImageWithBasePath
                    src="assets/img/services/bark-service-03.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      <ImageWithBasePath
                        src="assets/img/icons/service-08.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      Electrical{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item-two wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-img">
                  <ImageWithBasePath
                    src="assets/img/services/bark-service-04.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      <ImageWithBasePath
                        src="assets/img/icons/service-09.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      Construction{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
          <div className="section pb-0">
            <div className="work-sec">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li
                  className="nav-item wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <ImageWithBasePath
                      src="assets/img/work/work-thumb-01.jpg"
                      alt="Carpentry"
                      className="img-fluid"
                    />
                  </button>
                </li>
                <li
                  className="nav-item wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <ImageWithBasePath
                      src="assets/img/work/work-thumb-02.jpg"
                      alt="Salon Overview"
                      className="img-fluid"
                    />
                  </button>
                </li>
                <li
                  className="nav-item wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <ImageWithBasePath
                      src="assets/img/work/work-thumb-03.jpg"
                      alt="Expert Consultation"
                      className="img-fluid"
                    />
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <ImageWithBasePath
                    src="assets/img/work/work-01.jpg"
                    alt="Carpentry"
                    className="img-fluid"
                  />
                  <div className="work-content">
                    <h3>Carpentry Works</h3>
                    <p>
                      Professional carpentry services for furniture, repairs,
                      custom woodwork, installations, and home improvements by
                      skilled trusted carpenters.
                    </p>
                    <Link
                      to={all_routes.serviceDetails1}
                      className="btn btn-white theme-btn"
                    >
                      Browse More
                      <span className="btn-icon">
                        <i className="isax isax-arrow-right-14" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ImageWithBasePath
                    src="assets/img/work/work-02.jpg"
                    alt="Interior Design"
                    className="img-fluid"
                  />
                  <div className="work-content">
                    <h3>Wall Shelves Setup</h3>
                    <p>
                      Professional wall shelves setup services for secure
                      installation, stylish storage solutions, decorative
                      displays, and space-saving organization.
                    </p>
                    <Link
                      to={all_routes.serviceDetails1}
                      className="btn btn-white theme-btn"
                    >
                      Browse More
                      <span className="btn-icon">
                        <i className="isax isax-arrow-right-14" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <ImageWithBasePath
                    src="assets/img/work/work-03.jpg"
                    alt="Professional Care"
                    className="img-fluid"
                  />
                  <div className="work-content">
                    <h3>Custom Wood Design</h3>
                    <p>
                      Creative custom wood design services for unique furniture,
                      shelves, cabinets, and stylish wooden interior solutions.
                    </p>
                    <Link
                      to={all_routes.serviceDetails1}
                      className="btn btn-white theme-btn"
                    >
                      Browse More
                      <span className="btn-icon">
                        <i className="isax isax-arrow-right-14" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}
    </>
  );
};

export default ServiceSection;
