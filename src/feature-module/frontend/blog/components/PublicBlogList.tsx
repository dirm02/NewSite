import { Link } from "react-router-dom";
import { usePublishedBlogPosts } from "../../../../core/hooks/useDiscoveryData";
import {
  blogDetailUrl,
  formatBlogDate,
  providerDisplayName,
} from "../../../../core/api/pocketbase/format";

interface PublicBlogListProps {
  /** Optional cap on number of posts shown. */
  limit?: number;
}

const PublicBlogList = ({ limit }: PublicBlogListProps) => {
  const { data: posts, loading } = usePublishedBlogPosts();
  const items = typeof limit === "number" ? posts.slice(0, limit) : posts;

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <h5 className="fs-18 fw-semibold mb-1">No blog posts yet</h5>
        <p className="text-gray mb-0">
          Check back soon — providers are publishing helpful articles.
        </p>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      {items.map((post) => (
        <div className="col-xl-4 col-md-6" key={post.id}>
          <div className="card p-0">
            <div className="card-body p-3">
              {post.expand?.category?.name && (
                <span className="badge bg-primary-transparent mb-2">
                  {post.expand.category.name}
                </span>
              )}
              <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                <span className="fs-14 text-gray-6">
                  {providerDisplayName(post.expand?.provider)}
                </span>
                {post.published_at && (
                  <span className="d-flex align-items-center">
                    <i className="ti ti-calendar me-1" />
                    <span className="fs-14">
                      {formatBlogDate(post.published_at)}
                    </span>
                  </span>
                )}
              </div>
              <h5 className="mb-2">
                <Link to={blogDetailUrl(post.slug)}>{post.title}</Link>
              </h5>
              {post.excerpt && (
                <p className="fs-14 text-gray-6 mb-3">{post.excerpt}</p>
              )}
              <Link
                to={blogDetailUrl(post.slug)}
                className="link-primary fw-medium"
              >
                Read More <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicBlogList;
