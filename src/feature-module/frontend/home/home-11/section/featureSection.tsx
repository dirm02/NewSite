import { Link } from "react-router-dom";
import { all_routes } from "../../../../../core/data/routes/all_routes";

const FeatureSection = () => {
  return (
    <>
      {/* Feature Section */}
      <section className="section feature-section-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="feature-content-three">
                <h2>Powerful Features That Simplify Your Experience</h2>
                <p>
                  Discover powerful features designed to simplify service
                  booking, connect with trusted professionals, manage requests
                  efficiently, and deliver a seamless experience for both
                  customers and service providers.
                </p>
                <Link
                  to={all_routes.serviceList}
                  className="btn btn-white theme-btn"
                >
                  Know More
                  <span className="btn-icon">
                    <i className="isax isax-arrow-right-14" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row g-4">
                {/* Feature Item */}
                <div className="col-sm-6 d-flex">
                  <div
                    className="feature-item flex-fill wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="feature-icon">
                      <img
                        src="assets/img/icons/feature-01.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Easy Service Search &amp; Discovery</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                {/* Feature Item */}
                <div className="col-sm-6 d-flex">
                  <div
                    className="feature-item flex-fill wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="feature-icon">
                      <img
                        src="assets/img/icons/feature-02.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Multiple Service Categories</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                {/* Feature Item */}
                <div className="col-sm-6 d-flex">
                  <div
                    className="feature-item flex-fill wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="feature-icon">
                      <img
                        src="assets/img/icons/feature-03.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Verified Service Professionals</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                {/* Feature Item */}
                <div className="col-sm-6 d-flex">
                  <div
                    className="feature-item flex-fill wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="feature-icon">
                      <img
                        src="assets/img/icons/feature-04.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Quick Proposal &amp; Quote Management</h3>
                  </div>
                </div>
                {/* End Feature Item */}
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/bg/feature-bg-01.png"
          alt="bg"
          className="img-fluid feature-bg-01"
        />
        <img
          src="assets/img/bg/feature-bg-02.png"
          alt="bg"
          className="img-fluid feature-bg-02"
        />
      </section>
      {/* End Feature Section */}
    </>
  );
};

export default FeatureSection;
