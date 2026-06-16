import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialSection = () => {
  return (
    <>
      {/* Start Testimonial Section */}
      <section className="section testimonial-section-twelve">
        <div className="container">
          <div
            className="section-header-twelve wow fadeInDown"
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
              Client Reviews{" "}
            </div>
            <h2 className="title"> What Our Customers Are Saying</h2>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={12}
          centeredSlides={true}
          slideToClickedSlide={true}
          loop={true}
          autoplay={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            992: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1400: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className="testimonial-slider-twelve"
        >
          {/* Item 1 */}
          <SwiperSlide>
            <div
              className="testimonial-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-author">
                <div className="author-img avatar">
                  <ImageWithBasePath
                    src="assets/img/user/user-01.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="author-info">
                  <h3 className="name">
                    <Link to="#">Steave Lopez</Link>
                  </h3>
                  <p className="designation">
                    Interior Designer, New York NY
                  </p>
                </div>
              </div>
              <div className="author-content">
                <h4 className="subtitle">“Reliable and Efficient”</h4>
                <p className="description">
                  The painters were meticulous and used high-quality paints that
                  enhanced the texture and feel of every wall.
                </p>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <ImageWithBasePath
                src="assets/img/icons/qutation-icon.svg"
                alt="qutation-icon"
                className="img-fluid icon"
              />
            </div>
          </SwiperSlide>

          {/* Item 2 */}
          <SwiperSlide>
            <div
              className="testimonial-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-author">
                <div className="author-img avatar">
                  <ImageWithBasePath
                    src="assets/img/user/user-03.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="author-info">
                  <h3 className="name">
                    <Link to="#">Samantha Lee</Link>
                  </h3>
                  <p className="designation">
                    Small Business Owner, Chicago IL
                  </p>
                </div>
              </div>
              <div className="author-content">
                <h4 className="subtitle">
                  “Creative Color Consultation”
                </h4>
                <p className="description">
                  They helped me choose the perfect palette for my storefront,
                  making it stand out and attract more customers.{" "}
                </p>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <ImageWithBasePath
                src="assets/img/icons/qutation-icon.svg"
                alt="qutation-icon"
                className="img-fluid icon"
              />
            </div>
          </SwiperSlide>

          {/* Item 3 */}
          <SwiperSlide>
            <div
              className="testimonial-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-author">
                <div className="author-img avatar">
                  <ImageWithBasePath
                    src="assets/img/user/user-04.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="author-info">
                  <h3 className="name">
                    <Link to="#">Nathan Elisian</Link>
                  </h3>
                  <p className="designation">
                    Property Manager, Austin TX
                  </p>
                </div>
              </div>
              <div className="author-content">
                <h4 className="subtitle">“Reliable and Efficient”</h4>
                <p className="description">
                  {" "}
                  Completed our apartment complex’s exterior is the best
                  painting ahead of schedule with minimal disruption to tenants.
                </p>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <ImageWithBasePath
                src="assets/img/icons/qutation-icon.svg"
                alt="qutation-icon"
                className="img-fluid icon"
              />
            </div>
          </SwiperSlide>

          {/* Item 4 */}
          <SwiperSlide>
            <div
              className="testimonial-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-author">
                <div className="author-img avatar">
                  <ImageWithBasePath
                    src="assets/img/user/user-05.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="author-info">
                  <h3 className="name">
                    <Link to="#">Valerie Macon</Link>
                  </h3>
                  <p className="designation">
                    Boutique Owner, San Diego CA
                  </p>
                </div>
              </div>
              <div className="author-content">
                <h4 className="subtitle">
                  “Creative Color Consultation”
                </h4>
                <p className="description">
                  {" "}
                  They helped me choose the perfect palette for my storefront,
                  making it stand out and attract more customers.{" "}
                </p>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <ImageWithBasePath
                src="assets/img/icons/qutation-icon.svg"
                alt="qutation-icon"
                className="img-fluid icon"
              />
            </div>
          </SwiperSlide>

          {/* Item 5 */}
          <SwiperSlide>
            <div
              className="testimonial-item-twelve wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-author">
                <div className="author-img avatar">
                  <ImageWithBasePath
                    src="assets/img/user/user-06.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="author-info">
                  <h3 className="name">
                    <Link to="#">Celeste Beaumont</Link>
                  </h3>
                  <p className="designation">
                    Gallery Owner, Santa Fe NM
                  </p>
                </div>
              </div>
              <div className="author-content">
                <h4 className="subtitle">
                  “Creative Color Consultation”
                </h4>
                <p className="description">
                  {" "}
                  They helped me choose the perfect palette for my storefront,
                  making it stand out and attract more customers.{" "}
                </p>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <ImageWithBasePath
                src="assets/img/icons/qutation-icon.svg"
                alt="qutation-icon"
                className="img-fluid icon"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <ImageWithBasePath
          src="assets/img/bg/about-bg-1.svg"
          alt="about"
          className="img-fluid element-2"
        />
      </section>
      {/* End Testimonial Section */}
    </>
  );
};

export default TestimonialSection;