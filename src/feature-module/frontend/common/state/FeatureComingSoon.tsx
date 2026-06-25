import React from "react";
import { Link } from "react-router-dom";

interface FeatureComingSoonProps {
  /** Short honest title, e.g. "Messaging is coming soon". */
  title: string;
  /** One or two sentences explaining the current state honestly. */
  message: string;
  /** Tabler icon class. */
  icon?: string;
  /** Optional CTA that points at a real, working surface. */
  ctaLabel?: string;
  ctaTo?: string;
}

/**
 * GHST-57/GHST-58: a non-confusing "coming soon" state for template surfaces
 * that are intentionally visible but not yet backed by PocketBase. It states
 * plainly that the feature isn't available yet (no fake data), and can point the
 * user at a real working flow. The original template markup is kept (hidden) for
 * future wiring — this never deletes a page or feature.
 */
const FeatureComingSoon: React.FC<FeatureComingSoonProps> = ({
  title,
  message,
  icon = "ti ti-tools",
  ctaLabel,
  ctaTo,
}) => {
  return (
    <div className="card" data-testid="feature-coming-soon">
      <div className="card-body text-center py-5">
        <span
          className="avatar avatar-xl bg-primary-transparent text-primary rounded-circle mb-3 d-inline-flex align-items-center justify-content-center"
          aria-hidden="true"
        >
          <i className={`${icon} fs-24`} />
        </span>
        <h5 className="fs-18 fw-semibold mb-2">{title}</h5>
        <p className="text-gray mb-3 mx-auto" style={{ maxWidth: 520 }}>
          {message}
        </p>
        <span className="badge bg-info-transparent text-info">Coming soon</span>
        {ctaLabel && ctaTo && (
          <div className="mt-4">
            <Link to={ctaTo} className="btn btn-linear-primary">
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureComingSoon;
