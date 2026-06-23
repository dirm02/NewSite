import { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "overlayscrollbars/overlayscrollbars.css";
import {
  providerSidebarData,
  type ProviderSidebarItem,
} from './providerSidebarData';
import { useAuth } from '../../../../core/auth/AuthContext';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ProviderSidebar = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Sidebar logout must clear the PocketBase session just like the header logout.
  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    logout();
    navigate(all_routes.login);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (location.pathname.includes('/providers/settings')) {
      setOpenSubmenus((prev) => new Set(prev).add('settings'));
    }
  }, [location.pathname]);

  const handleMouseEnter = () => {
    const body = document.body;
    if (body.classList.contains('mini-sidebar')) {
      body.classList.add('expand-menu');
    }
  };

  const handleMouseLeave = () => {
    const body = document.body;
    if (body.classList.contains('mini-sidebar')) {
      body.classList.remove('expand-menu');
    }
  };

  const toggleSubmenu = (itemId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const isRouteActive = (itemTo: string, currentPath: string): boolean => {
    if (itemTo === 'javascript:void(0);' || itemTo === '#') return false;

    if (itemTo === currentPath) return true;

    if (itemTo !== '/' && currentPath.startsWith(itemTo)) {
      const nextChar = currentPath[itemTo.length];
      return nextChar === undefined || nextChar === '/';
    }

    return false;
  };

  const hasActiveRelatedRoute = (
    relatedRoutes: string[] | undefined,
    currentPath: string,
  ): boolean => {
    if (!relatedRoutes) return false;
    return relatedRoutes.some((route) => isRouteActive(route, currentPath));
  };

  const hasActiveChild = (
    children: ProviderSidebarItem[] | undefined,
    currentPath: string,
  ): boolean => {
    if (!children) return false;
    return children.some((child) => {
      const active = isRouteActive(child.to, currentPath);
      const related = hasActiveRelatedRoute(child.relatedRoutes, currentPath);
      return active || related;
    });
  };

  const renderMenuItem = (item: ProviderSidebarItem, isSubmenu = false) => {
    const pathActive = isRouteActive(item.to, location.pathname);
    const relatedActive = hasActiveRelatedRoute(
      item.relatedRoutes,
      location.pathname,
    );
    const childrenActive = hasActiveChild(item.children, location.pathname);
    const shouldHighlight = pathActive || relatedActive || childrenActive;
    const isSubmenuOpen = openSubmenus.has(item.id);

    if (item.children && item.children.length > 0) {
      const parentActive =
        childrenActive || location.pathname.includes('/providers/settings');
      return (
        <li key={item.id} className="submenu ">
          <Link
            to={item.to}
            className={`${isSubmenuOpen ? 'subdrop' : ''} ${parentActive ? 'active' : ''}`}
            onClick={(e) => toggleSubmenu(item.id, e)}
          >
   
              <i className={item.icon} />
           
            <span>{item.label}</span>
            <span className="menu-arrow" />
          </Link>
          <ul style={{ display: isSubmenuOpen ? 'block' : 'none' }}>
            {item.children.map((child) => renderMenuItem(child, true))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.id} className={shouldHighlight ? 'active' : ''}>
        <Link
          to={item.to}
          {...(item.id === 'logout' ? { onClick: handleLogout } : {})}
          {...(item.isModal && item.modalTarget
            ? {
                'data-bs-toggle': 'modal' as const,
                'data-bs-target': item.modalTarget,
              }
            : {})}
        >
          {!isSubmenu && (
         
              <i className={item.icon} />
       
          )}
          {isSubmenu && <i className={item.icon} />}
          {isSubmenu ? item.label : <span>{item.label}</span>}
          {item.badge && (
            <span className={`count ${item.badge.className}`}>
              {item.badge.text}
            </span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="sidebar"
        id="sidebar"
      >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                {providerSidebarData.map((item) => renderMenuItem(item))}
              </ul>
            </div>
          </div>
     
      </div>
      {/* Delete Account */}
      <div className="modal fade custom-modal" id="del-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
              <h5 className="modal-title">Delete Account</h5>
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="ti ti-circle-x-filled fs-20" />
              </a>
            </div>
            <form>
              <div className="modal-body">
                <p className="mb-3">
                  Are you sure you want to delete This Account? To delete your
                  account, Type your password.
                </p>
                <div className="mb-0">
                  <label className="form-label">Password</label>
                  <div className="pass-group">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="form-control pass-input"
                      placeholder="*************"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className={`toggle-password feather  ${passwordVisible ? 'icon-eye' : 'icon-eye-off'}`}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-dark"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete Account */}
    </>
  );
});

ProviderSidebar.displayName = 'ProviderSidebar';

export default ProviderSidebar;
