import { useEffect, useRef } from "react";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath";

const WhoWeSection = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animatedButton = buttonRef.current;
    
    if (animatedButton) {
      const textContainer = animatedButton.querySelector('.button-text2') as HTMLElement;
      const text = animatedButton.getAttribute('data-text');

      if (textContainer && text) {
        // Split the text into characters
        const characters = text.split('');
        const angleStep = 360 / characters.length;

        // Set the angle variable on this specific button
        animatedButton.style.setProperty('--angle', angleStep.toString());

        // Map characters to spans with their specific index
        textContainer.innerHTML = characters.map((char, i) => {
          return `<span style="--index: ${i}">${char}</span>`;
        }).join('');
      }
    }
  }, []);
  return (
    <>
      {/* Start Who We Are Section */}
      <section className="section who-section-twelve">
        <div className="container">
          {/* start row */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="who-img-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <ImageWithBasePath
                  src="assets/img/about/who-img.jpg"
                  alt="who"
                  className="img-fluid img-1"
                />
                <div className="img-content">
                  <div className="count">#1</div>
                  <div className="title">Painting Services in the Region</div>
                  <p className="description">
                    We deliver exceptional results tailored to your project.
                  </p>
                </div>
                <div className="video-btn">
                  <div>
                    <div
                      ref={buttonRef}
                      className="animate-button2"
                      data-text=" Best  .  Painting  .  Service  ."
                    >
                      <span className="button-text2" />
                      <span className="button-circle">
                        <ImageWithBasePath
                          src="assets/img/icons/who-icon-4.svg"
                          alt="who"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
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
                  Who We Are{" "}
                </div>
                <h2 className="title">
                  Painting that brings your vision to life.{" "}
                  <span className="d-block">
                    {" "}
                    Quality craftsmanship, guaranteed.{" "}
                  </span>{" "}
                </h2>
                <p className="description">
                  Homes, offices, and commercial spaces. From accent walls to
                  full exteriors we bring precision craftsmanship and vibrant
                  results to every project.
                </p>
              </div>
              {/*  Item 1 */}
              <div
                className="who-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="who-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/who-icon-1.svg"
                    alt="who"
                    className="img-fluid img-1"
                  />
                </div>
                <div className="who-content">
                  <h3 className="title">Professional Painting Services </h3>
                  <p className="description">
                    Expert application for lasting beauty. Our team excels in
                    delivering top-tier interior and exterior services.
                  </p>
                </div>
              </div>
              {/*  Item 2 */}
              <div
                className="who-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="who-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/who-icon-2.svg"
                    alt="who"
                    className="img-fluid img-1"
                  />
                </div>
                <div className="who-content">
                  <h3 className="title">Commitment to Quality </h3>
                  <p className="description">
                    Enhance your space with our quality promise. Our skilled
                    team specializes in both interior and exterior painting.
                  </p>
                </div>
              </div>
              {/*  Item 3 */}
              <div
                className="who-item-twelve wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="who-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/who-icon-3.svg"
                    alt="who"
                    className="img-fluid img-1"
                  />
                </div>
                <div className="who-content">
                  <h3 className="title">Customer First Approach </h3>
                  <p className="description">
                    Elevate your property with our painting expertise. Our
                    skilled team specializes in both interior, exterior
                    painting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        <ImageWithBasePath
          src="assets/img/icons/brush-icon-1.svg"
          alt="brush"
          className="img-fluid element-1"
        />
        <div className="line-1" />
        <div className="line-2" />
      </section>
      {/* End Who We Are Section */}
    </>
  );
};

export default WhoWeSection;
