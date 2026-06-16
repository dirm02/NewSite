import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import * as Icon from "react-feather";
import { set_toggleSidebar_data } from "../../../../core/data/redux/action";
import type { AppState } from "../../../../core/models/interface";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import type { SiteHeaderProps } from "./site-header-types";
import { useSiteHeaderRole } from "./use-site-header-role";
import { siteHeaderRouterPath } from "./site-header-variants";
import SiteHeaderMainNav from "./SiteHeaderMainNav";
import SiteHeaderRightActions from "./SiteHeaderRightActions";

const routes = all_routes;

const SiteHeader: React.FC<SiteHeaderProps> = ({
  variantType,
  roleOverride,
}) => {
  const role = useSiteHeaderRole(roleOverride);
  const toggle_data = useSelector((state: AppState) => state.toggleSidebar);
  const dispatch = useDispatch();
  const location = useLocation();
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [close, setClose] = useState(true);
  const [, setImageUrl] = useState({
    logo: "",
    logoSmall: "",
    logoSvg: "",
  });

  const toogle = () => {
    dispatch(set_toggleSidebar_data(!toggle_data));
  };

  const handleScroll = () => {
    setScrollYPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    variantType === 1 || variantType === 4 || variantType === 10
      ? setImageUrl({
          logo: "assets/img/logo.png",
          logoSmall: "assets/img/logo-small.png",
          logoSvg: "assets/img/logo.svg",
        })
      : setImageUrl({
          logo: "assets/img/logo-02.svg",
          logoSmall: "assets/img/logo-icon.png",
          logoSvg: "assets/img/logo-02.svg",
        });
  }, [variantType]);

  const { path: menuLogoPath, className: headerClass } =
    siteHeaderRouterPath(variantType);

  return (
    <>
      <div
        className={` top-bar ${variantType !== 3 || !close ? "d-none" : ""}`}
      >
        <h6>50% OFF on Christmas</h6>
        <ul>
          <li key="countdown-1">2</li>
          <li key="countdown-2">15</li>
          <li key="countdown-3">33</li>
          <li key="countdown-4">32</li>
        </ul>
        <Link to="#" className="top-close" onClick={() => setClose(false)}>
          <Icon.X />
        </Link>
      </div>
      <header
        className={`header ${headerClass} ${
          scrollYPosition > 200 ? "fixed" : ""
        }`}
      >
        <div
          className={` ${
            variantType === 4 || variantType === 1
              ? "container-fluid"
              : "container"
          }`}
        >
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link onClick={toogle} id="mobile_btn" to="#" key="mobile-btn">
                {location.pathname === "/index-11" ? (
                  <i className="isax isax-menu5"></i>
                ):location.pathname === "/index-12" ? (
                  <i className="isax isax-menu-1"></i>
                ) : (
                  <span className="bar-icon">
                    <span key="bar-1" />
                    <span key="bar-2" />
                    <span key="bar-3" />
                  </span>
                )}
              </Link>
              {location.pathname === "/index-11" ? (
                <Link to={all_routes.home} className="navbar-brand logo">
                  <ImageWithBasePath
                    src="assets/img/logo-03.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              ) : location.pathname === "/index-12" ? (
                <Link
                  to={all_routes.home}
                  className={`navbar-brand logo ${scrollYPosition > 200 ? "logo-dark" : "logo"}`}
                >
                  <ImageWithBasePath
                    src={
                      scrollYPosition > 200
                        ? `assets/img/logo.svg`
                        : `assets/img/logo-white.svg`
                    }
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              ) : (
                <Link
                  to={routes.home}
                  className="navbar-brand logo"
                  key="logo-main"
                >
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              )}

              <Link
                to={routes.home}
                className="navbar-brand logo-small"
                key="logo-small"
              >
                <ImageWithBasePath
                  src="assets/img/logo-small.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={menuLogoPath} className="menu-logo" key="menu-logo">
                  {location.pathname === "/index-11" ? (
                    <ImageWithBasePath
                      src="assets/img/logo-03.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  ) : (
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  )}
                </Link>
                <Link
                  onClick={toogle}
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  key="menu-close"
                >
                  {" "}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <SiteHeaderMainNav variantType={variantType} role={role} />
            </div>
            <SiteHeaderRightActions variantType={variantType} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
