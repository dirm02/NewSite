import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useAuth } from "../../../../core/auth/AuthContext";
import { useProviderDashboard } from "../../../../core/hooks/useJobData";
import {
  formatJobBudget,
  quoteStatusLabel,
} from "../../../../core/api/pocketbase/format";

/**
 * GHST-45: Provider dashboard summary wired to PocketBase. Resolves the signed-in
 * provider's `provider_profiles` record, then loads their services, quotes
 * (all statuses, with request expand), received reviews, and the count of open
 * job opportunities. The previous static appointment/earnings/subscription/
 * calendar template was removed because none of it is backed by an MVP
 * collection (revisit under a future Payments/Bookings/Subscriptions phase).
 */
const ProviderDashboard = () => {
  const { user } = useAuth();
  const { data, loading, error } = useProviderDashboard();
  const { profile, services, quotes, openOpportunities } = data;

  const activeServices = services.filter((s) => s.status === "active").length;
  const quotesSubmitted = quotes.length;
  const accepted = quotes.filter((q) => q.status === "accepted");
  const activeJobs = accepted.filter(
    (q) => q.expand?.request?.status === "in_progress",
  ).length;
  const completedJobs = accepted.filter(
    (q) => q.expand?.request?.status === "completed",
  ).length;
  const reviewCount = profile?.rating_count ?? data.reviews.length;
  const avgRating = profile?.rating_avg ?? null;

  const recentQuotes = quotes.slice(0, 6);

  const metrics = [
    { label: "Active Services", value: activeServices, icon: "ti ti-briefcase", bg: "bg-primary-transparent" },
    { label: "Open Opportunities", value: openOpportunities, icon: "ti ti-folder-open", bg: "bg-info-transparent" },
    { label: "Quotes Submitted", value: quotesSubmitted, icon: "ti ti-file-invoice", bg: "bg-secondary-transparent" },
    { label: "Active Jobs", value: activeJobs, icon: "ti ti-progress", bg: "bg-warning-transparent" },
    { label: "Completed Jobs", value: completedJobs, icon: "ti ti-circle-check", bg: "bg-success-transparent" },
    { label: "Reviews", value: reviewCount, icon: "ti ti-star", bg: "bg-danger-transparent" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <div>
              <h2 className="fs-24 fw-semibold mb-1">
                {profile?.business_name || user?.name || "Provider"} Dashboard
              </h2>
              <p className="mb-0 text-gray">
                {avgRating != null
                  ? `${avgRating.toFixed(1)} ★ from ${reviewCount} review${reviewCount === 1 ? "" : "s"}`
                  : "Your workspace overview"}
              </p>
            </div>
            <div className="d-flex gap-2">
              <Link to={all_routes.providerJobFeed} className="btn btn-light d-inline-flex align-items-center">
                <i className="ti ti-search me-2" />
                Browse Job Feed
              </Link>
              <Link to={all_routes.providerService} className="btn btn-linear-primary d-inline-flex align-items-center">
                <i className="ti ti-plus me-2" />
                Add Service
              </Link>
            </div>
          </div>

          {error && (
            <div className="alert alert-warning" role="alert">
              We couldn&apos;t load your dashboard right now. ({error})
            </div>
          )}

          {!loading && !profile && !error && (
            <div className="alert alert-info" role="alert">
              Your provider profile isn&apos;t set up yet. Complete your profile to
              start listing services and quoting on jobs.
            </div>
          )}

          {/* Metrics */}
          <div className="row row-gap-4 mb-4">
            {metrics.map((m) => (
              <div className="col-xxl-2 col-md-4 col-sm-6" key={m.label}>
                <div className="card dash-widget mb-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className={`dash-icon ${m.bg} d-flex justify-content-center align-items-center rounded-circle`}>
                        <i className={m.icon} />
                      </span>
                      <div className="ms-2">
                        <span className="fs-14">{m.label}</span>
                        <h3 className="fs-20 fw-semibold">
                          {loading ? "—" : <CountUp className="counter" end={m.value} />}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent quotes */}
          <div className="card w-100 mb-0">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">My Recent Quotes</h5>
              <Link
                to={all_routes.providerProposal}
                className="link-primary text-decoration-underline fs-16 fw-medium"
              >
                View All
              </Link>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : recentQuotes.length === 0 ? (
                <div className="text-center py-5">
                  <h6 className="fs-16 fw-semibold mb-1">No quotes yet</h6>
                  <p className="text-gray mb-3">
                    {activeServices === 0
                      ? "Add a service and start quoting on open jobs across Canada."
                      : "Browse the job feed and submit your first quote."}
                  </p>
                  <Link
                    to={activeServices === 0 ? all_routes.providerService : all_routes.providerJobFeed}
                    className="btn btn-linear-primary d-inline-flex align-items-center"
                  >
                    <i className="ti ti-arrow-right me-2" />
                    {activeServices === 0 ? "Add a Service" : "Browse Job Feed"}
                  </Link>
                </div>
              ) : (
                <div className="table-responsive border-0 mb-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>Job</th>
                        <th>Your Quote</th>
                        <th>Job Budget</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentQuotes.map((q) => (
                        <tr key={q.id}>
                          <td className="fw-medium text-dark">
                            {q.expand?.request?.title ?? "—"}
                          </td>
                          <td>${q.amount}</td>
                          <td>
                            {formatJobBudget(
                              q.expand?.request?.budget_min,
                              q.expand?.request?.budget_max,
                            )}
                          </td>
                          <td>
                            <span className="badge bg-light text-dark border">
                              {quoteStatusLabel(q.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
