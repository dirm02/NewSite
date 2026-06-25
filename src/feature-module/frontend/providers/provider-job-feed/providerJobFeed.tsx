import ProviderJobFeedPanel from "../../common/jobs/ProviderJobFeedPanel";

/**
 * GHST-50: demo cleanup. The static "Find a Job" template (mock Country/Feed
 * dropdown data, fake job cards, demo apply modal) was removed. This page now
 * renders only the live PocketBase-backed job feed panel.
 */
const ProviderJobFeed = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <ProviderJobFeedPanel />
      </div>
    </div>
  );
};

export default ProviderJobFeed;
