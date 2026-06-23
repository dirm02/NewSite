import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { all_routes } from "../data/routes/all_routes";
import type { PbUserRole } from "../api/pocketbase/types";
import { dashboardPathForRole } from "./roleRoutes";

interface RequireAuthProps {
  allowedRoles: PbUserRole[];
  children?: React.ReactNode;
}

/**
 * Guards customer/provider dashboard routes — GHST-11.
 * Redirects unauthenticated users to login; wrong role → their dashboard.
 */
const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles, children }) => {
  const { loading, isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to={all_routes.login}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={dashboardPathForRole(user.role)} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default RequireAuth;
