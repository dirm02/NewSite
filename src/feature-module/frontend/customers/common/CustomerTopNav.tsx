import { Link, useLocation } from "react-router-dom";
import { CUSTOMER_MVP_TOP_NAV } from "../../../../core/navigation/role-navigation-mvp";

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
  item: (typeof CUSTOMER_MVP_TOP_NAV)[number],
  pathname: string,
): boolean {
  if (isRouteActive(item.to, pathname)) return true;
  return (
    item.relatedRoutes?.some((route) => isRouteActive(route, pathname)) ?? false
  );
}

const CustomerTopNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      {CUSTOMER_MVP_TOP_NAV.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${linkActive(item, pathname) ? "active" : ""}`}
        >
          <Link className="nav-link" to={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CustomerTopNav;
