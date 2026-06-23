import { Link } from "react-router-dom";
import { quoteStatusLabel, providerJobDetailUrl } from "../../../../core/api/pocketbase/format";
import { useProviderAcceptedJobs, useProviderPendingQuotes } from "../../../../core/hooks/useJobData";
import JobFlowStatus from "./JobFlowStatus";

/** Provider proposals list — pending + accepted quotes */
const ProviderProposalsPanel = () => {
  const {
    data: pending,
    loading: pendingLoading,
    error: pendingError,
  } = useProviderPendingQuotes();
  const {
    data: accepted,
    loading: acceptedLoading,
    error: acceptedError,
  } = useProviderAcceptedJobs();

  const loading = pendingLoading || acceptedLoading;
  const error = pendingError || acceptedError;
  const all = [...pending, ...accepted];

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">Your Proposals (Live)</h5>
      </div>
      <div className="card-body">
        <JobFlowStatus
          loading={loading}
          error={error}
          empty={all.length === 0}
          emptyMessage="No proposals yet. Browse the job feed to submit quotes."
        >
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {all.map((quote) => (
                  <tr key={quote.id}>
                    <td>{quote.expand?.request?.title ?? "—"}</td>
                    <td>${quote.amount}</td>
                    <td>{quoteStatusLabel(quote.status)}</td>
                    <td>
                      {quote.expand?.request && (
                        <Link
                          to={providerJobDetailUrl(quote.expand.request.id)}
                          className="btn btn-sm btn-white"
                        >
                          View
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </JobFlowStatus>
      </div>
    </div>
  );
};

export default ProviderProposalsPanel;
