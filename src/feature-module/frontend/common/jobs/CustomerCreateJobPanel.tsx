import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { customerJobDetailUrl } from "../../../../core/api/pocketbase/format";
import { useCategories, useCities } from "../../../../core/hooks/useDiscoveryData";
import { useJobActions } from "../../../../core/hooks/useJobData";
import { useAuth } from "../../../../core/auth/AuthContext";

const CustomerCreateJobPanel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createRequest } = useJobActions();
  const { data: cities, loading: citiesLoading } = useCities();
  const { data: categories, loading: categoriesLoading } = useCategories();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cityId, setCityId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Job title is required.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const job = await createRequest({
        title: title.trim(),
        description: description.trim(),
        city: cityId || undefined,
        category: categoryId || undefined,
        budget_min: budgetMin ? Number(budgetMin) : undefined,
        budget_max: budgetMax ? Number(budgetMax) : undefined,
      });
      navigate(customerJobDetailUrl(job.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job");
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="alert alert-warning">
        Sign in as a customer to post a job.{" "}
        <Link to={all_routes.login}>Log in</Link>
      </div>
    );
  }

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">Post a Service Request</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">
              Job Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="job-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              data-testid="job-description-input"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <select
                className="form-select"
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
                disabled={citiesLoading}
              >
                <option value="">Select city</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}, {c.region}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                disabled={categoriesLoading}
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
              <label className="form-label">Budget Min ($)</label>
              <input
                type="number"
                min={0}
                className="form-control"
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Budget Max ($)</label>
              <input
                type="number"
                min={0}
                className="form-control"
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            data-testid="post-job-submit"
            disabled={submitting}
          >
            {submitting ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerCreateJobPanel;
