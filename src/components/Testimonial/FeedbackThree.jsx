import React, {Fragment} from 'react';
import img_05 from '../../assets/images/media/img_05.jpg'
import img_06 from '../../assets/images/media/img_06.jpg'
import img_07 from '../../assets/images/media/img_07.jpg'
import icon_15 from '../../assets/images/icon/icon_15.svg'
import shape_12 from '../../assets/images/shape/shape_12.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeedbackThree(props) {
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3500,
        centerPadding: 0,
        autoplay: true,
        infinite: true,
        centerMode: true,
        fade: true,
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
            <div className="feedback-section-three position-relative mt-250 lg-mt-130" data-aos="fade-up">
                <div className="container">
                    <div className="slider-wrapper">

                        <div className="feedback_slider_three">
                            <Slider {...settings}>
                            <div className="item">
                                <div className="feedback-block-three d-md-flex">
                                    <div className="img-meta">
                                        <img src={img_05} alt="" />
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="icon d-flex justify-content-center align-items-center"><img src={icon_15} alt="" /></div>
                                        <p>Certainly from my perspective been great success with lore giving that <a href="#">enterprises</a> level magna assured quality due issue there live the blind texts separated.</p>
                                        <div className="name">
                                            <h6>Martin Jonas</h6>
                                            <span>Head of marketing, Inter inc.</span>
                                        </div> {/* /.name */}
                                    </div> {/* /.text-wrapper */}
                                </div> {/* /.feedback-block-three */}
                            </div>
                            <div className="item">
                                <div className="feedback-block-three d-md-flex">
                                    <div className="img-meta">
                                        <img src={img_06} alt="" />
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="icon d-flex justify-content-center align-items-center"><img src={icon_15} alt="" /></div>
                                        <p>Having a home based business is a wonderful asset to your life. The problem still stands it comes time <a href="#">advertise</a> your business for a cheap cost you have looked.</p>
                                        <div className="name">
                                            <h6>Carolyn Tyler</h6>
                                            <span>Senior Developer, Sinco inc.</span>
                                        </div> {/* /.name */}
                                    </div> {/* /.text-wrapper */}
                                </div> {/* /.feedback-block-three */}
                            </div>
                            <div className="item">
                                <div className="feedback-block-three d-md-flex">
                                    <div className="img-meta">
                                        <img src={img_07} alt="" />
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="icon d-flex justify-content-center align-items-center"><img src={icon_15} alt="" /></div>
                                        <p>It’s a great exprience to work with <a href="#">Sinco</a>. They’r vey humble and expert &amp; the service has been excellent. The author is very quick and nice when it comes to support.</p>
                                        <div className="name">
                                            <h6>Rebecca Jones</h6>
                                            <span>Senior UX Designer, Creativegigs.</span>
                                        </div> {/* /.name */}
                                    </div> {/* /.text-wrapper */}
                                </div> {/* /.feedback-block-three */}
                            </div>
                        </Slider>
                        </div> {/* /.feedback_slider_three */}

                    </div> {/* /.slider-wrapper */}
                </div> {/* /.container */}
                <img src={shape_12} alt="" className="shapes shape-one" />
            </div> {/* /.feedback-section-three */}

        </Fragment>
    );
}

export default FeedbackThree;