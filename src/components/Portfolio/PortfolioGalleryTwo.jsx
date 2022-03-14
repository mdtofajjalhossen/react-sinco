import React, {Fragment, useEffect} from 'react';
import img_01 from '../../assets/images/gallery/img_01.jpg'
import img_02 from '../../assets/images/gallery/img_02.jpg'
import img_03 from '../../assets/images/gallery/img_03.jpg'
import img_04 from '../../assets/images/gallery/img_04.jpg'
import img_05 from '../../assets/images/gallery/img_05.jpg'
import img_06 from '../../assets/images/gallery/img_06.jpg'
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
function PortfolioGalleryTwo(props) {
    const delegate = props.delegate || "[data-fancybox]";
    useEffect(() => {
        const opts = props.options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, []);
    return (
        <Fragment>
            <div className="portfolio-gallery-two mt-170 lg-mt-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7 m-auto">
                            <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                                <div className="sc-title-five">OUR PROJECTS</div>
                                <h2 className="main-title">Check some our recent Projects.</h2>
                            </div> {/* /.title-style-one */}
                        </div>
                    </div>
                    <div className="row gx-xxl-5">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_01} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Data Research</span>
                                    <span className="pj-name">Product Analysis</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_01} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_02} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Design</span>
                                    <span className="pj-name">UI, UX Design</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_02} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_03} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Marketing</span>
                                    <span className="pj-name">Content Marketing</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_03} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_04} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Development</span>
                                    <span className="pj-name">Market System</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_04} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_05} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Marketing</span>
                                    <span className="pj-name">Content Marketing</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_05} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="portfolio-block-one mt-40">
                                <div className="img-meta"><img data-fancybox="gallery" src={img_06} alt="" className="w-100" /></div>
                                <a href="portfolio-details-V1.html" className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                    <span className="tag">Data Research</span>
                                    <span className="pj-name">Product Analysis</span>
                                </a>
                                <div className="hover-state tran3s"><a className="fancybox tran3s" data-fancybox="gallery" data-fancybox title="Click for large view" href={img_06} tabIndex={0}><i className="bi bi-plus" /></a></div>
                            </div> {/* /.portfolio-block-one */}
                        </div> {/* /.item */}
                    </div>
                </div>
            </div> {/* /.portfolio-gallery-two */}
        </Fragment>
    );
}

export default PortfolioGalleryTwo;