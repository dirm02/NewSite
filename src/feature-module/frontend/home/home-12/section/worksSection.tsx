import { useEffect, useRef, useState } from "react";
import ImageWithBasePath from "../../../../../core/img/ImageWithBasePath"

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ beforeImage, afterImage, alt }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const startScrolling = () => {
    setActive(true);
    if (scrollerRef.current) {
      scrollerRef.current.classList.add('scrolling');
    }
  };

  const stopScrolling = () => {
    setActive(false);
    if (scrollerRef.current) {
      scrollerRef.current.classList.remove('scrolling');
    }
  };

  const scrollIt = (x: number) => {
    if (!wrapperRef.current || !afterRef.current || !scrollerRef.current) return;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    const relativeX = x - rect.left;
    const transform = Math.max(0, Math.min(relativeX, wrapperRef.current.offsetWidth));
    
    afterRef.current.style.width = transform + "px";
    scrollerRef.current.style.left = (transform - 25) + "px";
  };

  const setInitialPosition = () => {
    if (!wrapperRef.current) return;
    
    const sliderWidth = wrapperRef.current.offsetWidth;
    const halfWay = sliderWidth / 2.07;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    scrollIt(rect.left + halfWay);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!active) return;
      scrollIt(e.pageX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!active) return;
      const t = e.touches && e.touches[0];
      if (t) scrollIt(t.pageX);
    };

    const handleResize = () => {
      setInitialPosition();
    };

    if (scrollerRef.current) {
      scrollerRef.current.addEventListener('mousedown', startScrolling);
      scrollerRef.current.addEventListener('touchstart', startScrolling);
    }

    window.addEventListener('mouseup', stopScrolling);
    window.addEventListener('mouseleave', stopScrolling);
    window.addEventListener('touchend', stopScrolling);
    window.addEventListener('touchcancel', stopScrolling);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    setInitialPosition();

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('mousedown', startScrolling);
        scrollerRef.current.removeEventListener('touchstart', startScrolling);
      }
      window.removeEventListener('mouseup', stopScrolling);
      window.removeEventListener('mouseleave', stopScrolling);
      window.removeEventListener('touchend', stopScrolling);
      window.removeEventListener('touchcancel', stopScrolling);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  return (
    <div ref={wrapperRef} className="wrapper">
      <div className="before">
        <ImageWithBasePath
          className="content-image"
          src={beforeImage}
          alt={alt}
          draggable={false}
        />
      </div>
      <div ref={afterRef} className="after">
        <ImageWithBasePath
          className="content-image"
          src={afterImage}
          alt={alt}
          draggable={false}
        />
      </div>
      <div ref={scrollerRef} className="scroller">
        <svg
          className="scroller__thumb"
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 100 100"
        >
          <polygon
            points="0 50 37 68 37 32 0 50"
            style={{ fill: "#fff" }}
          />
          <polygon
            points="100 50 64 32 64 68 100 50"
            style={{ fill: "#fff" }}
          />
        </svg>
      </div>
    </div>
  );
};

const WorksSection = () => {
  return (
   <>
  {/* Start Works Section */}
  <section className="section work-section-twelve">
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
          Our Works{" "}
        </div>
        <h2 className="title">Recent Painting Projects We Worked</h2>
      </div>
      {/* start row */}
      <div className="row row-gap-4">
        <div className="col-lg-6">
          <div
            className="work-item-twelve flex-fill wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <ImageComparison
              beforeImage="assets/img/banner/work-lg-1.jpg"
              afterImage="assets/img/banner/work-1.jpg"
              alt="treatment"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="work-item-twelve flex-fill wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <ImageComparison
              beforeImage="assets/img/banner/work-lg-2.jpg"
              afterImage="assets/img/banner/work-2.jpg"
              alt="treatment"
            />
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  </section>
  {/* End Works Section */}
</>

  )
}

export default WorksSection