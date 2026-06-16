
import { Link } from "react-router-dom"
import { useState } from "react"
import { MultiSelect } from "primereact/multiselect"
import CustomDropdown from "../../common/dropdown/commonSelect"
import { Compare } from "../../../../core/data/json/dropDownData"


const UserQuoteComparison = () => {
  const [selectedSellers, setSelectedSellers] = useState<string[]>([])

  const sellerOptions = [
    { label: "Bessie Abernathy", value: "Bessie Abernathy" },
    { label: "Doug Mayberry", value: "Doug Mayberry" },
    { label: "Liam Chen", value: "Liam Chen" },
    { label: "Jules Orn", value: "Jules Orn" }
  ]

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="fw-semibold mb-0 fs-20 text-dark">Quote Comparison</h2>
            </div>
          </div>
          {/* Card filter */}
          <div className="card">
            <div className="card-body">
              <h3 className="fs-18 mb-4 fw-semibold">
                Compare proposals side-by-side to make the best decision
              </h3>
              <form action="#">
                <div className="row align-items-center g-3">
                  <div className="col-lg-5 col-md-6">
                    <CustomDropdown
                      options={Compare}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <MultiSelect
                      value={selectedSellers}
                      onChange={(e) => setSelectedSellers(e.value)}
                      options={sellerOptions}
                      placeholder="Select Sellers"
                      className="w-100"
                    />
                  </div>
                  <div className="col-lg-2">
                    <button type="submit" className="btn btn-dark w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Card Counter */}
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="bg-primary text-white d-flex align-items-center justify-content-center rounded-3 avatar avatar-lg">
                    <i className="ti ti-currency-dollar fs-24" />
                  </div>
                  <div>
                    <p className="mb-0">Average Price</p>
                    <h4 className="fw-semibold fs-24 mb-0">$7,925</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="bg-secondary text-white d-flex align-items-center justify-content-center rounded-3 avatar avatar-lg">
                    <i className="ti ti-chart-histogram fs-24" />
                  </div>
                  <div>
                    <p className="mb-0">Lowest Price</p>
                    <h5 className="fw-semibold fs-24 mb-0">$6,500</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="bg-purple text-white d-flex align-items-center justify-content-center rounded-3 avatar avatar-lg">
                    <i className="ti ti-clock fs-24" />
                  </div>
                  <div>
                    <p className="mb-0">Average Delivery</p>
                    <h5 className="fw-semibold fs-24 mb-0">32 days</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="bg-warning text-white d-flex align-items-center justify-content-center rounded-3 avatar avatar-lg">
                    <i className="ti ti-star fs-24" />
                  </div>
                  <div>
                    <p className="mb-0">Average Rating</p>
                    <h5 className="fw-bold">4.8</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Table */}
          <div className="row justify-content-center mt-2">
            <div className="col-xl-12 col-lg-12">
              {/* Quote Content List */}
              <div className="custom-datatable-filter table-responsive mb-0 rounded-lg border">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th>
                        <p className="text-dark fw-semibold mb-0 fs-14">Criteria</p>
                      </th>
                      <th>
                        <p className="text-dark fw-semibold mb-1 fs-18">
                          Mason Brooks
                        </p>
                        <span className="text-muted fs-16">
                          <i className="fa-solid fa-star text-warning fs-14" /> 4.5
                        </span>
                      </th>
                      <th>
                        <p className="text-dark fw-semibold mb-1 fs-18">
                          Carter Simmons
                        </p>
                        <span className="text-muted fs-16">
                          <i className="fa-solid fa-star text-warning fs-14" /> 4.7
                        </span>
                      </th>
                      <th>
                        <p className="text-dark fw-semibold mb-1 fs-18">
                          Abigail Carter{" "}
                          <span className="badge bg-info d-inlne-flex align-items-center gap-1 fs-13 ms-2">
                            <i className="feather-zap" />
                            Best
                          </span>
                        </p>
                        <span className="text-muted fs-16">
                          <i className="fa-solid fa-star text-warning fs-14" /> 4.9
                        </span>
                      </th>
                      <th>
                        <p className="text-dark fw-semibold mb-1 fs-18">
                          Ethan Parker
                        </p>
                        <span className="text-muted fs-16">
                          <i className="fa-solid fa-star text-warning fs-14" /> 4.8
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Total Price</p>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">$250</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">$200</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">$300</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="fw-semibold text-dark">$200</span>{" "}
                          <span className="badge bg-purple fs-13">Lowest</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Delivery Time</p>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">3 hrs</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">3 hrs</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">2 hrs</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">3 hrs</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Success Rate</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="progress flex-grow-1"
                            style={{ height: 8 }}
                            role="progressbar"
                            aria-label="Default striped example"
                            aria-valuenow={97}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success rounded-pill"
                              style={{ width: "95%" }}
                            />
                          </div>
                          97%
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="progress flex-grow-1"
                            style={{ height: 8 }}
                            role="progressbar"
                            aria-label="Default striped example"
                            aria-valuenow={96}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success rounded-pill"
                              style={{ width: "88%" }}
                            />
                          </div>
                          96%
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="progress flex-grow-1"
                            style={{ height: 8 }}
                            role="progressbar"
                            aria-label="Default striped example"
                            aria-valuenow={98}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success rounded-pill"
                              style={{ width: "94%" }}
                            />
                          </div>
                          98%
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="progress flex-grow-1"
                            style={{ height: 8 }}
                            role="progressbar"
                            aria-label="Default striped example"
                            aria-valuenow={97}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success rounded-pill"
                              style={{ width: "91%" }}
                            />
                          </div>
                          97%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">
                          Completed Projects
                        </p>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">198</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">189</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">215</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">156</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">
                          Completed Projects
                        </p>
                      </td>
                      <td>50% upfront, 50% on completion</td>
                      <td>30% upfront, 70% on completion</td>
                      <td>50% upfront, 50% on completion</td>
                      <td>40% upfront, 60% on completion</td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold">Warranty</p>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">12 months</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">4 months</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">6 months</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">3 months</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Strengths</p>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Fastest Delivery
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Most Features
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Extended Warranty
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Extended Warranty
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            More Revisions
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Premium Support
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" /> Fast
                            Delivery
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Excellent Rating
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Comprehensive Features
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Lowest Price
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="feather-check text-success" />
                            Good Value
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Considerations</p>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Highest Price
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Higher Price
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Longer Delivery Time
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Mid-range Pricing
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Fewer Features
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Shorter Warranty
                          </li>
                          <li className="mb-0 d-flex align-items-center gap-1">
                            <i className="fa-solid fa-circle fs-6" />
                            Lower Rating
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="text-dark fw-semibold mb-0">Actions</p>
                      </td>
                      <td>
                        <Link
                          to="#"
                          className="btn btn-white d-flex justify-content-center align-items-center mb-2 gap-1"
                        >
                          <i className="ti ti-message" /> Message Vendor
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary d-flex justify-content-center align-items-center gap-1"
                        >
                          <i className="ti ti-progress-check" /> Accept Proposal
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="#"
                          className="btn btn-white d-flex justify-content-center align-items-center mb-2 gap-1"
                        >
                          <i className="ti ti-message" /> Message Vendor
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary d-flex justify-content-center align-items-center gap-1"
                        >
                          <i className="ti ti-progress-check" /> Accept Proposal
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="#"
                          className="btn btn-white d-flex justify-content-center align-items-center mb-2 gap-1"
                        >
                          <i className="ti ti-message" /> Message Vendor
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary d-flex justify-content-center align-items-center gap-1"
                        >
                          <i className="ti ti-progress-check" /> Accept Proposal
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="#"
                          className="btn btn-white d-flex justify-content-center align-items-center mb-2 gap-1"
                        >
                          <i className="ti ti-message" /> Message Vendor
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary d-flex justify-content-center align-items-center gap-1"
                        >
                          <i className="ti ti-progress-check" /> Accept Proposal
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Quote Content List */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>

  )
}

export default UserQuoteComparison