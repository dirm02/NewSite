import { useMemo } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useProviderBlogPosts } from "../../../../core/hooks/useJobData";
import {
  blogDetailUrl,
  blogStatusBadgeClass,
  blogStatusLabel,
  formatBlogDate,
} from "../../../../core/api/pocketbase/format";
import JobFlowStatus from "../../common/jobs/JobFlowStatus";

const MODERATION_STATUSES = ["submitted", "approved", "rejected", "published"];

const ProviderSubmittedBlog = () => {
  const { data: posts, loading, error } = useProviderBlogPosts();

  const moderated = useMemo(
    () => posts.filter((p) => MODERATION_STATUSES.includes(p.status)),
    [posts],
  );

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <div>
            <h2 className="fs-24 fw-semibold mb-1">Submitted Blogs</h2>
            <p className="mb-0 text-gray">
              Track the moderation status of posts you submitted for approval.
            </p>
          </div>
          <Link to={all_routes.providerBlog} className="btn btn-light">
            <i className="ti ti-list me-2" />
            All Blogs
          </Link>
        </div>

        <div className="card">
          <div className="card-body">
            <JobFlowStatus
              loading={loading}
              error={error}
              empty={moderated.length === 0}
              emptyMessage="You haven't submitted any posts for approval yet."
            >
              <div className="row row-gap-3">
                {moderated.map((post) => (
                  <div key={post.id} className="col-12">
                    <div className="card mb-0 shadow-none border">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                          <div>
                            <h6 className="fw-semibold mb-1">{post.title}</h6>
                            <p className="fs-13 text-muted mb-0">
                              {post.expand?.category?.name
                                ? `${post.expand.category.name} · `
                                : ""}
                              {post.published_at
                                ? `Published ${formatBlogDate(post.published_at)}`
                                : "Awaiting review"}
                            </p>
                          </div>
                          <span
                            className={`badge ${blogStatusBadgeClass(post.status)}`}
                          >
                            {blogStatusLabel(post.status)}
                          </span>
                        </div>

                        {post.status === "rejected" && post.rejection_reason && (
                          <div className="alert alert-warning mt-3 mb-0">
                            <strong>Reason for rejection:</strong>{" "}
                            {post.rejection_reason}
                          </div>
                        )}

                        <div className="mt-3 d-flex gap-2">
                          {post.status === "published" && (
                            <Link
                              to={blogDetailUrl(post.slug)}
                              className="btn btn-light btn-sm"
                              target="_blank"
                            >
                              View public post
                            </Link>
                          )}
                          {(post.status === "rejected" ||
                            post.status === "submitted") && (
                            <Link
                              to={`${all_routes.providerEditBlog}?id=${post.id}`}
                              className="btn btn-light btn-sm"
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </JobFlowStatus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSubmittedBlog;
