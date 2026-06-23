import { Link } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  customerJobDetailUrl,
  formatJobBudget,
  quoteComparisonUrl,
  requestStatusBadgeClass,
  requestStatusLabel,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import type { PbServiceRequest } from "../../../../core/api/pocketbase/types";
import { useCustomerRequests } from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";

const CustomerJobsPanel = () => {
  const { data: jobs, loading, error } = useCustomerRequests();

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Your Jobs (Live)</h5>
        <Link to={all_routes.customerCreateJob} className="btn btn-sm btn-primary">
          Post New Job
        </Link>
      </div>
      <div className="card-body">
        <JobFlowStatus
          loading={loading}
          error={error}
          empty={jobs.length === 0}
          emptyMessage="You have no service requests yet. Post your first job to get quotes."
        >
          <div className="row row-gap-3">
            {jobs.map((job) => (
              <div key={job.id} className="col-md-6">
                <CustomerJobCard job={job} />
              </div>
            ))}
          </div>
        </JobFlowStatus>
      </div>
    </div>
  );
};

function CustomerJobCard({ job }: { job: PbServiceRequest }) {
  const city = job.expand?.city;
  const category = job.expand?.category?.name;

  return (
    <div className="card mb-0 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span className={`badge ${requestStatusBadgeClass(job.status)}`}>
            {requestStatusLabel(job.status)}
          </span>
          <span className="text-muted fs-12">#{job.id.slice(0, 8)}</span>
        </div>
        <h6 className="fw-semibold mb-2">
          <Link to={customerJobDetailUrl(job.id)}>{job.title}</Link>
        </h6>
        {category && (
          <p className="fs-13 text-muted mb-1">
            <i className="ti ti-category-2 me-1" />
            {category}
          </p>
        )}
        <p className="fs-13 mb-2">
          <i className="feather-map-pin me-1" />
          {serviceLocationLabel(city?.name, city?.region)}
        </p>
        <p className="fs-14 mb-3 text-truncate-2">
          {stripHtml(job.description ?? "")}
        </p>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span className="fw-semibold">
            {formatJobBudget(job.budget_min, job.budget_max)}
          </span>
          <div className="d-flex gap-2">
            <Link
              to={customerJobDetailUrl(job.id)}
              className="btn btn-sm btn-white"
            >
              Details
            </Link>
            {job.status === "open" && (
              <Link
                to={quoteComparisonUrl(job.id)}
                className="btn btn-sm btn-dark"
              >
                Compare Quotes
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export default CustomerJobsPanel;
