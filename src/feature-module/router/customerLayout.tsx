import { Outlet, useLocation } from "react-router-dom";
import CustomerSidebar from "../frontend/customers/common/customerSidebar";
import { useEffect, useRef } from "react";
import CustomerHeader from "../frontend/customers/common/header";
import Modal from "../frontend/customers/customer-dashboard/modal";
import RequireAuth from "../../core/auth/RequireAuth";
import DemoSurfaceBanner from "../frontend/common/state/DemoSurfaceBanner";

const CustomerLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove old classes first
    document.body.classList.remove( "customer-page");

    // Add class if path starts with /customer
    if (pathname.startsWith("/customer")) {
      document.body.classList.add("customer-page");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("customer-page");
    };
  }, [pathname]);
  return (
    <div className="main-wrapper">
    <CustomerHeader sidebarRef={sidebarRef} sidebarOverlayRef={sidebarOverlayRef}/>
      <CustomerSidebar ref={sidebarRef} />
      <Modal/>
      <RequireAuth allowedRoles={["customer"]}>
        <>
          <DemoSurfaceBanner />
          <Outlet />
        </>
      </RequireAuth>
      <div className="sidebar-overlay" ref={sidebarOverlayRef}></div>
    </div>
  );
};

export default CustomerLayout;
