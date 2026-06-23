import { Link, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  formatJobBudget,
  requestStatusBadgeClass,
  requestStatusLabel,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import { useServiceRequest } from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";

const ProviderJobDetailPanel = () => {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get("id");
  const { data: job, loading, error } = useServiceRequest(requestId);

  if (!requestId) {
    return (
      <div className="alert alert-warning">
        Missing job id. Go to{" "}
        <Link to={all_routes.providerActiveJobs}>Active Jobs</Link>.
      </div>
    );
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <JobFlowStatus loading={loading} error={error}>
          {job && (
            <>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className={`badge ${requestStatusBadgeClass(job.status)}`}>
                  {requestStatusLabel(job.status)}
                </span>
                <span className="text-muted fs-13">#{job.id.slice(0, 8)}</span>
              </div>
              <h4 className="fw-semibold mb-2">{job.title}</h4>
              <p className="fs-14 mb-2">
                <i className="feather-map-pin me-1" />
                {serviceLocationLabel(
                  job.expand?.city?.name,
                  job.expand?.city?.region,
                )}
              </p>
              <p className="fw-semibold mb-3">
                {formatJobBudget(job.budget_min, job.budget_max)}
              </p>
              <p className="fs-14 mb-0">{job.description}</p>
            </>
          )}
        </JobFlowStatus>
      </div>
    </div>
  );
};

export default ProviderJobDetailPanel;
