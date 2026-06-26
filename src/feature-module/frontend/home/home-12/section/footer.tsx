import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
   <>
  {/* Start Footer Section */}
  <footer className="footer-tweleve">
    <div className="container">
      {/* Start row */}
      <div className="row row-gap-5">
        <div className="col-xxl-7 col-xl-6 col-lg-6">
          <div className="footer-about">
            <Link to="#" className="logo">
              <ImageWithBasePath
                src="assets/img/lif3line-logo-white.svg"
                alt="logo"
                className="img-fluid"
              />
            </Link>
            <p className="description">
              We simplify service management by connecting customers with
              trusted professionals quickly &amp; efficiently.
            </p>
            <div className="subscribe-form">
              <p className="title">Sign up for Update</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <i className="isax isax-sms" />
                <Link to="#" className="btn btn-primary">
                  {" "}
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-6 col-lg-6">
          {/* start row */}
          <div className="row row-gap-4">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-title">
                  Quick Links <span className="line" />
                </h3>
                <ul>
                  <li>
                    <Link to={all_routes.categories} className="footer-link">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.serviceGrid} className="footer-link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.aboutUs} className="footer-link">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.faq} className="footer-link">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.blog} className="footer-link">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-title">
                  Contact Info <span className="line" />
                </h3>
                <div className="footer-support">
                  <div className="footer-icon">
                    <i className="isax isax-call-calling" />
                  </div>
                  <div className="footer-text">
                    <p>Phone Number</p>
                    <h4>
                      <Link to="tel:+13104372766">310-437-2766</Link>
                    </h4>
                  </div>
                </div>
                <div className="footer-support">
                  <div className="footer-icon">
                    <i className="isax isax-sms" />
                  </div>
                  <div className="footer-text">
                    <p>Mail Address</p>
                    <h4>
                      <Link to="mailto:support@lif3line.me">
                        support@lif3line.me
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="footer-support">
                  <div className="footer-icon">
                    <i className="isax isax-location" />
                  </div>
                  <div className="footer-text">
                    <p>Address</p>
                    <h4>706 Campfire Ave,06450</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* start row */}
        </div>
      </div>
      {/* End row */}
      <div className="footer-name">
        <div className="footer-name-title">LIF3LINE</div>
        <ImageWithBasePath
          src="assets/img/team/footer-img.png"
          alt="footer"
          className="img-fluid img-1"
        />
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="copyright-content">
          <p className="copyright">
            Copyright © 2026 <Link to={all_routes.home}>Lif3Line</Link>. All rights
            reserved
          </p>
          <div className="policy-links">
            <Link to={all_routes.termsCondition}>Terms of Service</Link>
            <span className="line" />
            <Link to={all_routes.privacyPolicy}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Bottom */}
    <button
      onClick={scrollToTop}
      className={`top-btn ${showTopBtn ? 'show' : ''}`}
      aria-label="back to top"
      style={{ display: showTopBtn ? 'block' : 'none' }}
    >
      <i className="isax isax-arrow-up-3" />
    </button>
  </footer>
  {/* Start Footer Section */}
</>

  )
}

export default Footer