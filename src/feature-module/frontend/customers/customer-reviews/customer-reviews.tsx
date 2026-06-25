import { Link } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useCustomerReviews } from "../../../../core/hooks/useJobData";
import { providerDisplayName } from "../../../../core/api/pocketbase/format";

/**
 * GHST-44: Customer Reviews lists the signed-in customer's own authored reviews
 * from PocketBase (`reviews` where author == auth user). The previous static
 * demo cards were replaced with live data + an honest empty state. Reviews are
 * created from a completed job's detail page (CustomerJobDetailPanel).
 */
const formatDate = (iso: string): string => {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
};

const Stars = ({ rating }: { rating: number }) => (
  <span className="text-warning">
    {[1, 2, 3, 4, 5].map((n) => (
      <i
        key={n}
        className={n <= rating ? "fa-solid fa-star" : "fa-regular fa-star"}
      />
    ))}
  </span>
);

const CustomerReviews = () => {
  const { data: reviews, loading, error } = useCustomerReviews();

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h4 className="mb-0">My Reviews</h4>
          </div>

          {error && (
            <div className="alert alert-warning" role="alert">
              We couldn&apos;t load your reviews right now. ({error})
            </div>
          )}

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="card">
              <div className="card-body text-center py-5">
                <h6 className="fs-16 fw-semibold mb-1">No reviews yet</h6>
                <p className="text-gray mb-3">
                  Once a job is completed you can rate the provider from the job
                  details page.
                </p>
                <Link to={all_routes.userJob} className="btn btn-linear-primary">
                  Go to My Jobs
                </Link>
              </div>
            </div>
          ) : (
            <div className="row">
              {reviews.map((review) => (
                <div className="col-12" key={review.id}>
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                        <div>
                          <h6 className="fs-16 fw-semibold mb-1">
                            {providerDisplayName(review.expand?.provider)}
                          </h6>
                          <Stars rating={review.rating} />
                        </div>
                        <span className="text-gray fs-13">
                          {formatDate(review.created)}
                        </span>
                      </div>
                      {review.comment && (
                        <p className="fs-14 mb-0">{review.comment}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
