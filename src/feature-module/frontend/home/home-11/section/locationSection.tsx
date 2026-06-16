import { Link } from "react-router-dom"
import { all_routes } from "../../../../../core/data/routes/all_routes"

const LocationSection = () => {
  return (
   <>
  {/* Location Section */}
  <section className="section location-section">
    <div className="container">
      {/* Section Header*/}
      <div
        className="section-header-two section-btn wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div>
          <div className="section-subtitle">
            <span>
              <i className="isax isax-map-15" />
            </span>
            Popular Locations
          </div>
          <h2 className="section-title">
            Explore Locations <span>Nearby</span>
          </h2>
        </div>
        <Link to={all_routes.contactUs} className="btn btn-primary theme-btn">
          View All Location
          <span className="btn-icon">
            <i className="isax isax-arrow-right-14" />
          </span>
        </Link>
      </div>
      {/* End Section Header*/}
      <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center">
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">New York, NY</h3>
            <p>2,400+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Miami, FL</h3>
            <p>1,800+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Chicago, IL</h3>
            <p>1,600+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Miami, FL</h3>
            <p>750+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Atlanta, GA</h3>
            <p>800+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Dallas, TX</h3>
            <p>550+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">California, CA</h3>
            <p>3,200+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Seattle, WA</h3>
            <p>1,900+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Austin, TX</h3>
            <p>1,700+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Denver, CO</h3>
            <p>900+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Boston, MA</h3>
            <p>850+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Portland, OR</h3>
            <p>600+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Los Angeles, CA</h3>
            <p>2,700+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Houston, TX</h3>
            <p>1,850+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Philadelphia, PA</h3>
            <p>1,650+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">San Diego, CA</h3>
            <p>800+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Minneapolis, MN</h3>
            <p>780+ jobs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="location-item flex-fill">
            <h3 className="custom-title">Charlotte, NC</h3>
            <p>620+ jobs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Location Section */}
</>

  )
}

export default LocationSection