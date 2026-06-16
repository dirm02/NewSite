import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"

const TeamSection = () => {
  return (
    <>
  {/* Start Team Section */}
  <section className="section team-section-twelve">
    <div className="container">
      {/* start row */}
      <div className="row row-gap-4">
        <div className="col-lg-4">
          <div className="team-left">
            <div
              className="section-header-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="subtitle">
                {" "}
                <ImageWithBasePath
                  src="assets/img/icons/title-icon.svg"
                  alt="title"
                  className="icon"
                />
                Meet the Team
              </div>
              <h2 className="title">
                Professionals with{" "}
                <span className="d-block"> Verified &amp; Reviews</span>{" "}
              </h2>
            </div>
            <Link
              to="#"
              className="btn btn-white wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              View All Experts <i className="isax isax-arrow-circle-right5" />
            </Link>
          </div>
        </div>
        <div className="col-lg-8">
          {/* start row */}
          <div className="row row-gap-5">
            {/* Item 1 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-1.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Pro
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">James Whitfield</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.7)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Exterior
                    </Link>
                    <Link to="#" className="tag">
                      Luxury
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-2.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Elite
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">Sarah Chen</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.5)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Exterior
                    </Link>
                    <Link to="#" className="tag">
                      Commercial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-3.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Pro
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">Liam Connor</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.3)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Residential
                    </Link>
                    <Link to="#" className="tag">
                      Exterior
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-4.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Elite
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">William Jones</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.9)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Surface Prep
                    </Link>
                    <Link to="#" className="tag">
                      Space Planning
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-5.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Elite
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">Jessica Brown</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.8)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Commercial
                    </Link>
                    <Link to="#" className="tag">
                      Restoration
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div
                className="team-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-overlay">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/team/team-img-6.jpg"
                      alt="team"
                      className="img-fluid img-1"
                    />
                  </Link>
                  <Link to="#" className="badge">
                    Pro
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link to="#">Andrew Nguye</Link>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>(4.2)</span>
                  </div>
                  <div className="team-tag">
                    <Link to="#" className="tag">
                      Exterior
                    </Link>
                    <Link to="#" className="tag">
                      Faux Finishes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* end row */}
    </div>
  </section>
  {/* End Team Section */}
</>

  )
}

export default TeamSection