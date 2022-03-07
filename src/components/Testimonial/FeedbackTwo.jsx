import React, {Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import shape_08 from '../../assets/images/shape/shape_08.svg'
import shape_09 from '../../assets/images/shape/shape_09.svg'
import img_01 from '../../assets/images/media/img_01.jpg'
import img_02 from '../../assets/images/media/img_02.jpg'
import img_03 from '../../assets/images/media/img_03.jpg'
import img_04 from '../../assets/images/media/img_04.jpg'
import PLogo_15 from '../../assets/images/logo/Plogo-15.png'
import PLogo_2 from '../../assets/images/logo/Plogo-2.png'
import PLogo_3 from '../../assets/images/logo/Plogo-3.png'
import PLogo_4 from '../../assets/images/logo/Plogo-4.png'
import icon_14 from '../../assets/images/icon/icon_14.svg'



function FeedbackTwo(props) {

    var settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        centerPadding: 0,
        autoplay: true,
        infinite: true,
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


        <div className="feedback-section-two mt-170 xl-mt-100 md-mt-60" data-aos="fade-up">
            <img src={shape_08} alt="" className="shapes shape-one" />
            <img src={shape_09} alt="" className="shapes shape-two" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-4 col-md-5 col-sm-8">
                        <div className="title-style-one text-center text-sm-start xs-pb-20">
                            <h2 className="main-title">Client’s success Stories.</h2>
                        </div> {/* /.title-style-one */}
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-4 ms-auto d-flex justify-content-center justify-content-sm-end">
                        <ul className="slider-arrows slick-arrow-two d-flex style-none">
                            <li className="prev_f1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-left" /></li>
                            <li className="next_f1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-right" /></li>
                        </ul>
                    </div>
                </div>
            </div> {/* /.container */}
            <div className="inner-content mt-60 md-mt-40">
                <div className="slider-wrapper">
                    <div className="feedback_slider_two">

                    </div> {/* /.feedback_slider_two */}
                </div> {/* /.slider-wrapper */}
            </div> {/* /.inner-content */}
            <Slider {...settings}>
                <div className="feedback_slider_two">
                <div className="item">
                    <div className="feedback-block-two d-sm-flex">
                        <div className="img-meta">
                            <img src={img_01} alt="" />
                            <a className="fancybox video-icon" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                <i className="bi bi-play-fill" />
                            </a>
                        </div>
                        <div className="text-wrapper">
                            <div className="icon d-flex align-items-end"><img src={PLogo_15} alt="" /></div>
                            <div className="camp-name">Giant cloud service inc</div>
                            <p>We’v 9,000 agents across around the country, Find agents near your neighborhood.</p>
                            <a href="#" className="read-btn d-flex align-items-center justify-content-between">
                                <span>Continue Reading</span>
                                <img src={icon_14} alt="" className="arrow" />
                            </a>
                        </div> {/* /.text-wrapper */}
                    </div> {/* /.feedback-block-two */}
                </div>
                </div>

                <div className="feedback_slider_two">
                <div className="item">
                    <div className="feedback-block-two d-sm-flex">
                        <div className="img-meta">
                            <img src={img_02} alt="" />
                            <a className="fancybox video-icon" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                <i className="bi bi-play-fill" />
                            </a>
                        </div>
                        <div className="text-wrapper">
                            <div className="icon d-flex align-items-end"><img src={PLogo_4} alt="" /></div>
                            <div className="camp-name">UK Marketing Agency.</div>
                            <p>We’v 9,000 agents across around the country, Find agents near your neighborhood.</p>
                            <a href="#" className="read-btn d-flex align-items-center justify-content-between">
                                <span>Continue Reading</span>
                                <img src={icon_14} alt="" className="arrow" />
                            </a>
                        </div> {/* /.text-wrapper */}
                    </div> {/* /.feedback-block-two */}
                </div>
                </div>
                <div className="feedback_slider_two">
                <div className="item">
                    <div className="feedback-block-two d-sm-flex">
                        <div className="img-meta">
                            <img src={img_03} alt="" />
                            <a className="fancybox video-icon" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                <i className="bi bi-play-fill" />
                            </a>
                        </div>
                        <div className="text-wrapper">
                            <div className="icon d-flex align-items-end"><img src={PLogo_2} alt="" /></div>
                            <div className="camp-name">Netflix Marketing Agency.</div>
                            <p>We’v 9,000 agents across around the country, Find agents near your neighborhood.</p>
                            <a href="#" className="read-btn d-flex align-items-center justify-content-between">
                                <span>Continue Reading</span>
                                <img src={icon_14} alt="" className="arrow" />
                            </a>
                        </div> {/* /.text-wrapper */}
                    </div> {/* /.feedback-block-two */}
                </div>
                </div>
                    <div className="feedback_slider_two">
                <div className="item">
                    <div className="feedback-block-two d-sm-flex">
                        <div className="img-meta">
                            <img src={img_04} alt="" />
                            <a className="fancybox video-icon" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                <i className="bi bi-play-fill" />
                            </a>
                        </div>
                        <div className="text-wrapper">
                            <div className="icon d-flex align-items-end"><img src={PLogo_3} alt="" /></div>
                            <div className="camp-name">Sinco Digital Agency.</div>
                            <p>We’v 9,000 agents across around the country, Find agents near your neighborhood.</p>
                            <a href="#" className="read-btn d-flex align-items-center justify-content-between">
                                <span>Continue Reading</span>
                                <img src={icon_14} alt="" className="arrow" />
                            </a>
                        </div> {/* /.text-wrapper */}
                    </div> {/* /.feedback-block-two */}
                </div>
                </div>
            </Slider>
        </div> //feedback-section-two

    );
}

export default FeedbackTwo;



