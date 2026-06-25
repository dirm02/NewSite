import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { usePublishedBlogPosts } from '../../../../core/hooks/useDiscoveryData';
import {
  blogDetailUrl,
  formatBlogDate,
  providerDisplayName,
} from '../../../../core/api/pocketbase/format';

const BlogAndJoinus = () => {
  const routes = all_routes;
  // GHST-49: homepage preview of the latest published provider posts. The whole
  // section is hidden when there are no published posts (no empty placeholder).
  const { data: posts, loading } = usePublishedBlogPosts(3);
  const showBlog = !loading && posts.length > 0;
  return (
    <>
      {showBlog && (
        <section className="section blog-section">
          <div className="container">
            <div className="section-header text-center mb-4">
              <p className="sub-title fw-medium mb-1">From the Blog</p>
              <h2>
                Latest <span className="text-linear-primary">articles</span>
              </h2>
            </div>
            <div className="row justify-content-center">
              {posts.map((post) => (
                <div className="col-xl-4 col-md-6" key={post.id}>
                  <div className="card p-0">
                    <div className="card-body p-3">
                      {post.expand?.category?.name && (
                        <span className="badge bg-primary-transparent mb-2">
                          {post.expand.category.name}
                        </span>
                      )}
                      <h5 className="mb-2">
                        <Link to={blogDetailUrl(post.slug)}>{post.title}</Link>
                      </h5>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className="fs-14 text-gray-6">
                          {providerDisplayName(post.expand?.provider)}
                        </span>
                        {post.published_at && (
                          <span className="fs-14 text-gray-6">
                            <i className="ti ti-calendar me-1" />
                            {formatBlogDate(post.published_at)}
                          </span>
                        )}
                      </div>
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
            <div className="text-center mt-3">
              <Link to={routes.blogGrid} className="btn btn-light">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* Provider Section */}
      <section className="section provide-section bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="section-header mb-md-0 mb-3">
                <p className="sub-title fw-medium text-light mb-1">
                  Become a Provider
                </p>
                <h2 className="text-white">
                  Post your service{" "}
                  <span className="text-linear-primary">in a minute</span>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 text-md-end wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <Link to={routes.chooseSignUp} className="btn btn-linear-primary">
                <i className="ti ti-user-filled me-2" />
                Join Us
              </Link>
            </div>
          </div>
        </div>
        <div className="provider-bg1">
          <ImageWithBasePath
            src="assets/img/bg/provide-bg-01.svg"
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="provider-bg2">
          <ImageWithBasePath
            src="assets/img/bg/provide-bg-02.svg"
            className="img-fluid"
            alt="img"
          />
        </div>
      </section>
      {/* /Provider Section */}

      {/*
        GHST-41: The homepage "Recent Blogs" section was removed from /index.
        There is no PocketBase blog/posts collection yet — the previous cards were
        static demo content. A provider-owned blog (schema + public display) is
        scoped to GHST-48 (schema) and GHST-49 (UI). Re-introduce a PocketBase-backed
        blog section here once that collection exists.
      */}
    </>
  );
};

export default BlogAndJoinus;
