import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";

const UserJob = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
            <h4 className="mb-0">Active Jobs</h4>
            <Link
              to={all_routes.customerCreateJob}
              className="btn btn-primary d-inline-flex align-items-center gap-2"
            >
              <i className="feather-plus" />
              Add New Job
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
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
                  All Jobs (9)
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
                  Hired (3)
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
                  In Progress (1)
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
                  Completed (3)
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
                  Cancelled (2)
                </button>
              </li>
            </ul>
            {/* Search and Filter */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
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
                  <Link
                    to="javascript:void(0);"
                    className="dropdown-item active"
                  >
                    Newly Added
                  </Link>
                  <Link to="javascript:void(0);" className="dropdown-item">
                    Oldest
                  </Link>
                </div>
              </div>
            </div>
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
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4590
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-2">
                              <i className="feather-bookmark" />
                              Hired
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-1.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Network Installation
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$480</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                22 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">15</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4591
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-purple text-purple d-inline-flex align-items-center gap-2">
                              <i className="feather-loader" />
                              In Progress
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-2.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              HVAC Maintenance
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$355</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                30 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">13</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4592
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-check-circle" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-3.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Software Update
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$200</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0 text-danger">
                                Expired
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">5</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4593
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-danger d-inline-flex align-items-center gap-2">
                              <i className="feather-info" /> Cancelled
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-4.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Plumbing Inspection
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$320</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                30 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">15</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4594
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-2">
                              <i className="feather-bookmark" />
                              Hired
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-5.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Security System Setup
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Security
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$100</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                18 Oct 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">12</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4595
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-2">
                              <i className="feather-bookmark" />
                              Hired
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-6.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Fire Alarm Installation
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Safety
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$170</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                25 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">22</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 7 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4596
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-danger text-danger d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Cancelled
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-7.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Electrical Repair
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$160</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                12 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">21</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 8 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4597
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-8.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Car Soap &amp; Foam Wash{" "}
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$190</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                10 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 9 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4598
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-9.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Lighting Installation{" "}
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Electrical
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$230</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                05 Oct 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">9</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
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
                {/* Item 1 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
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
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-2">
                              <i className="feather-bookmark" />
                              Hired
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-1.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Network Installation
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$480</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                22 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">15</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4593
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-danger d-inline-flex align-items-center gap-2">
                              <i className="feather-info" /> Cancelled
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-4.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Plumbing Inspection
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$320</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                30 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">15</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4594
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-2">
                              <i className="feather-bookmark" />
                              Hired
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-5.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Security System Setup
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Security
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$100</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                18 Oct 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">12</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
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
                {/* Item 2 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4591
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-purple text-purple d-inline-flex align-items-center gap-2">
                              <i className="feather-loader" />
                              In Progress
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-2.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              HVAC Maintenance
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$355</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                30 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">13</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* 4st Tab */}
            <div
              className="tab-pane fade"
              id="completed"
              role="tabpanel"
              aria-labelledby="completed-tab"
            >
              {/* start row */}
              <div className="row row-gap-4">
                {/* Item 3 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4592
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-check-circle" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-3.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Software Update
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$200</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0 text-danger">
                                Expired
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">5</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 8 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4597
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-8.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Car Soap &amp; Foam Wash{" "}
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              IT Services
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$190</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                10 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 9 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4598
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-success d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Completed
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-9.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Lighting Installation{" "}
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Electrical
                            </p>
                            <span className="badge bg-danger d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Inactive
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$230</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                05 Oct 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">9</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
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
                {/* Item 4 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4593
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-success text-danger d-inline-flex align-items-center gap-2">
                              <i className="feather-info" /> Cancelled
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-4.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Plumbing Inspection
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$320</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                30 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">15</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 7 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="card-header pt-0 px-0 mb-4">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <Link
                            to="#"
                            className="text-secondary fs-14 fw-medium mb-0 d-block"
                          >
                            #JOB4596
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-transparent-danger text-danger d-inline-flex align-items-center gap-2">
                              <i className="feather-info" />
                              Cancelled
                            </span>
                            <div className="form-check form-switch ms-0">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-sm-center align-items-start gap-3 mb-4 flex-sm-row flex-column">
                        <div className="avatar avatar-xxl rounded overflow-hidden">
                          <ImageWithBasePath
                            src="assets/img/about/jobs-img-7.jpg"
                            alt="booking"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div>
                          <h5 className="mb-2">
                            <Link
                              to={all_routes.customerJobDetails}
                              className="fw-semibold fs-18"
                            >
                              Electrical Repair
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <p className="fs-13 fw-medium text-dark mb-0 d-flex align-items-center gap-1">
                              <i className="isax isax-category-2 fs-14 text-muted" />
                              Facility Management
                            </p>
                            <span className="badge bg-success d-inline-flex align-items-center gap-2">
                              <i className="fa-solid fa-circle fs-6" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="job-card-content mb-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-4 start">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-dollar-circle3" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Budget</p>
                              <h6 className="fs-14 fw-medium mb-0">$160</h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-4 center">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="isax isax-calendar-remove" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Deadline</p>
                              <h6 className="fs-14 fw-medium mb-0">
                                12 Sep 2026
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-4 end">
                            <div className="text-center item">
                              <span className="mb-1 d-block fs-20 fw-medium">
                                <i className="feather-users" />
                              </span>
                              <p className="mb-1 fs-12 fw-medium">Proposals</p>
                              <h6 className="fs-14 fw-medium mb-0">21</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <Link
                          to={all_routes.customerJobDetails}
                          className="btn btn-outline-white w-100"
                        >
                          {" "}
                          View Details
                        </Link>
                        <Link
                          to={all_routes.customerEditJob}
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-edit-3" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-icon-md"
                        >
                          <i className="feather-trash-2" />
                        </Link>
                      </div>
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

export default UserJob;
