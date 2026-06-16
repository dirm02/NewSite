import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"


const ProviderNotifcations = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h2 className="fs-24 fw-semibold">Notifications</h2>
        <div className=" btn border d-flex align-items-center flex-wrap">
          <Link to="#">
            <i className="ti ti-circle-check me-2" />
            Mark All as Read
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-sm-6">
          <div className="card notification-item bg-secondary text-center">
            <ImageWithBasePath
              src="assets/img/bg/ellipse03.png"
              alt=""
              className="notification-bg-01"
              aria-hidden="true"
            />
            <ImageWithBasePath
              src="assets/img/bg/ellipse04.png"
              alt=""
              className="notification-bg-02"
              aria-hidden="true"
            />
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <span className="avatar avatar-lg rounded-circle bg-white-transparent d-flex align-items-center justify-content-center flex-shrink-0 flex-wrap">
                  <i className="ti ti-bell fs-20" />
                </span>
              </div>
              <h3 className="mb-1 text-white">12</h3>
              <p className="text-white fs-14">Total</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card notification-item bg-pink text-center">
            <ImageWithBasePath
              src="assets/img/bg/ellipse03.png"
              alt=""
              className="notification-bg-01"
              aria-hidden="true"
            />
            <ImageWithBasePath
              src="assets/img/bg/ellipse04.png"
              alt=""
              className="notification-bg-02"
              aria-hidden="true"
            />
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <span className="avatar avatar-lg rounded-circle bg-white-transparent  d-flex align-items-center justify-content-center flex-shrink-0 flex-wrap">
                  <i className="ti ti-server fs-20" />
                </span>
              </div>
              <h3 className="mb-1 text-white">02</h3>
              <p className="text-white">Unread</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card notification-item bg-info text-center">
            <ImageWithBasePath
              src="assets/img/bg/ellipse03.png"
              alt=""
              className="notification-bg-01"
              aria-hidden="true"
            />
            <ImageWithBasePath
              src="assets/img/bg/ellipse04.png"
              alt=""
              className="notification-bg-02"
              aria-hidden="true"
            />
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <span className="avatar avatar-lg rounded-circle bg-white-transparent  d-flex align-items-center justify-content-center flex-shrink-0 flex-wrap">
                  <i className="ti ti-file-description fs-20" />
                </span>
              </div>
              <h3 className="mb-1 text-white">03</h3>
              <p className="text-white">Milestones</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card notification-item bg-purple text-center">
            <ImageWithBasePath
              src="assets/img/bg/ellipse03.png"
              alt=""
              className="notification-bg-01"
              aria-hidden="true"
            />
            <ImageWithBasePath
              src="assets/img/bg/ellipse04.png"
              alt=""
              className="notification-bg-02"
              aria-hidden="true"
            />
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <span className="avatar avatar-lg rounded-circle bg-white-transparent  d-flex align-items-center justify-content-center flex-shrink-0 flex-wrap">
                  <i className=" ti ti-currency-dollar fs-20" />
                </span>
              </div>
              <h3 className="mb-1 text-white">04</h3>
              <p className="text-white">Payments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="notification-tab-wrapper">
              <ul className="nav notification-tabs">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#all-notifications"
                    data-bs-toggle="tab"
                  >
                    All Notifications (6)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#unread" data-bs-toggle="tab">
                    Unread (1)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#milestones"
                    data-bs-toggle="tab"
                  >
                    Milestones (3)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#payment" data-bs-toggle="tab">
                    Payment (2)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#proposals"
                    data-bs-toggle="tab"
                  >
                    Proposals (3)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#jobs" data-bs-toggle="tab">
                    Jobs (2)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content" id="notificationTabContent">
        {/* All Notifications */}
        <div className="tab-pane fade show active" id="all-notifications">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-info-transparent">
                        <i className="ti ti-send" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Submitted for Review</h3>
                        <p className="fs-14 mb-2">
                          TechBuild Labs has submitted "Backend &amp; payment
                          integration" milestone for your review.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap flex-wrap">
                          <p className="fs-13 text-muted mb-0">in 5 days</p>
                          <p className="fs-13 text-muted">TechBuild Labs</p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn d-flex align-items-center gap-2 flex-wrap">
                      <span className="badge border bg-danger fs-13">New</span>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-currency-dollar" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Payment Released</h3>
                        <p className="fs-14 mb-2">
                          You released $800 to TechBuild Labs for completing
                          "Frontend development" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap flex-wrap">
                          <p className="fs-13 text-muted mb-0">
                            in about 6 hours
                          </p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $800
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Approved</h3>
                        <p className="fs-14 mb-2">
                          You approved "Frontend development" milestone. You can
                          now release the payment.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap flex-wrap">
                          <p className="fs-13 text-muted mb-0">
                            in about 6 hours
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $800
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-info-transparent">
                        <i className="ti ti-clock" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Upcoming Deadline</h3>
                        <p className="fs-14 mb-2">
                          Milestone "User research &amp; wireframes" is due in 4
                          days for Mobile App UI/UX Design.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap flex-wrap">
                          <p className="fs-13 text-muted mb-0">4 minutes ago</p>
                          <p className="fs-13 text-muted">
                            PixelPerfect Design Co
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          Mobile App UI/UX Design
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-briefcase" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Job Started</h3>
                        <p className="fs-14 mb-2">
                          PixelPerfect Design Co has started working on "Mobile
                          App UI/UX Design".
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">1 day ago</p>
                          <p className="fs-13 text-muted">
                            PixelPerfect Design Co
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          Mobile App UI/UX Design
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-file-description" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Proposal Received</h3>
                        <p className="fs-14 mb-2">
                          Viral Marketing Co sent you a proposal for "Social
                          Media Marketing Campaign"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">3 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            Viral Marketing Co
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $850
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-file-description" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Proposal Received</h3>
                        <p className="fs-14 mb-2">
                          Creative Minds Studio sent you a proposal for "Logo
                          Design for Tech Startup"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">3 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            Creative Minds Studio
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $450
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-info-transparent">
                        <i className="ti ti-message-2" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Message</h3>
                        <p className="fs-14 mb-2">
                          TechBuild Labs sent you a message about "E-commerce
                          Website Development"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">4 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Approved</h3>
                        <p className="fs-14 mb-2">
                          You approved "Design mockups approved" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">7 days ago</p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $500
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-currency-dollar" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Payment Released</h3>
                        <p className="fs-14 mb-2">
                          You released $500 to TechBuild Labs for completing
                          "Design mockups approved" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">7 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $500
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Job Completed</h3>
                        <p className="fs-14 mb-2">
                          BrandVision Studios has completed "Brand Identity
                          Package". Please review and confirm.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">17 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            BrandVision Studios
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          Brand Identity Package
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Unread */}
        <div className="tab-pane fade" id="unread">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-info-transparent">
                        <i className="ti ti-message-2" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Message</h3>
                        <p className="fs-14 mb-2">
                          TechBuild Labs sent you a message about "E-commerce
                          Website Development"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">4 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="tab-pane fade" id="milestones">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-info-transparent">
                        <i className="ti ti-send" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Submitted for Review</h3>
                        <p className="fs-14 mb-2">
                          TechBuild Labs has submitted "Backend &amp; payment
                          integration" milestone for your review.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">in 5 days</p>
                          <p className="fs-13 text-muted">TechBuild Labs</p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn d-flex align-items-center gap-2">
                      <span className="badge border bg-danger fs-13">New</span>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Approved</h3>
                        <p className="fs-14 mb-2">
                          You approved "Frontend development" milestone. You can
                          now release the payment.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">
                            in about 6 hours
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $800
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Milestone Approved</h3>
                        <p className="fs-14 mb-2">
                          You approved "Design mockups approved" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">7 days ago</p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $500
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment */}
        <div className="tab-pane fade" id="payment">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-currency-dollar" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Payment Released</h3>
                        <p className="fs-14 mb-2">
                          You released $800 to TechBuild Labs for completing
                          "Frontend development" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">
                            in about 6 hours
                          </p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $800
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-currency-dollar" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Payment Released</h3>
                        <p className="fs-14 mb-2">
                          You released $500 to TechBuild Labs for completing
                          "Design mockups approved" milestone.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">7 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            TechBuild Labs
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $500
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          E-commerce Website Development
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Proposals */}
        <div className="tab-pane fade" id="proposals">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-file-description" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Proposal Received</h3>
                        <p className="fs-14 mb-2">
                          Viral Marketing Co sent you a proposal for "Social
                          Media Marketing Campaign"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">3 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            Viral Marketing Co
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $850
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3  flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-file-description" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Proposal Received</h3>
                        <p className="fs-14 mb-2">
                          Creative Minds Studio sent you a proposal for "Logo
                          Design for Tech Startup"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">3 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            Creative Minds Studio
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $450
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-file-description" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">New Proposal Received</h3>
                        <p className="fs-14 mb-2">
                          BrandVision Studios sent you a proposal for "Brand
                          Identity Package"
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">5 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            BrandVision Studios
                          </p>
                          <p className="fs-13 text-secondary fw-semibold">
                            $1200
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jobs */}
        <div className="tab-pane fade" id="jobs">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-purple-transparent">
                        <i className="ti ti-briefcase" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Job Started</h3>
                        <p className="fs-14 mb-2">
                          PixelPerfect Design Co has started working on "Mobile
                          App UI/UX Design".
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">1 day ago</p>
                          <p className="fs-13 text-muted">
                            PixelPerfect Design Co
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          Mobile App UI/UX Design
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-12">
              <div className="card notication-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div className="notification-icon bg-success-transparent">
                        <i className="ti ti-circle-check fs-15" />
                      </div>
                      <div className="notification-card">
                        <h3 className="mb-2">Job Completed</h3>
                        <p className="fs-14 mb-2">
                          BrandVision Studios has completed "Brand Identity
                          Package". Please review and confirm.
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <p className="fs-13 text-muted mb-0">17 days ago</p>
                          <p className="fs-13 text-muted mb-0">
                            BrandVision Studios
                          </p>
                        </div>
                        <span className="badge border text-dark fs-13 mb-1">
                          Brand Identity Package
                        </span>
                      </div>
                    </div>
                    <div className="noti-btn">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-light delete-btn"
                      >
                        <i className="ti ti-trash fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /tab-content */}
      {/* Delete Account */}
      <div className="modal fade custom-modal" id="del-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
              <h3 className="modal-title">Delete Account</h3>
              <Link
                to="javascript:void(0);"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-circle-x-filled fs-20" />
              </Link>
            </div>
            <form action="#">
              <div className="modal-body">
                <p className="mb-3">
                  Are you sure you want to delete This Account? To delete your
                  account, Type your password.
                </p>
                <div className="mb-0">
                  <label className="form-label">Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control pass-input"
                      placeholder="*************"
                    />
                    <span className="toggle-password feather-eye-off" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="javascript:void(0);"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="submit" className="btn btn-dark">
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete Account */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default ProviderNotifcations