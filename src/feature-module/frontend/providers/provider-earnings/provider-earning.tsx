import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { Link } from "react-router-dom";


const ProviderEarnings = () => {

  return (
    <>
  
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
            <h4>Earnings</h4>
            <div className="d-flex align-items-center flex-wrap row-gap-3">
              <span className="fs-14 me-2">Sort</span>
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Newly Added
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="#"
                    className="dropdown-item active"
                  >
                    Newly Added
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Oldest
                  </Link>
                </div>
              </div>
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Export
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="#"
                    className="dropdown-item active"
                  >
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
              <Link
                to="#"
                className="tags d-flex justify-content-center align-items-center border rounded"
                id="filter_search"
              >
                <i className="ti ti-sort-descending" />
              </Link>
            </div>
          </div>
          <div id="filter_inputs">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-xl">
                <div className="mb-3">
                  <div className="sel-cal Calendar-icon">
                    <span>
                      <i className="ti ti-calendar-month" />
                    </span>
                    <input
                      className="form-control datetimepicker"
                      type="text"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl">
                <div className="mb-3">
                  <select className="select">
                    <option>Services</option>
                    <option>Computer Repairs</option>
                    <option>Plumbing</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl">
                <div className="mb-3">
                  <select className="select">
                    <option>Name</option>
                    <option>Jacob Kline</option>
                    <option>William Smith</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl">
                <div className="mb-3">
                  <select className="select">
                    <option>Code</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl">
                <div className="mb-3">
                  <select className="select">
                    <option>Status</option>
                    <option>Paid</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="provide-table manage-table">
              <div className="table-responsive">
                <table className="table  datatable">
                  <thead className="thead-light">
                    <tr>
                      <th>Service</th>
                      <th>Earned Amount</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-15.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Computer Repair</h6>
                        </div>
                      </td>
                      <td>$50</td>
                      <td>28 Sep 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-17.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Steam Car Wash</h6>
                        </div>
                      </td>
                      <td>$60</td>
                      <td>02 Oct 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-19.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">House Cleaning </h6>
                        </div>
                      </td>
                      <td>$50</td>
                      <td>28 Sep 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-14.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Building Construction</h6>
                        </div>
                      </td>
                      <td>$30</td>
                      <td>15 Oct 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-16.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Interior Designing</h6>
                        </div>
                      </td>
                      <td>$40</td>
                      <td>26 Oct 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-23.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Plumbing Services</h6>
                        </div>
                      </td>
                      <td>$80</td>
                      <td>12 Nov 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-13.jpg"
                              className="rounded"
                              alt="user"
                            />
                          </span>
                          <h6 className="fs-14">Car Repair Services</h6>
                        </div>
                      </td>
                      <td>$40</td>
                      <td>18 Nov 2024</td>
                      <td>
                        <div className="user-icon d-inline-flex">
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                          >
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#del-earning"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table-paginate d-flex justify-content-between align-items-center flex-wrap row-gap-3">
              <div className="value d-flex align-items-center">
                <span>Show</span>
                <select>
                  <option>7</option>
                </select>
                <span>entries</span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2 text-gray-9">1 - 07 of 10</span>
                <nav aria-label="Page navigation">
                  <ul className="paginations d-flex justify-content-center align-items-center">
                    <li className="page-item me-2">
                      <Link
                        className="page-link-1 active d-flex justify-content-center align-items-center "
                        to="#"
                      >
                        1
                      </Link>
                    </li>
                    <li className="page-item me-2">
                      <Link
                        className="page-link-1 d-flex justify-content-center align-items-center"
                        to="#"
                      >
                        2
                      </Link>
                    </li>
                    <li className="page-item ">
                      <Link
                        className="page-link-1 d-flex justify-content-center align-items-center"
                        to="#"
                      >
                        3
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Delete Staff */}
      <div className="modal fade custom-modal" id="del-earning">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
              <h5 className="modal-title">Delete Earnings</h5>
              <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="ti ti-circle-x-filled fs-20" />
              </Link>
            </div>
            <div className="modal-body">
              <div className="write-review">
                <form>
                  <p>Are you sure want to delete this Earning?</p>
                  <div className="modal-submit text-end">
                    <Link
                      to="#"
                      className="btn btn-light me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-dark">
                      Yes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Staff */}
    </>
  );
};

export default ProviderEarnings;
