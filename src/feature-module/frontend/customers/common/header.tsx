import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../../../core/auth/AuthContext";
import CustomerTopNav from "./CustomerTopNav";

interface CustomerHeaderProps {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  sidebarOverlayRef: React.RefObject<HTMLDivElement | null>;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ sidebarRef, sidebarOverlayRef }) => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const routes = all_routes;

  const handleLogout = () => {
    logout();
    navigate(routes.login);
  };
  
  // Initialize sidebar state from localStorage
  const [isMiniSidebar, setIsMiniSidebar] = useState(() => {
    const storedState = localStorage.getItem('sidebar-state');
    return storedState === 'mini';
  });

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ref for mobile button
  const mobileBtnRef = useRef<HTMLAnchorElement>(null);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsMiniSidebar(!isMiniSidebar);
  };

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu function
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body class updates and localStorage persistence
  useEffect(() => {
    const body = document.body;
    
    if (isMiniSidebar) {
      body.classList.add('mini-sidebar');
      body.classList.remove('expand-menu');
      localStorage.setItem('sidebar-state', 'mini');
    } else {
      body.classList.remove('mini-sidebar');
      localStorage.setItem('sidebar-state', 'normal');
    }
  }, [isMiniSidebar]);

  // Apply initial body classes on component mount
  useEffect(() => {
    const body = document.body;
    const storedState = localStorage.getItem('sidebar-state');
    
    if (storedState === 'mini') {
      body.classList.add('mini-sidebar');
    }
  }, []);

  // Handle mobile menu classes and click-outside functionality
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const mainWrapper = document.querySelector('.main-wrapper');

    if (isMobileMenuOpen) {
      // Add classes when mobile menu opens
      body.classList.add('expand-menu');
      html.classList.add('menu-opened');
      if (mainWrapper) {
        mainWrapper.classList.add('slide-nav');
      }
      if (sidebarOverlayRef.current) {
        sidebarOverlayRef.current.classList.add('opened');
      }
    } else {
      // Remove classes when mobile menu closes
      body.classList.remove('expand-menu');
      html.classList.remove('menu-opened');
      if (mainWrapper) {
        mainWrapper.classList.remove('slide-nav');
      }
      if (sidebarOverlayRef.current) {
        sidebarOverlayRef.current.classList.remove('opened');
      }
    }
  }, [isMobileMenuOpen, sidebarOverlayRef]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target as Node) &&
          mobileBtnRef.current &&
          !mobileBtnRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle mouse enter on header-left and sidebar
  const handleMouseEnter = () => {
    if (isMiniSidebar) {
      document.body.classList.add('expand-menu');
    }
  };

  // Handle mouse leave from header-left and sidebar
  const handleMouseLeave = () => {
    if (isMiniSidebar) {
      document.body.classList.remove('expand-menu');
    }
  };

  return (
    <>
  {/* Header */}
  <div className="header customer-header provider-header">
    {/* Logo */}
    <div 
      className="header-left active" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={routes.home} className="logo logo-normal">
        <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
      </Link>
      <Link to={routes.home} className="logo-small">
        <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
      </Link>
      <Link id="toggle_btn" to="javascript:void(0);" onClick={toggleSidebar}>
        <i className="ti ti-menu-deep" />
      </Link>
    </div>
    {/* /Logo */}
    <Link id="mobile_btn" ref={mobileBtnRef} className="mobile_btn" to="#sidebar" onClick={toggleMobileMenu}>
      <span className="bar-icon">
        <span />
        <span />
        <span />
      </span>
    </Link>
    <div className="header-user">
      <div className="nav user-menu">
        <ul className="main-nav">
          <CustomerTopNav />
        </ul>
        <div className="header-btn d-flex align-items-center">
          <div className="provider-head-links gap-2">
            <Link
              to="javascript:void(0);"
              className="d-flex align-items-center justify-content-center notify-link link-icon"
              data-bs-toggle="dropdown"
            >
              <i className="isax isax-notification" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
              <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                <h1 className="notification-title">
                  Notifications <span className="fs-18 text-gray">(2)</span>
                </h1>
                <div className="d-flex align-items-center">
                  <Link to="#" className="text-primary fs-15 me-3 lh-1">
                    Mark all as read
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="javascript:void(0);"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      <i className="ti ti-calendar-due me-1" />
                      Today
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link
                          to="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Last Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="noti-content">
                <div className="d-flex flex-column">
                  <div className="border-bottom mb-3 pb-3">
                    <Link to={routes.customerNotifications}>
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
                              </span>{" "}
                              rescheduled the service to 14/01/2024.{" "}
                            </p>
                            <span className="d-flex justify-content-end ">
                              {" "}
                              <i className="ti ti-point-filled text-primary" />
                            </span>
                          </div>
                          <span>Just Now</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <Link to={routes.customerNotifications} className="pb-0">
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
                              </span>{" "}
                              has requested your service.
                            </p>
                            <span className="d-flex justify-content-end ">
                              {" "}
                              <i className="ti ti-point-filled text-primary" />
                            </span>
                          </div>
                          <span>5 mins ago</span>
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <span className="btn btn-light btn-sm me-2">
                              Deny
                            </span>
                            <span className="btn btn-dark btn-sm">Accept</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <Link to={routes.customerNotifications}>
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
                              {" "}
                              Anthony Lewis
                            </span>{" "}
                            has left feedback for your recent service{" "}
                          </p>
                          <span>10 mins ago</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="border-0 mb-3 pb-0">
                    <Link to={routes.customerNotifications}>
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
                              Brian Villaloboshas{" "}
                            </span>{" "}
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
                <Link to="#" className="btn btn-light rounded  me-2">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-dark rounded ">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <Link
              to="javascript:void(0);"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className=""
            >
              <div className="booking-user d-flex align-items-center">
                <span className="user-img">
                  <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="user" />
                </span>
              </div>
            </Link>
            <ul className="dropdown-menu p-2">
              <li>
                <button
                  type="button"
                  className="dropdown-item d-flex align-items-center border-0 bg-transparent w-100 text-start"
                  onClick={handleLogout}
                >
                  <i className="ti ti-logout me-1" />
                  Logout{user?.name ? ` (${user.name})` : ""}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    <div className="dropdown mobile-user-menu">
      <Link
        to="javascript:void(0);"
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-ellipsis-v" />
      </Link>
      <div className="dropdown-menu dropdown-menu-end">
        <Link className="dropdown-item" to={routes.customerProfile}>
          My Profile
        </Link>
        <Link className="dropdown-item" to={routes.customerProfile}>
          Settings
        </Link>
        <button type="button" className="dropdown-item border-0 bg-transparent w-100 text-start" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
    {/* /Mobile Menu */}
  </div>
  {/* /Header */}
</>

  );
};

export default CustomerHeader;
