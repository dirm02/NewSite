import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath"
import CustomDropdown from "../../common/dropdown/commonSelect"
import { BudgetType, category, ExperienceLevel } from "../../../../core/data/json/dropDownData"
import CommonDatePicker from "../../../../core/hooks/commonDatePicker"
import CommonTagInputs from "../../common/tagInput/commonTagInputs"
import { useState } from "react"
import { all_routes } from "../../../../core/data/routes/all_routes"

const CustomerEditJob = () => {
     const [tags, setTags] = useState<string[]>([
        "Expertise in AC systems",
        "Proficient in wiring",
      ]);
      const handleTagsChange = (newTags: string[]) => {
        setTags(newTags);
      };
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Link to={all_routes.userJob} className="fw-medium fs-14 mb-0">
            <i className="fa-solid fa-angle-left" />
            Back to Job List
          </Link>
          <div className="card mt-4">
            <div className="card-header">
              <h5>Job Details</h5>
            </div>
            <div className="card-body">
              <form action="#">
                {/* start row */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Job Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="HVAC Maintenance"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Category <span className="text-danger">*</span>
                      </label>
                       <CustomDropdown
                            options={category}
                            className="select d-flex"
                            placeholder="Select"
                          />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Deadline to Apply for this job{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="custom-date-picker input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                       <CommonDatePicker />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Budget Type <span className="text-danger">*</span>
                      </label>
                      <CustomDropdown
                            options={BudgetType}
                            className="select d-flex"
                            placeholder="Select"
                          />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={500}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Experience Level <span className="text-danger">*</span>
                      </label>
                     <CustomDropdown
                            options={ExperienceLevel}
                            className="select d-flex"
                            placeholder="Select"
                          />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Job Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={8}
                        defaultValue={
                          "Seeking skilled technicians for AC repair and maintenance jobs. Our platform connects you with homeowners needing reliable service. As a technician, you'll diagnose issues, perform repairs, and ensure optimal AC performance. Showcase your expertise in HVAC systems, troubleshooting, and customer satisfaction. Join our network and grow your business today!"
                        }
                      />
                      <p className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-2 fs-14">
                        Include key responsibilities, deliverables, and any
                        specific requirements{" "}
                        <span className="text-dark fw-medium">
                          (459/2000 characters)
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4 pb-4 border-bottom">
                      <label className="form-label">
                        Required Skills <span className="text-danger">*</span>
                      </label>
                      <div className="d-flex align-items-center gap-2 justify-content-between custome-tag-input">
                        <CommonTagInputs
                              initialTags={tags}
                              onTagsChange={handleTagsChange}
                            />
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-plus me-1" />
                          Add
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">
                      Required Skills <span className="text-danger">*</span>
                    </label>
                    <ul
                      className="nav nav-tabs add-tab"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          id="remote-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#remote"
                          type="button"
                          role="tab"
                          aria-controls="remote"
                          aria-selected="true"
                        >
                          <i className="isax isax-briefcase fs-24 text-dark" />
                          <span className="fs-18 fw-semibold text-dark text-start">
                            Remote{" "}
                            <span className="text-muted fs-16 fw-normal d-block">
                              {" "}
                              Work from anywhere{" "}
                            </span>
                          </span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          id="onsite-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#onsite"
                          type="button"
                          role="tab"
                          aria-controls="onsite"
                          aria-selected="true"
                        >
                          <i className="isax isax-home-2 fs-24 text-dark" />
                          <span className="fs-18 fw-semibold text-dark text-start">
                            On site{" "}
                            <span className="text-muted fs-16 fw-normal d-block">
                              {" "}
                              Specific location{" "}
                            </span>
                          </span>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content mb-4 pb-4 border-bottom">
                      <div
                        className="tab-pane fade show active"
                        id="remote"
                        role="tabpanel"
                        aria-labelledby="remote-tab"
                      >
                        <div className="mt-4">
                          <label className="form-label d-flex align-items-center justify-content-between gap-2">
                            Enter Location{" "}
                            <Link to="#" className="text-secondary fw-medium">
                              Add Current Location
                            </Link>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="onsite"
                        role="tabpanel"
                        aria-labelledby="onsite-tab"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="bg-light-300 rounded position-relative p-4 text-center mb-1">
                      <ImageWithBasePath
                        src="assets/img/icons/upload-icon.svg"
                        alt="upload"
                        className="img-fluid"
                      />
                      <p className="my-2 text-dark">
                        Drag &amp; Drop or Click to Browse
                      </p>
                      <input
                        type="file"
                        className="position-absolute top-0 start-0 opacity-0 w-100 h-100"
                      />
                      <Link
                        to="#"
                        className="btn btn-dark d-inline-flex align-items-center gap-2"
                      >
                        <i className="feather-upload" />
                        Choose Files
                      </Link>
                    </div>
                    <p className="mb-0 fs-14">
                      Image format: jpg,jpeg,png and recommended size 800x800
                    </p>
                  </div>
                </div>
                {/* end row */}
              </form>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <Link
              to="#"
              className="btn btn-white d-inline-flex align-items-center gap-2"
            >
              <i className="feather-save" />
              Save as Draft
            </Link>
            <Link
              to="#"
              className="btn btn-dark d-inline-flex align-items-center gap-2"
              data-bs-toggle="modal"
              data-bs-target="#post-job"
            >
              <i className="feather-briefcase" />
              Update Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
<>
  <div className="modal fade custom-modal" id="post-job">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="text-center">
            <span className="d-flex align-items-center justify-content-center fs-30 text-success mb-3">
              <i className="isax isax-tick-circle5" />
            </span>
            <h5 className="fs-24 mb-1">Job Successfully Updated</h5>
            <p className="mb-4 text-muted">
              Your job has been Updated successfully. Providers can now view and
              submit their proposals.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Link
                to="#"
                className="btn btn-light m-0"
                data-bs-dismiss="modal"
              >
                Close
              </Link>
              <Link to="#" className="btn btn-dark m-0">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Milestone Modal */}
</>

</>

  )
}

export default CustomerEditJob