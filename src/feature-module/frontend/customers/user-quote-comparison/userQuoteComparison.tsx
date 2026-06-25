import QuoteComparisonPanel from "../../common/jobs/QuoteComparisonPanel"

/**
 * GHST-50: demo cleanup. The static side-by-side comparison template (mock
 * Compare dropdown data, fake sellers, hardcoded price/rating/criteria table)
 * was removed. This page now renders only the live PocketBase-backed panel.
 */
const UserQuoteComparison = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <QuoteComparisonPanel />
      </div>
    </div>
  )
}

export default UserQuoteComparison
