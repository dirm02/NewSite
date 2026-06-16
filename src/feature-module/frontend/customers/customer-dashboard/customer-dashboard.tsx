import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import CountUp from "react-countup";


const CustomerDashboard = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <h2 className="mb-4 fs-24 fw-semibold">Dashboard</h2>
          {/* start row */}
          <div className="row row-gap-4 mb-4">
            <div className="col-xxl-3 col-md-6 col-sm-6">
              <div className="card dash-widget mb-0">
                <div className="card-body">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="dash-icon bg-primary-transparent d-flex justify-content-center align-items-center rounded-circle">
                        <i className="ti ti-shopping-cart" />
                      </span>
                      <div className="ms-2">
                        <span className="fs-14">Total Orders</span>
                        <h3 className="fs-20 fw-semibold">
                         <CountUp className="counter" end={27} />
                        </h3>
                      </div>
                    </div>
                    <span className="badge badge-success">
                      <i className="ti ti-circle-arrow-up me-1" />
                      16%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-6">
              <div className="card dash-widget mb-0">
                <div className="card-body">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="dash-icon bg-secondary-transparent d-flex justify-content-center align-items-center rounded-circle">
                        <i className="ti ti-wallet" />
                      </span>
                      <div className="ms-2">
                        <span className="fs-14">Total Spend</span>
                        <h4 className="fs-20 fw-semibold">
                          $ <CountUp className="counter" end={2500} />
                        </h4>
                      </div>
                    </div>
                    <span className="badge badge-danger">
                      <i className="ti ti-circle-arrow-down me-1" />
                      5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-6">
              <div className="card dash-widget mb-0">
                <div className="card-body">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="dash-icon bg-success-transparent d-flex justify-content-center align-items-center rounded-circle ">
                        <i className="ti ti-cards" />
                      </span>
                      <div className="ms-2">
                        <span className="fs-14">Wallet</span>
                        <h5>
                          $ <CountUp className="counter" end={200} />
                        </h5>
                      </div>
                    </div>
                    <span className="badge badge-danger">
                      <i className="ti ti-circle-arrow-down me-1" />
                      5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-6">
              <div className="card dash-widget mb-0">
                <div className="card-body">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="dash-icon bg-info-transparent d-flex justify-content-center align-items-center rounded-circle">
                        <i className="ti ti-cards" />
                      </span>
                      <div className="ms-2">
                        <span className="fs-14">Total Savings</span>
                        <h5>
                          $ <CountUp className="counter" end={354} />
                        </h5>
                      </div>
                    </div>
                    <span className="badge badge-success">
                      <i className="ti ti-circle-arrow-up me-1" />
                      16%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row row-gap-4 mb-4">
            <div className="col-xxl-6 col-lg-7 d-flex">
              <div className="card w-100 mb-0">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Booking</h5>
                  <Link
                    to={all_routes.userJobBookingDetails}
                    className="link-primary text-decoration-underline fs-16 fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="w-100">
                    <div className="table-responsive border-0 mb-0">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-15.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Computer Repair
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-01.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">John Smith</h6>
                                  <span className="text-gray fs-14">
                                    john@gmail.com
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-13.jpg"
                                    className="img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Car Repair </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    15 Oct 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="javascript:void(0);"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-02.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Timothy</h6>
                                  <span className="text-gray fs-14">
                                    timothy@gmail.com
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-16.jpg"
                                    className="img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Interior Designing{" "}
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    18 Oct 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="javascript:void(0);"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-03.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Jordan</h6>
                                  <span className="text-gray fs-14">
                                    jordan@gmail.com
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-17.jpg"
                                    className="img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Steam Car Wash</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    28 Oct 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="javascript:void(0);"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-05.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <h6 className="fs-14">Armand</h6>
                                    <span className="text-gray fs-14">
                                      armand@gmail.com
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-19.jpg"
                                    className="img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">House Cleaning</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="javascript:void(0);"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-04.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Joseph</h6>
                                  <span className="text-gray fs-14">
                                    joseph@gmail.com
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-0 pb-0">
                              <Link
                                to={all_routes.bookingDetails}
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/providers/provider-09.jpg"
                                    className="img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Car Repair</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar me-1" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="border-0 pb-0">
                              <Link
                                to="javascript:void(0);"
                                className="d-flex align-items-center"
                              >
                                <span className="avatar dash-icon-1 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/user/user-06.jpg"
                                    className="rounded-circle img-fluid"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Adrian</h6>
                                  <span className="text-gray fs-14">
                                    jadrian@gmail.com
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="text-end border-0 pb-0">
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-5 d-flex">
              <div className="card w-100 mb-0">
                <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <h5 className="mb-0">Recent Transaction</h5>
                  <Link
                    to={all_routes.userJobBookingDetails}
                    className="link-primary text-decoration-underline fs-16 fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="w-100">
                    <div className="table-responsive border-0 mb-0">
                      <table className="table mb-0 border-0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-devices-2 fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Service Booking
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    22 Sep 2023
                                    <span className="ms-2">
                                      <i className="feather-clock" />
                                      10:12 AM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <h6>$280.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-refresh fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Service Refund</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    15 Oct 2022
                                    <span className="ms-2">
                                      <i className="ti ti-clock me-1" />
                                      14:36 PM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <h6>$395.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-wallet fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">Wallet Topup</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    18 Oct 2022
                                    <span className="ms-2">
                                      <i className="ti ti-clock me-1" />
                                      15:19 PM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <h6>$1000.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-devices-2 fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Service Booking
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    28 Oct 2022
                                    <span className="ms-2">
                                      <i className="ti ti-clock me-1" />
                                      11:17 AM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <h6>$598.65</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-devices-2 fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Service Booking
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    10 Nov 2022
                                    <span className="ms-2">
                                      <i className="ti ti-clock me-1" />
                                      09:13 AM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <h6>$300.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-0 pb-0">
                              <div className="d-flex align-items-center">
                                <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                  <i className="ti ti-devices-2 fs-20 text-dark" />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    Service Booking
                                  </h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather-calendar" />
                                    10 Nov 2022
                                    <span className="ms-2">
                                      <i className="ti ti-clock me-1" />
                                      09:13 AM
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end border-0 pb-0">
                              <h6>$300.00</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          {/* start card */}
          <div className="card w-100 mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Jobs</h5>
              <Link
                to={all_routes.userJob}
                className="link-primary text-decoration-underline fs-16 fw-medium"
              >
                View All
              </Link>
            </div>
            <div className="card-body">
              {/* start row */}
              <div className="row row-gap-4">
                {/*  Item 1 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <h6 className="fs-16 fw-semibold mb-1">
                        Mobile App Launch
                      </h6>
                      <p className="mb-0 fs-14">App Development</p>
                      <div className="d-flex align-items-center gap-3 my-3 pb-3 border-bottom">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-file-text text-dark" /> 15
                          proposals
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-dollar-sign text-dark" /> $1500
                          - $2500{" "}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 2 Days
                          Ago{" "}
                        </p>
                        <span className="badge bg-success d-inline-flex align-items-center gap-2">
                          <i className="fa-solid fa-circle fs-6" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Item 2 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <h6 className="fs-16 fw-semibold mb-1">
                        Brand Identity Creation
                      </h6>
                      <p className="mb-0 fs-14">Graphic Design</p>
                      <div className="d-flex align-items-center gap-3 my-3 pb-3 border-bottom">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-file-text text-dark" /> 15
                          proposals
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-dollar-sign text-dark" /> $3000
                          - $7000{" "}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 1 Week
                          Ago{" "}
                        </p>
                        <span className="badge bg-success d-inline-flex align-items-center gap-2">
                          <i className="fa-solid fa-circle fs-6" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Item 3 */}
                <div className="col-xxl-4 col-xl-6 col-lg-6">
                  <div className="card mb-0">
                    <div className="card-body">
                      <h6 className="fs-16 fw-semibold mb-1">
                        SEO Optimization
                      </h6>
                      <p className="mb-0 fs-14">Digital Marketing</p>
                      <div className="d-flex align-items-center gap-3 my-3 pb-3 border-bottom">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-file-text text-dark" /> 12
                          proposals
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-dollar-sign text-dark" /> $2500
                          - $6000{" "}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 3 Days
                          Ago{" "}
                        </p>
                        <span className="badge bg-success d-inline-flex align-items-center gap-2">
                          <i className="fa-solid fa-circle fs-6" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
          {/* start row */}
          <div className="row row-gap-4">
            <div className="col-xxl-6 col-lg-12">
              {/* Item 1 */}
              <div className="card w-100 mb-0 recent-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Proposals</h5>
                  <Link
                    to={all_routes.userJobBookingDetails}
                    className="link-primary text-decoration-underline fs-16 fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-lg bg-light rounded-circle overflow-hidden">
                        <span className="fw-semibold fs-16 text-dark">EP</span>
                      </div>
                      <div>
                        <h6 className="mb-1">
                          <Link to="#" className="fw-semibold fs-18">
                            Ethan Parker
                          </Link>
                        </h6>
                        <p className="d-flex align-items-center gap-2">
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />{" "}
                            4.8
                          </span>
                          <span className="text-light">|</span>
                          <span className="d-flex align-items-center gap-1">
                            {" "}
                            <i className="feather-corner-right-up text-dark" />
                            92% success
                          </span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="fs-16 fw-semibold mb-0 text-secondary text-sm-end text-start">
                        $3800
                      </div>
                      <p className="mb-0">1 Hrs Ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1"> Proposal For </h5>
                      <p className="fs-14 mb-0">E-commerce Platform</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Link
                        to="#"
                        className="btn btn-success d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-check-circle" /> Accept
                      </Link>
                      <Link
                        to="#"
                        className="btn bg-light text-danger d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-info" /> Decline
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="card w-100 mb-0 recent-card-2">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-lg bg-light rounded-circle overflow-hidden">
                        <span className="fw-semibold fs-16 text-dark">BD</span>
                      </div>
                      <div>
                        <h6 className="mb-1">
                          <Link to="#" className="fw-semibold fs-18">
                            BrightData Systems
                          </Link>
                        </h6>
                        <p className="d-flex align-items-center gap-2">
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />{" "}
                            4.6
                          </span>
                          <span className="text-light">|</span>
                          <span className="d-flex align-items-center gap-1">
                            {" "}
                            <i className="feather-corner-right-up text-dark" />
                            96% success
                          </span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="fs-16 fw-semibold mb-0 text-secondary text-sm-end text-start">
                        $3200
                      </div>
                      <p className="mb-0">1 Hrs Ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1"> Proposal For </h5>
                      <p className="fs-14 mb-0">Data Analytics Dashboard</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Link
                        to="#"
                        className="btn btn-success d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-check-circle" /> Accept
                      </Link>
                      <Link
                        to="#"
                        className="btn bg-light text-danger d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-info" /> Decline
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="card w-100 mb-0 recent-card-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-lg bg-light rounded-circle overflow-hidden">
                        <span className="fw-semibold fs-16 text-dark">ST</span>
                      </div>
                      <div>
                        <h6 className="mb-1">
                          <Link to="#" className="fw-semibold fs-18">
                            SkyX Technologies
                          </Link>
                        </h6>
                        <p className="d-flex align-items-center gap-2">
                          <span className="fs-16">
                            {" "}
                            <i className="fa-solid fa-star text-warning fs-14" />{" "}
                            4.5
                          </span>
                          <span className="text-light">|</span>
                          <span className="d-flex align-items-center gap-1">
                            {" "}
                            <i className="feather-corner-right-up text-dark" />
                            98% success
                          </span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="fs-16 fw-semibold mb-0 text-secondary text-sm-end text-start">
                        $4800
                      </div>
                      <p className="mb-0">2 Hrs Ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1"> Proposal For </h5>
                      <p className="fs-14 mb-0">Data Analytics Dashboard</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Link
                        to="#"
                        className="btn btn-success d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-check-circle" /> Accept
                      </Link>
                      <Link
                        to="#"
                        className="btn bg-light text-danger d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-info" /> Decline
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-12">
              <div className="card w-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Activities</h5>
                  <Link
                    to={all_routes.userJobBookingDetails}
                    className="link-primary text-decoration-underline fs-16 fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  {/* Item 1 */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar flex-shrink-0  rounded-lg bg-secondary-100">
                        <i className="feather-file-text fs-20" />
                      </div>
                      <div>
                        <h6 className="mb-1 fs-16 fw-semibold">
                          New proposal received
                        </h6>
                        <p className="mb-2 fs-14">
                          Tech Solutions Inc. submitted a proposal for Website
                          Redesign
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 2 Days
                          Ago{" "}
                        </p>
                      </div>
                    </div>
                    <div className="fs-14 fw-semibold mb-0 text-secondary">
                      $4800
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar flex-shrink-0 rounded-lg bg-success-100">
                        <i className="feather-check-circle fs-20" />
                      </div>
                      <div>
                        <h6 className="mb-1 fs-16 fw-semibold">
                          Proposal accepted
                        </h6>
                        <p className="mb-2 fs-14">
                          You accepted Creative Minds Studio's proposal for
                          Mobile App UI/UX
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 1 Hour
                          Ago{" "}
                        </p>
                      </div>
                    </div>
                    <div className="fs-14 fw-semibold mb-0 text-secondary">
                      $5200
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4 d-none">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar flex-shrink-0 rounded-lg bg-info-100">
                        <i className="feather-message-square fs-20" />
                      </div>
                      <div>
                        <h6 className="mb-1 fs-16 fw-semibold">New message</h6>
                        <p className="mb-2 fs-14">
                          Digital Boost Agency sent you a message about SEO
                          Optimization
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 2 Hours
                          Ago{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-0">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar flex-shrink-0 rounded-lg bg-warning-100">
                        <i className="feather-star fs-20" />
                      </div>
                      <div>
                        <h6 className="mb-1 fs-16 fw-semibold">
                          Proposal shortlisted
                        </h6>
                        <p className="mb-2 fs-14">
                          You added Code Crafters to your shortlist{" "}
                        </p>
                        <p className="d-flex align-items-center gap-1 mb-0 fs-14">
                          {" "}
                          <i className="feather-clock text-dark" /> 3 Hours
                          ago{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 flex-sm-nowrap flex-wrap">
                <div className="bg-purple rounded-lg overflow-hidden p-4 gap-4 w-100 d-flex align-items-center justify-content-between position-relative overflow-hidden">
                  <div className="position-relative z-1">
                    <h5 className="fs-18 fw-semibold mb-1 text-white">
                      Post a Job Directly
                    </h5>
                    <p className="mb-0 text-white">Quick job posting</p>
                  </div>
                  <Link
                    to="#"
                    className="btn-icon-lg bg-white text-primary position-relative z-1 flex-shrink-0 fs-24"
                  >
                    <i className="feather-arrow-up-right" />{" "}
                  </Link>
                  <ImageWithBasePath
                    src="assets/img/bg/shadow-2.png"
                    alt="shadow"
                    className="position-absolute top-0 start-0 h-100"
                  />
                </div>
                <div className="bg-success rounded-lg overflow-hidden p-4 gap-4 w-100 d-flex align-items-center justify-content-between position-relative overflow-hidden">
                  <div className="position-relative z-1">
                    <h5 className="fs-18 fw-semibold mb-1 text-white">
                      Review Proposals
                    </h5>
                    <p className="mb-0 text-white">48 pending reviews</p>
                  </div>
                  <Link
                    to="#"
                    className="btn-icon-lg bg-white text-success position-relative z-1 flex-shrink-0 fs-24"
                  >
                    <i className="feather-arrow-up-right" />{" "}
                  </Link>
                  <ImageWithBasePath
                    src="assets/img/bg/shadow-2.png"
                    alt="shadow"
                    className="position-absolute top-0 start-0 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    
    </>
  );
};

export default CustomerDashboard;
