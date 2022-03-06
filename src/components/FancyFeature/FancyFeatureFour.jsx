import React, {Fragment} from 'react';
import icon_08 from '../../assets/images/icon/icon_08.svg'
import icon_13 from '../../assets/images/icon/icon_13.svg'
import icon_09 from '../../assets/images/icon/icon_09.svg'
import icon_10 from '../../assets/images/icon/icon_10.svg'
import icon_11 from '../../assets/images/icon/icon_11.svg'
import icon_12 from '../../assets/images/icon/icon_12.svg'
import shape_06 from  '../../assets/images/shape/shape_06.svg'
import shape_07 from '../../assets/images/shape/shape_07.svg'

function FancyFeatureFour(props) {
    return (
        <Fragment>
            <div className="fancy-feature-four position-relative mt-110 lg-mt-50">
                <div className="bg-wrapper">
                    <div className="inner-container">
                        <div className="container">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-4 mt-40 d-flex" data-aos="fade-up">
                                    <div className="d-flex justify-content-center flex-column">
                                        <div className="title-style-one">
                                            <div className="sc-title-three">Services</div>
                                            <h2 className="main-title">Our experties field.</h2>
                                        </div> {/* /.title-style-one */}
                                        <div><div className="btn-three rev mt-35 lg-mt-20">For more details. <a href="service-V1.html">Click here <i className="fas fa-chevron-right" /></a></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-40 d-flex" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="block-style-four">
                                        <div className="icon d-flex align-items-end justify-content-center"><img src={icon_08} alt="" /></div>
                                        <a href="service-V1.html"><h5>Predictive Analytics</h5></a>
                                        <p>Convert data noise to intelligent insights for competitive differentiation.</p>
                                        <a href="service-V1.html" className="more-btn"><img src={icon_13} alt="" className="tran3s" /></a>
                                    </div> {/* /.block-style-four */}
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-40 d-flex" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="block-style-four">
                                        <div className="icon d-flex align-items-end justify-content-center"><img src={icon_09} alt="" /></div>
                                        <a href="service-V1.html"><h5>Data Engineers</h5></a>
                                        <p>Stay ahead of disruption &amp; exceed customer expectation by implementing predictive analytics solutions.</p>
                                        <a href="service-V1.html" className="more-btn"><img src="icon_13" alt="" className="tran3s" /></a>
                                    </div> {/* /.block-style-four */}
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-40 d-flex" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="block-style-four">
                                        <div className="icon d-flex align-items-end justify-content-center"><img src={icon_10} alt="" /></div>
                                        <a href="service-V1.html"><h5>Deep Learning</h5></a>
                                        <p>Access tools for deep learning, cloud computing and any scale.</p>
                                        <a href="service-V1.html" className="more-btn"><img src={icon_13} alt="" className="tran3s" /></a>
                                    </div> {/* /.block-style-four */}
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-40 d-flex" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="block-style-four">
                                        <div className="icon d-flex align-items-end justify-content-center"><img src={icon_11} alt="" /></div>
                                        <a href="service-V1.html"><h5>Data Mining</h5></a>
                                        <p>You can discover hidden opportunities collecting, analyzing or explaining your data in a different way.</p>
                                        <a href="service-V1.html" className="more-btn"><img src={icon_13} alt="" className="tran3s" /></a>
                                    </div> {/* /.block-style-four */}
                                </div>
                                <div className="col-lg-4 mt-40 d-flex" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="block-style-four">
                                        <div className="icon d-flex align-items-end justify-content-center"><img src={icon_12} alt="" /></div>
                                        <a href="service-V1.html"><h5>Statistical Modeling</h5></a>
                                        <p>Offer future-ready business applications that can learn &amp; adjust with time.</p>
                                        <a href="service-V1.html" className="more-btn"><img src={icon_13} alt="" className="tran3s" /></a>
                                    </div> {/* /.block-style-four */}
                                </div>
                            </div>
                        </div>
                    </div> {/* /.inner-container */}
                </div> {/* /.bg-wrapper */}
                <img src={shape_06} alt="" className="shapes shape-one" />
                <img src={shape_07} alt="" className="shapes shape-two" />
            </div> {/* /.fancy-feature-four */}

        </Fragment>
    );
}

export default FancyFeatureFour;