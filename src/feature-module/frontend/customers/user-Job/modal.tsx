import { Link } from "react-router-dom"


const Modal = () => {
  return (
    <>
  {/* Proposal Details */}
  <div className="modal fade custom-modal" id="proposal-details">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Proposal Details</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          {/* Provider Info */}
          <div className="d-flex flex-wrap gap-3 mb-4 pb-4 border-bottom">
            <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
              EP
            </div>
            <div>
              <h6 className="fw-semibold mb-1 d-flex align-items-center gap-2">
                Ethan Parker{" "}
                <span className="badge bg-info d-inline-flex align-items-center gap-1 fs-13">
                  <i className="feather-zap" />
                  Best
                </span>{" "}
              </h6>
              <div className="d-flex gap-2 flex-wrap">
                <p className="mb-0 text-muted">
                  <i className="fa-solid fa-star text-warning me-1" />
                  4.8
                </p>
                <span className="text-light">|</span>
                <p className="mb-0 text-muted">
                  <i className="ti ti-arrow-bear-left text-dark me-1" />
                  98% Success
                </p>
                <span className="text-light">|</span>
                <p className="mb-0 text-muted">
                  <i className="ti ti-briefcase text-dark me-1" /> 150 Jobs
                  Completed
                </p>
              </div>
            </div>
          </div>
          {/* Job Details */}
          <div className="mb-3">
            <p className="text-dark fw-semibold mb-1 fs-14">Job Title</p>
            <p className="mb-0 text-muted">HVAC Maintenance</p>
          </div>
          <div className="row mb-4 row-gap-4 pb-4 border-bottom">
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">Job Value</p>
              <p className="mb-0 fw-semibold text-secondary">$335</p>
            </div>
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">
                Proposal Amount
              </p>
              <p className="mb-0 fw-semibold text-secondary">$250</p>
            </div>
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">Delivery Time</p>
              <p className="mb-0 fw-normal text-muted">3 Hrs</p>
            </div>
          </div>
          {/* Cover Letter */}
          <div className="mb-4 pb-4 border-bottom">
            <h6 className="fw-semibold mb-3 fs-18">Cover Letter</h6>
            <p className="text-muted mb-0 fs-14">
              We are a team of experienced designers with a passion for creating
              beautiful and intuitive user interfaces. Our portfolio includes
              work for Fortune 500 companies and successful startups.
            </p>
          </div>
          {/* Skills */}
          <h6 className="fw-semibold mb-4 fs-18">Skills</h6>
          <div className="d-flex flex-wrap gap-2 mb-4">
            <span className="badge bg-white border text-dark">
              Solar Integration
            </span>
            <span className="badge bg-white border text-dark">
              Energy Management Systems
            </span>
            <span className="badge bg-white border text-dark">Green Tech</span>
            <span className="badge bg-white border text-dark">
              Carbon Reduction
            </span>
          </div>
          {/* Action Buttons */}
          <div className="mb-4">
            <button
              className="btn btn-success w-100 mb-3 d-flex align-items-center gap-2 justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#accept-details"
            >
              <i className="feather-check-circle" />
              Accept Proposal
            </button>
            <button className="btn btn-purple w-100 mb-0 d-flex align-items-center gap-2 justify-content-center">
              <i className="feather-star" />
              Add to Shortlist
            </button>
          </div>
          <div className="d-flex align-items-center gap-3 flex-sm-row flex-column">
            <Link
              to="#"
              className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2 w-100"
            >
              {" "}
              <i className="isax isax-messages-3" /> Message
            </Link>
            <Link
              to="#"
              className="btn bg-transparent-danger text-danger d-flex align-items-center justify-content-center gap-2 w-100"
            >
              {" "}
              <i className="isax isax-info-circle" /> Decline Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Proposal Work */}
  {/* Hired Details */}
  <div className="modal fade custom-modal" id="hired-details">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Proposal Details</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          {/* Provider Info */}
          <div className="d-flex flex-wrap gap-3 mb-4 pb-4 border-bottom">
            <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
              HB
            </div>
            <div>
              <h6 className="fw-semibold mb-1 d-flex align-items-center gap-2">
                Hunter Bryant{" "}
                <span className="badge bg-info d-inline-flex align-items-center gap-1 fs-13">
                  <i className="feather-zap" />
                  Best
                </span>{" "}
              </h6>
              <div className="d-flex gap-2 flex-wrap">
                <p className="mb-0 text-muted">
                  <i className="fa-solid fa-star text-warning me-1" />
                  4.8
                </p>
                <span className="text-light">|</span>
                <p className="mb-0 text-muted">
                  <i className="ti ti-arrow-bear-left text-dark me-1" />
                  98% Success
                </p>
                <span className="text-light">|</span>
                <p className="mb-0 text-muted">
                  <i className="ti ti-briefcase text-dark me-1" /> 150 Jobs
                  Completed
                </p>
              </div>
            </div>
          </div>
          {/* Job Details */}
          <div className="mb-3">
            <p className="text-dark fw-semibold mb-1 fs-14">Job Title</p>
            <p className="mb-0 text-muted">HVAC Maintenance</p>
          </div>
          <div className="row mb-4 row-gap-4 pb-4 border-bottom">
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">Job Value</p>
              <p className="mb-0 fw-semibold text-secondary">$335</p>
            </div>
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">
                Proposal Amount
              </p>
              <p className="mb-0 fw-semibold text-secondary">$250</p>
            </div>
            <div className="col-lg-4">
              <p className="text-dark fw-semibold mb-1 fs-14">Delivery Time</p>
              <p className="mb-0 fw-normal text-muted">3 Hrs</p>
            </div>
          </div>
          {/* Cover Letter */}
          <div className="mb-4 pb-4 border-bottom">
            <h6 className="fw-semibold mb-3 fs-18">Cover Letter</h6>
            <p className="text-muted mb-0 fs-14">
              We are a team of experienced designers with a passion for creating
              beautiful and intuitive user interfaces. Our portfolio includes
              work for Fortune 500 companies and successful startups.
            </p>
          </div>
          {/* Skills */}
          <h6 className="fw-semibold mb-4 fs-18">Skills</h6>
          <div className="d-flex flex-wrap gap-2 mb-4">
            <span className="badge bg-white border text-dark">
              Solar Integration
            </span>
            <span className="badge bg-white border text-dark">
              Energy Management Systems
            </span>
            <span className="badge bg-white border text-dark">Green Tech</span>
            <span className="badge bg-white border text-dark">
              Carbon Reduction
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 flex-sm-row flex-column">
            <Link
              to="#"
              className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2 w-100"
            >
              {" "}
              <i className="isax isax-messages-3" /> Message
            </Link>
            <Link
              to="#"
              className="btn bg-transparent-danger text-danger d-flex align-items-center justify-content-center gap-2 w-100"
            >
              {" "}
              <i className="isax isax-info-circle" /> Cancel{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hired Work */}
  {/* Accept Proposal */}
  <div className="modal fade custom-modal" id="accept-details">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Accept Proposal</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <h6 className="fs-18 fw-semibold mb-1">HVAC Maintenance</h6>
            <p className="mb-0 fs-14 text-muted">
              You are about to hire{" "}
              <span className="fw-semibold"> Abigail Carter</span> for $250.
            </p>
          </div>
          <div className="mb-3">
            <p className="mb-1 fs-12 fw-medium text-muted">Seller</p>
            <p className="fs-14 fw-medium mb-0 text-dark">Abigail Carter</p>
          </div>
          {/* start row */}
          <div className="row row-gap-4">
            <div className="col-lg-6">
              <div className="mb-0">
                <p className="mb-1 fs-12 fw-medium text-muted">Amount</p>
                <p className="fs-14 fw-medium mb-0 text-dark">$250</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-0">
                <p className="mb-1 fs-12 fw-medium text-muted">Delivery Time</p>
                <p className="fs-14 fw-medium mb-0 text-dark">3 Hrs</p>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        <div className="modal-footer d-flex align-items-center justify-content-end gap-3">
          <Link
            to="#"
            className="btn btn-light m-0"
            data-bs-dismiss="modal"
          >
            Cancel
          </Link>
          <Link to="#" className="btn btn-dark m-0">
            Confirm &amp; Hire
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Accept Proposal */}
  <>
  <div className="modal fade custom-modal" id="post-job">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="text-center">
            <span className="d-flex align-items-center justify-content-center fs-30 text-success mb-3">
              <i className="isax isax-tick-circle5" />
            </span>
            <h5 className="fs-24 mb-1">Job Posted Successfully</h5>
            <p className="mb-4 text-muted">
              Your job has been posted successfully. Providers can now view and
              submit their proposals.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Link
                to="#"
                className="btn btn-light m-0"
                data-bs-dismiss="modal"
              >
                Close
              </Link>
              <Link to="#" className="btn btn-dark m-0">
                Post Another Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Milestone Modal */}
</>

</>

  )
}

export default Modal