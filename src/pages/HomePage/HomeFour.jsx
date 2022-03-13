import React, {Fragment} from 'react';
import TopNavThree from "../../components/TopNavigation/TopNavThree";
import HeroBannerThree from "../../components/HeroBanner/HeroBannerThree";
import FancyFeatureEight from "../../components/FancyFeature/FancyFeatureEight";
import FancyFeatureNine from "../../components/FancyFeature/FancyFeatureNine";
import FancyFeatureTen from "../../components/FancyFeature/FancyFeatureTen";
import FancyFeatureEleven from "../../components/FancyFeature/FancyFeatureEleven";
import CounterOneTopTransform from "../../components/Counter/CounterOneTopTransform";
import FancyFeatureTwelve from "../../components/FancyFeature/FancyFeatureTwelve";
import FeedbackFour from "../../components/Testimonial/FeedbackFour";
import FancyShortBannerTwo from "../../components/CallToAction/FancyShortBannerTwo";
import BlogTwoHomeFour from "../../components/Blog/BlogTwoHomeFour";
import AddressOneHomeFour from "../../components/Address/AddressOneHomeFour";
import FooterThree from "../../components/Footer/FooterThree";

function HomeFour(props) {
    return (
        <Fragment>
            <TopNavThree/>
            <HeroBannerThree/>
            <FancyFeatureEight/>
            <FancyFeatureNine/>
            <FancyFeatureTen/>
            <FancyFeatureEleven/>
            <CounterOneTopTransform/>
            <FancyFeatureTwelve/>
            <FeedbackFour/>
            <FancyShortBannerTwo/>
            <BlogTwoHomeFour/>
            <AddressOneHomeFour/>
            <FooterThree/>
        </Fragment>
    );
}

export default HomeFour;