// import logo from './logo.svg';
// // import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import TopNavTwo from "./components/TopNavigation/TopNavTwo";
import HeroBannerTwo from "./components/HeroBanner/HeroBannerTwo";
import CounterHomeTwoOne from "./components/Counter/CounterHomeTwoOne";
import PartnerTwo from "./components/Partners/PartnerTwo";
import PartnerTwoHomeTwo from "./components/Partners/PartnerTwoHomeTwo";
import FancyFeatureFour from "./components/FancyFeature/FancyFeatureFour";
import FancyFeatureTwo from "./components/FancyFeature/FancyFeatureTwo";
import FeedbackTwo from "./components/Testimonial/FeedbackTwo";
import TestFileTest from "./components/Testimonial/TestFileTest";
import HeroBannerFive from "./components/HeroBanner/HeroBannerFive";
import TopNavFour from "./components/TopNavigation/TopNavFour";
import FancyFeatureTwenty from "./components/FancyFeature/FancyFeatureTwenty";


function App() {
  return (
    <div className="main-page-wrapper">
      <TopNavTwo/>
      <HeroBannerTwo/>
      <CounterHomeTwoOne/>
      <PartnerTwoHomeTwo/>
      <FancyFeatureFour/>
      <FancyFeatureTwo/>
      <FeedbackTwo/>
        <FancyFeatureTwenty/>
      {/*<TestFileTest/>*/}
    </div>
  );
}

export default App;
