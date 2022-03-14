// import logo from './logo.svg';
// // import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'
import TopNavOneHomeFive from "./components/TopNavigation/TopNavOneHomeFive";
import HeroBannerFour from "./components/HeroBanner/HeroBannerFour";
import PartnerThree from "./components/Partners/PartnerThree";
import FancyFeatureThirteen from "./components/FancyFeature/FancyFeatureThirteen";
import FancyFeatureFourteen from "./components/FancyFeature/FancyFeatureFourteen";
import CounterOneHomeFive from "./components/Counter/CounterOneHomeFive";
import FancyFeatureFifteen from "./components/FancyFeature/FancyFeatureFifteen";
import FancyFeatureSixteen from "./components/FancyFeature/FancyFeatureSixteen";
import PortfolioGalleryTwo from "./components/Portfolio/PortfolioGalleryTwo";
import FeedbackThreeHomeFive from "./components/Testimonial/FeedbackThreeHomeFive";
import PricingTwo from "./components/Pricing/PricingTwo";
import BlogTwoHomeFive from "./components/Blog/BlogTwoHomeFive";
import FancyShortBannerThree from "./components/CallToAction/FancyShortBannerThree";
import FooterOneHomeFive from "./components/Footer/FooterOneHomeFive";
import ScrollToTop from "./components/BackToTop/ScrollToTop";
import TestFileTest from "./components/Testimonial/TestFileTest";
function App() {
  return (
    <div className="main-page-wrapper">
      <TopNavOneHomeFive/>
      <HeroBannerFour/>
      <PartnerThree/>
      <FancyFeatureThirteen/>
      <FancyFeatureFourteen/>
      <CounterOneHomeFive/>
      <FancyFeatureFifteen/>
      <FancyFeatureSixteen/>
      <TestFileTest/>
      <PortfolioGalleryTwo/>
      <FeedbackThreeHomeFive/>
      <PricingTwo/>
      <BlogTwoHomeFive/>
      <FancyShortBannerThree/>
      <FooterOneHomeFive/>
      <ScrollToTop/>
    </div>
  );
}
export default App;
