import { useProviderReceivedReviews } from "../../../../core/hooks/useJobData";
import JobFlowStatus from "../jobs/JobFlowStatus";

/**
 * GHST-61 — Provider reviews list backed by PocketBase `reviews` (received by
 * the signed-in provider). Shows an honest empty state when there are none.
 */
const ProviderReviewsPanel = () => {
  const { data: reviews, loading, error } = useProviderReceivedReviews();
  const published = reviews.filter((r) => r.status === "published");

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4 className="mb-0">Reviews</h4>
        </div>
      </div>
      <div className="col-12">
        <JobFlowStatus
          loading={loading}
          error={error}
          empty={!loading && published.length === 0}
          emptyMessage="No reviews yet. Reviews appear here after customers rate completed jobs."
        >
          <div className="row">
            {published.map((review) => {
              const authorName =
                review.expand?.author?.name ??
                review.expand?.author?.email ??
                "Customer";
              const serviceTitle = review.expand?.service?.title;
              return (
                <div className="col-12 mb-3" key={review.id}>
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="d-md-flex align-items-start justify-content-between gap-3">
                        <div>
                          {serviceTitle && (
                            <h6 className="fs-14 mb-2">{serviceTitle}</h6>
                          )}
                          <p className="mb-2">
                            <span className="text-warning">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i
                                  key={i}
                                  className={
                                    i < review.rating
                                      ? "ti ti-star-filled"
                                      : "ti ti-star"
                                  }
                                />
                              ))}
                            </span>
                            <span className="ms-2 text-muted fs-14">
                              {review.rating.toFixed(1)}
                            </span>
                          </p>
                          {review.comment && (
                            <p className="text-gray mb-2">{review.comment}</p>
                          )}
                          <p className="fs-13 text-muted mb-0">By {authorName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </JobFlowStatus>
      </div>
    </div>
  );
};

export default ProviderReviewsPanel;
