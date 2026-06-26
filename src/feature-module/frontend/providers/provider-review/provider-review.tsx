import ProviderReviewsPanel from "../../common/jobs/ProviderReviewsPanel";

const ProviderReview = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <ProviderReviewsPanel />
        <div className="d-none" aria-hidden="true">
          {/* Original template preserved for future enhancements (filters, reply). */}
        </div>
      </div>
    </div>
  );
};

export default ProviderReview;
