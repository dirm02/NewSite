import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ProviderHeader from "../frontend/providers/common/header";
import ProviderSidebar from "../frontend/providers/common/sidebar";
import { useSelector } from "react-redux";
import type { AppState } from "../../core/models/interface";
import RequireAuth from "../../core/auth/RequireAuth";
import DemoSurfaceBanner from "../frontend/common/state/DemoSurfaceBanner";

const ProviderLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const sidebarOverlayRef = useRef<HTMLDivElement>(null);
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);
  useEffect(() => {
    // Remove old classes first
    document.body.classList.remove("provider-page");

    // Add class if path starts with /provider
    if (pathname.startsWith("/provider")) {
      document.body.classList.add("provider-page");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("provider-page");
    };
  }, [pathname]);
  return (
    <div className="main-wrapper">
      <ProviderHeader />
      <ProviderSidebar />

      <RequireAuth allowedRoles={["provider"]}>
        <>
          <DemoSurfaceBanner />
          <Outlet />
        </>
      </RequireAuth>
      <div
        className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}
        ref={sidebarOverlayRef}
      ></div>
    </div>
  );
};

export default ProviderLayout;
