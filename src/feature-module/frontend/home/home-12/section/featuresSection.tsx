import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";
import { all_routes } from "../../../../../core/data/routes/all_routes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const FeaturesSection = () => {
  return (
    <>
      {/* Start Features Section */}
      <section className="section features-section-twelve">
        <ImageWithBasePath
          src="assets/img/bg/about-bg-1.svg"
          alt="about"
          className="img-fluid element-2"
        />

        <div className="container">
          <div
            className="section-header-twelve wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="subtitle">
              <ImageWithBasePath
                src="assets/img/icons/title-icon.svg"
                alt="title"
                className="icon"
              />
              Featured Listings
            </div>
            <h2 className="title">Featured Painting Services</h2>
          </div>
        </div>

        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={24}
            loop={true}
            centeredSlides={false}
            speed={2000}
            navigation={false}
            breakpoints={{
              1400: { slidesPerView: 4 },
              1200: { slidesPerView: 3 },
              992: { slidesPerView: 2 },
              768: { slidesPerView: 1 },
              576: {
                slidesPerView: 1,
                centeredSlides: false,
              },
            }}
            className="interior-slider"
          >
            {/* Item 1 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-1.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.6)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Cozy Suburban Villa</Link>
                    </h3>
                    <p className="price">Starts at $389</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Item 2 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-2.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.8)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Modern Loft Space</Link>
                    </h3>
                    <p className="price">Starts at $489</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Item 3 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-3.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.9)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Cozy Studio Apartment</Link>
                    </h3>
                    <p className="price">Starts at $299</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Item 4 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.8s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-4.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.9)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Furnished One-Bedroom</Link>
                    </h3>
                    <p className="price">Starts at $399</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Item 5 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-5.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.6)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Luxury Downtown Condo</Link>
                    </h3>
                    <p className="price">Starts at $689</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Item 6 */}
            <SwiperSlide>
              <div className="slide-item">
                <div className="features-item-nine wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="features-overlay">
                    <ImageWithBasePath src="assets/img/services/service-img-6.jpg" alt="service" className="img-fluid img-1" />
                    <button className="favourite"><i className="ti ti-heart" /></button>
                  </div>
                  <div className="features-content">
                    <div className="rating">
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" /><i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(4.7)</span>
                    </div>
                    <h3 className="title">
                      <Link to={all_routes.serviceDetails1}>Chic Urban Loft</Link>
                    </h3>
                    <p className="price">Starts at $599</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* End Features Section */}
    </>
  );
};

export default FeaturesSection;