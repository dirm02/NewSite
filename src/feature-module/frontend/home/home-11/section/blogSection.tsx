import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"


const BlogSection = () => {
  return (
   <>
  {/* Blog Section */}
  <section className="section blog-section-three">
    <div className="container">
      '{/* Section Header*/}
      <div
        className="section-header-two section-btn wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div>
          <div className="section-subtitle">
            <span>
              <i className="isax isax-message-text5" />
            </span>
            Latest Blogs
          </div>
          <h2 className="section-title">
            Latest <span>Insights</span>
          </h2>
        </div>
        <Link to={all_routes.blogGrid} className="btn btn-primary theme-btn">
          View All Blogs
          <span className="btn-icon">
            <i className="isax isax-arrow-right-14" />
          </span>
        </Link>
      </div>
      {/* End Section Header*/}
      {/* start row */}
      <div className="row g-4 justify-content-center">
        {/* Item */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="blog-item-two flex-fill">
            <div className="blog-img">
              <Link to={all_routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/blog/bolg-18.jpg"
                  alt="blog"
                  className="img-fluid"
                />
              </Link>
              <div className="blog-date">
                21 <span>Apr</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p className="time">4 Mins to Read</p>
                <Link to={all_routes.blogGrid} className="badge">
                  <i className="fa-solid fa-circle fs-8 me-2" />
                  Tips &amp; tricks
                </Link>
              </div>
              <h3 className="custom-title">
                <Link to={all_routes.blogDetails}>
                  How Professional Booking Services Simplify Experience
                </Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="blog-item-two flex-fill">
            <div className="blog-img">
              <Link to={all_routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/blog/blog-19.jpg"
                  alt="blog"
                  className="img-fluid"
                />
              </Link>
              <div className="blog-date">
                14 <span>Mar</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p className="time">2 Mins to Read</p>
                <Link to={all_routes.blogGrid} className="badge">
                  <i className="fa-solid fa-circle fs-8 me-2" />
                  Service Insights
                </Link>
              </div>
              <h3 className="custom-title">
                <Link to={all_routes.blogDetails}>
                  The Complete Guide to On-Demand Professional Services
                </Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="blog-item-two flex-fill">
            <div className="blog-img">
              <Link to={all_routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/blog/blog-20.jpg"
                  alt="blog"
                  className="img-fluid"
                />
              </Link>
              <div className="blog-date">
                22 <span>Feb</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p className="time">2 Mins to Read</p>
                <Link to={all_routes.blogGrid} className="badge">
                  <i className="fa-solid fa-circle fs-8 me-2" />
                  Carpentry
                </Link>
              </div>
              <h3 className="custom-title">
                <Link to={all_routes.blogDetails}>
                  Boost Your Business with Smart Booking &amp; Scheduling
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Blog Section */}
</>

  )
}

export default BlogSection