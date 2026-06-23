import { Link } from 'react-router-dom'
import { useCities } from '../../../../core/hooks/useDiscoveryData'
import { buildSearchUrl } from '../../../../core/api/pocketbase/format'
import DiscoveryStatus from '../../common/discovery/DiscoveryStatus'

const PROFESSION_COLUMNS: string[][] = [
  ['Appliance Repair', 'Flooring', 'Garage Doors', 'Fencing'],
  ['Carpet Cleaning', 'Driveways', 'Gutter Cleaning', 'Land Surveying'],
  ['Contractors', 'Exterminators', 'Handyman', 'Home Inspection'],
  ['Junk Removal', 'Lawn Care', 'Locksmiths', 'Movers'],
  ['Pest Control', 'Pool Cleaning', 'Roofing', 'Snow Removal'],
  ['Tree Service', 'Window Cleaning', 'Window Installation', 'Window Repair'],
]

const ServiceCities = () => {
  const { data: cities, loading, error, source } = useCities()

  const cityColumns = [
    cities.slice(0, 4),
    cities.slice(4, 8),
    cities.slice(8, 12),
    cities.slice(12, 16),
    cities.slice(16),
  ].filter((col) => col.length > 0)

  return (
    <>
  {/* Links Section */}
  <section className="section info-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="accordion accordion-links">
            <div
              className="accordion-item wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#professional"
                  aria-expanded="false"
                >
                  Our Professions Near You
                </button>
              </h2>
              <div
                id="professional"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body border-0 px-0">
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    {PROFESSION_COLUMNS.map((column, columnIndex) => (
                      <div className="col" key={columnIndex}>
                        <div className="main-links">
                          {column.map((profession) => (
                            <Link
                              to={buildSearchUrl({ query: profession })}
                              key={profession}
                            >
                              {profession}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#city"
                  aria-expanded="false"
                >
                  Popular Cities in Canada
                </button>
              </h2>
              <div id="city" className="accordion-collapse collapse show">
                <div className="accordion-body border-0 px-0">
                  <DiscoveryStatus
                    loading={loading}
                    error={error}
                    source={source}
                    empty={!loading && cities.length === 0}
                    emptyMessage="No cities available."
                  >
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    {cityColumns.map((column, columnIndex) => (
                      <div className="col" key={columnIndex}>
                        <div className="main-links">
                          {column.map((city) => (
                            <Link
                              to={buildSearchUrl({ location: city.name })}
                              key={city.slug}
                            >
                              {city.name}, {city.region}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  </DiscoveryStatus>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Links Section */}
</>
  )
}

export default ServiceCities
