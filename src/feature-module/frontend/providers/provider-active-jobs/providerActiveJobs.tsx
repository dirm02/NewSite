import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../core/data/routes/all_routes"


const ProviderActiveJobs = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h2 className="fw-semibold mb-0 fs-20 text-dark">Active Jobs</h2>
        <div className="d-flex align-items-center">
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Export
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Export
              </Link>
              <Link to="#" className="dropdown-item">
                Import
              </Link>
            </div>
          </div>
          <Link
            to="#"
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-printer" />
          </Link>
        </div>
      </div>
      <div className="border-bottom mb-4">
        <div className="row">
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card job-card flex-fill">
              <div className="card-body">
                <div className="badge badges bg-pink">
                  <i className="fa-regular fa-file-lines" />
                </div>
                <h3 className="mb-1">5</h3>
                <p className="fs-14 mb-0">Active Jobs</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card job-card flex-fill">
              <div className="card-body">
                <div className="badge badges bg-secondary">
                  <i className="fa-solid fa-spinner" />
                </div>
                <h3 className="mb-1">1</h3>
                <p className="mb-0">Pending</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card job-card flex-fill">
              <div className="card-body">
                <div className="badge badges bg-info">
                  <i className="fa-regular fa-circle-check" />
                </div>
                <h3 className="mb-1">1</h3>
                <p className="mb-0">Completed</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card job-card flex-fill">
              <div className="card-body">
                <div className="badge badges bg-success">
                  <i className="fa-solid fa-dollar-sign" />
                </div>
                <h3 className="mb-1">$4,590</h3>
                <p className="mb-0">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project */}
      <div className="tab-list mb-4" role="tablist">
        <ul className="nav nav-dark-solid d-flex align-items-center">
          <li>
            <Link
              to="#"
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#all-projects"
              role="tab"
              aria-controls="all-projects"
              aria-selected="true"
              tabIndex={-1}
            >
              All<span>9</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#active"
              role="tab"
              aria-controls="active"
              aria-selected="false"
              tabIndex={-1}
            >
              Active<span>2</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#delivered"
              role="tab"
              aria-controls="delivered"
              aria-selected="false"
              tabIndex={-1}
            >
              Delivered<span>1</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#completed"
              role="tab"
              aria-controls="completed"
              aria-selected="false"
              tabIndex={-1}
            >
              Completed<span>4</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#inprogress"
              role="tab"
              aria-controls="inprogress"
              aria-selected="false"
              tabIndex={-1}
            >
              In Progress<span>1</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#cancelled"
              role="tab"
              aria-controls="cancelled"
              aria-selected="false"
              tabIndex={-1}
            >
              Cancelled<span>1</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content pt-0">
        <div
          className="tab-pane active"
          id="all-projects"
          role="tabpanel"
          aria-labelledby="all-projects"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB3310
                    </Link>
                    <span className="badge badge-info">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Active
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-1.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetails}>Plumbing Technician</Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-user.jpg"
                        className="img-fluid rounded-circle"
                        alt="avatar"
                      />
                    </Link>
                    <div>
                      <p className="fs-14 fw-bold mb-1">
                        <Link to={all_routes.customerDetails}>Cody Powell</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.8
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">$85</p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        22 Apr 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB1023
                    </Link>
                    <span className="badge badge-info">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Active
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-2.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetails}>AC Repair &amp; Maintenance</Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      KB
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Kelsie Battle</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.6
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $1200
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        05 May 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB2045
                    </Link>
                    <span className="badge badge-purple">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      In Progress
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-3.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsInprogress}>
                        Office Deep Cleaning
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JS
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jamiya Stark</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.9
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $450
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        12 Jul 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB5742
                    </Link>
                    <span className="badge badge-danger">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Cancelled
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-4.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCancelled}>
                        Home Electrical Wiring
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-3 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JT
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jazmyn Terry</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.4
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $800
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        30 Jun 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB1839
                    </Link>
                    <span className="badge badge-primary">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Delivered
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-5.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsDelivered}>
                        Living Room Interior Design
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-4">
                    <div className="avatar avatar-circle bg-light text-dark rounded-circle">
                      LR
                    </div>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Lana Ray</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.2
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $2500
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        01 Mar 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB4781
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-6.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Custom Wooden Cabinet
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JD
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jayson Downs</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.9
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $600
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        10 May 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB9124
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-7.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Bathroom Faucet Replacement
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-4">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JS
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jovani Small</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.4
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $8200
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        15 Aug 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB3098
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-8.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Air Conditioner Repair
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JB
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jaren Booker</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.1
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $150
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        28 Apr 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB5567
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-9.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Carpet Shampoo Service
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      DG
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Deon Green</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.3
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $180
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        18 Mar 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Empty Data */}
            <div className="col-12 d-none">
              <div className="card">
                <div className="card-body text-center">
                  <div className="avatar avatar-rounded text-pink bg-pink-100 mb-3">
                    <i className="feather-check-circle fs-24" />
                  </div>
                  <p className="fs-14 fw-semibold text-dark mb-1">
                    No Active Jobs
                  </p>
                  <p className="mb-0">Completed projects will appear here</p>
                </div>
              </div>
            </div>
            {/* End Empty Data */}
          </div>
        </div>
        <div
          className="tab-pane"
          id="active"
          role="tabpanel"
          aria-labelledby="active"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB3310
                    </Link>
                    <span className="badge badge-info">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Active
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-1.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetails}>Plumbing Technician</Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-user.jpg"
                        className="img-fluid rounded-circle"
                        alt="avatar"
                      />
                    </Link>
                    <div>
                      <p className="fs-14 fw-bold mb-1">
                        <Link to={all_routes.customerDetails}>Cody Powell</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.8
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">$85</p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        22 Apr 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB1023
                    </Link>
                    <span className="badge badge-info">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Active
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-2.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetails}>AC Repair &amp; Maintenance</Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      KB
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Kelsie Battle</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.6
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $1200
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        05 May 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetails}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="completed"
          role="tabpanel"
          aria-labelledby="completed"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB4781
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-6.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Custom Wooden Cabinet
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JD
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jayson Downs</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.9
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $600
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        10 May 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB9124
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-7.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Bathroom Faucet Replacement
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-4">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JS
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jovani Small</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.4
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $8200
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        15 Aug 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB3098
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-8.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Air Conditioner Repair
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JB
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jaren Booker</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.1
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $150
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        28 Apr 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB5567
                    </Link>
                    <span className="badge badge-success">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Completed
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-9.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCompleted}>
                        Carpet Shampoo Service
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      DG
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Deon Green</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.3
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $180
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        18 Mar 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCompleted}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="delivered"
          role="tabpanel"
          aria-labelledby="delivered"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB1839
                    </Link>
                    <span className="badge badge-primary">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Delivered
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-5.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsDelivered}>
                        Living Room Interior Design
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-4">
                    <div className="avatar avatar-circle bg-light text-dark rounded-circle">
                      LR
                    </div>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Lana Ray</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.2
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $2500
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        01 Mar 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsDelivered}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="inprogress"
          role="tabpanel"
          aria-labelledby="inprogress"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB2045
                    </Link>
                    <span className="badge badge-purple">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      In Progress
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-3.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsInprogress}>
                        Office Deep Cleaning
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JS
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jamiya Stark</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.9
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $450
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        12 Jul 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsInprogress}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="cancelled"
          role="tabpanel"
          aria-labelledby="cancelled"
        >
          <div className="row align-items-center g-4">
            {/* Job Item */}
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card flex-fill mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="text-secondary fw-medium fs-14"
                    >
                      Order ID : #JOB5742
                    </Link>
                    <span className="badge badge-danger">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Cancelled
                    </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="avatar avatar-lg rounded flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/provider/jobs-4.jpg"
                        className="rounded img-fluid"
                        alt="job"
                      />
                    </Link>
                    <h3 className="custom-subtitle text-truncate mb-0">
                      <Link to={all_routes.providerJobsDetailsCancelled}>
                        Home Electrical Wiring
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Link
                      to={all_routes.customerDetails}
                      className="avatar rounded-circle flex-shrink-0 bg-light text-dark"
                    >
                      JT
                    </Link>
                    <div>
                      <p className="fs-14 fw-semibold mb-1">
                        <Link to={all_routes.customerDetails}>Jazmyn Terry</Link>
                      </p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-star fs-14 text-warning me-1" />
                        4.4
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="fs-12 mb-1">Budget</p>
                      <p className="fs-14 text-secondary fw-medium mb-0">
                        $800
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="fs-12 mb-1">Deadline</p>
                      <p className="fs-14 text-dark fw-medium mb-0">
                        30 Jun 2026
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerJobsDetailsCancelled}
                      className="btn btn-white w-100 details-btn"
                    >
                      View Details
                    </Link>
                    <Link to="#" className="btn btn-white btn-icon">
                      <i className="ti ti-message" />
                    </Link>
                  </div>
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

export default ProviderActiveJobs