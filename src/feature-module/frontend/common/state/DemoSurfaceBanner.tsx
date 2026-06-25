import { useLocation } from "react-router-dom";
import { getDemoSurface } from "../../../../core/navigation/demo-surfaces";

/**
 * GHST-58: renders an honest "sample data / coming soon" banner at the top of a
 * role page when the current route is a classified demo surface
 * (see core/navigation/demo-surfaces.ts). Live surfaces render nothing. The
 * page itself is never hidden or deleted — only labelled.
 *
 * Rendered once by the customer/provider layouts so individual template pages
 * don't each need editing.
 */
const DemoSurfaceBanner = () => {
  const { pathname } = useLocation();
  const surface = getDemoSurface(pathname);
  if (!surface) return null;

  return (
    <div className="page-wrapper" style={{ minHeight: "unset" }}>
      <div className="content pb-0">
        <div
          className="alert alert-warning d-flex align-items-center mb-0"
          role="status"
          data-testid="demo-surface-banner"
        >
          <i className="ti ti-flask-2 me-2 fs-18" />
          <span>{surface.message}</span>
        </div>
      </div>
    </div>
  );
};

export default DemoSurfaceBanner;
