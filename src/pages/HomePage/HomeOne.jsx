import React, {Fragment} from 'react';
import TopNavFour from "../../components/TopNavigation/TopNavFour";
import HeroBannerFive from "../../components/HeroBanner/HeroBannerFive";
import FancyFeatureSeventeen from "../../components/FancyFeature/FancyFeatureSeventeen";
import FancyFeatureEighteen from "../../components/FancyFeature/FancyFeatureEighteen";
import FancyFeatureNineteen from "../../components/FancyFeature/FancyFeatureNineteen";
import CounterOne from "../../components/Counter/CounterOne";
import FeedbackFive from "../../components/Testimonial/FeedbackFive";
import FancyFeatureTwenty from "../../components/FancyFeature/FancyFeatureTwenty";
import BlogThree from "../../components/Blog/BlogThree";
import FancyFeatureTwentyOne from "../../components/FancyFeature/FancyFeatureTwentyOne";
import PartnerTwo from "../../components/Partners/PartnerTwo";
import FooterFour from "../../components/Footer/FooterFour";

function HomeOne(props) {
    return (
        <Fragment>
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
            <FooterFour/>
        </Fragment>
    );
}

export default HomeOne;