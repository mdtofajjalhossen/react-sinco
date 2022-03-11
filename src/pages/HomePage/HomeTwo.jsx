import React, {Fragment} from "react";
import TopNavTwo from "../../components/TopNavigation/TopNavTwo";
import HeroBannerTwo from "../../components/HeroBanner/HeroBannerTwo";
import CounterHomeTwoOne from "../../components/Counter/CounterHomeTwoOne";
import PartnerTwoHomeTwo from "../../components/Partners/PartnerTwoHomeTwo";
import FancyFeatureFour from "../../components/FancyFeature/FancyFeatureFour";
import FancyFeatureTwo from "../../components/FancyFeature/FancyFeatureTwo";
import FeedbackTwo from "../../components/Testimonial/FeedbackTwo";
import FancyFeatureSix from "../../components/FancyFeature/FancyFeatureSix";
import FeedbackThree from "../../components/Testimonial/FeedbackThree";
import FancyFeatureSeven from "../../components/FancyFeature/FancyFeatureSeven";
import BlogTwo from "../../components/Blog/BlogTwo";
import FancyShortBannerOne from "../../components/CallToAction/FancyShortBannerOne";
import FooterTwo from "../../components/Footer/FooterTwo";
import ScrollTop from "../../components/BackToTop/ScrollTop";

function HomeTwo(props) {
        return (
            <Fragment>
                    <TopNavTwo/>
                    <HeroBannerTwo/>
                    <CounterHomeTwoOne/>
                    <PartnerTwoHomeTwo/>
                    <FancyFeatureFour/>
                    <FancyFeatureTwo/>
                    <FeedbackTwo/>
                    <FancyFeatureSix/>
                    <FeedbackThree/>
                    <FancyFeatureSeven/>
                    <BlogTwo/>
                    <FancyShortBannerOne/>
                    <FooterTwo/>
                    <ScrollTop/>
            </Fragment>
        );
}

export default HomeTwo;