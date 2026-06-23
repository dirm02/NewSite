import QuoteModal from '../../common/modals/quote-modal'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import BecomeProvider from '../../common/modals/provider-modal'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { buildSearchUrl } from '../../../../core/api/pocketbase/format'
import FeatureSection from './feature-section'
import PopularSection from './popular-section'
import WorkSection from './workSection'
import PreferredSection from './preferredSection'
import ProviderSection from './provider-section'
import RateServiceSection from './rateServiceSection'
import CustomerSection from './customerSection'
import BlogAndJoinus from './blogAndJoinus'
import BussinessWithUs from './bussinessWithUs'
import ServiceCities from './serviceCities'
import HomeHeader from '../header/home-header'
import NewFooter from '../footer/newFooter'
import HomeCategorySection from './HomeCategorySection'

const NewHome = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const handleHeroSearch = (event: React.FormEvent) => {
    event.preventDefault()
    navigate(buildSearchUrl({ query: searchQuery, location: searchLocation }))
  }

  return (
    <>
    <HomeHeader type={1}/>
    <>
  {/* Hero Section */}
  <section className="hero-section" id="home">
    <div className="hero-content position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <h1 className="mb-2">
                Connect with Nearby Top-rated{" "}
                <span className="typed" data-type-text="Carpenters" >Professionals</span>
              </h1>
              <p className="mb-3 sub-title">
                We can connect you to the right Service, first time and every
                time.
              </p>
              <div className="banner-form bg-white border mb-3">
                <form onSubmit={handleHeroSearch}>
                  <div className="d-md-flex align-items-center">
                    <div className="input-group mb-2">
                      <span className="input-group-text px-1">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Service"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-text px-1">
                        <i className="ti ti-map-pin" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">

                      <button type="submit" className="btn btn-linear-primary d-inline-flex align-items-center w-100">
												<i className="feather icon-search me-2"></i>
												Search
											</button>
                    </div>
                  </div>
                </form>
                <ImageWithBasePath
                  src="assets/img/bg/bg-06.svg"
                  alt="img"
                  className="shape-06 round-animate"
                />
              </div>
              <div className="d-flex align-items-center flex-wrap">
                <h6 className="mb-2 me-2 fw-medium">Popular Searches</h6>
                <Link
                  to={buildSearchUrl({ query: 'Plumber' })}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Plumber
                </Link>
                <Link
                  to={buildSearchUrl({ query: 'Interior' })}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Interior
                </Link>
                <Link
                  to={buildSearchUrl({ query: 'Nail Technicians' })}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Nail Technicians
                </Link>
              </div>
              <div className="d-flex align-items-center flex-wrap banner-info">
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-01.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>215,292 +</h6>
                    <p>Verified Providers</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-02.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>90,000+</h6>
                    <p>Services Completed</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-03.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>2,390,968 </h6>
                    <p>Reviews Across Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner-img wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <ImageWithBasePath
              src="assets/img/banner.png"
              alt="img"
              className="img-fluid animation-float"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-01 floating-x">
          <span className="avatar avatar-md bg-warning rounded-circle me-2">
            <i className="ti ti-star-filled" />
          </span>
          <span>
            4.9 / 5<small className="d-block">(255 reviews)</small>
          </span>
          <i className="border-edge" />
        </div>
        <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-02 floating-x">
          <span className="me-2">
            <ImageWithBasePath src="assets/img/icons/tick-banner.svg" alt="" />
          </span>
          <p className="fs-12 text-dark mb-0">300 Booking Completed</p>
          <i className="border-edge" />
        </div>
        <ImageWithBasePath src="assets/img/bg/bg-03.svg" alt="img" className="shape-03" />
        <ImageWithBasePath src="assets/img/bg/bg-04.svg" alt="img" className="shape-04" />
        <ImageWithBasePath src="assets/img/bg/bg-05.svg" alt="img" className="shape-05" />
      </div>
    </div>
  </section>
  {/* /Hero Section */}
  <HomeCategorySection/>

  <FeatureSection/>
  <PopularSection/>
  <WorkSection/>
  <PreferredSection/>
  <ProviderSection/>
  <RateServiceSection/>
  <CustomerSection/>
  <BlogAndJoinus/>
  <BussinessWithUs/>
  <ServiceCities/>
  <NewFooter/>
</>
<QuoteModal/>
<BecomeProvider/>
    </>
  )
}

export default NewHome
