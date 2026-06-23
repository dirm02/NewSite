import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const routes = all_routes;

type Props = { variantType: number };

const SiteHeaderRightActions: React.FC<Props> = ({ variantType }) => {
  switch (variantType) {
    case 1:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item pe-1" key="signin-btn">
            <Link
              className="nav-link btn btn-light"
              to={routes.login}
            >
              <i className="ti ti-lock me-2" />
              Sign In
            </Link>
          </li>
          <li className="nav-item" key="joinus-btn">
            <Link
              className="nav-link btn btn-linear-primary"
              to={routes.chooseSignUp}
            >
              <i className="ti ti-user-filled me-2" />
              Join Us
            </Link>
          </li>
        </ul>
      );
    case 2:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="register-btn">
            <Link className="nav-link header-reg" to={routes.userSignup}>
              Register
            </Link>
          </li>
          <li className="nav-item" key="login-btn">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="fa-regular fa-circle-user me-2" />
              Login
            </Link>
          </li>
        </ul>
      );
    case 3:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="register-login-btn">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-user" /> Register / Login
            </Link>
          </li>
        </ul>
      );
    case 4:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="appointment-btn">
            <Link className="nav-link header-login" to={routes.userSignup}>
              <i className="feather icon-calendar me-2" />
              APPOINTMENT
            </Link>
          </li>
          <li className="nav-item" key="cta-buttons">
            <div className="cta-btn">
              <Link className="btn" to={routes.userSignup}>
                <i className="feather icon-users me-2" />
                REGISTER /
              </Link>
              <Link className="btn ms-1" to={routes.login}>
                LOGIN
              </Link>
            </div>
          </li>
        </ul>
      );
    case 5:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="login-btn-5">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-users me-2" />
              Login
            </Link>
          </li>
          <li className="nav-item" key="register-btn-5">
            <Link className="nav-link header-login" to={routes.userSignup}>
              <i className="feather icon-users me-2" />
              Register
            </Link>
          </li>
        </ul>
      );
    case 6:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="register-btn-6">
            <Link className="nav-link header-reg" to={routes.userSignup}>
              Register
            </Link>
          </li>
          <li className="nav-item" key="login-btn-6">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-user me-2" />
              Login
            </Link>
          </li>
        </ul>
      );
    case 7:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="register-btn-7">
            <Link className="nav-link header-button-six" to={routes.userSignup}>
              <i className="feather icon-user-plus me-2" />
              Register
            </Link>
          </li>
          <li className="nav-item" key="login-btn-7">
            <Link className="nav-link header-button-six" to={routes.login}>
              <i className="feather icon-log-in me-2" />
              Login
            </Link>
          </li>
        </ul>
      );
    case 8:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="register-btn-8">
            <Link className="nav-link header-login" to={routes.userSignup}>
              <i className="feather icon-user me-2" />
              Register
            </Link>
          </li>
          <li className="nav-item" key="login-btn-8">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-log-in me-2" />
              Login
            </Link>
          </li>
        </ul>
      );
    case 9:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="login-btn-9">
            <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-log-in me-2" />
              Login
            </Link>
          </li>
          <li className="nav-item" key="register-btn-9">
            <Link className="nav-link header-login" to={routes.userSignup}>
              <i className="feather icon-user-plus me-2" />
              Register
            </Link>
          </li>
        </ul>
      );
    case 10:
      return (
        <ul className="nav header-navbar-rht header-navbar-rht-nine ">
          <li className="nav-item" key="become-professional">
            <Link className="nav-link" to="/login">
              Become A Professional
            </Link>
          </li>
          <li className="nav-item" key="become-user">
            <Link className="nav-link" to="/login">
              Become A User
            </Link>
          </li>
        </ul>
      );
    case 11:
      return (
        <div className="header-btn d-flex align-items-center">
          <div className="provider-head-links" key="notification-dropdown">
            <Link
              to="#"
              className="d-flex align-items-center justify-content-center me-2 notify-link"
              data-bs-toggle="dropdown"
            >
              <i className="feather icon-bell" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
              <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                <h6 className="notification-title">
                  Notifications <span className="fs-18 text-gray"> (2)</span>
                </h6>
                <div className="d-flex align-items-center">
                  <Link to="#" className="text-primary fs-15 me-3 lh-1" key="mark-all-read">
                    Mark all as read
                  </Link>
                  <div className="dropdown" key="notification-filter">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      key="today-filter"
                    >
                      <i className="ti ti-calendar-due me-1" />
                      Today
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li key="filter-this-week">
                        <Link to="#" className="dropdown-item rounded-1">
                          This Week
                        </Link>
                      </li>
                      <li key="filter-last-week">
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                      <li key="filter-last-week-2">
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="noti-content">
                <div className="d-flex flex-column">
                  <div className="border-bottom mb-3 pb-3" key="notification-1">
                    <Link to={routes.commonNotification}>
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-52.jpg"
                            alt="Profile"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <p className="mb-1 w-100">
                              <span className="text-dark fw-semibold">
                                Stephan Peralt
                              </span>{' '}
                              rescheduled the service to 14/01/2024.{' '}
                            </p>
                            <span className="d-flex justify-content-end ">
                              {' '}
                              <i className="ti ti-point-filled text-primary" />
                            </span>
                          </div>
                          <span>Just Now</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-bottom mb-3 pb-3" key="notification-2">
                    <Link to={routes.commonNotification} className="pb-0">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-36.jpg"
                            alt="Profile"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <p className="mb-1 w-100">
                              <span className="text-dark fw-semibold">
                                Harvey Smith
                              </span>{' '}
                              has requested your service.
                            </p>
                            <span className="d-flex justify-content-end ">
                              {' '}
                              <i className="ti ti-point-filled text-primary" />
                            </span>
                          </div>
                          <span>5 mins ago</span>
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <span className="btn btn-light btn-sm me-2" key="deny-btn">
                              Deny
                            </span>
                            <span className="btn btn-dark btn-sm" key="accept-btn">
                              Accept
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-bottom mb-3 pb-3" key="notification-3">
                    <Link to={routes.commonNotification}>
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="Profile"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <p className="mb-1">
                            <span className="text-dark fw-semibold">
                              {' '}
                              Anthony Lewis
                            </span>{' '}
                            has left feedback for your recent service{' '}
                          </p>
                          <span>10 mins ago</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-0 mb-3 pb-0" key="notification-4">
                    <Link to={routes.commonNotification}>
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-22.jpg"
                            alt="Profile"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <p className="mb-1">
                            <span className="text-dark fw-semibold">
                              Brian Villaloboshas{' '}
                            </span>{' '}
                            cancelled the service scheduled for 14/01/2024.
                          </p>
                          <span>15 mins ago</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex p-0 notification-footer-btn">
                <Link to="#" className="btn btn-light rounded  me-2" key="notification-cancel">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-dark rounded " key="notification-view-all">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="provider-head-links" key="chat-link">
            <Link
              to={routes.customerChat}
              className="d-flex align-items-center justify-content-center me-2"
            >
              <i className="feather icon-mail" />
            </Link>
          </div>
          <div className="dropdown" key="user-dropdown">
            <Link to="#" data-bs-toggle="dropdown" aria-expanded="false" className="">
              <div className="booking-user d-flex align-items-center">
                <span className="user-img">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="user"
                  />
                </span>
              </div>
            </Link>
            <ul className="dropdown-menu p-2">
              <li key="user-logout">
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to={routes.login}
                >
                  <i className="ti ti-logout me-1" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__hamburger d-lg-none my-auto" key="hamburger-menu">
            <div className="sidebar-menu">
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </div>
      );
    case 12:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item">
            <Link to={routes.register} className="btn btn-primary theme-btn">
              <span className="btn-text">Become a Professional</span>
              <span className="btn-icon">
                <i className="isax isax-user-octagon" />
              </span>
            </Link>
          </li>
        </ul>

      )
    case 13:
      return (
       <ul className="nav header-navbar-rht">
  <li className="nav-item">
    <Link className="nav-link header-login" to={routes.login}>
      <i className="feather-calendar me-2" />
      Appointment
    </Link>
  </li>
  <li className="nav-item">
    <div className="header-login whit-btn">
      <i className="feather-users me-2" />
      <Link to={routes.registerreport} className="link">
        Register{" "}
      </Link>
      <span>/</span>
      <Link to={routes.login} className="link">
        Login
      </Link>
    </div>
  </li>
</ul>


      )
    default:
      return (
        <ul className="nav header-navbar-rht">
          <li className="nav-item" key="default-register">
            <Link className="nav-link header-reg" to="/authentication/choose-signup">
              Register
            </Link>
          </li>
          <li className="nav-item" key="default-login">
            <Link className="nav-link header-login" to="/authentication/login">
              <i className="fa-regular fa-circle-user me-2" />
              Login
            </Link>
          </li>
        </ul>
      );
  }
};

export default SiteHeaderRightActions;
