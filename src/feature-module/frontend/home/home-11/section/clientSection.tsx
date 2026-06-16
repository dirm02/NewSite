import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ClientSection = () => {
  return (
    <>
      {/* Client Section */}
      <div className="client-section-three">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              1400: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
            }}
            className="client-slider"
          >
            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-14.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-15.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-16.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-17.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-18.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-slide">
                <ImageWithBasePath
                  src="assets/img/partner/partner-19.svg"
                  alt="partner"
                  className="partner"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* End Client Section */}
    </>
  );
};

export default ClientSection;