import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";

const UserJobBooking = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <h2 className="mb-4 fs-24 fw-semibold">Job Bookings</h2>
          {/* Search and Filter */}
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
            <div className="search-input-method">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="icon">
                <i className="isax isax-search-normal-1" />
              </span>
            </div>
            <div className="dropdown">
              <Link
                to="javascript:void(0);"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="javascript:void(0);" className="dropdown-item active">
                  Newly Added
                </Link>
                <Link to="javascript:void(0);" className="dropdown-item">
                  Oldest
                </Link>
              </div>
            </div>
          </div>
          {/* Nav Tabs */}
          <ul
            className="nav nav-tabs custom-tab bg-light border border-color"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                id="all-tab"
                data-bs-toggle="tab"
                data-bs-target="#all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="true"
              >
                All Jobs (6)
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="hired-tab"
                data-bs-toggle="tab"
                data-bs-target="#hired"
                type="button"
                role="tab"
                aria-controls="hired"
                aria-selected="false"
              >
                Hired (1)
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="progress-tab"
                data-bs-toggle="tab"
                data-bs-target="#progress"
                type="button"
                role="tab"
                aria-controls="progress"
                aria-selected="false"
              >
                In Progress (3)
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="completed-tab"
                data-bs-toggle="tab"
                data-bs-target="#completed"
                type="button"
                role="tab"
                aria-controls="completed"
                aria-selected="false"
              >
                Completed (1)
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="cancelled-tab"
                data-bs-toggle="tab"
                data-bs-target="#cancelled"
                type="button"
                role="tab"
                aria-controls="cancelled"
                aria-selected="false"
              >
                Cancelled (1)
              </button>
            </li>
          </ul>
          <div className="bg-white border border-color p-3 rounded my-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3 flex-md-nowrap flex-wrap">
              <i className="isax isax-info-circle text-dark fs-16 fw-bold" />
              <div>
                <h2 className="mb-1 fs-14 fw-semibold">
                  1&nbsp;Complete&nbsp;Request is waiting your approval
                </h2>
                <p className="mb-0 fs-14">
                  Review submitted work and release payments
                </p>
              </div>
            </div>
            <Link to="#" className="btn btn-dark">
              Review Now
            </Link>
          </div>
          {/* Tab Content */}
          <div className="tab-content">
            {/* 1st Tab */}
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 1 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-1.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4590
                          </Link>
                          <h3 className="mb-1 fs-20 fw-semibold">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Plumbing Inspection
                            </Link>
                          </h3>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            EP
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-0 fs-18 fw-semibold">
                            <Link to="#" className="fw-semibold fs-14">
                              Ethan Parker
                            </Link>
                          </h4>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.8
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h5 className="mb-0 fs-14 fw-medium text-secondary">
                            $3500
                          </h5>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">15 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 ">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-2.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB459
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingCompleted}
                              className="fw-semibold fs-18"
                            >
                              HVAC Maintenance
                            </Link>
                          </h5>
                          <span className="badge bg-success d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Completed
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            MB
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Mason Brooks
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.5
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $4500
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">15 Mar 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-success d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Completed
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-3.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4592
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Fire Alarm Installation
                            </Link>
                          </h5>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            CS
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Carter Simmons
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.8
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $6000
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">22 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-4.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4593
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Electrical Repair
                            </Link>
                          </h5>
                          <span className="badge bg-info d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Hired
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            AC
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Abigail Carter
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.7
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $8000
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">12 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-5.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4594
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Car Soap &amp; Foam Wash{" "}
                            </Link>
                          </h5>
                          <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Cancelled
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            LC
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Lily Cooper
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.7
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $1200
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">05 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-danger d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Cancelled
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-6.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4595
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Lighting Installation{" "}
                            </Link>
                          </h5>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            HB
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Hunter Bryant
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.4
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $3800
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">30 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* 2st Tab */}
            <div
              className="tab-pane fade"
              id="hired"
              role="tabpanel"
              aria-labelledby="hired-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 4 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-4.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4593
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Electrical Repair
                            </Link>
                          </h5>
                          <span className="badge bg-info d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Hired
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            AC
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Abigail Carter
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.7
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $8000
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">12 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* 3st Tab */}
            <div
              className="tab-pane fade"
              id="progress"
              role="tabpanel"
              aria-labelledby="progress-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 1 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-1.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4590
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Plumbing Inspection
                            </Link>
                          </h5>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            EP
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Ethan Parker
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.8
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $3500
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">15 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-3.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4592
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Fire Alarm Installation
                            </Link>
                          </h5>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            CS
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Carter Simmons
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.8
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $6000
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">22 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-6.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4595
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Lighting Installation{" "}
                            </Link>
                          </h5>
                          <span className="badge bg-purple d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            HB
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Hunter Bryant
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.4
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $3800
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">30 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Pending
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* 1st Tab */}
            <div
              className="tab-pane fade"
              id="completed"
              role="tabpanel"
              aria-labelledby="completed-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 2 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 ">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-2.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB459
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingCompleted}
                              className="fw-semibold fs-18"
                            >
                              HVAC Maintenance
                            </Link>
                          </h5>
                          <span className="badge bg-success d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Completed
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            MB
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Mason Brooks
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.5
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $4500
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">15 Mar 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-success d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Completed
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* 5st Tab */}
            <div
              className="tab-pane fade"
              id="cancelled"
              role="tabpanel"
              aria-labelledby="cancelled-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 5 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-3 pb-3 border-bottom flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/profiles/booking-img-5.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-1 d-block"
                          >
                            #JOB4594
                          </Link>
                          <h5 className="mb-1">
                            <Link
                              to={all_routes.userJobBookingDetails}
                              className="fw-semibold fs-18"
                            >
                              Car Soap &amp; Foam Wash{" "}
                            </Link>
                          </h5>
                          <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle fs-6" />
                            Cancelled
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="avatar bg-light rounded-circle overflow-hidden">
                          <span className="fw-semibold fs-14 text-dark">
                            LC
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            <Link to="#" className="fw-semibold fs-14">
                              Lily Cooper
                            </Link>
                          </h6>
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />
                            4.7
                          </span>
                        </div>
                      </div>
                      {/* start row */}
                      <div className="row align-items-center mb-4 row-gap-3">
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Budget</p>
                          <h6 className="mb-0 fs-14 fw-medium text-secondary">
                            $1200
                          </h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-1 fs-12 fw-medium">Deadline</p>
                          <h6 className="mb-0 fs-14 fw-medium">05 Apr 2026</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="mb-0 fs-12 fw-medium">Payment Status</p>
                          <span className="badge badge-soft-danger d-inline-flex align-items-center gap-2 fs-12">
                            <i className="fa-solid fa-circle fs-6" />
                            Cancelled
                          </span>
                        </div>
                      </div>
                      {/* end row */}
                      <Link
                        to={all_routes.userJobBookingDetails}
                        className="btn btn-outline-white w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserJobBooking;
