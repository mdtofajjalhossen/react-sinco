import React, {Fragment} from 'react';
import TopNavOne from "../../components/TopNavigation/TopNavOne";
import HeroBannerOne from "../../components/HeroBanner/HeroBannerOne";
import FancyFeatureOne from "../../components/FancyFeature/FancyFeatureOne";
import FancyFeatureTwoHomeThree from "../../components/FancyFeature/FancyFeatureTwoHomeThree";
import CounterHomeThreeOne from "../../components/Counter/CounterHomeThreeOne";
import FancyFeatureThree from "../../components/FancyFeature/FancyFeatureThree";
import PortfolioGalleryOne from "../../components/Portfolio/PortfolioGalleryOne";
import PricingOne from "../../components/Pricing/PricingOne";
import FeedbackOne from "../../components/Testimonial/FeedbackOne";
import PartnerOne from "../../components/Partners/PartnerOne";
import BlogOne from "../../components/Blog/BlogOne";
import AddressOne from "../../components/Address/AddressOne";
import FooterOne from "../../components/Footer/FooterOne";

function HomeThree(props) {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default HomeThree;