import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { getSiteHeaderNavSections } from './site-header-nav-config';
import {
  filterNavSections,
  pathMatchesLocation,
  sectionHasActiveRoute,
} from './site-header-nav-utils';
import { SiteHeaderSubmenuRoot } from './SiteHeaderSubmenu';
import type { SiteHeaderRole } from './site-header-types';

const routes = all_routes;

type Props = {
  variantType: number;
  role: SiteHeaderRole;
};

const SiteHeaderMainNav: React.FC<Props> = ({ variantType, role }) => {
  const { pathname } = useLocation();
  const sections = useMemo(
    () => filterNavSections(getSiteHeaderNavSections(), role),
    [role],
  );

  const [openBranches, setOpenBranches] = useState<Record<string, boolean>>(
    {},
  );
  const [submenuOpen, setSubmenuOpen] = useState<Record<string, boolean>>({});

  const toggleSubmenu = useCallback((id: string) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const onToggleBranch = useCallback((key: string) => {
    setOpenBranches((p) => ({ ...p, [key]: !p[key] }));
  }, []);

  
  useEffect(() => {
    const submenus = document.querySelectorAll('.has-submenu');
    submenus.forEach((submenu) => {
      const listItems = submenu.querySelectorAll('li');
      const listItems2 = submenu.querySelectorAll('.single-demo');
      submenu.classList.remove('active');
      listItems.forEach((item) => {
        if (item.classList.contains('active')) submenu.classList.add('active');
      });
      listItems2.forEach((item) => {
        if (item.classList.contains('active')) submenu.classList.add('active');
      });
    });
  }, [pathname]);

  return (
    <ul className="main-nav align-items-lg-center">
      {variantType === 1 ? (
        <li className="d-none d-lg-block" key="categories-menu">
          <div>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle bg-light-300 fw-medium"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-layout-grid me-1" />
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Removals
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Interior
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ) : null}

      {sections.map((section) => {
        if (section.type === 'mega-home' && section.homeDemos?.length) {
          const megaActive = section.homeDemos.some((d) =>
            pathMatchesLocation(d.to, pathname),
          );
          return (
            <li
              key={section.id}
              className={`has-submenu megamenu ${megaActive ? 'active' : ''} `}
            >
              {variantType === 12 ? (
                <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(section.id);
                }}
              >
                {section.label} <i className="fa-solid fa-plus" />
              </Link>
              ): (
                <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(section.id);
                }}
              >
                {section.label} <i className="fas fa-chevron-down" />
              </Link>
              )}
              
              <ul className={`submenu mega-submenu ${submenuOpen[section.id] ? 'show-sub-menu' : ''}`}>
                <li>
                  <div className="megamenu-wrapper">
                    <div className="row row-cols-lg-5">
                      {section.homeDemos.map((demo, di) => (
                        <div className="col" key={`${demo.to}-${di}`}>
                          <div
                            className={`single-demo ${
                              pathMatchesLocation(demo.to, pathname)
                                ? 'active'
                                : ''
                            }`}
                          >
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
                                {demo.badge ? (
                                  <>
                                    {' '}
                                    <span className="new-home">{demo.badge}</span>
                                  </>
                                ) : null}
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
          );
        }

        if (section.type === 'dropdown' && section.items?.length) {
          const dropActive = sectionHasActiveRoute(section, pathname);
          const isPages = section.id === 'pages';
          return (
            <li
              key={section.id}
              className={`${isPages ? 'nav-item ' : ''}has-submenu ${
                dropActive ? 'active' : ''
              }`}
            >
             {variantType === 12 ? (
                <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(section.id);
                }}
              >
                {section.label} <i className="fa-solid fa-plus" />
              </Link>
              ): (
                <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(section.id);
                }}
              >
                {section.label} <i className="fas fa-chevron-down" />
              </Link>
              )}
              <SiteHeaderSubmenuRoot
                items={section.items}
                idPrefix={section.id}
                openBranches={openBranches}
                onToggleBranch={onToggleBranch}
                className={`submenu ${submenuOpen[section.id] ? 'show-sub-menu' : ''}`}
              />
            </li>
          );
        }

        return null;
      })}

      {variantType === 1 ? (
        <li className="nav-item" key="become-provider">
          <Link
            className="nav-link"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#provider"
          >
            Become a Provider
          </Link>
        </li>
      ) : null}

      {variantType !== 10 ? (
        <li className="nav-item" key="admin-link">
          <Link className="nav-link" target="_blank" rel="noreferrer" to={routes.adminDashboard}>
            Admin
          </Link>
        </li>
      ) : null}

      {variantType === 1 ? (
        <>
          <li className="nav-item d-sm-none" key="mobile-signin">
            <Link
              className="nav-link"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#login-modal"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item d-sm-none" key="mobile-join">
            <Link
              className="nav-link"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#register-modal"
            >
              Join Us
            </Link>
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default SiteHeaderMainNav;
