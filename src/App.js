// import logo from './logo.svg';
// // import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'
import FooterTwo from "./components/Footer/FooterTwo";
import TopNavOne from "./components/TopNavigation/TopNavOne";
import HeroBannerOne from "./components/HeroBanner/HeroBannerOne";
import FancyFeatureTwoHomeThree from "./components/FancyFeature/FancyFeatureTwoHomeThree";
import FancyFeatureThree from "./components/FancyFeature/FancyFeatureThree";
import PartnerOne from "./components/Partners/PartnerOne";
import BlogOne from "./components/Blog/BlogOne";
import AddressOne from "./components/Address/AddressOne";
import FooterOne from "./components/Footer/FooterOne";
import FancyFeatureOne from "./components/FancyFeature/FancyFeatureOne";
import FeedbackTwo from "./components/Testimonial/FeedbackTwo";

function App() {
  return (
    <div className="main-page-wrapper">
        <TopNavOne/>
        <HeroBannerOne/>
        {/*<FancyFeatureOne/>*/}
        <FeedbackTwo/>
        <FancyFeatureTwoHomeThree/>
        <FancyFeatureThree/>
        <PartnerOne/>
        <BlogOne/>
        <AddressOne/>
        <FooterOne/>
    </div>
  );
}

export default App;
