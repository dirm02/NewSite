import { Link } from "react-router-dom"

const ReadySection = () => {
  return (
   <>
  {/* Start Ready Section */}
  <section className="section support-section-twelve pt-0">
    <div className="container">
      <div
        className="support-twelve wow fadeInDown"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div className="subtitle">Ready to Get Started?</div>
        <h2 className="title">
          Your Next Favorite <br /> Room Is{" "}
          <span className="text-primary">One Call Away</span>{" "}
        </h2>
        <p className="description">
          Free quotes, flexible scheduling, and results guaranteed. Let's
          transform your space book today and we'll be in touch within 24 hours.
        </p>
        <div className="support-btn">
          <Link to="#" className="btn btn-primary">
            {" "}
            <i className="isax isax-calendar5" /> Schedule Free Consultation{" "}
          </Link>
          <Link to="#" className="btn btn-outline-white">
            {" "}
            <i className="isax isax-call5" />
            +1 45454 45447
          </Link>
        </div>
        <img
          src="assets/img/icons/brush-icon-3.svg"
          alt="brush-icon-3"
          className="img-fluid icon-1"
        />
        <div className="wave-1">
          <img
            src="assets/img/team/support-img-1.png"
            alt="wave-1"
            className="img-fluid"
          />
        </div>
        <div className="wave-2">
          <img
            src="assets/img/team/support-img-2.png"
            alt="wave-2"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
  {/* End Ready Section */}
</>

  )
}

export default ReadySection