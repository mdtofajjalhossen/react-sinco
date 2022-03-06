// import logo from './logo.svg';
// // import './App.css';

import TopNavFour from "./components/TopNavigation/TopNavFour";
import HeroBannerFive from "./components/HeroBanner/HeroBannerFive";
import FancyFeatureSeventeen from "./components/FancyFeature/FancyFeatureSeventeen";
import FancyFeatureEighteen from "./components/FancyFeature/FancyFeatureEighteen";
import FancyFeatureNineteen from "./components/FancyFeature/FancyFeatureNineteen";
import CounterOne from "./components/Counter/CounterOne";
// import FeedbackFive from "./components/Testimonial/FeedbackFive";
import FancyFeatureTwenty from "./components/FancyFeature/FancyFeatureTwenty";

import FeedbackFive from "./components/Testimonial/FeedbackFive";
import BlogThree from "./components/Blog/BlogThree";
import FancyFeatureTwentyOne from "./components/FancyFeature/FancyFeatureTwentyOne";
import PartnerTwo from "./components/Partners/PartnerTwo";

function App() {
  return (
    <div className="main-page-wrapper">
      <TopNavFour/>
      <HeroBannerFive/>
      <FancyFeatureSeventeen/>
      <FancyFeatureEighteen/>
      <FancyFeatureNineteen/>
      <CounterOne/>
      <FeedbackFive/>
      <FancyFeatureTwenty/>
        <BlogThree/>
        <FancyFeatureTwentyOne/>
        <PartnerTwo/>

    </div>
  );
}

export default App;
