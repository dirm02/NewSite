import { Link } from "react-router-dom"
import { all_routes } from "../../../../core/data/routes/all_routes"

const Modal = () => {
  return (
    <>
  {/* review Work */}
  <div className="modal fade custom-modal" id="completed-work">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-4">
          <div className="text-center">
            <span className="d-flex align-items-center justify-content-center fs-30 text-success mb-3">
              <i className="isax isax-tick-circle5" />
            </span>
            <h5 className="fs-24 mb-1">Completed &amp; Release Payment</h5>
            <p className="mb-0 text-muted">
              You are about to release $800 to the seller for completing this
              milestone.
            </p>
            <div className="my-4 p-3 bg-light rounded">
              <p className="mb-2 fs-14 d-flex align-items-center justify-content-between">
                Job Value{" "}
                <span className="fw-semibold fs-14 text-dark">$355</span>
              </p>
              <p className="mb-0 fs-14 d-flex align-items-center justify-content-between">
                Service Fee (10%){" "}
                <span className="fw-semibold fs-14 text-dark">$35</span>
              </p>
              <hr className="bg-light-900 my-2" />
              <p className="fs-20 fw-semibold mb-0 d-flex align-items-center justify-content-between text-dark">
                Total<span>$390</span>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Link
                to="#"
                className="btn btn-light m-0"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to="#" className="btn btn-dark m-0">
                Confirm Release
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Review Work */}
  <>
  {/* Review Seller */}
  <div className="modal fade custom-modal" id="review-seller">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Review Seller</h5>
          <Link
            to="javascript:void(0);"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Rating to Seller</label>
            <div className="star-rating">
              <input type="radio" id="star-5" name="rating" defaultValue={5} />
              <label htmlFor="star-5" className="ti ti-star-filled" />
              <input type="radio" id="star-4" name="rating" defaultValue={4} />
              <label htmlFor="star-4" className="ti ti-star-filled" />
              <input type="radio" id="star-3" name="rating" defaultValue={3} />
              <label htmlFor="star-3" className="ti ti-star-filled" />
              <input type="radio" id="star-2" name="rating" defaultValue={2} />
              <label htmlFor="star-2" className="ti ti-star-filled" />
              <input type="radio" id="star-1" name="rating" defaultValue={1} />
              <label htmlFor="star-1" className="ti ti-star-filled" />
            </div>
          </div>
          <div className="mb-0">
            <label className="form-label">Comments if any</label>
            <textarea className="form-control" rows={5} defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer d-flex align-items-center justify-content-end gap-3">
          <Link
            to="#"
            className="btn btn-light m-0"
            data-bs-dismiss="modal"
          >
            Cancel
          </Link>
          <Link to={all_routes.userJobBooking} className="btn btn-dark m-0">
            Submit
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Review Work */}
</>

</>

  )
}

export default Modal