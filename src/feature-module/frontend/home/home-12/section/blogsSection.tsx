import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"


const BlogsSection = () => {
  return (
   <>
  {/* Start Our Blogs Section */}
  <section className="section blog-section-twelve">
    <div className="container">
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
          />{" "}
          Our Blogs{" "}
        </div>
        <h2 className="title"> Latest Updates &amp; Articles </h2>
      </div>
      {/* start row */}
      <div className="row row-gap-4 justify-content-center">
        {/* Item 1 */}
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-item-twelve wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="blog-overlay">
              <Link to={all_routes.bookingDetails} className="blog-author">
                <ImageWithBasePath
                  src="assets/img/user/user-09.jpg"
                  alt="user"
                  className="img-fluid img-1"
                />
                <p className="author-name">Evan Hastings</p>
              </Link>
              <ImageWithBasePath
                src="assets/img/blog/blog-img-1.jpg"
                alt="blog-img-1"
                className="img-fluid img-2"
              />
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p>
                  {" "}
                  <i className="feather-calendar" /> 14 Nov 2026
                </p>
                <p>
                  {" "}
                  <i className="feather-message-square text-dark" />
                  16 Comments
                </p>
              </div>
              <h3 className="title">
                <Link to="#">
                  Selecting the right painting contractor for your project
                </Link>
              </h3>
              <p className="description">
                Choosing the right painting contractor can be a daunting task.
                Here are key factors to consider.
              </p>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-item-twelve wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="blog-overlay">
              <Link to={all_routes.bookingDetails} className="blog-author">
                <ImageWithBasePath
                  src="assets/img/user/user-10.jpg"
                  alt="user"
                  className="img-fluid img-1"
                />
                <p className="author-name">Leslie Alexander</p>
              </Link>
              <ImageWithBasePath
                src="assets/img/blog/blog-img-2.jpg"
                alt="blog-img-1"
                className="img-fluid img-2"
              />
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p>
                  {" "}
                  <i className="feather-calendar" /> 12 Oct 2026
                </p>
                <p>
                  {" "}
                  <i className="feather-message-square text-dark" />
                  12 Comments
                </p>
              </div>
              <h3 className="title">
                <Link to="#">How to prepare your home for interior painting</Link>
              </h3>
              <p className="description">
                Preparing your home properly before interior painting can ensure
                a smooth and long-lasting finish.
              </p>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-item-twelve wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="blog-overlay">
              <Link to={all_routes.bookingDetails} className="blog-author">
                <ImageWithBasePath
                  src="assets/img/user/user-11.jpg"
                  alt="user"
                  className="img-fluid img-1"
                />
                <p className="author-name">Merlin Mechlin</p>
              </Link>
              <ImageWithBasePath
                src="assets/img/blog/blog-img-3.jpg"
                alt="blog-img-1"
                className="img-fluid img-2"
              />
            </div>
            <div className="blog-content">
              <div className="blog-info">
                <p>
                  {" "}
                  <i className="feather-calendar" /> 16 Mar 2026{" "}
                </p>
                <p>
                  {" "}
                  <i className="feather-message-square text-dark" />
                  11 Comments
                </p>
              </div>
              <h3 className="title">
                <Link to="#">
                  The latest trends in exterior paint colors for your Rooms 2026
                </Link>
              </h3>
              <p className="description">
                Stay up-to-date with the latest trends in exterior paint colors
                to enhance your home's curb appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  </section>
  {/* End Our Blogs Section */}
</>

  )
}

export default BlogsSection