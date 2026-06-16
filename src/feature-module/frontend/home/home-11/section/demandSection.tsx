import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import { all_routes } from "../../../../../core/data/routes/all_routes"


const DemandSection = () => {
  return (
  <>
  {/* Demand Service Section */}
  <section className="section demand-section">
    <div className="container">
      {/* Section Header*/}
      <div
        className="section-header-two section-btn wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div>
          <div className="section-subtitle">
            <span>
              <i className="isax isax-save-25" />
            </span>
            In Demand Services
          </div>
          <h2 className="section-title">
            Most Requested <span>Services</span>
          </h2>
        </div>
        <Link to={all_routes.serviceDetails1} className="btn btn-primary theme-btn">
          View All Services
          <span className="btn-icon">
            <i className="isax isax-arrow-right-14" />
          </span>
        </Link>
      </div>
      {/* End Section Header*/}
      <ul className="nav nav-tabs nav-tabs-solid-dark">
        <li className="nav-item">
          <Link className="nav-link" to="#health-service" data-bs-toggle="tab">
            Health &amp; Wellbeing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#ac-service" data-bs-toggle="tab">
            AC Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#spa-service" data-bs-toggle="tab">
            Spa
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            to="#cleaning-service"
            data-bs-toggle="tab"
          >
            Cleaning Essentials
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#pet-service" data-bs-toggle="tab">
            Pet Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="#appliances-service"
            data-bs-toggle="tab"
          >
            Appliances &amp; Repair
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade" id="health-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-13.jpg"
                      alt="Holistic Wellness"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Holistic Wellness</Link>
                  </h3>
                  <p>Starts From $120</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-14.jpg"
                      alt="Aromatherapy Sessions"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Aromatherapy Sessions</Link>
                  </h3>
                  <p>Starts From $95</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-15.jpg"
                      alt="Meditation Classes"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Meditation Classes</Link>
                  </h3>
                  <p>Starts From $60</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-16.jpg"
                      alt="Nutritional Counseling"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Nutritional Counseling</Link>
                  </h3>
                  <p>Starts From $110</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
        <div className="tab-pane fade" id="ac-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-17.jpg"
                      alt="Air Conditioner Installation"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      Air Conditioner Installation
                    </Link>
                  </h3>
                  <p>Starts From $150</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-18.jpg"
                      alt="AC Duct Cleaning"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>AC Duct Cleaning</Link>
                  </h3>
                  <p>Starts From $99</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item  */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-19.jpg"
                      alt="HVAC Maintenance Service"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>HVAC Maintenance Service</Link>
                  </h3>
                  <p>Starts From $120</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-20.jpg"
                      alt="Emergency AC Repair"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Emergency AC Repair</Link>
                  </h3>
                  <p>Starts From $130</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
        <div className="tab-pane fade" id="spa-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-21.jpg"
                      alt="Aromatherapy Massage"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Aromatherapy Massage</Link>
                  </h3>
                  <p>Starts From $65</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-22.jpg"
                      alt="Facial Treatment"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Facial Treatment</Link>
                  </h3>
                  <p>Starts From $85</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item  */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-23.jpg"
                      alt="Detoxifying Body Wrap"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Detoxifying Body Wrap</Link>
                  </h3>
                  <p>Starts From $90</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-24.jpg"
                      alt="Hot Stone Therapy"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Hot Stone Therapy</Link>
                  </h3>
                  <p>Starts From $120</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
        <div className="tab-pane fade show active" id="cleaning-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-09.jpg"
                      alt="service"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Gentle Carpet Cleaning</Link>
                  </h3>
                  <p>Starts From $79</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-10.jpg"
                      alt="Emergency Plumbing"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Eco Friendly Cleaning</Link>
                  </h3>
                  <p>Starts From $99</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-11.jpg"
                      alt="Full Room Painting"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Deep Kitchen Cleaning</Link>
                  </h3>
                  <p>Starts From $109</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-12.jpg"
                      alt="Home Deep Clean"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Move In/Move Out Cleaning</Link>
                  </h3>
                  <p>Starts From $79</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
        <div className="tab-pane fade" id="pet-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-25.jpg"
                      alt="Dog Grooming"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Dog Grooming</Link>
                  </h3>
                  <p>Starts From $45</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-26.jpg"
                      alt="In-Home Pet Sitting"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>In-Home Pet Sitting</Link>
                  </h3>
                  <p>Starts From $60</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item  */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-27.jpg"
                      alt="Pet Training Sessions"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Pet Training Sessions</Link>
                  </h3>
                  <p>Starts From $50</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-28.jpg"
                      alt="Mobile Vet Services"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Mobile Vet Services</Link>
                  </h3>
                  <p>Starts From $85</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
        <div className="tab-pane fade" id="appliances-service">
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-29.jpg"
                      alt="Refrigerator Repair"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Refrigerator Repair</Link>
                  </h3>
                  <p>Starts From $99</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-30.jpg"
                      alt="Oven Repairs"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Oven Repairs</Link>
                  </h3>
                  <p>Starts From $85</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item  */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-31.jpg"
                      alt="Dishwasher Repairs"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>Dishwasher Repairs</Link>
                  </h3>
                  <p>Starts From $70</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            {/* Service Item */}
            <div className="col-sm-6 col-lg-3 d-flex">
              <div className="service-item-four flex-fill">
                <div className="service-img">
                  <Link to={all_routes.serviceDetails1}>
                    <ImageWithBasePath
                      src="assets/img/services/bark-service-32.jpg"
                      alt="Washer & Dryer Tune-Up"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="service-content">
                  <h3 className="custom-title">
                    <Link to={all_routes.serviceDetails1}>
                      Washer &amp; Dryer Tune-Up
                    </Link>
                  </h3>
                  <p>Starts From $110</p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </div>
    </div>
    <ImageWithBasePath src="assets/img/bg/trend-bg.png" alt="bg" className="demand-bg" />
  </section>
  {/* End Demand Service Section */}
</>

  )
}

export default DemandSection