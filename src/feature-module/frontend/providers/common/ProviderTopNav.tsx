import { Link, useLocation } from "react-router-dom";
import { PROVIDER_MVP_TOP_NAV } from "../../../../core/navigation/role-navigation-mvp";

function isRouteActive(itemTo: string, currentPath: string): boolean {
  if (itemTo === "javascript:void(0);" || itemTo === "#") return false;
  if (itemTo === currentPath) return true;
  if (itemTo !== "/" && currentPath.startsWith(itemTo)) {
    const next = currentPath[itemTo.length];
    return next === undefined || next === "/";
  }
  return false;
}

function linkActive(
  item: (typeof PROVIDER_MVP_TOP_NAV)[number],
  pathname: string,
): boolean {
  if (isRouteActive(item.to, pathname)) return true;
  return (
    item.relatedRoutes?.some((route) => isRouteActive(route, pathname)) ?? false
  );
}

const ProviderTopNav = () => {
  const { pathname } = useLocation();

  return (
    <ul className="main-nav provider-mvp-nav d-none d-lg-flex align-items-center me-3">
      {PROVIDER_MVP_TOP_NAV.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${linkActive(item, pathname) ? "active" : ""}`}
        >
          <Link className="nav-link" to={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProviderTopNav;
