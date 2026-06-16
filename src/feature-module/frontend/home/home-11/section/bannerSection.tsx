import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";
import SimpleSlider from "../../../common/simple-slider/simpleSlider";
import { all_routes } from "../../../../../core/data/routes/all_routes";

const BannerSection = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section-eleven">
        <div className="container">
          {/* start row */}
          <div className="banner-content">
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <h1 className="title">
                  Connect With Professionals Who Match{" "}
                  <span>Your Expectations</span>
                </h1>
                <div className="banner-form">
                  <form action="#" className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What Service are you Looking For"
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="isax isax-location5" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postal Code"
                      />
                    </div>
                    <div>
                      <Link
                        to={all_routes.search}
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#wizard-modal"
                      >
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="popular-search">
                  <p className="mb-0">Popular Searches</p>
                  <Link to={all_routes.search} className="badge">
                    Plumbers
                  </Link>
                  <Link to={all_routes.search} className="badge">
                    Interior Cleaning
                  </Link>
                  <Link to={all_routes.search} className="badge">
                    House Cleaning
                  </Link>
                </div>
                <div className="user-image">
                  <SimpleSlider>
                    <ImageWithBasePath
                      src="assets/img/banner/user-01.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                    <ImageWithBasePath
                      src="assets/img/banner/user-02.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                    <ImageWithBasePath
                      src="assets/img/banner/user-03.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                  </SimpleSlider>
                </div>
                <div className="user-image provider">
                  <SimpleSlider>
                    <ImageWithBasePath
                      src="assets/img/banner/provider-01.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                    <ImageWithBasePath
                      src="assets/img/banner/provider-02.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                    <ImageWithBasePath
                      src="assets/img/banner/provider-03.jpg"
                      alt="user"
                      className="img-fluid slides"
                    />
                  </SimpleSlider>
                </div>
              </div>
            </div>
            <ImageWithBasePath
              src="assets/img/bg/line-bg.png"
              alt="bg"
              className="img-fluid arrow-bg"
            />
          </div>
          {/* end row */}
        </div>
        <div className="container-fluid">
          <div
            className="horizontal-slide"
            data-direction="left"
            data-speed="slow"
          >
            <div className="slide-list d-flex">
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-01.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-02.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-03.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-04.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-05.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-06.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-07.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/banner/banner-08.png"
                  alt="Banner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Section */}
    </>
  );
};

export default BannerSection;
