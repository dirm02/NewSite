import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useEffect, useState, useRef } from "react";

interface CustomerHeaderProps {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  sidebarOverlayRef: React.RefObject<HTMLDivElement | null>;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ sidebarRef, sidebarOverlayRef }) => {
  const location = useLocation();
  const routes = all_routes;
  
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

  // Function to check if a route is active (supports exact and relative matching)
  const isRouteActive = (itemTo: string, currentPath: string): boolean => {
    if (itemTo === "javascript:void(0);" || itemTo === "#") return false;
    
    // Exact match
    if (itemTo === currentPath) return true;
    
    // Relative match - check if current path starts with the item path
    if (itemTo !== "/" && currentPath.startsWith(itemTo)) {
      // Ensure we're not matching partial segments
      const nextCharInCurrentPath = currentPath[itemTo.length];
      return nextCharInCurrentPath === undefined || nextCharInCurrentPath === "/";
    }
    
    return false;
  };

  // Check if any related route is active
  const hasActiveRelatedRoute = (relatedRoutes: string[] | undefined, currentPath: string): boolean => {
    if (!relatedRoutes) return false;
    return relatedRoutes.some(route => isRouteActive(route, currentPath));
  };

  // Check if any child route is active for submenu highlighting
  const hasActiveChild = (children: { to: string; relatedRoutes?: string[] }[], currentPath: string): boolean => {
    return children.some(child => {
      const isActive = isRouteActive(child.to, currentPath);
      const hasActiveRelated = hasActiveRelatedRoute(child.relatedRoutes, currentPath);
      return isActive || hasActiveRelated;
    });
  };

  // Home demo data for megamenu
  const homeDemos = [
    { to: routes.home, img: "assets/img/home-01.jpg", label: "General Home" },
    { to: routes.home11, img: "assets/img/home-02.jpg", label: "General Home 2", badge: "NEW" },
    { to: routes.home12, img: "assets/img/home-3.jpg", label: "Painting Services", badge: "NEW" },
    { to: routes.home3, img: "assets/img/home-04.jpg", label: "Cleaning Services" },
    { to: routes.home4, img: "assets/img/home-05.jpg", label: "Salon Services" },
    { to: routes.home5, img: "assets/img/home-06.jpg", label: "Catering Services" },
    { to: routes.home6, img: "assets/img/home-07.jpg", label: "Car Wash" },
    { to: routes.home7, img: "assets/img/home-08.jpg", label: "House Problems" },
    { to: routes.home9, img: "assets/img/home-09.jpg", label: "Mechanic Services" },
    { to: routes.home8, img: "assets/img/home-10.jpg", label: "Pet Grooming Services" },
  ];

  // Service menu items
  const serviceItems = [
    { to: routes.serviceGrid, label: "Service Grid" },
    { to: routes.serviceList, label: "Service List" },
    { to: routes.serviceDetails1, label: "Service Details 1" },
    { to: routes.serviceDetails2, label: "Service Details 2" },
    { to: routes.serviceRequest, label: "Service Request" },
    { to: routes.search, label: "Search" },
    { to: routes.provider, label: "Providers List" },
    { to: routes.providerDetails, label: "Providers Details" },
    { to: routes.categories, label: "Categories 1" },
    { to: "/pages/categories-2", label: "Categories 2" },
    { to: routes.createService, label: "Create Service" },
  ];

  // Customer menu items
  const customerItems = [
    { to: routes.customerDashboard, label: "Dashboard" },
    { to: routes.customerBooking, label: "Booking",relatedRoutes: [routes.customerBookingCalendar] },
    { to: routes.userJobBooking, label: "Job Bookings", relatedRoutes: [routes.userJobBookingDetails,routes.userJobBookingCompleted] },
    { to: routes.userJob, label: "Jobs" ,relatedRoutes: [routes.customerJobDetails,routes.customerCreateJob,routes.customerEditJob] },
    { to: routes.customers, label: "Quote Comparison" },
    { to: routes.customerFavourite, label: "Favorites" },
    { to: routes.customerWallet, label: "Wallet" },
    { to: routes.customerReviews, label: "Reviews" },
    { to: routes.customerChat, label: "Chat" },
    { to: routes.customerProfile, label: "Settings",relatedRoutes:[routes.customerSecurity,routes.customerNotification,routes.customerConnectedApps] },
  ];

  // Provider menu items
  const providerItems = [
    { to: routes.providerDashboard, label: "Dashboard" },
    { to: routes.providerService, label: "My Services" },
    { to: routes.providerBooking, label: "Booking" },
    { to: "/providers/job-feed", label: "Job Feed" },
    { to: "/providers/proposal", label: "Proposals" },
    { to: "/providers/active-jobs", label: "My Jobs" },
    { to: routes.providerPayout, label: "Payout" },
    { to: routes.providerAppointmentSettings, label: "Appointment Settings" },
    { to: routes.providerProfileSettings, label: "Account Settings" },
    { to: routes.providerSocialProfile, label: "Social Profiles" },
    { to: routes.ProviderSecuritySettings, label: "Security" },
    { to: routes.providerPlan, label: "Plan & Billings" },
    { to: routes.providerNotification, label: "Notifications" },
    { to: routes.providerConnectedApps, label: "Connected Apps" },
    { to: routes.providerHoliday, label: "Holidays & Leave" },
    { to: routes.providerCoupons, label: "Coupons" },
    { to: routes.providerOffer, label: "Offers" },
    { to: routes.providerReview, label: "Reviews" },
    { to: routes.providerEarnings, label: "Earnings" },
    { to: routes.providerChat, label: "Chat" },
  ];

  // Pages menu items
  const pagesItems = [
    { to: routes.aboutUs, label: "About" },
    { to: routes.blogGrid, label: "Blog Grid" },
    { to: "/blog/blogs", label: "Blog List" },
    { to: routes.blogDetails, label: "Blog Details" },
    { to: routes.contactUs, label: "Contact Us" },
    { to: routes.howItWorks, label: "How It Works" },
    { to: routes.error404, label: "404 Error" },
    { to: routes.error500, label: "500 Error" },
    { to: routes.login, label: "Login" },
    { to: routes.userSignup, label: "Customer Signup" },
    { to: routes.providerRegister, label: "Provider Signup" },
    { to: routes.resetPassword, label: "Reset Password" },
    { to: routes.phoneOtp, label: "Phone OTP" },
    { to: routes.emailOtp, label: "Email OTP" },
    { to: routes.freeTrail, label: "Free Trial" },
    { to: routes.booking1, label: "Booking 1" },
    { to: routes.bookings, label: "Booking 2" },
    { to: routes.bookingPayment, label: "Booking Checkout" },
    { to: routes.bookingDone, label: "Booking Success" },
    { to: routes.bookingDetails, label: "Booking Details" },
    { to: routes.categories, label: "Categories" },
    { to: routes.pricingPlan, label: "Pricing Plan" },
    { to: routes.faq, label: "FAQ" },
    { to: routes.maintenance, label: "Maintenance" },
    { to: routes.comingSoon, label: "Coming Soon" },
    { to: routes.privacyPolicy, label: "Privacy Policy" },
    { to: routes.termsCondition, label: "Terms & Conditions" },
    { to: routes.sessionExpired, label: "Session Expired" },
    { to: routes.installer, label: "Installer" },
  ];

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
          <li className={`has-submenu megamenu ${hasActiveChild(homeDemos, location.pathname) ? 'active' : ''}`}>
            <Link to="#">
              Home <i className="fas fa-chevron-down" />
            </Link>
            <ul className="submenu mega-submenu">
              <li>
                <div className="megamenu-wrapper">
                  <div className="row row-cols-lg-5">
                    {homeDemos.map((demo, index) => (
                      <div className="col" key={index}>
                        <div className={`single-demo ${isRouteActive(demo.to, location.pathname) ? 'active' : ''}`}>
                          <div className="demo-img">
                            <Link to={demo.to}>
                              <ImageWithBasePath
                                src={demo.img}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to={demo.to}>
                              {demo.label}
                              {demo.badge && (
                                <>
                                  {" "}
                                  <span className="new-home">{demo.badge}</span>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className={`has-submenu ${hasActiveChild(serviceItems, location.pathname) ? 'active' : ''}`}>
            <Link to="#">
              Services <i className="fas fa-chevron-down" />
            </Link>
            <ul className="submenu">
              {serviceItems.slice(0, 2).map((item, index) => (
                <li key={index} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link to="#">Service Details</Link>
                <ul className="submenu">
                  {serviceItems.slice(2, 4).map((item, index) => (
                    <li key={index} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {serviceItems.slice(4, 6).map((item, index) => (
                <li key={index + 4} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link to="#">Providers</Link>
                <ul className="submenu">
                  {serviceItems.slice(6, 8).map((item, index) => (
                    <li key={index + 6} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">Categories</Link>
                <ul className="submenu">
                  {serviceItems.slice(8, 10).map((item, index) => (
                    <li key={index + 8} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={isRouteActive(serviceItems[10].to, location.pathname) ? 'active' : ''}>
                <Link to={serviceItems[10].to}>{serviceItems[10].label}</Link>
              </li>
            </ul>
          </li>
          <li className={`has-submenu ${hasActiveChild(customerItems, location.pathname) ? 'active' : ''}`}>
            <Link to="#">
              Customers <i className="fas fa-chevron-down" />
            </Link>
            <ul className="submenu">
              {customerItems.map((item, index) => {
                const isActive = isRouteActive(item.to, location.pathname);
                const hasActiveRelated = hasActiveRelatedRoute((item as any).relatedRoutes, location.pathname);
                const shouldHighlight = isActive || hasActiveRelated;
                return (
                  <li key={index} className={shouldHighlight ? 'active' : ''}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className={`has-submenu ${hasActiveChild(providerItems, location.pathname) ? 'active' : ''}`}>
            <Link to="#">
              Providers <i className="fas fa-chevron-down" />
            </Link>
            <ul className="submenu">
              {providerItems.slice(0, 7).map((item, index) => (
                <li key={index} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link to="#">Settings</Link>
                <ul className="submenu">
                  {providerItems.slice(7, 14).map((item, index) => (
                    <li key={index + 7} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {providerItems.slice(14).map((item, index) => (
                <li key={index + 14} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`nav-item has-submenu ${hasActiveChild(pagesItems, location.pathname) ? 'active' : ''}`}>
            <Link className="nav-link" to="#">
              Pages
              <i className="fas fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li className={isRouteActive(pagesItems[0].to, location.pathname) ? 'active' : ''}>
                <Link to={pagesItems[0].to}>{pagesItems[0].label}</Link>
              </li>
              <li className="has-submenu">
                <Link to="#">Blog</Link>
                <ul className="submenu">
                  {pagesItems.slice(1, 4).map((item, index) => (
                    <li key={index + 1} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {pagesItems.slice(4, 6).map((item, index) => (
                <li key={index + 4} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link to="#">Error Page</Link>
                <ul className="submenu">
                  {pagesItems.slice(6, 8).map((item, index) => (
                    <li key={index + 6} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">Authentication</Link>
                <ul className="submenu">
                  {pagesItems.slice(8, 15).map((item, index) => (
                    <li key={index + 8} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">Booking</Link>
                <ul className="submenu">
                  {pagesItems.slice(15, 20).map((item, index) => (
                    <li key={index + 15} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {pagesItems.slice(20).map((item, index) => (
                <li key={index + 20} className={isRouteActive(item.to, location.pathname) ? 'active' : ''}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" target="_blank" rel="noreferrer" to="/admin/dashboard">
              Admin
            </Link>
          </li>
        </ul>
        <div className="header-btn d-flex align-items-center">
          <div className="provider-head-links gap-2">
            <Link
              to={routes.customerChat}
              className="link-icon d-flex align-items-center justify-content-center"
            >
              <i className="isax isax-message-2" />
            </Link>
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
        <Link className="dropdown-item" to={routes.login}>
          Logout
        </Link>
      </div>
    </div>
    {/* /Mobile Menu */}
  </div>
  {/* /Header */}
</>

  );
};

export default CustomerHeader;
