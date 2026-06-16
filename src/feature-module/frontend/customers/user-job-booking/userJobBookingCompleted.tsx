import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../core/data/routes/all_routes"
import Modal from "./modal"


const UserJobBookingCompleted = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <h4 className="mb-4 fs-14">
        <Link
          to={all_routes.userJobBooking}
          className="fw-medium d-flex align-items-center gap-1"
        >
          <i className="isax isax-arrow-left-2" /> Back to Job List
        </Link>
      </h4>
      {/* start row */}
      <div className="row row-gap-4">
        <div className="col-lg-8">
          <div className="card mb-0">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <Link
                    to="#"
                    className="text-secondary fs-14 fw-medium mb-0 d-block"
                  >
                    #JOB4590
                  </Link>
                  <span className="badge bg-success d-inline-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle fs-6" />
                    Completed
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="avatar avatar-xxl rounded overflow-hidden">
                    <ImageWithBasePath
                      src="assets/img/profiles/booking-img-1.jpg"
                      alt="booking"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">
                      <Link to="#" className="fw-semibold fs-18">
                        Plumbing Inspection
                      </Link>
                    </h5>
                    <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                      <i className="isax isax-category-2 fs-14 text-body" />
                      Facility Management
                    </p>
                  </div>
                </div>
                <div className="text-sm-end text-start">
                  <p className="fs-12 fw-medium mb-1">Total Budget</p>
                  <h6 className="mb-0 fs-18 fw-semibold text-secondary">
                    $750
                  </h6>
                </div>
              </div>
              <p className="mb-3 fs-14 ">
                Seeking a certified HVAC Technician to manage climate control
                systems for our clients. The ideal candidate will have a solid
                background in HVAC technology, excellent diagnostic abilities,
                and a dedication to superior customer satisfaction.
              </p>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3 pb-4 border-bottom flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <i className="isax isax-location fs-24" />
                  <div>
                    <p className="mb-1 fs-12">Location</p>
                    <h6 className="fs-14 fw-medium mb-0">
                      123 Main Street, Springfield, IL&nbsp;62701
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="isax isax-calendar-tick fs-24" />
                  <div>
                    <p className="mb-1 fs-12">Created On</p>
                    <h6 className="fs-14 fw-medium mb-0">12 Mar 2026</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="isax isax-calendar-remove fs-24" />
                  <div>
                    <p className="mb-1 fs-12">Deadline</p>
                    <h6 className="fs-14 fw-medium mb-0">15 Mar 2026</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <Link
                  to="#"
                  className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2 w-100 fw-semibold"
                  data-bs-toggle="modal"
                  data-bs-target="#review-seller"
                >
                  <i className="isax isax-message" /> Review Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-4">
          {/* Item 1 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                  <h5 className="mb-0 fs-18"> Seller Details </h5>
                  <span className="badge bg-light text-dark">
                    Hired On : 13 May 2026
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4 pb-4 border-bottom flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar bg-light rounded-circle overflow-hidden">
                    <span className="fw-semibold fs-14 text-dark">EP</span>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      <Link to="#" className="fw-semibold fs-14">
                        Ethan Parker
                      </Link>
                    </h6>
                    <span className="fs-16">
                      {" "}
                      <i className="fa-solid fa-star text-warning fs-14" /> 4.8
                    </span>
                  </div>
                </div>
                <p className="d-flex align-items-center gap-1 fs-14 mb-0">
                  <i className="feather-briefcase text-dark" /> 120 Jobs
                </p>
              </div>
              <div className="mb-4">
                <div className="mb-2 fs-14 fw-semibold text-dark">Skills</div>
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <span className="badge bg-white border text-dark">
                    Expertise in AC systems
                  </span>
                  <span className="badge bg-white border text-dark">
                    Proficient in wiring
                  </span>
                  <span className="badge bg-white border text-dark">
                    Knowledge of testing tools
                  </span>
                </div>
              </div>
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100"
              >
                {" "}
                <i className="isax isax-messages-3" /> Contact Seller
              </Link>
            </div>
          </div>
          {/* Item 2 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                  <h5 className="mb-0 fs-18">Payment Details </h5>
                  <span className="badge border border-success text-success d-inline-flex align-items-center gap-1">
                    <i className="fa-solid fa-circle fs-6" />
                    Released
                  </span>
                </div>
              </div>
              <div className="mb-3 pb-3 border-bottom">
                <p className="mb-2 fs-14 d-flex align-items-center justify-content-between">
                  Job Value{" "}
                  <span className="fw-semibold fs-14 text-dark">$355</span>
                </p>
                <p className="mb-0 fs-14 d-flex align-items-center justify-content-between">
                  Service Fee (10%){" "}
                  <span className="fw-semibold fs-14 text-dark">$35</span>
                </p>
              </div>
              <p className="fs-18 fw-semibold mb-0 d-flex align-items-center justify-content-between text-secondary">
                Total<span>$390</span>
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="card bg-info mb-0 overflow-hidden">
            <div className="card-body">
              <h5 className="mb-2 fs-18 fw-semibold text-white position-relative z-1">
                Need Help?
              </h5>
              <p className="mb-4 fs-14 text-white position-relative z-1">
                If you're experiencing issues with this job, our support team is
                here to help.
              </p>
              <Link
                to="#"
                className="btn btn-white position-relative z-1 d-inline-flex align-items-center justify-content-center gap-2 fw-semibold"
              >
                {" "}
                <i className="isax isax-call" /> Contact Support
              </Link>
            </div>
            <ImageWithBasePath
              src="assets/img/bg/shadow-1.png"
              alt="shadow"
              className="position-absolute top-0 start-0"
            />
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  </div>
  <Modal/>
</>

  )
}

export default UserJobBookingCompleted