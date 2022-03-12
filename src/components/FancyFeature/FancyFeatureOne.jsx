import React, {Fragment} from 'react';
import icon_02 from '../../assets/images/icon/icon_02.svg'
import icon_03 from '../../assets/images/icon/icon_03.svg'
import icon_04 from '../../assets/images/icon/icon_04.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function FancyFeatureOne(props) {

    var settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        centerPadding: 0,
        autoplay: true,
        infinite: true,
        centerMode: true,
        fade: true,

    };

    return (
        <Fragment>

            <div className="fancy-feature-one position-relative mt-225 xl-mt-200 lg-mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="title-style-one">
                                <div className="sc-title">Services</div>
                                <h2 className="main-title">Our Experties field.</h2>
                            </div> {/* /.title-style-one */}
                            <p className="sub-heading mt-25 mb-50 md-mb-20">Sinco is data science, machine learning &amp; artificial intelligence.</p>
                            <div className="btn-three">For more details. <a href="service-V2.html">Click here <i className="fas fa-chevron-right" /></a></div>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="slider-wrapper">

                    <div className="service_slider_one">
                        <Slider {...settings}>
                        <div className="item">
                            <div className="block-style-one text-center">
                                <div className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={icon_02} alt="" className="m-auto" /></div>
                                <h5 className="mb-40">Data Machine Learning.</h5>
                                <a href="service-details-V1.html" className="btn-two">Learn more <i className="fas fa-chevron-right" /></a>
                            </div> {/* /.block-style-one */}
                        </div> {/* /.item */}

                        <div className="item">
                            <div className="block-style-one text-center">
                                <div className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={icon_03} alt="" className="m-auto" /></div>
                                <h5 className="mb-40">AI, Machine Learning</h5>
                                <a href="service-details-V1.html" className="btn-two">Learn more <i className="fas fa-chevron-right" /></a>
                            </div> {/* /.block-style-one */}
                        </div> {/* /.item */}

                        <div className="item">
                            <div className="block-style-one text-center">
                                <div className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={icon_04} alt="" className="m-auto" /></div>
                                <h5 className="mb-40">Data Development</h5>
                                <a href="service-details-V1.html" className="btn-two">Learn more <i className="fas fa-chevron-right" /></a>
                            </div> {/* /.block-style-one */}
                        </div> {/* /.item */}

                        <div className="item">
                            <div className="block-style-one text-center">
                                <div className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={icon_03} alt="" className="m-auto" /></div>
                                <h5 className="mb-40">Big Data Consulting</h5>
                                <a href="service-details-V1.html" className="btn-two">Learn more <i className="fas fa-chevron-right" /></a>
                            </div> {/* /.block-style-one */}
                        </div> {/* /.item */}

                    </Slider>
                    </div>

                </div> {/* /.slider-wrapper */}
            </div> {/* /.fancy-feature-one */}

        </Fragment>
    );
}

export default FancyFeatureOne;