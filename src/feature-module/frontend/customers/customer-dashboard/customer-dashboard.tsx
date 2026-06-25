import { Link } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import CountUp from "react-countup";
import { useAuth } from "../../../../core/auth/AuthContext";
import { useCustomerRequests } from "../../../../core/hooks/useJobData";
import {
  customerJobDetailUrl,
  formatJobBudget,
  quoteComparisonUrl,
  requestStatusBadgeClass,
  requestStatusLabel,
} from "../../../../core/api/pocketbase/format";

/**
 * GHST-43: Customer dashboard summary is wired to live PocketBase
 * `service_requests` for the signed-in customer (via `useCustomerRequests`).
 * Metrics (total / open / in-progress / completed) and the recent-requests list
 * are computed from real data. Demo wallet/transactions/bookings/proposals/
 * activity widgets were removed because there is no MVP collection backing them
 * (revisit under a future Payments/Bookings phase). Empty state encourages
 * Create Job instead of showing fake bookings.
 */
const formatDate = (iso: string): string => {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
};

const CustomerDashboard = () => {
  const { user } = useAuth();
  const { data: requests, loading, error } = useCustomerRequests();

  const total = requests.length;
  const open = requests.filter((r) => r.status === "open").length;
  const inProgress = requests.filter((r) => r.status === "in_progress").length;
  const completed = requests.filter((r) => r.status === "completed").length;
  const recent = requests.slice(0, 8);

  const metrics = [
    { label: "Total Requests", value: total, icon: "ti ti-clipboard-list", bg: "bg-primary-transparent" },
    { label: "Open", value: open, icon: "ti ti-folder-open", bg: "bg-info-transparent" },
    { label: "In Progress", value: inProgress, icon: "ti ti-progress", bg: "bg-warning-transparent" },
    { label: "Completed", value: completed, icon: "ti ti-circle-check", bg: "bg-success-transparent" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <div>
              <h2 className="fs-24 fw-semibold mb-1">
                Welcome{user?.name ? `, ${user.name}` : ""}
              </h2>
              <p className="mb-0 text-gray">Here is an overview of your service requests.</p>
            </div>
            <Link to={all_routes.customerCreateJob} className="btn btn-linear-primary d-inline-flex align-items-center">
              <i className="ti ti-plus me-2" />
              Create Job
            </Link>
          </div>

          {error && (
            <div className="alert alert-warning" role="alert">
              We couldn&apos;t load your requests right now. Please try again. ({error})
            </div>
          )}

          {/* Metrics */}
          <div className="row row-gap-4 mb-4">
            {metrics.map((m) => (
              <div className="col-xxl-3 col-md-6 col-sm-6" key={m.label}>
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

          {/* Recent requests */}
          <div className="card w-100 mb-0">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">My Recent Requests</h5>
              <Link
                to={all_routes.userJob}
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
                  <p className="mt-3 text-muted mb-0">Loading your requests...</p>
                </div>
              ) : recent.length === 0 ? (
                <div className="text-center py-5">
                  <h6 className="fs-16 fw-semibold mb-1">No service requests yet</h6>
                  <p className="text-gray mb-3">
                    Post your first job and start receiving quotes from providers across Canada.
                  </p>
                  <Link to={all_routes.customerCreateJob} className="btn btn-linear-primary d-inline-flex align-items-center">
                    <i className="ti ti-plus me-2" />
                    Create Your First Job
                  </Link>
                </div>
              ) : (
                <div className="table-responsive border-0 mb-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>Request</th>
                        <th>Category</th>
                        <th>Budget</th>
                        <th>Posted</th>
                        <th>Status</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map((r) => (
                        <tr key={r.id}>
                          <td>
                            <Link to={customerJobDetailUrl(r.id)} className="fw-medium text-dark">
                              {r.title}
                            </Link>
                          </td>
                          <td>{r.expand?.category?.name ?? "—"}</td>
                          <td>{formatJobBudget(r.budget_min, r.budget_max)}</td>
                          <td>{formatDate(r.created)}</td>
                          <td>
                            <span className={`badge ${requestStatusBadgeClass(r.status)}`}>
                              {requestStatusLabel(r.status)}
                            </span>
                          </td>
                          <td className="text-end">
                            <Link to={quoteComparisonUrl(r.id)} className="btn btn-light btn-sm me-1">
                              Quotes
                            </Link>
                            <Link to={customerJobDetailUrl(r.id)} className="btn btn-light btn-sm">
                              View
                            </Link>
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

export default CustomerDashboard;
