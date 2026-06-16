import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { Country, Feed } from "../../../../core/data/json/dropDownData";
import CustomDropdown from "../../common/dropdown/commonSelect";
import Modal from "./modal";

const ProviderJobFeed = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Title */}
          <div className="mb-4">
            <h2 className="fw-semibold mb-0 fs-20 text-dark">Find a Job</h2>
            <p className="mb-0 fs-14">
              Discover opportunities that match your skills
            </p>
          </div>
          {/* Search Section */}
          <div className="card">
            <div className="card-body">
              <div className="search-wrapper">
                <div className="row g-3 align-items-center">
                  <div className="col-lg-8">
                    <div className="input-group custom-input-group">
                      <span className="input-group-text">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by keywords, skills, or location..."
                      />
                    </div>
                  </div>
                  <div className=" col-lg-2 col-md-6">
                   <CustomDropdown
                        options={Country}
                        className="select d-flex"
                        placeholder="Select"
                      />
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <CustomDropdown
                        options={Feed}
                        className="select d-flex"
                        placeholder="Select"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="fw-semibold mb-0 fs-14 text-dark">
                  14 Jobs Found
                </p>
                <button
                  className="btn btn-white border d-inline-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#fillter-offcanvas"
                >
                  <i className="isax isax-setting-5" />
                  Filter
                </button>
              </div>
              {/* Job Card 1 */}
              <div className="card job-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/appliance.jpg"
                        className="job-thumbnail rounded-2 flex-shrink-0"
                        alt="job"
                      />
                      <div>
                        <h2 className="fw-semibold mb-2 fs-18">
                          <Link to="#">Appliance Repair Technician</Link>
                        </h2>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="fs-14 fw-medium">
                            Bessie Abernathy
                          </span>
                          <span className="text-light">|</span>
                          <span>
                            <i className="fa-solid fa-star text-warning" /> 4.8
                          </span>
                          <span className="badge bg-success">
                            Payment Verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-2">
                      <span className="badge badge-info me-2">
                        <i className="ti ti-bolt me-1" />
                        Featured
                      </span>
                      <span className="badge badge-danger">
                        <i className="ti ti-clock me-1" />
                        Urgent
                      </span>
                    </div>
                  </div>
                  <p className="fs-14 mb-2">
                    Seeking a skilled appliance repair technician to diagnose
                    and fix various household appliances efficiently.
                  </p>
                  <div className="d-flex gap-3 mb-4 flex-wrap">
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-dollar-sign text-dark fs-14" />
                      $700-$1400
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-map-pin text-dark fs-14" />
                      Delaware
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-clock text-dark fs-14" />5 hours ago
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-users text-dark fs-14" />
                      25 proposals
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Dishwashers
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Refrigerators
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Washers &amp; Dryers
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Microwaves
                    </span>
                  </div>
                  <div className="d-flex alert bg-transparent-success text-success justify-content align-items-center fs-14 fw-medium p-2">
                    <i className="ti ti-arrow-elbow-right me-1 text-success" />{" "}
                    92% match with your profile
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerApplyJobs}
                      className="btn btn-white border flex-grow-1 provide-apply-btn"
                    >
                      Apply
                    </Link>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-share" />
                    </button>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-bookmark-filled text-warning" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Job Card 1 */}
              {/* Job Card 2 */}
              <div className="card job-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/cleaning.jpg"
                        className="job-thumbnail rounded-2 flex-shrink-0"
                        alt="job"
                      />
                      <div>
                        <h2 className="fw-semibold mb-2 fs-18">
                          <Link to="#">Home Cleaning Specialist</Link>
                        </h2>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="fs-14 fw-medium">Doug Mayberry</span>
                          <span className="text-light">|</span>
                          <span>
                            <i className="fa-solid fa-star text-warning" /> 4.9
                          </span>
                          <span className="badge bg-success">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-2">
                      <span className="badge badge-info">
                        <i className="ti ti-bolt" />
                        Featured
                      </span>
                    </div>
                  </div>
                  <p className="fs-14 mb-2">
                    We are looking for a detail-oriented home cleaning
                    specialist to provide exceptional cleaning services.
                  </p>
                  <div className="d-flex gap-3 mb-4 flex-wrap">
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-dollar-sign text-dark fs-14" />
                      $500 - $1000
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-map-pin text-dark fs-14" />
                      Texas
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-clock text-dark fs-14" />2 days ago
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-users text-dark fs-14" />
                      35 proposals
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Deep Cleaning
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Window Washing
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerApplyJobs}
                      className="btn btn-white border flex-grow-1 provide-apply-btn"
                    >
                      Apply
                    </Link>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-share" />
                    </button>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-bookmark" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Job Card 2 */}
              {/* Job Card 3 */}
              <div className="card job-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/ac-repair.jpg"
                        className="job-thumbnail rounded-2 flex-shrink-0"
                        alt="job"
                      />
                      <div>
                        <h2 className="fw-semibold mb-2 fs-18">
                          <Link to="#">Plumbing Technician</Link>
                        </h2>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="fs-14 fw-medium">Jayson Willms</span>
                          <span className="text-light">|</span>
                          <span>
                            <i className="fa-solid fa-star text-warning" /> 4.6
                          </span>
                          <span className="badge bg-success"> Top Client</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="fs-14 mb-2">
                    Seeking a skilled plumbing technician to diagnose and
                    resolve plumbing issues efficiently.
                  </p>
                  <div className="d-flex gap-3 mb-4 flex-wrap">
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-dollar-sign text-dark fs-14" />
                      $900 - $1800
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-map-pin text-dark fs-14" />
                      Newyork
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-clock text-dark fs-14" />2 days ago
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-users text-dark fs-14" />5 proposals
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Pipe Fitting
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Drain Cleaning
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Fixture Installation
                    </span>
                  </div>
                  <div className="d-flex alert bg-transparent-success text-success justify-content align-items-center fs-14 fw-medium p-2">
                    <i className="ti ti-arrow-elbow-right me-1 text-success" />{" "}
                    90% match with your profile
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerApplyJobs}
                      className="btn btn-white border flex-grow-1 provide-apply-btn"
                    >
                      Apply
                    </Link>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-share" />
                    </button>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-bookmark-filled text-warning" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Job Card 3 */}
              {/* Job Card 4 */}
              <div className="card job-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/electric-repair.jpg"
                        className="job-thumbnail rounded-2 flex-shrink-0"
                        alt="job"
                      />
                      <div>
                        <h2 className="fw-semibold mb-2 fs-18">
                          <Link to="#">Electrical Technician</Link>
                        </h2>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="fs-14 fw-medium">Jules Orn</span>
                          <span className="text-light">|</span>
                          <span>
                            <i className="fa-solid fa-star text-warning" /> 4.4
                          </span>
                          <span className="badge bg-success">
                            Payment Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="fs-14 mb-2">
                    We are looking for a skilled electrical technician to
                    diagnose and resolve electrical issues.
                  </p>
                  <div className="d-flex gap-3 mb-4 flex-wrap">
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-dollar-sign text-dark fs-14" />
                      $800-$1500
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-map-pin text-dark fs-14" />
                      California
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-clock text-dark fs-14" />3 hours ago
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-users text-dark fs-14" />
                      15 proposals
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Wiring
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Panel Upgrades
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Lighting
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Repairs
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerApplyJobs}
                      className="btn btn-white border flex-grow-1 provide-apply-btn"
                    >
                      Apply
                    </Link>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-share" />
                    </button>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-bookmark-filled text-warning" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Job Card 4 */}
              {/* Job Card 5 */}
              <div className="card job-card mb-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/hvac-details.jpg"
                        className="job-thumbnail rounded-2 flex-shrink-0"
                        alt="job"
                      />
                      <div>
                        <h2 className="fw-semibold mb-2 fs-18">
                          <Link to="#">HVAC Technician</Link>
                        </h2>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="fs-14 fw-medium">Krysta Heaney</span>
                          <span className="text-light">|</span>
                          <span>
                            <i className="fa-solid fa-star text-warning" /> 4.5
                          </span>
                          <span className="badge bg-success">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="fs-14 mb-2">
                    Seeking a skilled HVAC technician to diagnose and resolve
                    HVAC issues efficiently.
                  </p>
                  <div className="d-flex gap-3 mb-4 flex-wrap">
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-dollar-sign text-dark fs-14" />
                      $1000-$2500
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-map-pin text-dark fs-14" />
                      Florida
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-clock text-dark fs-14" />6 hours ago
                    </span>
                    <span className="fs-14 fw-medium d-flex align-items-center gap-1">
                      <i className="feather-users text-dark fs-14" />
                      20 proposals
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Air Conditioning
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Heating
                    </span>
                    <span className="tag-pill border border-color rounded px-2 fs-13 py-1 text-dark fw-medium">
                      Ventilation
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <Link
                      to={all_routes.providerApplyJobs}
                      className="btn btn-white border flex-grow-1 provide-apply-btn"
                    >
                      Apply
                    </Link>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-share" />
                    </button>
                    <button className="btn btn-white border provide-action-btn fs-16">
                      <i className="ti ti-bookmark-filled text-warning" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Job Card 4 */}
            </div>
            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="fw-bold fs-20">Recommended for You</h3>
                </div>
                <div className="card-body">
                  <div className="mb-3 p-3 rounded-lg bg-light-200 border">
                    <div className="d-flex gap-2 mb-2 align-items-center ">
                      <ImageWithBasePath
                        src="assets/img/about/jobs-img-7.jpg"
                        className="avatar avatar-lg rounded-2"
                        alt="job"
                      />
                      <div>
                        <h4 className="fw-semibold fs-14">
                          Home Cleaning Service
                        </h4>
                        <div className="d-flex flex-wrap gap-2 align-items-center fs-13">
                          Maya Patel
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap align-items-center gap-2">
                      <p className="text-secondary fw-medium mb-0 fs-12">
                        $80 - $150
                      </p>
                      <span className="badge bg-white text-dark">
                        95% Match
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 p-3 rounded-lg bg-light-200 border">
                    <div className="d-flex gap-2 mb-2 align-items-center ">
                      <ImageWithBasePath
                        src="assets/img/provider/ac-repair.jpg"
                        className="avatar avatar-lg rounded-2"
                        alt="job"
                      />
                      <div>
                        <h4 className="fw-semibold fs-14">
                          AC Repair &amp; Maintenance
                        </h4>
                        <div className="d-flex flex-wrap gap-2 align-items-center fs-13">
                          Liam Chen
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap align-items-center gap-2">
                      <p className="text-secondary fw-medium mb-0 fs-12">
                        $40 - $70
                      </p>
                      <span className="badge bg-white text-dark">
                        $40 - $70
                      </span>
                    </div>
                  </div>
                  <div className="mb-0 p-3 rounded-lg bg-light-200 border">
                    <div className="d-flex gap-2 mb-2 align-items-center ">
                      <ImageWithBasePath
                        src="assets/img/about/jobs-img-8.jpg"
                        className="avatar avatar-lg rounded-2"
                        alt="job"
                      />
                      <div>
                        <h4 className="fw-semibold fs-14">
                          Mobile Car Wash &amp; Detailing
                        </h4>
                        <div className="d-flex flex-wrap gap-2 align-items-center fs-13">
                          Sophia Kim
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap align-items-center gap-2">
                      <p className="text-secondary fw-medium mb-0 fs-12">
                        $50 - $120
                      </p>
                      <span className="badge bg-white text-dark">
                        87% Match
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h5 className="fw-bold">Pro Tips</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled text-muted small mb-0">
                    <li className="mb-3 d-flex align-items-center gap-2">
                      {" "}
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Apply early to stand out
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      {" "}
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Customize your cover letter
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Showcase relevant portfolio items
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <Modal/>
    </>
  );
};

export default ProviderJobFeed;
