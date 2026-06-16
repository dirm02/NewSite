

import { Link } from "react-router-dom";

const ProviderSubscription = () => {

  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper subscription">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Plan &amp; Billings</h5>
          <div className="d-flex align-items-center">
            <Link
              to="javascript:void(0);"
              className="btn btn-dark d-flex align-items-center"
            >
              Subcription
            </Link>
          </div>
        </div>
      </div>
      {/* Subscription */}
      <div className="card">
        <div className="card-body">
          <div className="row provider-price align-items-center">
            <div className="col-md-12">
              <h6 className="subhead-title">Subscription Plans</h6>
              <div className="choose-title text-center">
                <div className="status-toggle status-tog d-inline-flex align-items-center gap-2">
                  Yearly
                  <div className="  d-flex align-items-center form-check form-switch">
                    <input
                      type="checkbox"
                      id="status-one"
                      className="form-check-input"
                    />
                  </div>
                  Monthly
                </div>
              </div>
            </div>
            {/* Price List */}
            <div className="col-md-4 ">
              <div className=" card ">
                <div className=" card-header">
                  <div className="price-level">
                    <h6 className="fs-14">Basic</h6>
                  </div>
                  <h1 className="d-flex align-items-center ">
                    $50 <span className="text-gray fs-12 ms-2">/ month</span>
                  </h1>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      10 Services
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                      10 Stafff
                    </li>
                    <li>
                      {" "}
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      100 Appointments
                    </li>
                    <li>
                      <i className="ti ti-square-x me-1 text-danger" />
                      Gallery
                    </li>
                    <li>
                      <i className="ti ti-square-x me-1 text-danger" /> Addition
                      Services
                    </li>
                  </ul>
                  <div className="text-center d-flex align-items-center">
                    <Link
                      to="javascript:void(0);"
                      className="btn btn-light w-100 d-flex align-items-center justify-content-center"
                    >
                      Choose Plan{" "}
                      <i className="feather-arrow-right-circle ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Price List */}
            {/* Price List */}
            <div className="col-md-4 ">
              <div className="card active business-card">
                <div className=" card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="price-level">
                        <h6 className="fs-14">Business</h6>
                      </div>
                      <h1 className="d-flex align-items-center ">
                        $200{" "}
                        <span className="text-gray fs-12 ms-2">/ month</span>
                      </h1>
                    </div>
                    <span className="badge badge-soft-success">Active</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      10 Services
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                      10 Stafff
                    </li>
                    <li>
                      {" "}
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      100 Appointments
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      Gallery
                    </li>
                    <li>
                      <i className="ti ti-square-x me-1 text-danger" /> Addition
                      Services
                    </li>
                  </ul>
                  <div className="text-center d-flex align-items-center">
                    <Link
                      to="javascript:void(0);"
                      className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                    >
                      Choose Plan{" "}
                      <i className="feather-arrow-right-circle ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Price List */}
            {/* Price List */}
            <div className="col-md-4 ">
              <div className="card ">
                <div className="card-header">
                  <div>
                    <div className="price-level">
                      <h6 className="fs-14">Enterprise</h6>
                    </div>
                    <h1 className="d-flex align-items-center ">
                      $450 <span className="text-gray fs-12 ms-2">/ month</span>
                    </h1>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      10 Services
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                      10 Stafff
                    </li>
                    <li>
                      {" "}
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      100 Appointments
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />
                      Gallery
                    </li>
                    <li>
                      <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                      Addition Services
                    </li>
                  </ul>
                  <div className="text-center d-flex align-items-center">
                    <Link
                      to="javascript:void(0);"
                      className="btn btn-light w-100 d-flex align-items-center justify-content-center"
                    >
                      Choose Plan{" "}
                      <i className="feather-arrow-right-circle ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Price List */}
          </div>
        </div>
      </div>
      {/* /Subscription */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Delete Account */}
  <div className="modal fade custom-modal" id="del-account">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Account</h5>
          <Link
            to="javascript:void(0);"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form action="#">
          <div className="modal-body">
            <p className="mb-3">
              Are you sure you want to delete This Account? To delete your
              account, Type your password.
            </p>
            <div className="mb-0">
              <label className="form-label">Password</label>
              <div className="pass-group">
                <input
                  type="password"
                  className="form-control pass-input"
                  placeholder="*************"
                />
                <span className="toggle-password feather-eye-off" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link
              to="javascript:void(0);"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button type="submit" className="btn btn-dark">
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Delete Account */}
</>

  );
};

export default ProviderSubscription;
