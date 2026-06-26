import React from "react";
import { useLocation } from "react-router-dom";
import { getDemoSurface } from "../../../../core/navigation/demo-surfaces";
import FeatureComingSoon from "./FeatureComingSoon";

interface DemoSurfacePageGuardProps {
  children: React.ReactNode;
}

/**
 * GHST-61 — For provider/customer demo surfaces, hide fabricated template rows
 * and show an honest empty/coming-soon card instead. The original page markup is
 * preserved in the DOM (`d-none`) for future wiring. Live routes pass through.
 */
const DemoSurfacePageGuard: React.FC<DemoSurfacePageGuardProps> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const surface = getDemoSurface(pathname);

  if (!surface?.hideFakeContent) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <FeatureComingSoon
            title="No records yet"
            message={surface.message}
            icon="ti ti-database-off"
          />
        </div>
      </div>
      <div className="d-none" aria-hidden="true">
        {children}
      </div>
    </>
  );
};

export default DemoSurfacePageGuard;
