// import logo from './logo.svg';
// // import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'
import TopNavOne from "./components/TopNavigation/TopNavOne";
import HeroBannerOne from "./components/HeroBanner/HeroBannerOne";
import FancyFeatureTwoHomeThree from "./components/FancyFeature/FancyFeatureTwoHomeThree";
import FancyFeatureThree from "./components/FancyFeature/FancyFeatureThree";
import PartnerOne from "./components/Partners/PartnerOne";
import BlogOne from "./components/Blog/BlogOne";
import AddressOne from "./components/Address/AddressOne";
import FooterOne from "./components/Footer/FooterOne";
import FancyFeatureOne from "./components/FancyFeature/FancyFeatureOne";
import CounterHomeThreeOne from "./components/Counter/CounterHomeThreeOne";
import PortfolioGalleryOne from "./components/Portfolio/PortfolioGalleryOne";
import PricingOne from "./components/Pricing/PricingOne";
import FeedbackOne from "./components/Testimonial/FeedbackOne";

function App() {
  return (
    <div className="main-page-wrapper">
        <TopNavOne/>
        <HeroBannerOne/>
        <FancyFeatureOne/>
        <FancyFeatureTwoHomeThree/>
        <CounterHomeThreeOne/>
        <FancyFeatureThree/>
        <PortfolioGalleryOne/>
        <PricingOne/>
        <FeedbackOne/>
        <PartnerOne/>
        <BlogOne/>
        <AddressOne/>
        <FooterOne/>
    </div>
  );
}

export default App;
