import React, {Fragment} from 'react';
import PLogo_1 from '../../assets/images/logo/Plogo-1.png'
import PLogo_2 from '../../assets/images/logo/Plogo-2.png'
import PLogo_3 from '../../assets/images/logo/Plogo-3.png'
import PLogo_4 from '../../assets/images/logo/Plogo-4.png'
import PLogo_5 from '../../assets/images/logo/Plogo-5.png'
import icon_05 from '../../assets/images/icon/icon_05.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FeedbackOne(props) {
    var settings = {
        dots: true,
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
        <Fragment>
            <div className="feedback-section-one mt-130 lg-mt-100">
                <div className="container">
                    <div className="title-style-one text-center" data-aos="fade-up">
                        <div className="sc-title">TESTIMONIALS</div>
                        <h2 className="main-title">Word from Our Client</h2>
                    </div> {/* /.title-style-one */}
                </div> {/* /.container */}
                <div className="inner-content mt-150 lg-mt-80">
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
                                        <img src={PLogo_5} alt="" />
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
                                        <img src={PLogo_5} alt="" />
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
            </div> {/* /.feedback-section-one */}

        </Fragment>
    );
}

export default FeedbackOne;