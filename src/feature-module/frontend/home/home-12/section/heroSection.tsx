import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"
import HomeHeader from "../../header/home-header"
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

const HeroSection = () => {
    const [selectedSub, setselectedSub] = useState(null);
    const category = [
      { name: 'Select Service type' },
      { name: 'Tornoto' },
      { name: 'Texas' },
    ];
  return (
  <>
  <div className="top-bar-twelve">
  <div className="container ">
    {/* start row */}
    <div className="row align-items-center">
      <div className="col-lg-8">
        <div className="top-content">
          <p className="top-text">
            {" "}
            <i className="isax isax-call-received5" /> Painting Solutions
            <span>Bookings : +1 45454 45447, Enquiry : +1 45454 45448</span>
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="social-icon-twelve">
          <Link to="#" className="icon" aria-label="facebook">
            <i className="fa-brands fa-facebook-f" />
          </Link>
          <Link to="#" className="icon" aria-label="instagram">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link to="#" className="icon" aria-label="linkedin">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </div>
      </div>
    </div>
    {/* start row */}
  </div>
</div>

  {/* Start Hero Section */}
  <div className="hero-secition-twelve">
    {/* Header */}
  <HomeHeader type={13}/>
    {/* /Header */}
    <div className="banner-section-twelve">
      <div className="container">
        {/* start row */}
        <div className="row">
          <div className="col-lg-7">
            <div
              className="banner-content-twelve wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <h1 className="title">
                Transform Space <br /> With{" "}
                <span className="text-style">
                  {" "}
                  Expert{" "}
                  <ImageWithBasePath
                    src="assets/img/banner/title-img-1.jpg"
                    alt="title"
                    className="img-fluid img-1"
                  />{" "}
                </span>{" "}
                <span className="text-style">Craftsmanship </span>
              </h1>
              <p className="description">
                From cozy interiors to grand commercial builds, our master
                painters deliver flawless finishes on time, on budget, with a
                lifetime color guarantee.
              </p>
              <div className="banner-btn-twelve">
                <Link to="#" className="btn btn-primary">
                  Get free Quote <i className="isax isax-arrow-circle-right5" />
                </Link>
                <Link to="#" className="btn btn-outline-white">
                  Our Services <i className="isax isax-arrow-circle-right5" />
                </Link>
              </div>
              <div className="search-box wow fadeInUp" data-wow-delay="0.2s">
                <form className="align-items-center">
                  <div className="search-item">
                    <label htmlFor="Category">Category</label>
                    <div className="input-group pe-3">
                      <Dropdown
                      value={selectedSub}
                      onChange={(e) => setselectedSub(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Job Title"
                      className="select select border-none w-100"
                    />
                    </div>
                  </div>
                  <div className="search-item">
                    <label htmlFor="Category">Location</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="search-item">
                    <label htmlFor="Category">Select Date</label>
                    <div className="input-group">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        placeholder="15 Apr 2026"
                      />
                    </div>
                  </div>
                  <div className="search-icon">
                    <Link to="#" aria-label="search">
                      <i className="isax isax-search-normal-1" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner-img-twelve">
              <ImageWithBasePath
                src="assets/img/banner/banner-img-1.png"
                alt="banner"
                className="img-fluid banner-img-1"
              />
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  </div>
  {/* End Hero Section */}
</>

  )
}

export default HeroSection