import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import Modal from "./modal";
import { all_routes } from "../../../../core/data/routes/all_routes";
import ProviderProposalsPanel from "../../common/jobs/ProviderProposalsPanel";

const ProviderProposal = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <ProviderProposalsPanel />
          <div className="d-none">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
              <h2 className="fw-semibold mb-0 fs-20 text-dark">Proposals</h2>
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
          </div>
          {/* Summary Cards */}
          <div className="row g-4">
            {/* Proposals Card */}
            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="avatar avatar-lg bg-primary rounded-circle mb-3">
                    <i className="ti ti-file-text fs-24" />
                  </div>
                  <p className="mb-1 fs-14">Total Proposals</p>
                  <h2 className="fs-28 fw-bold mb-0">04</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="avatar avatar-lg bg-secondary rounded-circle mb-3">
                    <i className="ti ti-stack-front fs-24" />
                  </div>
                  <p className="mb-1 fs-14">Shortlisted</p>
                  <h2 className="fs-28 fw-bold mb-0">01</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="avatar avatar-lg bg-info rounded-circle mb-3">
                    <i className="ti ti-circle-check fs-24" />
                  </div>
                  <p className="mb-1 fs-14">Accepted</p>
                  <h2 className="fs-28 fw-bold mb-0">0</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="avatar avatar-lg bg-success rounded-circle mb-3">
                    <i className="ti ti-chart-pie fs-24" />
                  </div>
                  <p className="mb-1 fs-14">Success Rate</p>
                  <h2 className="fs-28 fw-bold mb-0">100%</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
              <div className="card mb-0">
                <div className="card-body">
                  <h2 className="mb-3 fs-20 fw-semibold">
                    Proposal Performance
                  </h2>
                  <p className="d-flex justify-content-between align-items-center mb-2 fs-14">
                    Response Rate
                    <span className="fw-semibold text-dark fs-md-18 fs-14">
                      75%
                    </span>
                  </p>
                  <p className="d-flex justify-content-between align-items-center mb-2 fs-14">
                    Average Response Time
                    <span className="fw-semibold text-dark fs-md-18 fs-14">
                      2 days
                    </span>
                  </p>
                  <p className="d-flex justify-content-between align-items-center mb-0 fs-14">
                    Acceptance Rate
                    <span className="fw-semibold text-dark fs-md-18 fs-14">
                      25%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Card ends */}
          </div>
          <div className="sear-filter-item d-flex align-items-center justify-content-between flex-wrap gap-3 mt-4 pt-4 border-top">
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
                to="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item active">
                  Ascending
                </Link>
                <Link to="#" className="dropdown-item">
                  Descending
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-xl-12 col-lg-12">
              {/* Coupons List */}
              <div className="table-responsive mb-0">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th className="fs-14 fw-semibold text-dark">Job Title</th>
                      <th className="fs-14 fw-semibold text-dark">Client</th>
                      <th className="fs-14 fw-semibold text-dark">Amount</th>
                      <th className="fs-14 fw-semibold text-dark">Deadline </th>
                      <th className="fs-14 fw-semibold text-dark">
                        Submitted On
                      </th>
                      <th className="fs-14 fw-semibold text-dark">Messages</th>
                      <th className="fs-14 fw-semibold text-dark">Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/provider/proposal-1.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h3 className="fs-14 fw-semibold mb-0">
                              <Link to="#">Appliance Repair Technician</Link>
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>Bessie Abernathy</td>
                      <td>
                        <strong className="fs-14 mb-0 text-info fw-medium">
                          $3500
                        </strong>
                      </td>
                      <td>12 Oct 2026</td>
                      <td>16 Oct 2026</td>
                      <td>
                        <i className="isax isax-messages-3 text-dark me-1" />5
                      </td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          Accepted
                        </span>
                      </td>
                      <td>
                        <div className="user-icon d-inline-flex align-items-center gap-2">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#messages-proposel"
                          >
                            <i className="ti ti-arrow-bear-left" />
                          </Link>
                          <Link to="#">
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/provider/proposal-2.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h3 className="fs-14 fw-semibold mb-0">
                              <Link to="#">Home Cleaning Specialist</Link>
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>Doug Mayberry</td>
                      <td>
                        <strong className="fs-14 mb-0 text-info fw-medium">
                          $2200
                        </strong>
                      </td>
                      <td>05 Nov 2026</td>
                      <td>09 Nov 2026</td>
                      <td>
                        <i className="isax isax-messages-3 text-dark me-1" />3
                      </td>
                      <td>
                        <span className="badge badge-purple d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <div className="user-icon d-inline-flex align-items-center gap-2">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#messages-proposel"
                          >
                            <i className="ti ti-arrow-bear-left" />
                          </Link>
                          <Link to="#">
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/provider/proposal-3.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h3 className="fs-14 fw-semibold mb-0">
                              <Link to="#">AC Repair &amp; Maintenance</Link>
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>Liam Chen</td>
                      <td>
                        <strong className="fs-14 mb-0 text-info fw-medium">
                          $4800
                        </strong>
                      </td>
                      <td>18 Oct 2026</td>
                      <td>19 Oct 2026</td>
                      <td>
                        <i className="isax isax-messages-3 text-dark me-1" />0
                      </td>
                      <td>
                        <span className="badge badge-warning d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="user-icon d-inline-flex align-items-center gap-2">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#messages-proposel"
                          >
                            <i className="ti ti-arrow-bear-left" />
                          </Link>
                          <Link to="#">
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/provider/proposal-4.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h3 className="fs-14 fw-semibold mb-0">
                              <Link to="#">Plumbing Technician</Link>
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>Jayson Willms</td>
                      <td>
                        <strong className="fs-14 mb-0 text-info fw-medium">
                          $2750
                        </strong>
                      </td>
                      <td>18 Oct 2026</td>
                      <td>24 Oct 2026</td>
                      <td>
                        <i className="isax isax-messages-3 text-dark me-1" />3
                      </td>
                      <td>
                        <span className="badge badge-danger d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="user-icon d-inline-flex align-items-center gap-2">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#messages-proposel"
                          >
                            <i className="ti ti-arrow-bear-left" />
                          </Link>
                          <Link to="#">
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/provider/proposal-5.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h4 className="fs-14 fw-semibold mb-0">
                              <Link to="#">Electrical Technician</Link>
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>Jules Orn</td>
                      <td>
                        <strong className="fs-14 mb-0 text-info fw-medium">
                          $900
                        </strong>
                      </td>
                      <td>15 Oct 2026</td>
                      <td>22 Oct 2026</td>
                      <td>
                        <i className="isax isax-messages-3 text-dark me-1" />5
                      </td>
                      <td>
                        <span className="badge badge-info d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          Viewed
                        </span>
                      </td>
                      <td>
                        <div className="user-icon d-inline-flex align-items-center gap-2">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#messages-proposel"
                          >
                            <i className="ti ti-arrow-bear-left" />
                          </Link>
                          <Link to="#">
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /Coupons List */}
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <Modal />
    </>
  );
};

export default ProviderProposal;
