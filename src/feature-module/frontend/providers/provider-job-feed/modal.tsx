import { Slider, type SliderChangeEvent } from "primereact/slider";
import { useState } from "react";

// PrimeReact styles (import once in App.tsx or index.tsx)
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

const Modal = () => {
  // ✅ Proper tuple typing
  const [budgetRange, setBudgetRange] = useState<[number, number]>([500, 5000]);

  const [budgetType, setBudgetType] = useState({
    fixed: false,
    hourly: false,
    urgent: false,
  });

  const handleCheckboxChange = (type: keyof typeof budgetType) => {
    setBudgetType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // ✅ Proper type-safe handler
  const handleSliderChange = (e: SliderChangeEvent) => {
    if (Array.isArray(e.value)) {
      setBudgetRange([e.value[0], e.value[1]]);
    }
  };

  const handleReset = () => {
    setBudgetRange([500, 5000]);
    setBudgetType({
      fixed: false,
      hourly: false,
      urgent: false,
    });
  };

  return (
    <>
      {/* Filter OffCanvas */}
      <div
        className="offcanvas offcanvas-end job-offcanvas"
        tabIndex={-1}
        id="fillter-offcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filters</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          />
        </div>

        <div className="offcanvas-body">
          {/* Item 1 */}
          <div className="mb-3 pb-3 border-bottom">
            <h6 className="fs-18 fw-semibold mb-3">Category</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-1"
              />
              <label className="form-check-label fs-14" htmlFor="check-1">
                Electronics
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-2"
              />
              <label className="form-check-label fs-14" htmlFor="check-2">
                Cleaning
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-3"
              />
              <label className="form-check-label fs-14" htmlFor="check-3">
                Computer
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-4"
              />
              <label className="form-check-label fs-14" htmlFor="check-4">
                Electrical
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-5"
              />
              <label className="form-check-label fs-14" htmlFor="check-5">
                Interior
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-6"
              />
              <label className="form-check-label fs-14" htmlFor="check-6">
                Carpentry
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-7"
              />
              <label className="form-check-label fs-14" htmlFor="check-7">
                Construction
              </label>
            </div>
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-8"
              />
              <label className="form-check-label fs-14" htmlFor="check-8">
                Construction
              </label>
            </div>
          </div>

          {/* Budget Section */}
          <div className="mb-3 pb-3 border-bottom">
            <h6 className="fs-18 fw-semibold mb-3">Budget</h6>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-9"
                checked={budgetType.fixed}
                onChange={() => handleCheckboxChange("fixed")}
              />
              <label className="form-check-label fs-14" htmlFor="check-9">
                Fixed Price
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-10"
                checked={budgetType.hourly}
                onChange={() => handleCheckboxChange("hourly")}
              />
              <label className="form-check-label fs-14" htmlFor="check-10">
                Hourly
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-11"
                checked={budgetType.urgent}
                onChange={() => handleCheckboxChange("urgent")}
              />
              <label className="form-check-label fs-14" htmlFor="check-11">
                Urgent
              </label>
            </div>

            {/* ✅ PrimeReact Range Slider */}
            <div className="mt-3">
              <Slider
                value={budgetRange}
                onChange={handleSliderChange}
                range
                min={0}
                max={10000}
                step={100}
                className="w-100"
              />

              <div className="d-flex justify-content-between mt-2 fs-14">
                <span>${budgetRange[0].toLocaleString()}</span>
                <span>${budgetRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="mb-3 pb-3 border-bottom">
            <h6 className="fs-18 fw-semibold mb-3">Experience Level</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-12"
              />
              <label className="form-check-label fs-14" htmlFor="check-12">
                Entry Level
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-13"
              />
              <label className="form-check-label fs-14" htmlFor="check-13">
                Intermediate
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-14"
              />
              <label className="form-check-label fs-14" htmlFor="check-14">
                Expert
              </label>
            </div>
          </div>
          {/* Item 4 */}
          <div className="mb-4">
            <h6 className="fs-18 fw-semibold mb-3">Client Type</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-15"
              />
              <label className="form-check-label fs-14" htmlFor="check-15">
                Verified
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-16"
              />
              <label className="form-check-label fs-14" htmlFor="check-16">
                Payment Verified
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-17"
              />
              <label className="form-check-label fs-14" htmlFor="check-17">
                Top Client
              </label>
            </div>
          </div>

          <button onClick={handleReset} className="btn btn-dark w-100">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
