import React, {Fragment,useEffect} from 'react';
import img_01 from '../../assets/images/gallery/img_01.jpg'
import img_02 from '../../assets/images/gallery/img_02.jpg'
import img_03 from '../../assets/images/gallery/img_03.jpg'
import img_04 from '../../assets/images/gallery/img_04.jpg'
import img_05 from '../../assets/images/gallery/img_05.jpg'
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PortfolioGalleryOne(props) {
    const delegate = props.delegate || "[data-fancybox]";
    useEffect(() => {
        const opts = props.options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    var settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        centerPadding: 0,
        autoplay: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            <div className="portfolio-gallery-one mt-150 lg-mt-110" data-aos="fade-up">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-7 col-sm-8">
                            <div className="title-style-one text-center text-sm-start xs-pb-20">
                                <h2 className="main-title">Check Some of Our Recent Work.</h2>
                            </div> {/* /.title-style-one */}
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-5 col-sm-4 ms-auto d-flex justify-content-center justify-content-sm-end">
                            <ul className="slider-arrows slick-arrow-one d-flex style-none">
                                <li className="prev_p1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-left" /></li>
                                <li className="next_p1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-right" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="slider-wrapper">
                        <div className="portfolio_slider_one">
                            <Slider {...settings}>
                            <div className="item">
                                <div className="portfolio-block-one">
                                    <div className="img-meta"><img src={img_01} alt="" className="w-100" /></div>
                                    <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">Data Research</span>
                                        <span className="pj-name">Product Analysis</span>
                                    </a>
                                    <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" title="Click for large view" href={img_01} tabIndex={0}><i className="bi bi-plus" /></a></div>
                                </div> {/* /.portfolio-block-one */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="portfolio-block-one">
                                    <div className="img-meta"><img src={img_02} alt="" className="w-100" /></div>
                                    <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">Design</span>
                                        <span className="pj-name">UI, UX Design</span>
                                    </a>
                                    <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" title="Click for large view" href={img_02} tabIndex={0}><i className="bi bi-plus" /></a></div>
                                </div> {/* /.portfolio-block-one */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="portfolio-block-one">
                                    <div className="img-meta"><img src={img_03} alt="" className="w-100" /></div>
                                    <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">Marketing</span>
                                        <span className="pj-name">Content Marketing</span>
                                    </a>
                                    <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" title="Click for large view" href={img_03} tabIndex={0}><i className="bi bi-plus" /></a></div>
                                </div> {/* /.portfolio-block-one */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="portfolio-block-one">
                                    <div className="img-meta"><img src={img_04} alt="" className="w-100" /></div>
                                    <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">Development</span>
                                        <span className="pj-name">Market System</span>
                                    </a>
                                    <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" title="Click for large view" href={img_04} tabIndex={0}><i className="bi bi-plus" /></a></div>
                                </div> {/* /.portfolio-block-one */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="portfolio-block-one">
                                    <div className="img-meta"><img src={img_05} alt="" className="w-100" /></div>
                                    <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">Marketing</span>
                                        <span className="pj-name">Content Marketing</span>
                                    </a>
                                    <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" title="Click for large view" href={img_05} tabIndex={0}><i className="bi bi-plus" /></a></div>
                                </div> {/* /.portfolio-block-one */}
                            </div> {/* /.item */}
                            </Slider>
                        </div>
                    </div> {/* /.slider-wrapper */}
                </div>
            </div> {/* /.portfolio-gallery-one */}
        </Fragment>
    );
}

export default PortfolioGalleryOne;