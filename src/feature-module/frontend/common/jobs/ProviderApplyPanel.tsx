import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  formatJobBudget,
  providerJobDetailUrl,
  requestStatusLabel,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import {
  useJobActions,
  useProviderRequestQuote,
  useServiceRequest,
} from "../../../../core/hooks/useJobData";
import { useAuth } from "../../../../core/auth/AuthContext";
import JobFlowStatus from "./JobFlowStatus";
import { useState } from "react";

const ProviderApplyPanel = () => {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get("id");
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data: job, loading, error } = useServiceRequest(requestId);
  const { data: existingQuote, loading: existingLoading } =
    useProviderRequestQuote(requestId);
  const { submitQuote } = useJobActions();

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [estimatedDays, setEstimatedDays] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestId) return;
    const parsedAmount = Number(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      setSubmitError("Enter a valid quote amount.");
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitQuote({
        requestId,
        amount: parsedAmount,
        message: message.trim(),
        estimated_days: estimatedDays ? Number(estimatedDays) : undefined,
      });
      navigate(all_routes.providerActiveJobs);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit quote");
    } finally {
      setSubmitting(false);
    }
  };

  if (!requestId) {
    return (
      <div className="alert alert-warning">
        Missing job id. Browse the{" "}
        <Link to={all_routes.providerJobFeed}>job feed</Link>.
      </div>
    );
  }

  if (!user) {
    return (
      <div className="alert alert-warning">
        Sign in as a provider to submit a proposal.{" "}
        <Link to={all_routes.login}>Log in</Link>
      </div>
    );
  }

  return (
    <div className="row row-gap-4">
      <div className="col-xl-5">
        <JobFlowStatus loading={loading} error={error}>
          {job && (
            <div className="card mb-0">
              <div className="card-body">
                <span className="badge badge-success mb-2">
                  {requestStatusLabel(job.status)}
                </span>
                <h4 className="fw-semibold mb-3">{job.title}</h4>
                <p className="fs-14 mb-3">{job.description}</p>
                <p className="fs-14 mb-1">
                  <i className="feather-dollar-sign me-1" />
                  {formatJobBudget(job.budget_min, job.budget_max)}
                </p>
                <p className="fs-14 mb-0">
                  <i className="feather-map-pin me-1" />
                  {serviceLocationLabel(
                    job.expand?.city?.name,
                    job.expand?.city?.region,
                  )}
                </p>
              </div>
            </div>
          )}
        </JobFlowStatus>
      </div>
      <div className="col-xl-7">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">Submit Your Proposal</h5>
          </div>
          <div className="card-body">
            {existingQuote ? (
              <div className="alert alert-info" data-testid="already-quoted-notice">
                You&apos;ve already submitted a proposal for this job
                {` ($${existingQuote.amount})`}.
                {job && (
                  <>
                    {" "}
                    <Link to={providerJobDetailUrl(job.id)}>View job</Link>
                  </>
                )}
              </div>
            ) : job?.status !== "open" ? (
              <div className="alert alert-info">
                This job is no longer accepting proposals.
                {job && (
                  <>
                    {" "}
                    <Link to={providerJobDetailUrl(job.id)}>View job</Link>
                  </>
                )}
              </div>
            ) : existingLoading ? (
              <div className="text-center py-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div className="alert alert-danger">{submitError}</div>
                )}
                <div className="mb-3">
                  <label className="form-label">
                    Quote Price (CAD) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="form-control"
                    data-testid="quote-amount-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estimated Days</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    value={estimatedDays}
                    onChange={(e) => setEstimatedDays(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cover Letter</label>
                  <textarea
                    className="form-control"
                    data-testid="quote-cover-letter-input"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Explain why you're the best fit..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-testid="submit-proposal-btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Proposal"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderApplyPanel;
