import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"


const Modal = () => {
  return (
    <>
  {/* Proposal Details */}
  <div className="modal fade custom-modal" id="preview-proposel">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Proposal Preview</h5>
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
          <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
            <div className="avatar avatar-xxl rounded overflow-hidden">
              <ImageWithBasePath
                src="assets/img/about/jobs-img-4.jpg"
                alt="booking"
                className="img-fluid w-100"
              />
            </div>
            <div>
              <h5 className="mb-2">
                <Link to="#" className="fw-semibold fs-18">
                  Appliance Repair Technician
                </Link>
              </h5>
              <p className="fs-14 fw-normal text-muted mb-0">
                Proposal submitted on&nbsp;2026-03-24
              </p>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-muted fw-medium mb-1 fs-12">Client</p>
            <p className="mb-0 fw-medium text-dark fs-14">Bessie Abernathy</p>
          </div>
          <div className="mb-3">
            <p className="text-muted fw-medium mb-1 fs-12">Title</p>
            <p className="mb-0 fw-medium text-dark fs-14">
              Professional Service Proposal for Your Requirements
            </p>
          </div>
          <div className="mb-3">
            <p className="text-muted fw-medium mb-1 fs-12">Cover Letter</p>
            <p className="mb-0 fw-medium text-dark fs-14">
              I reviewed your requirements and I’m confident I can deliver
              high-quality service tailored to your needs. With strong
              experience and attention to detail, I ensure timely completion and
              excellent results. I am available to start immediately and happy
              to discuss further details. Looking forward to working with you.
              Thank you.
            </p>
          </div>
          {/* start row */}
          <div className="row row-gap-4 mb-3">
            <div className="col-sm-6">
              <div>
                <p className="text-muted fw-medium mb-1 fs-12">Amount</p>
                <p className="mb-0 fw-medium text-dark fs-14">$600</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <p className="text-muted fw-medium mb-1 fs-12">
                  Estimated Hours
                </p>
                <p className="mb-0 fw-medium text-dark fs-14">14 Days</p>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="mb-3">
            <p className="text-muted fw-medium mb-1 fs-12">Status</p>
            <span className="badge bg-info d-inline-flex align-items-center gap-2">
              <i className="fa-solid fa-circle fs-6" />
              Viewed
            </span>
          </div>
          <Link
            to="#"
            className="btn btn-dark w-100 d-flex align-items-center gap-2 justify-content-center"
          >
            {" "}
            <i className="isax isax-close-circle" /> Withdraw Proposal
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Proposal Details */}
  {/* Chat Details */}
  <div className="modal fade custom-modal" id="messages-proposel">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Messages</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <h6 className="mb-1">Appliance Repair Technician</h6>
          <p className="mb-0 text-muted fs-14">
            Conversation with&nbsp;Bessie Abernathy
          </p>
          <div className="border rounded-lg mt-4">
            {/* User Card */}
            <div className="bg-light rounded p-3 mb-2">
              <div className="d-flex align-items-center">
                <span className="avatar avatar-lg me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                </span>
                <div>
                  <h6 className="mb-0 fs-14 fw-semibold">Bessie Abernathy</h6>
                  <p className="mb-0 fs-12 text-muted">2 messages</p>
                </div>
              </div>
            </div>
            {/* Chat Area */}
            <div className="chat-container p-3">
              {/* Incoming Message */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <h6 className="fs-14 fw-semibold mb-0 me-2">
                    Bessie Abernathy
                  </h6>
                  <span className="fs-12 text-muted">
                    12 Oct 2026 - 10:30 AM
                  </span>
                  <i className="ti ti-checks text-success ms-2 fs-16" />
                </div>
                <div
                  className="d-inline-block p-3 rounded-3 text-white"
                  style={{ backgroundColor: "#2e2a85", maxWidth: "80%" }}
                >
                  <p className="mb-0 fs-14">
                    Hi! Thank you for your proposal. Your portfolio looks
                    impressive. Could you provide more details about your design
                    process and timeline?
                  </p>
                </div>
              </div>
              {/* Outgoing Message */}
              <div className="mb-2 text-end">
                <div className="d-flex align-items-center justify-content-end mb-2">
                  <i className="ti ti-checks text-success me-2 fs-16" />
                  <span className="fs-12 text-muted me-2">
                    12 Oct 2026 - 10:30 AM
                  </span>
                  <h6 className="fs-14 fw-semibold mb-0">You</h6>
                </div>
                <div
                  className="d-inline-block bg-light p-3 rounded-3 text-dark text-start"
                  style={{ maxWidth: "80%" }}
                >
                  <p className="mb-0 fs-14">
                    Hi Bessie, thanks for your interest!
                  </p>
                </div>
              </div>
            </div>
            {/* Chat Input */}
            <div className="border p-2 mt-2 bg-light">
              <div className="d-flex align-items-center gap-2 bg-white rounded-lg">
                <input
                  type="text"
                  className="form-control border-0 shadow-none fs-14"
                  placeholder="Type Your Message"
                />
                <div className="d-flex align-items-center gap-2">
                  <Link to="#" className="text-muted">
                    <i className="ti ti-mood-smile fs-20" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-icon m-1 bg-primary rounded-lg d-flex align-items-center justify-content-center p-0"
                  >
                    <i className="ti ti-send fs-18" />
                  </Link>
                </div>
              </div>
              <p className="fs-12 text-muted mt-2">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Chat Details */}
</>

  )
}

export default Modal