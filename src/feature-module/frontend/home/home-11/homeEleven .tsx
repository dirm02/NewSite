import HomeHeader from "../header/home-header"
import Modal from "./modal/modal"
import BannerSection from "./section/bannerSection"
import BlogSection from "./section/blogSection"
import ClientSection from "./section/clientSection"
import DemandSection from "./section/demandSection"
import FeatureSection from "./section/featureSection"
import Footer from "./section/footer"
import LocationSection from "./section/locationSection"
import ServiceSection from "./section/serviceSection"
import SliderSection from "./section/sliderSection"
import TestimonialSection from "./section/testimonialSection"
import TrendSection from "./section/trendSection"


const HomeEleven  = () => {
  return (
    <>
    <HomeHeader type={12}/>
    <BannerSection/>
    <ServiceSection/>
    <SliderSection/>
    <TrendSection/>
    <DemandSection/>
    <FeatureSection/>
    <ClientSection/>
    <LocationSection/>
    <TestimonialSection/>
    <BlogSection/>
    <Footer/>
    <Modal/>
     </>
  )
}

export default HomeEleven 