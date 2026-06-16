import { useRef } from "react";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 1800,
    arrows: false, // we use custom arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/* Testimonial Section */}
      <section className="section testimonial-section-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="testimonials-content">
                <div
                  className="section-header-two white-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h2 className="section-title mb-2">
                    Built for People Like You <span>Real Stories</span>
                  </h2>
                  <p>
                    From first-time buyers to growing sellers, hear how our
                    platform makes a difference.
                  </p>
                </div>

                <div className="row g-4 justify-content-center">
                  <div className="col-md-4 col-sm-6 d-flex">
                    <div className="counter-item flex-fill">
                      <h3>4.9</h3>
                      <p>Avg Rating From Users</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex">
                    <div className="counter-item flex-fill">
                      <h3>1M</h3>
                      <p>Verified Reviews</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex">
                    <div className="counter-item flex-fill">
                      <h3>97%</h3>
                      <p>People Recomend Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="testimonial-wrap">
                <Slider ref={sliderRef} {...settings}>
                  {/* Slide 1 */}
                  <div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-rating">
                        <div className="rating">
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          5.0
                        </div>
                        <div className="quote-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/quote-02.svg"
                            alt="quote"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p className="description">
                          “They helped me choose the perfect palette for my
                          storefront, making it stand out and attract more
                          customers. Completed our apartment complex’s exterior
                          painting ahead of schedule with minimal disruption to
                          tenants.”
                        </p>
                        <ImageWithBasePath
                          src="assets/img/bg/testimonial-bg-04.png"
                          alt="bg"
                          className="img-fluid testimonial-img"
                        />
                        <div className="author-info">
                          <div className="testimonial-user">
                            <ImageWithBasePath
                              src="assets/img/user/user-sm-01.jpg"
                              alt="James"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <h3 className="custom-title">James Anderson</h3>
                            <p>Austin, TX</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-rating">
                        <div className="rating">
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          5.0
                        </div>
                        <div className="quote-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/quote-02.svg"
                            alt="quote"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p className="description">
                          “The team at Brightside Coatings transformed our
                          outdated office space into a vibrant, modern
                          workspace. Their attention to detail and commitment to
                          quality is unmatched. I highly recommend them for any
                          painting project!”
                        </p>
                        <ImageWithBasePath
                          src="assets/img/bg/testimonial-bg-04.png"
                          alt="bg"
                          className="img-fluid testimonial-img"
                        />
                        <div className="author-info">
                          <div className="testimonial-user">
                            <ImageWithBasePath
                              src="assets/img/user/user-sm-02.jpg"
                              alt="Sophia Martinez"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <h3 className="custom-title">Sophia Martinez</h3>
                            <p>Seattle, WA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-rating">
                        <div className="rating">
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          <span><i className="fa-solid fa-star" /></span>
                          5.0
                        </div>
                        <div className="quote-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/quote-02.svg"
                            alt="quote"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p className="description">
                          Our non-profit, Hope House, was transformed by their
                          artistry. The team was professional, efficient, and
                          respectful of our mission. The fresh, vibrant colors
                          uplifted our residents and created a welcoming
                          environment for the community.
                        </p>
                        <ImageWithBasePath
                          src="assets/img/bg/testimonial-bg-04.png"
                          alt="bg"
                          className="img-fluid testimonial-img"
                        />
                        <div className="author-info">
                          <div className="testimonial-user">
                            <ImageWithBasePath
                              src="assets/img/user/user-sm-03.jpg"
                              alt="James"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <h3 className="custom-title">Emma Johnson</h3>
                            <p>Boston, MA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>

                {/* Custom Navigation */}
                <div className="slider-nav">
                  <button
                    type="button"
                    className="testimonial-prev slick-arrow"
                    aria-label="previous"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <i className="isax isax-arrow-left" />
                  </button>

                  <button
                    type="button"
                    className="testimonial-next slick-arrow"
                    aria-label="next"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <i className="isax isax-arrow-right-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageWithBasePath
          src="assets/img/bg/testimonial-bg.png"
          alt="bg"
          className="img-fluid testimonial-bg"
        />
      </section>
    </>
  );
};

export default TestimonialSection;