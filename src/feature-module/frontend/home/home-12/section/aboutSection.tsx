import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"

const AboutSection = () => {
  return (
    <>
  {/* Start About Us Section */}
  <section className="section about-section-twelve py-0">
    <div className="about-bg-twelve" />
    <div className="about-details-twelve">
      <div className="container">
        {/* start row */}
        <div className="row row-gap-5">
          {/* Item 1 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="about-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="about-icon">
                <ImageWithBasePath
                  src="assets/img/icons/about-icon-1.svg"
                  alt="about"
                  className="img-fluid img-1"
                />
              </div>
              <h3 className="title">Specialty Finishes</h3>
              <p className="description">
                Custom textures, faux finishes, and decorative painting
                techniques
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="about-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="about-icon">
                <ImageWithBasePath
                  src="assets/img/icons/about-icon-2.svg"
                  alt="about"
                  className="img-fluid img-1"
                />
              </div>
              <h3 className="title">Color Consultation</h3>
              <p className="description">
                Expert guidance to choose the perfect is the best palette for
                your space
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="about-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <div className="about-icon">
                <ImageWithBasePath
                  src="assets/img/icons/about-icon-3.svg"
                  alt="about"
                  className="img-fluid img-1"
                />
              </div>
              <h3 className="title">Surface Preparation</h3>
              <p className="description">
                Thorough prep work including repairs, priming, and protection
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="about-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className="about-icon">
                <ImageWithBasePath
                  src="assets/img/icons/about-icon-4.svg"
                  alt="about"
                  className="img-fluid img-1"
                />
              </div>
              <h3 className="title">Flexible Scheduling</h3>
              <p className="description">
                Work around your schedule with evenings and weekend availability
              </p>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  </section>
  {/* End About Us Section */}
</>

  )
}

export default AboutSection