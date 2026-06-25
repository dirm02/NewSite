import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  useProviderServiceActions,
  useProviderServiceRecord,
} from "../../../../core/hooks/useJobData";
import { useCategories, useCities } from "../../../../core/hooks/useDiscoveryData";
import JobFlowStatus from "./JobFlowStatus";

/**
 * GHST-47: Create / edit a provider service against PocketBase. Categories and
 * cities are loaded from PocketBase (cities are Canada-only via the discovery
 * query). Edit mode (`?id=`) pre-fills from the owned service; PB update rules
 * enforce that a provider can only edit their own service.
 */
const ProviderServiceFormPanel = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("id");
  const isEdit = Boolean(serviceId);
  const navigate = useNavigate();

  const { data: existing, loading: loadingService, error: loadError } =
    useProviderServiceRecord(serviceId);
  const { data: categories } = useCategories();
  const { data: cities } = useCities();
  const { createService, updateService } = useProviderServiceActions();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("active");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title ?? "");
      setDescription(existing.description ?? "");
      setCategory(existing.category ?? "");
      setCity(existing.city ?? "");
      setPriceFrom(existing.price_from != null ? String(existing.price_from) : "");
      setPriceTo(existing.price_to != null ? String(existing.price_to) : "");
      setDuration(
        existing.duration_minutes != null ? String(existing.duration_minutes) : "",
      );
      setStatus(existing.status ?? "active");
    }
  }, [existing]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setSubmitError("Service title is required.");
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    const input = {
      title: title.trim(),
      description: description.trim(),
      category: category || undefined,
      city: city || undefined,
      price_from: priceFrom ? Number(priceFrom) : undefined,
      price_to: priceTo ? Number(priceTo) : undefined,
      duration_minutes: duration ? Number(duration) : undefined,
      status,
    };
    try {
      if (isEdit && serviceId) {
        await updateService(serviceId, input);
      } else {
        await createService(input);
      }
      navigate(all_routes.providerService);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Could not save service");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <Link to={all_routes.providerService} className="fw-medium fs-14 mb-3 d-inline-block">
          <i className="fa-solid fa-angle-left me-1" />
          Back to My Services
        </Link>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">{isEdit ? "Edit Service" : "Add Service"}</h5>
          </div>
          <div className="card-body">
            <JobFlowStatus loading={isEdit && loadingService} error={isEdit ? loadError : null}>
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div className="alert alert-danger">{submitError}</div>
                )}
                <div className="mb-3">
                  <label className="form-label">
                    Service Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    data-testid="service-title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      data-testid="service-category-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select category</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City (Canada)</label>
                    <select
                      className="form-select"
                      data-testid="service-city-select"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Select city</option>
                      {cities.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                          {c.region ? `, ${c.region}` : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Price From (CAD)</label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Price To (CAD)</label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Duration (minutes)</label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what this service includes..."
                  />
                </div>
                <div className="mb-4" style={{ maxWidth: 220 }}>
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    data-testid="service-status-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="active">Active (visible in search)</option>
                    <option value="inactive">Inactive (hidden)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-testid="save-service-btn"
                  disabled={submitting}
                >
                  {submitting ? "Saving..." : isEdit ? "Save Changes" : "Create Service"}
                </button>
              </form>
            </JobFlowStatus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderServiceFormPanel;
