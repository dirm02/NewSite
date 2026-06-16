import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { all_routes } from "../../../../../core/data/routes/all_routes"

const Modal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showOthersDetails, setShowOthersDetails] = useState(false)
  const totalSteps = 5

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      updateProgressBar(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      updateProgressBar(currentStep - 1)
    }
  }

  const updateProgressBar = (step: number) => {
    const progressBar = document.getElementById('progress-bar')
    if (progressBar) {
      const progress = ((step + 1) / totalSteps) * 100
      progressBar.style.width = `${progress}%`
    }
  }

  useEffect(() => {
    // Initialize wizard steps
    const steps = document.querySelectorAll('.wizard-step')
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add('active')
      } else {
        step.classList.remove('active')
      }
    })
  }, [currentStep])
  return (
    <>
  {/* Wizard Modal */}
  <div
    className="modal fade"
    id="wizard-modal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div className="modal-content wizard-modal wizard-container">
        <div className="modal-body">
          <div className="d-flex justify-content-end mb-4">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="modal-close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="progress-wrapper">
            <div id="progress-bar" style={{ width: "25%" }} />
          </div>
          <div className="wizard-step active">
            <h4>What type of property needs cleaning?</h4>
            <div className="checkbox-item active">
              <label className="form-check-label">Residential Property</label>
              <input
                type="radio"
                className="form-check-input"
                name="property"
                defaultChecked
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">Commercial Property</label>
              <input
                type="radio"
                className="form-check-input"
                name="property"
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">Industrial Facilities</label>
              <input
                type="radio"
                className="form-check-input"
                name="property"
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">Public Facilities</label>
              <input
                type="radio"
                className="form-check-input"
                name="property"
              />
            </div>
            <div className="wizard-btn">
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-white d-flex align-items-center justify-content-center prevBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      prevStep()
                    }}
                    style={{ opacity: currentStep === 0 ? 0.5 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="isax isax-arrow-circle-left5 me-2" />
                    Back
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-primary d-flex align-items-center justify-content-center nextBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      nextStep()
                    }}
                  >
                    Next
                    <i className="isax isax-arrow-circle-right5 ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wizard-step">
            <h4>How large is the property?</h4>
            <div className="checkbox-item active">
              <label className="form-check-label">1RK</label>
              <input
                type="radio"
                className="form-check-input"
                name="size"
                defaultChecked
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">1BHK</label>
              <input type="radio" className="form-check-input" name="size" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">2BHK</label>
              <input type="radio" className="form-check-input" name="size" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">3BHK</label>
              <input type="radio" className="form-check-input" name="size" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">4BHK</label>
              <input type="radio" className="form-check-input" name="size" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">5BHK or larger</label>
              <input type="radio" className="form-check-input" name="size" />
            </div>
            <div className="wizard-btn">
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-white d-flex align-items-center justify-content-center prevBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      prevStep()
                    }}
                    style={{ opacity: currentStep === 0 ? 0.5 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="isax isax-arrow-circle-left5 me-2" />
                    Back
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-primary d-flex align-items-center justify-content-center nextBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      nextStep()
                    }}
                  >
                    Next
                    <i className="isax isax-arrow-circle-right5 ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wizard-step">
            <h4>How many rooms is your property?</h4>
            <div className="checkbox-item active">
              <label className="form-check-label">1RK</label>
              <input
                type="radio"
                className="form-check-input"
                name="size"
                defaultChecked
                onChange={() => setShowOthersDetails(false)}
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">1BHK</label>
              <input type="radio" className="form-check-input" name="size" onChange={() => setShowOthersDetails(false)} />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">2BHK</label>
              <input type="radio" className="form-check-input" name="size" onChange={() => setShowOthersDetails(false)} />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">3BHK</label>
              <input type="radio" className="form-check-input" name="size" onChange={() => setShowOthersDetails(false)} />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">4BHK</label>
              <input type="radio" className="form-check-input" name="size" onChange={() => setShowOthersDetails(false)} />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">5BHK or larger</label>
              <input type="radio" className="form-check-input" name="size" onChange={() => setShowOthersDetails(false)} />
            </div>
            <div className="checkbox-item" data-type="others">
              <label className="form-check-label">Others</label>
              <input 
                type="radio" 
                className="form-check-input" 
                name="size" 
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowOthersDetails(true)
                  } else {
                    setShowOthersDetails(false)
                  }
                }}
              />
            </div>
            <div id="others-details" style={{ display: showOthersDetails ? 'block' : 'none' }}>
              <label className="form-label">
                Specify any other details about the property
              </label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </div>
            <div className="wizard-btn">
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-white d-flex align-items-center justify-content-center prevBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      prevStep()
                    }}
                    style={{ opacity: currentStep === 0 ? 0.5 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="isax isax-arrow-circle-left5 me-2" />
                    Back
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-primary d-flex align-items-center justify-content-center nextBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      nextStep()
                    }}
                  >
                    Next
                    <i className="isax isax-arrow-circle-right5 ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wizard-step">
            <h4>How many rooms need cleaning?</h4>
            <div className="checkbox-item active">
              <label className="form-check-label">0</label>
              <input
                type="radio"
                className="form-check-input"
                name="room"
                defaultChecked
              />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">1</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">2</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">3</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">4</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">5</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="checkbox-item">
              <label className="form-check-label">5+</label>
              <input type="radio" className="form-check-input" name="room" />
            </div>
            <div className="wizard-btn">
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-white d-flex align-items-center justify-content-center prevBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      prevStep()
                    }}
                    style={{ opacity: currentStep === 0 ? 0.5 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="isax isax-arrow-circle-left5 me-2" />
                    Back
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-primary d-flex align-items-center justify-content-center nextBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      nextStep()
                    }}
                  >
                    Next
                    <i className="isax isax-arrow-circle-right5 ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wizard-step">
            <h4>What email address would you like quotes sent to?</h4>
            <div className="input-icon input-icon-start position-relative mb-3">
              <span className="input-icon-addon">
                <i className="feather-mail" />
              </span>
              <input type="email" className="form-control" />
            </div>
            <div className="input-icon input-icon-start position-relative">
              <span className="input-icon-addon">
                <i className="isax isax-call" />
              </span>
              <input type="text" className="form-control" />
            </div>
            <div className="wizard-btn">
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-lg btn-white d-flex align-items-center justify-content-center prevBtn"
                    onClick={(e) => {
                      e.preventDefault()
                      prevStep()
                    }}
                    style={{ opacity: currentStep === 0 ? 0.5 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="isax isax-arrow-circle-left5 me-2" />
                    Back
                  </Link>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary d-flex align-items-center justify-content-center nextBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#list-modal"
                    data-bs-dismiss="modal"
                  >
                    Next
                    <i className="isax isax-arrow-circle-right5 ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Wizard Modal */}
  {/* View Modal */}
  <div className="modal fade" id="list-modal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center p-5">
          <div className="icon-success">
            <i className="fa-solid fa-circle-check" />
          </div>
          <h4 className="mb-3">We’ve found the best options that fits you </h4>
          <p className="mb-4">
            Please check the email, we sent you the list of service providers to
            the email{" "}
          </p>
          <Link
            to={all_routes.serviceDetails1}
            className="btn btn-primary d-flex align-items-center justify-content-center"
            onClick={() => {
              // Close the modal and remove backdrop
              const modalElement = document.getElementById('list-modal');
              if (modalElement) {
                const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
                if (modal) {
                  modal.hide();
                } else {
                  // Fallback: manually remove modal classes and backdrop
                  modalElement.classList.remove('show');
                  modalElement.style.display = 'none';
                  document.body.classList.remove('modal-open');
                  const backdrop = document.querySelector('.modal-backdrop');
                  if (backdrop) {
                    backdrop.remove();
                  }
                }
              }
            }}
          >
            View Listings
            <i className="isax isax-arrow-circle-right5 ms-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* End View Modal */}
</>

  )
}

export default Modal