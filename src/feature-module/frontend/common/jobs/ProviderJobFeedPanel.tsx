import { Link } from "react-router-dom";
import {
  formatJobBudget,
  providerApplyJobUrl,
  requestStatusLabel,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import { useOpenJobFeed } from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";
import { useState } from "react";

const ProviderJobFeedPanel = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { data: jobs, loading, error } = useOpenJobFeed(query);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">Open Jobs (Live)</h5>
      </div>
      <div className="card-body">
        <form
          className="row g-2 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(search.trim());
          }}
        >
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-dark w-100">
              Search
            </button>
          </div>
        </form>

        <JobFlowStatus
          loading={loading}
          error={error}
          empty={jobs.length === 0}
          emptyMessage="No open jobs right now. Check back later."
        >
          {jobs.map((job) => (
            <div key={job.id} className="card job-card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                  <h6 className="fw-semibold mb-0">
                    <Link to={providerApplyJobUrl(job.id)}>{job.title}</Link>
                  </h6>
                  <span className="badge badge-success">
                    {requestStatusLabel(job.status)}
                  </span>
                </div>
                <p className="fs-14 mb-2 text-truncate-2">{job.description}</p>
                <div className="d-flex flex-wrap gap-3 fs-13 mb-3">
                  <span>
                    <i className="feather-dollar-sign me-1" />
                    {formatJobBudget(job.budget_min, job.budget_max)}
                  </span>
                  <span>
                    <i className="feather-map-pin me-1" />
                    {serviceLocationLabel(
                      job.expand?.city?.name,
                      job.expand?.city?.region,
                    )}
                  </span>
                </div>
                <Link
                  to={providerApplyJobUrl(job.id)}
                  className="btn btn-sm btn-primary"
                >
                  Submit Proposal
                </Link>
              </div>
            </div>
          ))}
        </JobFlowStatus>
      </div>
    </div>
  );
};

export default ProviderJobFeedPanel;
