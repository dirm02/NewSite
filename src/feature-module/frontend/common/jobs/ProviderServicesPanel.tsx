import { Link } from "react-router-dom";
import { all_routes } from "../../../../core/data/routes/all_routes";
import { useProviderServices } from "../../../../core/hooks/useJobData";
import {
  formatPrice,
  serviceLocationLabel,
} from "../../../../core/api/pocketbase/format";
import JobFlowStatus from "./JobFlowStatus";

/**
 * GHST-47: "My Services" backed by the PocketBase `services` collection
 * (services owned by the signed-in provider's profile). Replaces the static
 * demo service cards with live data + an honest empty state.
 */
const ProviderServicesPanel = () => {
  const { data: services, loading, error } = useProviderServices();

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">My Services (Live)</h5>
        <Link
          to={all_routes.providerEditService}
          className="btn btn-linear-primary btn-sm d-inline-flex align-items-center"
        >
          <i className="ti ti-plus me-1" />
          Add Service
        </Link>
      </div>
      <div className="card-body">
        <JobFlowStatus
          loading={loading}
          error={error}
          empty={services.length === 0}
          emptyMessage="You haven't added any services yet. Add your first service so customers can find you."
        >
          <div className="row row-gap-3">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-xl-4">
                <div className="card h-100 mb-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span
                        className={`badge ${
                          service.status === "active"
                            ? "bg-success"
                            : "bg-light text-dark border"
                        }`}
                      >
                        {service.status === "active" ? "Active" : service.status}
                      </span>
                      <Link
                        to={`${all_routes.providerEditService}?id=${service.id}`}
                        className="btn btn-light btn-sm"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </div>
                    <h6 className="fw-semibold mb-1">{service.title}</h6>
                    {service.expand?.category?.name && (
                      <p className="fs-13 text-muted mb-1">
                        <i className="ti ti-category-2 me-1" />
                        {service.expand.category.name}
                      </p>
                    )}
                    <p className="fs-13 text-muted mb-2">
                      <i className="feather-map-pin me-1" />
                      {serviceLocationLabel(
                        service.expand?.city?.name,
                        service.expand?.city?.region,
                      )}
                    </p>
                    <p className="fw-semibold mb-0">
                      {formatPrice(service.price_from, service.price_to)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </JobFlowStatus>
      </div>
    </div>
  );
};

export default ProviderServicesPanel;
