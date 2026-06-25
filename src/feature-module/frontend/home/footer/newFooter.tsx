import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'

const NewFooter = () => {
    const routes = all_routes
  return (
    <>
    {/* Footer */}
    <footer>
      {/*
        GHST-42: Footer trimmed to real MVP routes only. Removed dead `#` link
        columns (Product/Support/Case studies/Careers/Help center/etc.), the
        newsletter signup (no `newsletter` collection — revisit in an Admin CMS
        phase), fake App Store / Google Play badges, dead social `#` icons, and
        the non-functional language/currency dropdowns (no i18n/multi-currency in
        MVP). Reintroduce social links once real profile URLs exist.
      */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="footer-widget">
                <h5 className="mb-4">Explore</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.search}>Search Services</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceGrid}>Service Grid</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceList}>Service List</Link>
                  </li>
                  <li>
                    <Link to={routes.provider}>Providers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-widget">
                <h5 className="mb-4">Company</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.aboutUs}>About</Link>
                  </li>
                  <li>
                    <Link to={routes.howItWorks}>How It Works</Link>
                  </li>
                  <li>
                    <Link to={routes.pricingPlan}>Pricing</Link>
                  </li>
                  <li>
                    <Link to={routes.faq}>FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-widget">
                <h5 className="mb-4">Support</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.contactUs}>Contact us</Link>
                  </li>
                  <li>
                    <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={routes.termsCondition}>Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-widget">
                <h5 className="mb-4">Get Started</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.login}>Sign In</Link>
                  </li>
                  <li>
                    <Link to={routes.chooseSignUp}>Join Us</Link>
                  </li>
                  <li>
                    <Link to={routes.providerSignup}>Become a Provider</Link>
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
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="mb-2">
                  Copyright © 2025 - All Rights Reserved Lif3Line
                </p>
                <ul className="menu-links mb-2">
                  <li>
                    <Link to={routes.termsCondition}> Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
    {/* /Footer */}
  </>
  
  )
}

export default NewFooter
