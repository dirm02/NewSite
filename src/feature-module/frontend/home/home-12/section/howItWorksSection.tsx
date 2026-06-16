import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"

const HowItWorksSection = () => {
  return (
   <>
  {/* Start How It Works Section */}
  <section className="section howwork-section-twelve">
    <div className="container">
      {/* start row */}
      <div className="row row-gap-4">
        <div className="col-lg-5">
          <div className="howwork-left">
            {/* Section Header */}
            <div
              className="section-header-twelve mb-0 wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="subtitle">
                {" "}
                <ImageWithBasePath
                  src="assets/img/icons/title-icon.svg"
                  alt="title"
                  className="icon"
                />{" "}
                How It Works{" "}
              </div>
              <h2 className="title">
                Our Proven 4 Step <span className="d-block">Process</span>
              </h2>
              <p className="description">
                Every project follows our rigorous quality framework so you
                always know what to expect.
              </p>
            </div>
            <div
              className="howwork-left-content wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h3 className="section-title">What's Always Included</h3>
              <div className="left-text">
                <p>
                  <ImageWithBasePath
                    src="assets/img/icons/check-icon.svg"
                    alt="check"
                    className="img-fluid icon"
                  />{" "}
                  Premium Primer
                </p>
                <p>
                  <ImageWithBasePath
                    src="assets/img/icons/check-icon.svg"
                    alt="check"
                    className="img-fluid icon"
                  />
                  2 to 3 finish coats
                </p>
              </div>
              <div className="left-text mb-0">
                <p>
                  <ImageWithBasePath
                    src="assets/img/icons/check-icon.svg"
                    alt="check"
                    className="img-fluid icon"
                  />{" "}
                  Touch up kit&nbsp;
                </p>
                <p>
                  <ImageWithBasePath
                    src="assets/img/icons/check-icon.svg"
                    alt="check"
                    className="img-fluid icon"
                  />
                  Fully licensed
                </p>
              </div>
            </div>
            {/* End Section Header */}
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row row-gap-4">
            {/* Item 1 */}
            <div className="col-lg-12">
              <div
                className="howwork-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="howwork-count">01</div>
                <div>
                  <h4 className="title">
                    Free Consultation &amp; Color Advice
                  </h4>
                  <p className="description">
                    We visit your space, understand your vision, and provide
                    expert color recommendations at zero cost.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 1 */}
            <div className="col-lg-12">
              <div
                className="howwork-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="howwork-count">02</div>
                <div>
                  <h4 className="title">Surface Preparation</h4>
                  <p className="description">
                    Thorough cleaning, sanding, priming, and masking. 80% of a
                    great paint job is in the prep.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 1 */}
            <div className="col-lg-12">
              <div
                className="howwork-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="howwork-count">03</div>
                <div>
                  <h4 className="title">Premium Paint Application</h4>
                  <p className="description">
                    Multiple coats with premium-grade paints selected for your
                    specific surface and environment.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 1 */}
            <div className="col-lg-12">
              <div
                className="howwork-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="howwork-count">04</div>
                <div>
                  <h4 className="title">Quality Inspection &amp; Touch-Ups</h4>
                  <p className="description">
                    Rigorous walkthrough with our quality manager before we
                    consider any job complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
    <ImageWithBasePath
      src="assets/img/icons/brush-icon-2.svg"
      alt="branch"
      className="img-fluid element-1"
    />
  </section>
  {/* End How It Works Section */}
</>

  )
}

export default HowItWorksSection