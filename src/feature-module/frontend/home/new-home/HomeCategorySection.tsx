import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useCategories, useServiceCounts } from "../../../../core/hooks/useDiscoveryData";
import {
  categoryIcon,
  searchWithCategory,
} from "../../../../core/api/pocketbase/format";
import DiscoveryStatus from "../../common/discovery/DiscoveryStatus";

/** Homepage category grid from PocketBase — GHST-5 */
const HomeCategorySection = () => {
  const routes = all_routes;
  const { data: categories, loading, error, source } = useCategories(true);
  const { data: counts } = useServiceCounts();

  return (
    <section className="section category-section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-6 text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="section-header text-center">
              <h2 className="mb-1">
                Explore our{" "}
                <span className="text-linear-primary">Categories</span>
              </h2>
              <p className="sub-title">
                Service categories help organize and structure the offerings on
                a marketplace, making it easier for users to find what they
                need.
              </p>
            </div>
          </div>
        </div>
        <DiscoveryStatus
          loading={loading}
          error={error}
          source={source}
          empty={!loading && categories.length === 0}
          emptyMessage="No categories available."
        >
          <div className="row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
            {categories.map((category, index) => (
              <div className="col d-flex" key={category.id}>
                <div
                  className="category-item text-center flex-fill wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="mx-auto mb-3">
                    <ImageWithBasePath
                      src={categoryIcon(category.slug, index)}
                      className="img-fluid"
                      alt={category.name}
                    />
                  </div>
                  <h6 className="fs-14 mb-1">{category.name}</h6>
                  <p className="fs-14 mb-0">
                    {counts.byCategory[category.id] ?? 0} Listings
                  </p>
                  <Link
                    to={searchWithCategory(category.slug)}
                    className="link-primary text-decoration-underline fs-14"
                  >
                    View All
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </DiscoveryStatus>
        <div className="row">
          <div className="col-md-12">
            <div
              className="text-center view-all wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <Link to={routes.search} className="btn btn-dark">
                View All
                <i className="ti ti-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategorySection;
