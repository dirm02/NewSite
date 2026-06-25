import { Link, useSearchParams } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { usePublishedBlogPost } from "../../../../core/hooks/useDiscoveryData";
import {
  formatBlogDate,
  providerDisplayName,
} from "../../../../core/api/pocketbase/format";

const PublicBlogDetail = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  const { data: post, loading } = usePublishedBlogPost(slug);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-5">
        <h5 className="fs-18 fw-semibold mb-1">Post not found</h5>
        <p className="text-gray mb-3">
          This post may have been removed or is not published.
        </p>
        <Link to={all_routes.blogGrid} className="btn btn-linear-primary">
          Browse all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-9 mx-auto blog-details">
        <div className="blog-head mb-3">
          <div className="blog-category mb-2">
            <ul className="d-flex flex-wrap gap-3 list-unstyled mb-2">
              {post.expand?.category?.name && (
                <li>
                  <span className="badge badge-light text-dark">
                    {post.expand.category.name}
                  </span>
                </li>
              )}
              {post.published_at && (
                <li>
                  <i className="feather icon-calendar me-1" />
                  {formatBlogDate(post.published_at)}
                </li>
              )}
              <li>
                <i className="ti ti-user me-1" />
                {providerDisplayName(post.expand?.provider)}
              </li>
            </ul>
          </div>
          <h2 className="mb-3">{post.title}</h2>
          {post.excerpt && <p className="lead text-gray-6">{post.excerpt}</p>}
        </div>
        <div className="blog-content">
          {post.content ? (
            post.content.split(/\n{2,}/).map((para, i) => (
              <p key={i} style={{ whiteSpace: "pre-wrap" }}>
                {para}
              </p>
            ))
          ) : (
            <p className="text-gray-6">No content.</p>
          )}
        </div>
        {post.expand?.service && (
          <div className="alert alert-light border mt-4">
            <span className="fw-semibold">Related service: </span>
            {post.expand.service.title}
          </div>
        )}
        <div className="mt-4">
          <Link to={all_routes.blogGrid} className="btn btn-light">
            <i className="ti ti-arrow-left me-1" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicBlogDetail;
