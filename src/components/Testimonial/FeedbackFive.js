
import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import icon_34 from '../../assets/images/icon/icon_34.svg'
import img_08 from '../../assets/images/media/img_08.jpg'
import img_09 from '../../assets/images/media/img_09.jpg'
import img_10 from '../../assets/images/media/img_10.jpg'
import img_11 from '../../assets/images/media/img_11.jpg'



class FeedbackFive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="feedback-section-five pt-130 lg-pt-100 pb-95 lg-pb-40">
                    <div className="container">
                        <div className="title-style-three text-center" data-aos="fade-up">
                            <div className="sc-title">Testimonials</div>
                            <h2 className="main-title">Words from <span>Client</span></h2>
                        </div> {/* /.title-style-three */}
                        <div className="feedback_slider_four pt-70 lg-pt-50" data-aos="fade-up">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                                <img src={icon_34} alt="" className="m-auto" />
                                                <p>Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.</p>
                                                <div className="cp-info">
                                                    <h6>Rashed kabir</h6>
                                                    <span>Designer</span>
                                                </div>
                                            </div> {/* /.feedback-block-four */}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                                <img src="images/icon/icon_34.svg" alt="" className="m-auto" />
                                                <p>Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.</p>
                                                <div className="cp-info">
                                                    <h6>Zubayer Hasan</h6>
                                                    <span>Front End developer</span>
                                                </div>
                                            </div> {/* /.feedback-block-four */}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                                <img src="images/icon/icon_34.svg" alt="" className="m-auto" />
                                                <p>Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.</p>
                                                <div className="cp-info">
                                                    <h6>Mahfuz Riad</h6>
                                                    <span>Designer</span>
                                                </div>
                                            </div> {/* /.feedback-block-four */}
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div> {/* /.feedback_slider_four */}
                    </div>
                    <img src={img_08} alt="" className="shapes avatar-one" width={45} height={45} style={{outlineWidth: '6px'}} />
                    <img src={img_09} alt="" className="shapes avatar-two" width={85} height={85} style={{outlineWidth: '10px'}} />
                    <img src={img_10} alt="" className="shapes avatar-three" width={85} height={85} style={{outlineWidth: '10px'}} />
                    <img src={img_11} alt="" className="shapes avatar-four" width={50} height={50} style={{outlineWidth: '5px'}} />
                </div> {/* /.feedback-section-five */}


            </Fragment>
        );
    }
}

export default FeedbackFive;
