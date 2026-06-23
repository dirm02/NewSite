import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ProviderHeader from "../frontend/providers/common/header";
import ProviderSidebar from "../frontend/providers/common/sidebar";
import { useSelector } from "react-redux";
import type { AppState } from "../../core/models/interface";
import RequireAuth from "../../core/auth/RequireAuth";

const ProviderLayout = () => {
  const location = useLocation();
  const sidebarOverlayRef = useRef<HTMLDivElement>(null);
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);
  useEffect(() => {
    const { pathname } = location;

    // Remove old classes first
    document.body.classList.remove("provider-page");

    // Add class if path starts with /customer
    if (pathname.startsWith("/provider")) {
      document.body.classList.add("provider-page");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("provider-page");
    };
  }, [location.pathname]);
  return (
    <div className="main-wrapper">
      <ProviderHeader />
      <ProviderSidebar />

      <RequireAuth allowedRoles={["provider"]}>
        <Outlet />
      </RequireAuth>
      <div
        className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}
        ref={sidebarOverlayRef}
      ></div>
    </div>
  );
};

export default ProviderLayout;
