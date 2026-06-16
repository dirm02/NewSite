import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"

const routes = all_routes

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
  {/* Footer */}
  <footer className="footer-eleven">
    <div className="container">
      <div className="footer-newsletter">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 col-md-7">
            <h2>Get Insights to Your Inbox</h2>
            <p>Free, instant, no sign up needed.</p>
          </div>
          <div className="col-lg-5 col-md-5">
            <form action="#" className="newsletter-wrap">
              <input
                className="input-newsletter"
                type="email"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-sm-6">
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <Link to={routes.home11}>
                  <ImageWithBasePath
                    src="assets/img/logo-03-white.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </div>
              <p>
                Smartest service marketplace connecting verified professionals
                with people who need them
              </p>
              <ul className="social-icon">
                <li>
                  <Link to="#" aria-label="facebook">
                    <i className="feather feather-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="linkedin">
                    <i className="feather feather-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="instagram">
                    <i className="feather feather-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="youtube">
                    <i className="feather feather-youtube" />
                  </Link>
                </li>
              </ul>
              <ImageWithBasePath
                src="assets/img/bg/footer-bg-05.png"
                className="img-fluid about-bg"
                alt="bg"
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-title">For Sellers</h3>
              <ul className="footer-menu">
                <li>
                  <Link to={routes.providerRegister}>Join as professional</Link>
                </li>
                <li>
                  <Link to="#">Browse job feed</Link>
                </li>
                <li>
                  <Link to="#">Submit proposals</Link>
                </li>
                <li>
                  <Link to="#">Badge programme</Link>
                </li>
                <li>
                  <Link to="#">Seller dashboard</Link>
                </li>
                <li>
                  <Link to="#">Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-menu">
                <li>
                  <Link to={routes.serviceDetails1}>Home cleaning</Link>
                </li>
                <li>
                  <Link to={routes.serviceDetails1}>Plumbing</Link>
                </li>
                <li>
                  <Link to={routes.serviceDetails1}>Electrical</Link>
                </li>
                <li>
                  <Link to={routes.serviceDetails1}>Painting</Link>
                </li>
                <li>
                  <Link to={routes.serviceDetails1}>Moving</Link>
                </li>
                <li>
                  <Link to={routes.serviceDetails1}>AC Repair</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-title">For Buyers</h3>
              <ul className="footer-menu">
                <li>
                  <Link to="#">Post a job</Link>
                </li>
                <li>
                  <Link to="#">Browse professionals</Link>
                </li>
                <li>
                  <Link to="#">How quotes work</Link>
                </li>
                <li>
                  <Link to="#">Compare proposals</Link>
                </li>
                <li>
                  <Link to="#">Buyer dashboard</Link>
                </li>
                <li>
                  <Link to="#">Active Jobs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-content">
              <div className="copyright">
                <p className="mb-0">
                  © 2026 <Link to={routes.home11}>TruelySell</Link>. All rights
                  reserved
                </p>
              </div>
              <ul className="policy-links">
                <li>
                  <Link to={routes.termsCondition}>Terms of Service</Link>
                </li>
                <li>
                  <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Bottom */}
    <button 
      onClick={scrollToTop} 
      className="top-btn" 
      aria-label="back to top"
      type="button"
    >
      <i className="isax isax-arrow-up-3" />
    </button>
    <ImageWithBasePath
      src="assets/img/bg/footer-bg-06.png"
      alt="bg"
      className="img-fluid footer-bg"
    />
  </footer>
  {/* ENd Footer */}
</>

  )
}

export default Footer