import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useState } from "react";
import CommonTagInputs from "../../common/tagInput/commonTagInputs";
import Modal from "./modal";

const ProviderApplyJob = () => {
  const [tags, setTags] = useState<string[]>(["Diagostics", "Repairs"]);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row row-gap-4">
            <Link
              to={all_routes.providerJobFeed}
              className="fw-medium fs-14 mb-0"
            >
              <i className="fa-solid fa-angle-left me-2" />
              Back to Job feed
            </Link>
            {/* Left Content */}
            <div className="col-xxl-4 col-xl-5">
              <div className="card mb-0">
                <div className="card-header">
                  <h2 className="fw-semibold mb-0 fs-20 text-dark">
                    Find a Job
                  </h2>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center gap-3 mb-4 pb-4 border-bottom flex-wrap">
                    <div className="d-flex gap-3 align-items-center  flex-wrap">
                      <ImageWithBasePath
                        src="assets/img/provider/appliance.jpg"
                        className="job-thumbnail rounded-2"
                        alt="job"
                      />
                      <div>
                        <h3 className="fw-semibold mb-2 fs-18">
                          Appliance Repair Technician
                        </h3>
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
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-bottom">
                    <h4 className="fw-semibold mb-3 text-dark fs-18">
                      Client Information
                    </h4>
                    <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                      <div className="d-flex gap-2 align-items-center flex-wrap">
                        <ImageWithBasePath
                          src="assets/img/user/user-09.jpg"
                          className="avatar avatar-lg rounded-circle"
                          alt="job"
                        />
                        <div>
                          <p className="mb-1 fs-14 fw-medium text-dark">
                            Bessie Abernathy
                          </p>
                          <small>
                            <i className="fa-solid fa-star text-warning" /> 4.8
                          </small>
                        </div>
                      </div>
                      <span className="badge bg-success">Payment Verified</span>
                    </div>
                  </div>
                  <div className="row row-gap-3 mb-4 pb-4 border-bottom">
                    <div className="col-sm-4">
                      <span className="fw-semibold fs-14 mb-1 text-dark">
                        Budget
                      </span>
                      <p className="fs-14 text-secondary d-flex align-items-center gap-1">
                        <i className="feather-dollar-sign text-dark" /> 800
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <span className="fw-semibold fs-14 mb-1 text-dark">
                        Deadline
                      </span>
                      <p className="fs-14 d-flex align-items-center gap-1">
                        {" "}
                        <i className="feather-clock me-1 text-dark" />{" "}
                        2026-04-10
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <span className="fw-semibold fs-14 mb-1 text-dark">
                        Location
                      </span>
                      <p className="fs-14 d-flex align-items-center gap-1">
                        {" "}
                        <i className="feather-map-pin me-1 text-dark" />{" "}
                        Delaware
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-bottom">
                    <h4 className="fw-semibold mb-3 text-dark fs-18">
                      Skills Required
                    </h4>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
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
                  </div>
                  <div className="mb-4 pb-4 border-bottom">
                    <h4 className="fw-semibold mb-3 text-dark fs-18">
                      Description
                    </h4>
                    <p className="mb-0 fs-14">
                      Seeking a skilled appliance repair technician to diagnose
                      and fix various household appliances efficiently.
                    </p>
                  </div>
                  <div className="d-flex gap-3 flex-md-nowrap flex-wrap">
                    <div className="border p-2 stat-box w-100 rounded-lg">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-semibold mb-1 fs-16">12</h5>
                        <i className="ti ti-users text-dark fs-16" />
                      </div>
                      <p className="mb-0 fs-14">Proposals</p>
                    </div>
                    <div className="border p-2 stat-box w-100 rounded-lg">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-semibold mb-1 fs-16">2 hours ago</h5>
                        <i className="ti ti-clock text-dark fs-16" />
                      </div>
                      <p className="mb-0 fs-14">Posted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-xxl-8 col-xl-7">
              <div className="card">
                <div className="card-header">
                  <h5>Submit Your Proposal</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Proposal Title{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Give your proposal a clear, descriptive title"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Cover Letter <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={8}
                            placeholder="Introduce yourself and explain why you're the best fit for this job. Highlight your relevant experience and how you can help the client achieve their goals."
                            defaultValue={""}
                          />
                          <p className="d-flex align-items-center mt-2 fs-14">
                            {" "}
                            Tip: Personalize your cover letter by addressing the
                            client's specific needs
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Quote Price (USD)
                          <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Estimated Completion Time (Hrs){" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <div className="mb-4 p-3 bg-light-200 rounded-3 border">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fs-14">Quote Price</span>
                            <strong className="text-dark fs-14 fw-semibold">
                              $600.00
                            </strong>
                          </div>
                          <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                            <span className="fs-14">Service Fee (10%)</span>
                            <strong className="text-danger fs-14 fw-semibold">
                              -$60.00
                            </strong>
                          </div>
                          <div>
                            <h6 className="fw-semibold mb-0 fs-18 d-flex justify-content-between align-items-center text-muted">
                              You'll Earn{" "}
                              <span className="text-dark">$540.00</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Skill set</label>
                          <div className="custome-tag-input">
                            <CommonTagInputs
                              initialTags={tags}
                              onTagsChange={handleTagsChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12  mb-3">
                        <div>
                          <label className="form-label">
                            Questions for Client
                          </label>
                          <textarea
                            className="form-control"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-4 pb-4 border-bottom">
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="accept_proposal"
                            />
                            <label
                              className="form-check-label fw-medium text-dark"
                              htmlFor="accept_proposal"
                            >
                              I agree to{" "}
                              <Link
                                to="javascript:void(0);"
                                className="text-primary"
                              >
                                Terms of use
                              </Link>{" "}
                              &amp;{" "}
                              <Link
                                to="javascript:void(0);"
                                className="text-primary"
                              >
                                Privacy policy
                              </Link>
                              <span className="d-block mt-1 fw-normal text-muted">
                                By submitting this proposal, you agree to our
                                terms of service and privacy policy. You confirm
                                that all information provided is accurate and
                                truthful.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-3">
                        <div className="d-flex gap-2 flex-wrap">
                          <button className="btn btn-white d-inline-flex align-items-center gap-2">
                            <i className="ti ti-device-floppy fs-16" /> Save
                            Draft
                          </button>
                          <button
                            className="btn btn-white d-inline-flex align-items-center gap-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#preview-proposel"
                          >
                            {" "}
                            <i className="feather-eye fs-16" /> Preview Proposal
                          </button>
                        </div>
                        <button
                          className="btn btn-primary submit-btn d-inline-flex align-items-center gap-2"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#submit-proposel"
                        >
                          {" "}
                          <i className="ti ti-send-2 fs-16" /> Submit Proposal
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h5>Tips for a Winning Proposal</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3 fs-14 d-flex align-items-center gap-2">
                      {" "}
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Be specific about how you'll solve the client's problem
                    </li>
                    <li className="mb-3 fs-14 d-flex align-items-center gap-2">
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Include relevant examples from your past work
                    </li>
                    <li className="mb-3 fs-14 d-flex align-items-center gap-2">
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Ask thoughtful questions that show understanding
                    </li>
                    <li className="mb-0 fs-14 d-flex align-items-center gap-2">
                      <span className="bg-success rounded-pill vertical-line" />{" "}
                      Keep your proposal concise and easy to read
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

export default ProviderApplyJob;
