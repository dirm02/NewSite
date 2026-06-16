
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import DailyChart from './chart/dailyChart ';
import DealsChart from './chart/dealsChart';
import Modal from './modal';
const ProviderDashboard = () => {
 const [value, onChange] = useState(new Date());
 

  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      <div className="row justify-content-center">
        <div className="col-xxl-3 col-md-6">
          <div className="row flex-fill">
            <div className="col-12">
              <div className="card prov-widget">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="mb-2">
                      <p className="mb-1">Upcoming Appointments</p>
                      <h2 className="fs-20 fw-semibold">
                        <span className="counter">12</span>+
                      </h2>
                    </div>
                    <span className="prov-icon bg-info d-flex justify-content-center align-items-center rounded">
                      <i className="ti ti-calendar-check" />
                    </span>
                  </div>
                  <p className="fs-12">
                    <span className="text-success me-2">
                      12% <i className="ti ti-arrow-badge-up-filled" />
                    </span>
                    from Last Week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card prov-widget">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="mb-2">
                      <p className="mb-1">Completed Appointments</p>
                      <h2 className="fs-20 fw-semibold">
                        <span className="counter">68</span>+
                      </h2>
                    </div>
                    <span className="prov-icon bg-success d-flex justify-content-center align-items-center rounded">
                      <i className="ti ti-calendar-check" />
                    </span>
                  </div>
                  <p className="fs-12">
                    <span className="text-danger me-2">
                      12% <i className="ti ti-arrow-badge-down-filled" />
                    </span>
                    from Last Week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card prov-widget">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="mb-2">
                      <p className="mb-1">Canceled Appointments</p>
                      <h2 className="fs-20 fw-semibold">
                        <span className="counter">08</span>+
                      </h2>
                    </div>
                    <span className="prov-icon bg-danger d-flex justify-content-center align-items-center rounded">
                      <i className="ti ti-calendar-check" />
                    </span>
                  </div>
                  <p className="fs-12">
                    <span className="text-danger me-2">0%</span>from Last Week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6">
          <div className="card flex-fill">
            <div className="card-body">
              <div>
                <div className="d-flex justify-content-center flex-column mb-3">
                  <h3 className="text-center fs-20 fw-semibold">
                    1,500{" "}
                    <span className="text-success">
                      <i className="ti ti-arrow-badge-up-filled" />
                    </span>
                  </h3>
                  <p className="fs-12 text-center">
                    Total earned last week so far
                  </p>
                </div>
                <div className="d-flex justify-content-around mb-3">
                  <div>
                    <p className="mb-0">Total Income</p>
                    <h3 className="fs-20 fw-semibold">$8145</h3>
                  </div>
                  <div>
                    <p className="mb-0">Total Due</p>
                    <h3 className="fs-20 fw-semibold">$8145</h3>
                  </div>
                </div>
                <div id="daily-chart">
                  <DailyChart/>
                </div>
                <div className="d-flex justify-content-center flex-column">
                  <span className="text-success text-center fs-12 mb-4">
                    Performance is 30% better last month
                  </span>
                  <Link to={all_routes.providerEarnings} className="btn btn-dark">
                    View All Earnings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <h4 className="mb-3 fs-18 fw-semibold">Subscription</h4>
              <div className=" bg-light-300 rounded p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap row-gap-2 mb-2">
                  <span className="badge badge-success">
                    <i className="ti ti-point-filled" />
                    Current Plan
                  </span>
                  <span className="badge bg-info-transparent">
                    Renewal Date : 14 Jan 2026
                  </span>
                </div>
                <div className="mb-2">
                  <p className="mb-0 text-dark fw-medium">Standard Plan</p>
                  <span>Our most popular plan for small teams.</span>
                </div>
                <div className="d-flex mb-2">
                  <h5 className="me-2">$291</h5>
                  <span>Per user/Year</span>
                </div>
                <div className="">
                  <div className="row justify-content-between">
                    <div className="col-md-6">
                      <Link
                        to="javascript:void(0);"
                        className="btn btn-dark w-100 mb-3 mb-md-0"
                      >
                        Upgrade Plan
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="javascript:void(0);"
                        className="btn btn-white w-100"
                      >
                        Cancel Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light-500 rounded p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="">
                    <p className="mb-0 text-dark fw-medium">Standard Plan</p>
                    <span className="d-block mb-2">
                      Our most popular plan for small teams.
                    </span>
                    <Link
                      to={all_routes.providerSubscription}
                      className="text-info d-block"
                    >
                      View All Plans
                    </Link>
                  </div>
                  <div className="d-flex">
                    <h5>$291 </h5>
                    <span> /Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Top Services</h6>
                <Link to={all_routes.serviceDetails1} className="btn btn-sm border">
                  View All
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-56.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Installation Box
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">300 Bookings</span>
                      <span className="pe-2 border-end">$400K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1 me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-57.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Plumbing Services
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">287 Bookings</span>
                      <span className="pe-2 border-end">$320K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-58.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      House Renovation
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">250 Bookings</span>
                      <span className="pe-2 border-end">$300K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-59.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Painting Services
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">214 Bookings</span>
                      <span className="pe-2 border-end">$280K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-60.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Power restoration
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">115 Bookings</span>
                      <span className="pe-2 border-end">$210K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-61.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Mosaic Cleaning Service
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">102 Bookings</span>
                      <span className="pe-2 border-end">$190K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-62.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Light Installation
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">102 Bookings</span>
                      <span className="pe-2 border-end">$190K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <div className="d-flex">
                  <Link
                    to={all_routes.serviceDetails1}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/services/service-63.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.serviceDetails1} className="fw-medium mb-0">
                      Cieling Fan Change
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">102 Bookings</span>
                      <span className="pe-2 border-end">$190K</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={all_routes.serviceDetails1}>
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Bookings</h6>
                <Link to="javascript:void(0);" className="btn border btn-sm">
                  View All
                </Link>
              </div>
              <div id="datetimepickershow" className='custom-full-calender'>
                 <Calendar onChange={() => onChange} value={value} />
              </div>
              <div className="book-crd">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex align-items-center">
                        <Link
                          to={all_routes.bookingDetails}
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/services/service-63.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link to={all_routes.bookingDetails} className="fw-medium">
                            Plan &amp; Design
                          </Link>
                          <span className="d-block fs-12">
                            <i className="ti ti-clock me-1" />
                            05:30 PM - 06:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to={all_routes.bookingDetails}
                          className="avatar avatar-sm me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </Link>
                        <Link to={all_routes.bookingDetails}>
                          <i className="ti ti-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-crd">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to={all_routes.bookingDetails}
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/services/service-56.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link to={all_routes.bookingDetails} className="fw-medium">
                            Installation &amp; Maintenance
                          </Link>
                          <span className="fs-12 d-block">
                            <i className="ti ti-clock" />
                            04:30 PM - 05:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="javascript:void(0);"
                          className="avatar avatar-sm me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </Link>
                        <Link to={all_routes.bookingDetails}>
                          <i className="ti ti-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-crd">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex align-items-center">
                        <Link
                          to={all_routes.bookingDetails}
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/services/service-63.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link to={all_routes.bookingDetails} className="fw-medium">
                            Plan &amp; Design
                          </Link>
                          <span className="d-block fs-12">
                            <i className="ti ti-clock me-1" />
                            05:30 PM - 06:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to={all_routes.bookingDetails}
                          className="avatar avatar-sm me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </Link>
                        <Link to={all_routes.bookingDetails}>
                          <i className="ti ti-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <h6 className="mb-4">Top Locations</h6>
              <div id="deals-chart">
                <DealsChart/>
              </div>
              <div>
                <p className="mb-4">Top Locations &amp; Users</p>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex">
                    <span className="avatar avatar-lg me-2">
                      <ImageWithBasePath
                        src="assets/img/icons/flag-01.svg"
                        className="rounded-circle "
                        alt="flag"
                      />
                    </span>
                    <div>
                      <p className="text-dark fw-medium mb-0">Saudi Arabia</p>
                      <span className="fs-12">California</span>
                    </div>
                  </div>
                  <span className="badge badge-info">
                    <i className="ti ti-point-filled" />
                    300 Bookings
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex">
                    <span className="avatar avatar-lg me-2">
                      <ImageWithBasePath
                        src="assets/img/icons/flag-02.svg"
                        className="rounded-circle "
                        alt="flag"
                      />
                    </span>
                    <div>
                      <p className="text-dark fw-medium mb-0">Honkong</p>
                      <span className="fs-12">California</span>
                    </div>
                  </div>
                  <span className="badge badge-info">
                    <i className="ti ti-point-filled" />
                    300 Bookings
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <div className="d-flex">
                    <span className="avatar avatar-lg me-2">
                      <ImageWithBasePath
                        src="assets/img/icons/flag-03.svg"
                        className="rounded-circle "
                        alt="flag"
                      />
                    </span>
                    <div>
                      <p className="text-dark fw-medium mb-0">Germany</p>
                      <span className="fs-12">California</span>
                    </div>
                  </div>
                  <span className="badge badge-info">
                    <i className="ti ti-point-filled" />
                    300 Bookings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Latest Reviews</h6>
                <Link to={all_routes.providerReview} className="btn btn-sm border">
                  View All
                </Link>
              </div>
              <div className=" border-bottom pb-3 mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                  <div className="d-flex">
                    <Link
                      to="javascript:void(0);"
                      className="avatar avatar-lg flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="Img"
                      />
                    </Link>
                    <div>
                      <Link to={all_routes.providerReview} className="fw-medium">
                        Maude Rossi
                      </Link>
                      <div className="d-flex align-items-center flex-wrap">
                        <p className="fs-12 mb-0 pe-2 border-end">
                          For{" "}
                          <span className="text-info">
                            Plumbing installation
                          </span>
                        </p>
                        <span className="avatar avatar-sm mx-2">
                          <ImageWithBasePath
                            src="assets/img/user/user-03.jpg"
                            className="img-fluid rounded-circle"
                            alt="user"
                          />
                        </span>
                        <span className="fs-12">rebecca</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span className="text-warning fs-10 me-1">
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                    </span>
                    <span className="fs-12">4.9</span>
                  </div>
                </div>
                <p className="fs-14 mb-0 mt-2">
                  I had a great experience with Electrical Services.
                </p>
              </div>
              <div className="border-bottom pb-3 mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                  <div className="d-flex">
                    <Link
                      to="javascript:void(0);"
                      className="avatar avatar-lg flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="Img"
                      />
                    </Link>
                    <div>
                      <Link to={all_routes.providerReview} className="fw-medium">
                        Livengood
                      </Link>
                      <div className="d-flex align-items-center flex-wrap">
                        <p className="fs-12 mb-0 pe-2 border-end">
                          For{" "}
                          <span className="text-info"> Plumbing Repairs</span>
                        </p>
                        <span className="avatar avatar-sm mx-2">
                          <ImageWithBasePath
                            src="assets/img/user/user-04.jpg"
                            className="img-fluid rounded-circle"
                            alt="user"
                          />
                        </span>
                        <span className="fs-12">Adrian</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span className="text-warning fs-10 me-1">
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                    </span>
                    <span className="fs-12">4.9</span>
                  </div>
                </div>
                <p className="fs-14 mb-0 mt-2">
                  He crew was knowledgeable, friendly, and finished the project
                </p>
              </div>
              <div className="border-bottom pb-3 mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                  <div className="d-flex">
                    <Link
                      to="javascript:void(0);"
                      className="avatar avatar-lg flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="rounded-circle"
                        alt="Img"
                      />
                    </Link>
                    <div>
                      <Link to={all_routes.providerReview} className="fw-medium">
                        Karl Brown
                      </Link>
                      <div className="d-flex align-items-center flex-wrap">
                        <p className="fs-12 mb-0 pe-2 border-end">
                          For{" "}
                          <span className="text-info">
                            {" "}
                            Construction Worker
                          </span>
                        </p>
                        <span className="avatar avatar-sm mx-2">
                          <ImageWithBasePath
                            src="assets/img/user/user-05.jpg"
                            className="img-fluid rounded-circle"
                            alt="user"
                          />
                        </span>
                        <span className="fs-12">Andreson</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span className="text-warning fs-10 me-1">
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                    </span>
                    <span className="fs-12">4.9</span>
                  </div>
                </div>
                <p className="fs-14 mb-0 mt-2">
                  I really appreciated the attention to detail, and the finished
                  workI looks fantastic. Will definitely hire them again for
                  future projects.
                </p>
              </div>
              <div className="">
                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                  <div className="d-flex">
                    <Link
                      to="javascript:void(0);"
                      className="avatar avatar-lg flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="rounded-circle"
                        alt="Img"
                      />
                    </Link>
                    <div>
                      <Link to={all_routes.providerReview} className="fw-medium">
                        Jerry Curran
                      </Link>
                      <div className="d-flex align-items-center flex-wrap">
                        <p className="fs-12 mb-0 pe-2 border-end">
                          For <span className="text-info"> Makeup Artists</span>
                        </p>
                        <span className="avatar avatar-sm mx-2">
                          <ImageWithBasePath
                            src="assets/img/user/user-06.jpg"
                            className="img-fluid rounded-circle"
                            alt="user"
                          />
                        </span>
                        <span className="fs-12">Pique</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span className="text-warning fs-10 me-1">
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                      <i className="ti ti-star-filled filled" />
                    </span>
                    <span className="fs-12">4.9</span>
                  </div>
                </div>
                <p className="fs-14 mb-0 mt-2">
                  I had a great experience with Electrical Services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-4">
                <h6>Highly Rated Staffs</h6>
                <Link
                  to="javascript:void(0);"
                  className="btn btn-sm border"
                  data-bs-toggle="modal"
                  data-bs-target="#add-staff"
                >
                  Add New Staff
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-20.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Maude Rossi
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Plumber</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  300 Bookings
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-21.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Floyd Andrian
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Electrician</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  158 Bookings
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-22.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Michael Ruiz
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Painter</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  157 Bookings
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-23.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Glenn Lewis
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Electrician</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  156 Bookings
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-24.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Kimberly Meissner
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Electrician</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  120 Bookings
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                <div className="d-flex">
                  <Link
                    to={all_routes.staffDetails}
                    className="avatar avatar-lg me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-25.jpg"
                      className="rounded-circle"
                      alt="Img"
                    />
                  </Link>
                  <div>
                    <Link to={all_routes.staffDetails} className="fw-medium">
                      Lisa Jackson
                    </Link>
                    <div className="fs-12 d-flex align-items-center gap-2">
                      <span className="pe-2 border-end">Electrician</span>
                      <span>
                        <i className="ti ti-star-filled text-warning me-1" />
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <span className="badge badge-info">
                  <i className="ti ti-point-filled" />
                  120 Bookings
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-4">
                <h6>Recent Transactions</h6>
                <Link to="javascript:void(0);" className="btn btn-sm border">
                  View All
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">
                    Floyd Andrian
                  </p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Plumbing</span>
                    <span>02:15 PM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+450</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">James Smith</p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Carpentry</span>
                    <span>04:45 PM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+300</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">Bryon Nagle</p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Electrical</span>
                    <span>10:00 AM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+200</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">
                    Floyd Andrian
                  </p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Plumbing</span>
                    <span>02:15 PM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+450</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">Tom Jones</p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Interior Designing</span>
                    <span>11:00 AM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+350</p>
              </div>
              <div className="d-flex justify-content-between align-items-center  flex-wrap row-gap-2">
                <div>
                  <p className="fw-medium text-dark mb-1 fs-14">
                    Raymond Yingst
                  </p>
                  <div className="fs-12 d-flex align-items-center gap-2">
                    <span className="pe-2 border-end">Electrical</span>
                    <span>03:45 PM</span>
                  </div>
                </div>
                <p className="fw-medium text-success mb-0 fs-14">+150</p>
              </div>
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

export default ProviderDashboard;
