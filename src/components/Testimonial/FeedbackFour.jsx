import React, {Fragment} from 'react';
import PLogo_1 from '../../assets/images/logo/Plogo-1.png'
import PLogo_2 from '../../assets/images/logo/Plogo-2.png'
import PLogo_3 from '../../assets/images/logo/Plogo-3.png'
import PLogo_4 from '../../assets/images/logo/Plogo-4.png'
import PLogo_5 from '../../assets/images/logo/Plogo-5.png'
import icon_05 from '../../assets/images/icon/icon_05.svg'
import PLogo_13 from '../../assets/images/logo/Plogo-13.png'
import  PLogo_12 from '../../assets/images/logo/Plogo-12.png'
import  PLogo_9 from '../../assets/images/logo/Plogo-9.png'
import  PLogo_7 from '../../assets/images/logo/Plogo-7.png'
import  PLogo_8 from  '../../assets/images/logo/Plogo-8.png'
import shape_26 from '../../assets/images/shape/shape_26.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function FeedbackFour(props) {
    var settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2500,
        autoplaySpeed: 3500,
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
        <Fragment>
            <div className="feedback-section-four position-relative mt-130 pb-200 lg-mt-100 lg-pb-80">
                <div className="container">
                    <div className="title-style-one text-center" data-aos="fade-up">
                        <div className="sc-title-four">FEEDBACK</div>
                        <h2 className="main-title">Trsuted by Clients</h2>
                    </div> {/* /.title-style-one */}
                </div> {/* /.container */}
                <div className="inner-content mt-90 lg-mt-60">
                    <div className="slider-wrapper">
                        <div className="feedback_slider_one">
                            <Slider {...settings}>
                            <div className="item">
                                <div className="feedback-block-one">
                                    <div className="top-header d-flex align-items-center justify-content-between">
                                        <div>
                                            <img src={PLogo_1} alt="" />
                                            <ul className="style-none d-flex rating pt-15">
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                            </ul>
                                        </div>
                                        <img src={icon_05} alt="" width={50} />
                                    </div> {/* /.top-header */}
                                    <p>Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="cost"><span>Qulaity &amp; Cost:</span> 5.00</div>
                                        <img src="images/logo/Plogo-5.png" alt="" />
                                    </div>
                                </div> {/* /.feedback-block-one */}
                            </div>
                            <div className="item">
                                <div className="feedback-block-one">
                                    <div className="top-header d-flex align-items-center justify-content-between">
                                        <div>
                                            <img src={PLogo_2} alt="" />
                                            <ul className="style-none d-flex rating pt-15">
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                            </ul>
                                        </div>
                                        <img src={icon_05} alt="" width={50} />
                                    </div> {/* /.top-header */}
                                    <p>Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="cost"><span>Qulaity &amp; Cost:</span> 35.00</div>
                                        <img src="images/logo/Plogo-5.png" alt="" />
                                    </div>
                                </div> {/* /.feedback-block-one */}
                            </div>
                            <div className="item">
                                <div className="feedback-block-one">
                                    <div className="top-header d-flex align-items-center justify-content-between">
                                        <div>
                                            <img src={PLogo_3} alt="" />
                                            <ul className="style-none d-flex rating pt-15">
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                            </ul>
                                        </div>
                                        <img src={icon_05} alt="" width={50} />
                                    </div> {/* /.top-header */}
                                    <p>Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="cost"><span>Qulaity &amp; Cost:</span> 19.00</div>
                                        <img src={PLogo_5} alt="" />
                                    </div>
                                </div> {/* /.feedback-block-one */}
                            </div>
                            <div className="item">
                                <div className="feedback-block-one">
                                    <div className="top-header d-flex align-items-center justify-content-between">
                                        <div>
                                            <img src={PLogo_4} alt="" />
                                            <ul className="style-none d-flex rating pt-15">
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                                <li><i className="bi bi-star-fill" /></li>
                                            </ul>
                                        </div>
                                        <img src={icon_05} alt="" width={50} />
                                    </div> {/* /.top-header */}
                                    <p>Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="cost"><span>Qulaity &amp; Cost:</span> 15.00</div>
                                        <img src={PLogo_5} alt="" />
                                    </div>
                                </div> {/* /.feedback-block-one */}
                            </div>
                            </Slider>
                        </div> {/* /.feedback_slider_one */}
                    </div> {/* /.slider-wrapper */}
                </div> {/* /.inner-content */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 m-auto">
                            <ul className="style-none text-center mt-40 lg-mt-20">
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up"><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_13} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={100}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_12} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={200}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_9} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={300}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_7} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={400}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_8} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={shape_26} alt="" className="shapes bg-shape" />
            </div> {/* /.feedback-section-four */}

        </Fragment>
    );
}

export default FeedbackFour;