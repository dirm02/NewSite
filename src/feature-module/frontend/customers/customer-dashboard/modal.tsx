import { Link } from "react-router-dom";
import { useState } from "react";

const Modal = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Delete Account */}
      <div className="modal fade custom-modal" id="del-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
              <h5 className="modal-title">Delete Account</h5>
              <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="ti ti-circle-x-filled fs-20" />
              </Link>
            </div>

            <form>
              <div className="modal-body">
                <p className="mb-3">
                  Are you sure you want to delete This Account? To delete your
                  account, Type your password.
                </p>

                <div className="mb-0">
                  <label className="form-label">Password</label>
                  <div className="pass-group position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control pass-input"
                      placeholder="*************"
                    />

                    <span
                      onClick={togglePassword}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer"
                      }}
                    >
                      <i
                        className={`feather ${
                          showPassword ? "feather-eye" : "feather-eye-off"
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <Link
                  to="#"
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

export default Modal;