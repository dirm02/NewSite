import { Link } from "react-router-dom"
import { all_routes } from "../../../../core/data/routes/all_routes"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"
import Modal from "./modal"
import CustomerJobDetailPanel from "../../common/jobs/CustomerJobDetailPanel"

const CustomerJobDetails = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="row justify-content-center">
        <Link to={all_routes.userJob} className="fw-medium fs-14 mb-4">
          <i className="fa-solid fa-angle-left" />
          Back to Job List
        </Link>
      </div>
      <CustomerJobDetailPanel />
      <div className="d-none">
      {/* TOP SECTION */}
      <div className="row row-gap-4">
        {/* JOB INFO */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="text-secondary fw-semibold fs-14">
                    #JOB4591
                  </span>
                  <span className="badge badge-success d-flex align-items-center">
                    <i className="ti ti-point-filled" />
                    Active
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                <ImageWithBasePath
                  src="assets/img/provider/hvac-details.jpg"
                  className="rounded"
                  alt="img"
                />
                <div>
                  <h5 className="mb-1 fs-18">HVAC Maintenance</h5>
                  <p className="mb-0 fs-14">
                    <i className="ti ti-category-2" /> Facility Management
                  </p>
                </div>
                <div className="ms-sm-auto text-sm-end">
                  <p className="mb-1 fs-12">Total Budget</p>
                  <h6 className="fw-bold text-secondary fs-18">$355</h6>
                </div>
              </div>
              <p className="fs-14">
                We are seeking a skilled developer to build a user-friendly
                mobile application for both iOS and Android platforms. The ideal
                candidate should have experience in developing native mobile
                apps, a strong understanding of mobile UI/UX design principles.
              </p>
              <h6 className="mb-2 fs-14">Skills</h6>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-white text-dark border">
                  Expertise in AC systems
                </span>
                <span className="badge bg-white text-dark border">
                  Proficient in wiring
                </span>
                <span className="badge bg-white text-dark border">
                  Testing tools
                </span>
              </div>
            </div>
          </div>
          {/* PROPOSALS */}
          <div className="card mb-0">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-0 fs-18">Proposals</h5>
                  <p className="text-muted fs-14 text-dark mb-0">
                    Total Proposals : 6
                  </p>
                </div>
              </div>
              {/* ITEM 1  */}
              <div className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      EP
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Ethan Parker</h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.8
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          98% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 150
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary">$300</h6>
                    <p>4 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Specialists in eco-friendly HVAC maintenance, ensuring
                  energy-efficient and cost-saving solutions.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    IoT Sensors
                  </span>
                  <span className="badge bg-white border text-dark">
                    Cloud Monitoring
                  </span>
                  <span className="badge bg-white border text-dark">
                    Predictive Maintenance
                  </span>
                  <span className="badge bg-white border text-dark">
                    Energy Auditing
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 1 day ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#proposal-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* ITEM 2  */}
              <div className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      MB
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Mason Brooks</h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.5
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          92% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 98
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary">$299</h6>
                    <p>3 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Providing thorough HVAC inspections and timely repairs to
                  maximize system lifespan and indoor air quality.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    Duct Cleaning Tech
                  </span>
                  <span className="badge bg-white border text-dark">
                    Mobile App Scheduling
                  </span>
                  <span className="badge bg-white border text-dark">
                    Preventive Care
                  </span>
                  <span className="badge bg-white border text-dark">
                    Indoor Air Quality Testing
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 5 days ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#proposal-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* ITEM 3  */}
              <div className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      CS
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Carter Simmons</h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.7
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          96% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 130
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary">$200</h6>
                    <p>3 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Tailored HVAC maintenance plans integrating smart controls for
                  optimized temperature regulation and energy use.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    Smart Thermostats
                  </span>
                  <span className="badge bg-white border text-dark">
                    Remote Diagnostics
                  </span>
                  <span className="badge bg-white border text-dark">
                    Custom Solutions
                  </span>
                  <span className="badge bg-white border text-dark">
                    System Calibration
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 2 days ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#proposal-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* ITEM 4  */}
              <div className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      AC
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1 d-flex align-items-center gap-2">
                        Abigail Carter{" "}
                        <span className="badge bg-info d-inline-flex align-items-center gap-1 fs-13">
                          <i className="feather-zap" />
                          Best
                        </span>
                      </h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.9
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          99% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 165
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary">$300</h6>
                    <p>3 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Leaders in sustainable HVAC maintenance emphasizing green
                  technologies and reduced carbon footprints.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    Solar Integration
                  </span>
                  <span className="badge bg-white border text-dark">
                    Energy Management Systems
                  </span>
                  <span className="badge bg-white border text-dark">
                    Green Tech
                  </span>
                  <span className="badge bg-white border text-dark">
                    Carbon Reduction
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 3 days ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#proposal-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* ITEM 5  */}
              <div className="border rounded-3 p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      LC
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Lily Cooper </h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.4
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          90% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 110
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary d-flex align-items-center gap-2">
                      <span className="badge bg-purple d-inline-flex align-items-center gap-1 fs-13">
                        Lowest
                      </span>
                      $220
                    </h6>
                    <p>3 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Focused on improving indoor air quality through advanced
                  filtration and routine HVAC system maintenance.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    HEPA Filters
                  </span>
                  <span className="badge bg-white border text-dark">
                    Air Quality Sensors
                  </span>
                  <span className="badge bg-white border text-dark">
                    Health Focused
                  </span>
                  <span className="badge bg-white border text-dark">
                    Filter Replacement
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 4 days ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#proposal-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* ITEM 6  */}
              <div className="border rounded-3 p-3">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="rounded-circle avatar avatar-lg bg-light text-dark fs-14 fw-semibold flex-shrink-0">
                      HB
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1 d-flex align-items-center gap-2">
                        Hunter Bryant
                        <span className="badge bg-info d-inline-flex align-items-center gap-1 fs-13">
                          <i className="feather-zap" />
                          Best
                        </span>
                        <span className="badge bg-transparent-info text-info d-inline-flex align-items-center gap-1 fs-13">
                          <i className="feather-bookmark" />
                          Hired
                        </span>
                      </h6>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="mb-0">
                          <i className="fa-solid fa-star text-warning me-1" />
                          4.6
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-arrow-bear-left text-dark me-1" />
                          94% Success
                        </p>
                        <span className="text-light">|</span>
                        <p className="mb-0">
                          <i className="ti ti-briefcase text-dark me-1" /> 140
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="text-secondary">$200</h6>
                    <p>3 Hrs</p>
                  </div>
                </div>
                <p className="mt-3">
                  Innovators in automated HVAC maintenance leveraging AI for
                  system diagnostics and efficiency enhancements.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 pb-4 border-bottom">
                  <span className="badge bg-white border text-dark">
                    AI Diagnostics
                  </span>
                  <span className="badge bg-white border text-dark">
                    Machine Learning
                  </span>
                  <span className="badge bg-white border text-dark">
                    Automation
                  </span>
                  <span className="badge bg-white border text-dark">
                    Efficiency Boost
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-clock text-dark" /> Submitted 3 days ago
                  </p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#hired-details"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OVERVIEW */}
        <div className="col-xl-4">
          <div className="card mb-0">
            <div className="card-body">
              <div className="card-header pt-0 px-0 mb-4">
                <h5 className="fw-bold mb-0 fs-18">Overview</h5>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <span className="fs-24">
                  <i className="isax isax-calendar-tick" />
                </span>
                <div className="align-items-center">
                  <p className="mb-1 fs-13">Created On</p>
                  <p className="fw-medium text-dark fs-14">26 Sep 2026</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <span className="fs-24">
                  <i className="isax isax-calendar-remove" />
                </span>
                <div className="align-items-center">
                  <p className="mb-1 fs-13">Deadline</p>
                  <p className="fw-medium text-dark fs-14">30 Sep 2026</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <span className="fs-24">
                  <i className="isax isax-location" />
                </span>
                <div className="align-items-center">
                  <p className="mb-1 fs-13"> Location </p>
                  <p className="fw-medium text-dark fs-14">
                    123 Main Street, Springfield,&nbsp;IL&nbsp;62701
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-2">
                Job Status : Active
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <Modal/>
</>

  )
}

export default CustomerJobDetails