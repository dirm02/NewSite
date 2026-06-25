import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import {
  useBlogActions,
  useProviderBlogPost,
  useProviderServices,
} from "../../../../core/hooks/useJobData";
import { useBlogCategories } from "../../../../core/hooks/useDiscoveryData";
import { slugify } from "../../../../core/api/pocketbase/format";
import type { BlogPostInput } from "../../../../core/api/pocketbase/blog";
import JobFlowStatus from "../../common/jobs/JobFlowStatus";

const ProviderAddBlog = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const isEdit = Boolean(postId);
  const navigate = useNavigate();

  const {
    data: existing,
    loading: loadingPost,
    error: loadError,
  } = useProviderBlogPost(postId);
  const { data: categories } = useBlogCategories();
  const { data: services } = useProviderServices();
  const { createPost, updatePost } = useBlogActions();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  const [submitting, setSubmitting] = useState<null | "draft" | "submitted">(
    null,
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  // The blog hook rejects provider edits once a post is approved/published.
  const locked =
    isEdit &&
    existing != null &&
    existing.status !== "draft" &&
    existing.status !== "rejected" &&
    existing.status !== "submitted";

  useEffect(() => {
    if (!existing) return;
    setTitle(existing.title ?? "");
    setSlug(existing.slug ?? "");
    setSlugTouched(true);
    setExcerpt(existing.excerpt ?? "");
    setContent(existing.content ?? "");
    setCategory(existing.category ?? "");
    setService(existing.service ?? "");
    setSeoTitle(existing.seo_title ?? "");
    setSeoDescription(existing.seo_description ?? "");
  }, [existing]);

  const onTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const save = async (status: "draft" | "submitted") => {
    if (!title.trim()) {
      setSubmitError("Please enter a title.");
      return;
    }
    const finalSlug = (slug.trim() || slugify(title)).trim();
    if (!finalSlug) {
      setSubmitError("Please enter a valid slug.");
      return;
    }

    const input: BlogPostInput = {
      title: title.trim(),
      slug: finalSlug,
      excerpt: excerpt.trim(),
      content,
      category: category || undefined,
      service: service || undefined,
      seo_title: seoTitle.trim() || undefined,
      seo_description: seoDescription.trim() || undefined,
      status,
    };

    setSubmitting(status);
    setSubmitError(null);
    try {
      if (isEdit && postId) {
        await updatePost(postId, input);
      } else {
        await createPost(input);
      }
      navigate(
        status === "submitted"
          ? all_routes.providerSubmittedBlog
          : all_routes.providerBlog,
      );
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Could not save the blog post.",
      );
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <Link
              to={all_routes.providerBlog}
              className="fw-medium fs-14 mb-3 d-inline-block"
            >
              <i className="fa-solid fa-angle-left me-1" />
              Back to My Blog
            </Link>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">{isEdit ? "Edit Blog Post" : "Add Blog Post"}</h5>
              </div>
              <div className="card-body">
                <JobFlowStatus
                  loading={isEdit && loadingPost}
                  error={isEdit ? loadError : null}
                >
                  {locked && (
                    <div className="alert alert-info">
                      This post is {existing?.status} and can no longer be edited.
                      Contact an admin to unpublish it for changes.
                    </div>
                  )}
                  {existing?.status === "rejected" &&
                    existing?.rejection_reason && (
                      <div className="alert alert-warning">
                        <strong>Rejected:</strong> {existing.rejection_reason}
                      </div>
                    )}
                  {submitError && (
                    <div className="alert alert-danger">{submitError}</div>
                  )}

                  <fieldset disabled={Boolean(locked)}>
                    <div className="mb-3">
                      <label className="form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        data-testid="blog-title"
                        value={title}
                        onChange={(e) => onTitleChange(e.target.value)}
                        placeholder="e.g. 5 tips for a stress-free home move"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">URL slug</label>
                      <input
                        type="text"
                        className="form-control"
                        data-testid="blog-slug"
                        value={slug}
                        onChange={(e) => {
                          setSlugTouched(true);
                          setSlug(e.target.value);
                        }}
                        placeholder="auto-generated-from-title"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">No category</option>
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Promotes service (optional)</label>
                        <select
                          className="form-select"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="">None</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Excerpt</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="A short summary shown in blog listings."
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Content</label>
                      <textarea
                        className="form-control"
                        rows={10}
                        data-testid="blog-content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post..."
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">SEO title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={seoTitle}
                          onChange={(e) => setSeoTitle(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">SEO description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={seoDescription}
                          onChange={(e) => setSeoDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-testid="save-draft-btn"
                        disabled={submitting !== null}
                        onClick={() => save("draft")}
                      >
                        {submitting === "draft" ? "Saving..." : "Save Draft"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-testid="submit-blog-btn"
                        disabled={submitting !== null}
                        onClick={() => save("submitted")}
                      >
                        {submitting === "submitted"
                          ? "Submitting..."
                          : "Submit for Approval"}
                      </button>
                    </div>
                  </fieldset>
                </JobFlowStatus>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderAddBlog;
