import { Link } from "react-router-dom";
import {
  formatJobBudget,
  providerJobDetailUrl,
  requestStatusBadgeClass,
  requestStatusLabel,
} from "../../../../core/api/pocketbase/format";
import {
  useProviderAcceptedJobs,
  useProviderPendingQuotes,
} from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";

const ProviderActiveJobsPanel = () => {
  const {
    data: acceptedQuotes,
    loading: acceptedLoading,
    error: acceptedError,
  } = useProviderAcceptedJobs();
  const {
    data: pendingQuotes,
    loading: pendingLoading,
    error: pendingError,
  } = useProviderPendingQuotes();

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Active & Completed Jobs (Live)</h5>
        </div>
        <div className="card-body">
          <JobFlowStatus
            loading={acceptedLoading}
            error={acceptedError}
            empty={acceptedQuotes.length === 0}
            emptyMessage="No accepted jobs yet. Submit proposals from the job feed."
          >
            <div className="row row-gap-3">
              {acceptedQuotes.map((quote) => {
                const job = quote.expand?.request;
                if (!job) return null;
                return (
                  <div key={quote.id} className="col-md-6">
                    <div className="card mb-0 h-100">
                      <div className="card-body">
                        <span
                          className={`badge ${requestStatusBadgeClass(job.status)} mb-2`}
                        >
                          {requestStatusLabel(job.status)}
                        </span>
                        <h6 className="fw-semibold mb-2">
                          <Link to={providerJobDetailUrl(job.id)}>
                            {job.title}
                          </Link>
                        </h6>
                        <p className="fs-14 mb-2">
                          Your quote: <strong>${quote.amount}</strong>
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          Client budget:{" "}
                          {formatJobBudget(job.budget_min, job.budget_max)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </JobFlowStatus>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Pending Proposals</h5>
        </div>
        <div className="card-body">
          <JobFlowStatus
            loading={pendingLoading}
            error={pendingError}
            empty={pendingQuotes.length === 0}
            emptyMessage="No pending proposals."
          >
            <ul className="list-group list-group-flush">
              {pendingQuotes.map((quote) => (
                <li
                  key={quote.id}
                  className="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  <div>
                    <strong>{quote.expand?.request?.title ?? "Job"}</strong>
                    <p className="mb-0 fs-13 text-muted">${quote.amount}</p>
                  </div>
                  {quote.expand?.request && (
                    <Link
                      to={providerJobDetailUrl(quote.expand.request.id)}
                      className="btn btn-sm btn-white"
                    >
                      View
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </JobFlowStatus>
        </div>
      </div>
    </>
  );
};

export default ProviderActiveJobsPanel;
