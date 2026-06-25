import { useMemo, useState } from "react";
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

const FILTERS = [
  { id: "all", label: "All" },
  { id: "draft", label: "Drafts" },
  { id: "submitted", label: "Submitted" },
  { id: "approved", label: "Approved" },
  { id: "published", label: "Published" },
  { id: "rejected", label: "Rejected" },
];

const ProviderAllBlog = () => {
  const { data: posts, loading, error } = useProviderBlogPosts();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () =>
      filter === "all" ? posts : posts.filter((p) => p.status === filter),
    [posts, filter],
  );

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <div>
            <h2 className="fs-24 fw-semibold mb-1">My Blog</h2>
            <p className="mb-0 text-gray">
              Write posts to promote your services. Submit for admin approval —
              published posts appear on the public blog.
            </p>
          </div>
          <Link
            to={all_routes.providerAddBlog}
            className="btn btn-linear-primary d-inline-flex align-items-center"
          >
            <i className="ti ti-plus me-2" />
            Add Blog
          </Link>
        </div>

        <div className="card">
          <div className="card-header d-flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`btn btn-sm ${
                  filter === f.id ? "btn-primary" : "btn-light"
                }`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="card-body">
            <JobFlowStatus
              loading={loading}
              error={error}
              empty={filtered.length === 0}
              emptyMessage={
                filter === "all"
                  ? "You haven't written any blog posts yet. Add your first post to get started."
                  : `No ${filter} posts.`
              }
            >
              <div className="table-responsive border-0 mb-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Published</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((post) => (
                      <tr key={post.id}>
                        <td className="fw-medium text-dark">{post.title}</td>
                        <td>{post.expand?.category?.name ?? "—"}</td>
                        <td>
                          <span
                            className={`badge ${blogStatusBadgeClass(post.status)}`}
                          >
                            {blogStatusLabel(post.status)}
                          </span>
                        </td>
                        <td>{formatBlogDate(post.published_at) || "—"}</td>
                        <td className="text-end">
                          {post.status === "published" && (
                            <Link
                              to={blogDetailUrl(post.slug)}
                              className="btn btn-light btn-sm me-1"
                              target="_blank"
                            >
                              View
                            </Link>
                          )}
                          <Link
                            to={`${all_routes.providerEditBlog}?id=${post.id}`}
                            className="btn btn-light btn-sm"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </JobFlowStatus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderAllBlog;
