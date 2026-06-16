import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../core/data/routes/all_routes"


const JobDetailsCompleted = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="col-xxl-10 col-xl-11 mx-auto">
          <Link
            to={all_routes.providerActiveJobs}
            className="fw-medium fs-14 d-inline-flex align-items-center mb-4"
          >
            <i className="fa-solid fa-angle-left me-2" />
            Back to Active Jobs
          </Link>
          {/* Job Summary Card */}
          <div className="row g-4">
            <div className="col-xl-7">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-2.jpg"
                        alt="Job"
                        className="rounded-1 avatar avatar-lg"
                      />
                      <div>
                        <div className="d-flex align-items-center gap-3 mb-1 flex-wrap">
                          <p className="fs-14 fw-medium mb-0">
                            Order ID : #JOB1023
                          </p>
                          <span className="badge badge-success">
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            Completed
                          </span>
                        </div>
                        <h2 className="custom-subtitle mb-0">
                          AC Repair &amp; Maintenance
                        </h2>
                      </div>
                    </div>
                    <div className="text-sm-end">
                      <p className="fs-12 fw-medium mb-1">Total Budget</p>
                      <h3 className="custom-subtitle fw-semibold text-secondary mb-0">
                        $1200
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Overview Card */}
              <div className="card mb-0">
                <div className="card-body">
                  <div className="border-bottom pb-3 mb-3">
                    <h3 className="custom-subtitle mb-0">Project Overview</h3>
                  </div>
                  <p className="fs-14 mb-4">
                    {" "}
                    We're looking for a skilled technician to provide top-notch
                    AC repair and maintenance services. The ideal candidate
                    should have experience in diagnosing and fixing AC issues, a
                    strong understanding of HVAC systems, and a commitment to
                    delivering exceptional customer service to our clients
                  </p>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <p className="fs-14 mb-1">Scheduled On</p>
                      <p className="fs-14 fw-medium text-dark mb-0">
                        05 Nov 2026 - 04:30 PM
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="fs-14 mb-1">Location</p>
                      <p className="fs-14 fw-medium text-dark mb-0">
                        123 Main Street, Springfield, IL 62701
                      </p>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <Link
                        to="#"
                        className="btn btn-light w-100 d-flex align-items-center justify-content-center"
                      >
                        <i className="isax isax-star5 me-2" />
                        Write Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              {/* Client Card */}
              <div className="card">
                <div className="card-body">
                  <div className="border-bottom pb-3 mb-3">
                    <h3 className="custom-subtitle">Client</h3>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="avatar avatar-circle bg-light text-dark rounded-circle">
                      KB
                    </div>
                    <div>
                      <p className="fs-14 fw-semibold text-dark mb-1">
                        <Link to="#">Kelsie Battle</Link>
                      </p>
                      <p className="mb-0">
                        <i className="fa-solid fa-star text-warning fs-14 me-1" />
                        4.6
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="tag-pill border badge px-2 fs-13 py-1 text-dark fw-medium">
                      Ventilation
                    </span>
                    <span className="tag-pill border badge px-2 fs-13 py-1 text-dark fw-medium">
                      Air Conditioning
                    </span>
                  </div>
                  <Link to="#" className="btn btn-dark w-100">
                    <i className="ti ti-message me-2" />
                    Send Message
                  </Link>
                </div>
              </div>
              {/* Payment Card */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                    <h3 className="custom-subtitle mb-0">Payment</h3>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="fs-14 mb-0">Total Budget</p>
                    <p className="fs-14 fw-semibold text-dark mb-0">$1200</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="fs-14 mb-0">Tax (18%)</p>
                    <p className="fs-14 fw-semibold text-dark mb-0">$216</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-14 mb-0">Service Charge</p>
                    <p className="fs-14 fw-semibold text-dark mb-0">$20</p>
                  </div>
                </div>
                <div className="card-footer bg-light-500 d-flex justify-content-between align-items-center">
                  <h4 className="custom-subtitle mb-0 text-secondary">
                    Total Amount
                  </h4>
                  <h4 className="custom-subtitle mb-0 text-secondary">
                    $1,436
                  </h4>
                </div>
              </div>
              {/* Activity Timeline */}
              <div className="card mb-0">
                <div className="card-body">
                  <div className="border-bottom pb-3 mb-3">
                    <h3 className="custom-subtitle">Activity Timeline</h3>
                  </div>
                  <ul className="timeline-list">
                    <li className="item d-flex justify-content-between flex-wrap pb-3">
                      <p className="fs-14 fw-semibold d-flex align-items-center text-dark mb-0">
                        <span className="icon bg-success border border-2 border-success-300 me-3" />
                        Payment Received
                      </p>
                      <p className="fs-13 text-dark mb-0 ps-4">
                        05 Nov 2026 - 07:00 PM
                      </p>
                    </li>
                    <li className="item d-flex justify-content-between flex-wrap pb-3">
                      <p className="fs-14 fw-semibold d-flex align-items-center text-dark mb-0">
                        <span className="icon bg-warning border border-2 border-warning-300 me-3" />
                        Job Completed
                      </p>
                      <p className="fs-13 text-dark mb-0 ps-4">
                        05 Nov 2026 - 06:40 PM
                      </p>
                    </li>
                    <li className="item d-flex justify-content-between flex-wrap pb-3">
                      <p className="fs-14 fw-semibold d-flex align-items-center text-dark mb-0">
                        <span className="icon bg-danger border border-2 border-danger-300 me-3" />
                        Job Started
                      </p>
                      <p className="fs-13 text-dark mb-0 ps-4">
                        05 Nov 2026 - 04:45 PM
                      </p>
                    </li>
                    <li className="item d-flex justify-content-between flex-wrap">
                      <p className="fs-14 fw-semibold d-flex align-items-center text-dark mb-0">
                        <span className="icon bg-info border border-2 border-info-300 me-3" />
                        Job Scheduled
                      </p>
                      <p className="fs-13 text-dark mb-0 ps-4">
                        05 Nov 2026 - 04:30 PM
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default JobDetailsCompleted