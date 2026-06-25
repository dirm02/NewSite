import CustomerCreateJobPanel from "../../common/jobs/CustomerCreateJobPanel";

/**
 * GHST-50: demo cleanup. The static job-post template (mock dropDownData
 * categories/budget/experience, demo tag input, file upload, post-job modal)
 * was removed. This page now renders only the live PocketBase-backed panel.
 */
const CustomerCreateJob = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <CustomerCreateJobPanel />
      </div>
    </div>
  );
};

export default CustomerCreateJob;
