import { Link, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  customerJobDetailUrl,
  providerDisplayName,
  quoteStatusLabel,
} from "../../../../core/api/pocketbase/format";
import {
  useJobActions,
  useRequestQuotes,
  useServiceRequest,
} from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";
import { useMemo, useState } from "react";

const QuoteComparisonPanel = () => {
  const [searchParams] = useSearchParams();
  const requestId =
    searchParams.get("requestId") ?? searchParams.get("id");
  const { data: job, loading, error } = useServiceRequest(requestId);
  const {
    data: quotes,
    loading: quotesLoading,
    error: quotesError,
    reload,
  } = useRequestQuotes(requestId);
  const { acceptQuote } = useJobActions();
  const [busy, setBusy] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const pendingQuotes = useMemo(
    () => quotes.filter((q) => q.status === "pending"),
    [quotes],
  );
  const avgPrice = useMemo(() => {
    if (quotes.length === 0) return 0;
    return quotes.reduce((sum, q) => sum + q.amount, 0) / quotes.length;
  }, [quotes]);
  const lowest = useMemo(
    () => (quotes.length ? Math.min(...quotes.map((q) => q.amount)) : 0),
    [quotes],
  );

  const handleAccept = async (quoteId: string) => {
    setBusy(quoteId);
    setActionError(null);
    try {
      await acceptQuote(quoteId);
      reload();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Accept failed");
    } finally {
      setBusy(null);
    }
  };

  if (!requestId) {
    return (
      <div className="alert alert-warning">
        Select a job from{" "}
        <Link to={all_routes.userJob}>Your Jobs</Link> to compare quotes.
      </div>
    );
  }

  return (
    <>
      <JobFlowStatus loading={loading} error={error}>
        {job && (
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="fw-semibold mb-1">{job.title}</h5>
              <Link to={customerJobDetailUrl(job.id)} className="fs-14">
                View job details
              </Link>
            </div>
          </div>
        )}
      </JobFlowStatus>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Average Price</p>
              <h4 className="fw-semibold mb-0">
                ${avgPrice ? avgPrice.toFixed(0) : "—"}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Lowest Price</p>
              <h4 className="fw-semibold mb-0">
                ${lowest ? lowest.toFixed(0) : "—"}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Total Proposals</p>
              <h4 className="fw-semibold mb-0">{quotes.length}</h4>
            </div>
          </div>
        </div>
      </div>

      {actionError && <div className="alert alert-danger">{actionError}</div>}

      <div className="card">
        <div className="card-body p-0">
          <JobFlowStatus
            loading={quotesLoading}
            error={quotesError}
            empty={quotes.length === 0}
            emptyMessage="No quotes to compare yet."
          >
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Amount</th>
                    <th>Delivery</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((quote) => (
                    <tr key={quote.id}>
                      <td>{providerDisplayName(quote.expand?.provider)}</td>
                      <td className="fw-semibold">${quote.amount}</td>
                      <td>
                        {quote.estimated_days != null
                          ? `${quote.estimated_days} days`
                          : "—"}
                      </td>
                      <td>{quoteStatusLabel(quote.status)}</td>
                      <td>
                        {job?.status === "open" &&
                          quote.status === "pending" && (
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              disabled={busy === quote.id}
                              onClick={() => handleAccept(quote.id)}
                            >
                              Accept
                            </button>
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {job?.status === "open" && pendingQuotes.length > 0 && (
              <p className="px-3 py-2 mb-0 fs-13 text-muted">
                Accepting a quote moves the job to In Progress and rejects other
                pending proposals (GHST-12 protected transition).
              </p>
            )}
          </JobFlowStatus>
        </div>
      </div>
    </>
  );
};

export default QuoteComparisonPanel;
