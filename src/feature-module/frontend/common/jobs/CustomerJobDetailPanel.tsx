import { Link, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  formatJobBudget,
  quoteComparisonUrl,
  requestStatusBadgeClass,
  requestStatusLabel,
  serviceLocationLabel,
  providerDisplayName,
  initialsFromName,
  quoteStatusLabel,
} from "../../../../core/api/pocketbase/format";
import {
  useJobActions,
  useRequestQuotes,
  useServiceRequest,
} from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";
import { useState } from "react";

const CustomerJobDetailPanel = () => {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get("id");
  const { data: job, loading, error, reload } = useServiceRequest(requestId);
  const {
    data: quotes,
    loading: quotesLoading,
    error: quotesError,
    reload: reloadQuotes,
  } = useRequestQuotes(requestId);
  const { acceptQuote, completeRequest, cancelRequest, submitReview } =
    useJobActions();
  const [actionError, setActionError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewBusy, setReviewBusy] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [reviewDone, setReviewDone] = useState(false);

  const acceptedQuote = quotes.find((q) => q.status === "accepted");

  const handleSubmitReview = async () => {
    if (!job) return;
    setReviewBusy(true);
    setReviewError(null);
    try {
      await submitReview({
        requestId: job.id,
        providerId: acceptedQuote?.provider,
        rating: reviewRating,
        message: reviewMessage,
      });
      setReviewDone(true);
    } catch (err) {
      setReviewError(err instanceof Error ? err.message : "Could not submit review");
    } finally {
      setReviewBusy(false);
    }
  };

  const runAction = async (
    key: string,
    fn: () => Promise<unknown>,
    onSuccess?: () => void,
  ) => {
    setBusy(key);
    setActionError(null);
    try {
      await fn();
      reload();
      reloadQuotes();
      onSuccess?.();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Action failed");
    } finally {
      setBusy(null);
    }
  };

  if (!requestId) {
    return (
      <div className="alert alert-warning">
        Missing job id. Open a job from{" "}
        <Link to={all_routes.userJob}>Your Jobs</Link>.
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
                <div>
                  <span className={`badge ${requestStatusBadgeClass(job.status)} me-2`}>
                    {requestStatusLabel(job.status)}
                  </span>
                  <span className="text-muted fs-13">#{job.id.slice(0, 8)}</span>
                </div>
                <div className="d-flex gap-2">
                  {job.status === "open" && (
                    <Link
                      to={quoteComparisonUrl(job.id)}
                      className="btn btn-sm btn-dark"
                    >
                      Compare Quotes
                    </Link>
                  )}
                  {job.status === "in_progress" && (
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      data-testid="mark-job-completed-btn"
                      disabled={busy === "complete"}
                      onClick={() =>
                        runAction("complete", () => completeRequest(job.id))
                      }
                    >
                      Mark Completed
                    </button>
                  )}
                  {(job.status === "open" || job.status === "in_progress") && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      disabled={busy === "cancel"}
                      onClick={() =>
                        runAction("cancel", () => cancelRequest(job.id))
                      }
                    >
                      Cancel Job
                    </button>
                  )}
                </div>
              </div>
              <h4 className="fw-semibold mb-2">{job.title}</h4>
              {job.expand?.category && (
                <p className="text-muted fs-14 mb-2">
                  <i className="ti ti-category-2 me-1" />
                  {job.expand.category.name}
                </p>
              )}
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
              <p className="fs-14">{job.description}</p>
            </>
          )}
        </JobFlowStatus>

        {actionError && (
          <div className="alert alert-danger mt-3">{actionError}</div>
        )}

        <hr className="my-4" />
        <h5 className="fw-semibold mb-3">Proposals ({quotes.length})</h5>
        <JobFlowStatus
          loading={quotesLoading}
          error={quotesError}
          empty={quotes.length === 0}
          emptyMessage="No quotes yet. Providers can submit proposals from the job feed."
        >
          {quotes.map((quote) => {
            const provider = quote.expand?.provider;
            const name = providerDisplayName(provider);
            return (
              <div key={quote.id} className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <div className="d-flex gap-3">
                    <div className="rounded-circle avatar avatar-md bg-light text-dark fs-14 fw-semibold d-flex align-items-center justify-content-center">
                      {initialsFromName(name)}
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{name}</h6>
                      <p className="mb-0 fs-14 fw-semibold">${quote.amount}</p>
                      {quote.estimated_days != null && (
                        <p className="mb-0 fs-13 text-muted">
                          Est. {quote.estimated_days} days
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-light text-dark border mb-2">
                      {quoteStatusLabel(quote.status)}
                    </span>
                    {job?.status === "open" && quote.status === "pending" && (
                      <div>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          data-testid={`accept-quote-${quote.id}`}
                          disabled={busy === quote.id}
                          onClick={() =>
                            runAction(quote.id, () => acceptQuote(quote.id))
                          }
                        >
                          Accept Quote
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {quote.message && (
                  <p className="fs-14 mb-0 mt-2 text-muted">{quote.message}</p>
                )}
              </div>
            );
          })}
        </JobFlowStatus>

        {job?.status === "completed" && (
          <>
            <hr className="my-4" />
            <h5 className="fw-semibold mb-3">Leave a Review</h5>
            {reviewDone ? (
              <div className="alert alert-success mb-0">
                Thanks! Your review has been submitted.
              </div>
            ) : (
              <div className="border rounded-3 p-3">
                {reviewError && (
                  <div className="alert alert-danger">{reviewError}</div>
                )}
                <div className="mb-3" style={{ maxWidth: 200 }}>
                  <label className="form-label">Rating</label>
                  <select
                    className="form-select"
                    data-testid="review-rating"
                    value={reviewRating}
                    onChange={(e) => setReviewRating(Number(e.target.value))}
                  >
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>
                        {n} star{n === 1 ? "" : "s"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Your review</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    data-testid="review-message"
                    value={reviewMessage}
                    onChange={(e) => setReviewMessage(e.target.value)}
                    placeholder="Share your experience with this provider..."
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-testid="submit-review-btn"
                  disabled={reviewBusy}
                  onClick={handleSubmitReview}
                >
                  {reviewBusy ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerJobDetailPanel;
