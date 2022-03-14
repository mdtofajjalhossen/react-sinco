import React, {Fragment} from 'react';
import PLogo_22 from '../../assets/images/logo/Plogo-22.png'
import PLogo_23 from '../../assets/images/logo/Plogo-23.png'
import PLogo_24 from '../../assets/images/logo/Plogo-24.png'
import PLogo_25 from '../../assets/images/logo/Plogo-25.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function PartnerThree(props) {
    var settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        centerPadding: 0,
        centerMode: true,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]


    };
    return (
        <Fragment>
            <div className="partner-section-three mt-70 lg-mt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 m-auto">
                            <div className="partner_slider_one">
                                <Slider {...settings}>
                                <div className="item"><div className="icon d-flex align-items-center"><img src={PLogo_22} alt="" className="m-auto" /></div></div>
                                <div className="item"><div className="icon d-flex align-items-center"><img src={PLogo_23} alt="" className="m-auto" /></div></div>
                                <div className="item"><div className="icon d-flex align-items-center"><img src={PLogo_24} alt="" className="m-auto" /></div></div>
                                <div className="item"><div className="icon d-flex align-items-center"><img src={PLogo_25} alt="" className="m-auto" /></div></div>
                                <div className="item"><div className="icon d-flex align-items-center"><img src={PLogo_23} alt="" className="m-auto" /></div></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.partner-section-three */}
        </Fragment>
    );
}

export default PartnerThree;