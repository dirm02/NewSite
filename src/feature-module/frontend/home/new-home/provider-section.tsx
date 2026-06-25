import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'
import { useProviders, useServiceCounts } from '../../../../core/hooks/useDiscoveryData'
import {
  formatHourlyRate,
  formatRating,
  providerDetailUrl,
  providerImage,
} from '../../../../core/api/pocketbase/format'
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus'

const ProviderSection = () => {
  const routes = all_routes
  const { data: providers, loading, error, source } = useProviders()
  const { data: counts } = useServiceCounts()

  return (
    <>
  {/* Popular Providers */}
  <section className="section pt-0">
    <div className="container">
      <div className="provider-sec">
        <div className="row justify-content-center">
          <div
            className="col-lg-12 text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="section-header text-center">
              <h2 className="mb-1">
                Popular <span className="text-linear-primary">Providers</span>
              </h2>
              <p className="sub-title">
                Each listing is designed to be clear and concise, providing
                customers
              </p>
            </div>
          </div>
        </div>
        <DiscoveryStatus
          loading={loading}
          error={error}
          source={source}
          empty={!loading && providers.length === 0}
          emptyMessage="No providers available."
        >
        <div className="row gx-0">
          {providers.slice(0, 8).map((provider, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 d-flex" key={provider.id}>
            <div className="provider-item flex-fill">
              <div className="d-flex align-items-center">
                <Link
                  to={providerDetailUrl(provider.id)}
                  className="avatar avatar-xl me-2"
                >
                  <ImageWithBasePath
                    src={providerImage(index)}
                    alt={provider.business_name}
                    className="rounded-circle"
                  />
                </Link>
                <div>
                  <h6>
                    <Link to={providerDetailUrl(provider.id)}>{provider.business_name}</Link>
                  </h6>
                  <p className="fs-14 mb-0">
                    <i className="ti ti-star-filled text-warning me-1" />
                    {formatRating(provider.rating_avg, provider.rating_count)}
                  </p>
                  <p className="mb-0">
                    {counts.byProvider[provider.id] ?? 0} Services, From{' '}
                    <span className="text-gray-9">{formatHourlyRate(provider.hourly_rate_min)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        </DiscoveryStatus>
        <div
          className="text-center view-all wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <Link to={routes.providersList} className="btn btn-dark">
            View All
            <i className="ti ti-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* /Popular Providers */}
</>

  )
}

export default ProviderSection
