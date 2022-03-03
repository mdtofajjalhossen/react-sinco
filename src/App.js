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

function App() {
  return (
    <div className="App">
      <TopNavFour/>
      <HeroBannerFive/>
      <FancyFeatureSeventeen/>
      <FancyFeatureEighteen/>
      <FancyFeatureNineteen/>
      <CounterOne/>
      <FeedbackFive/>





      {/*<FeedbackFive/>*/}
      <FancyFeatureTwenty/>
    </div>
  );
}

export default App;
