import React, {Fragment} from 'react';
import icon_24 from '../../assets/images/icon/icon_24.svg'
import icon_25 from '../../assets/images/icon/icon_25.svg'
import icon_26 from '../../assets/images/icon/icon_26.svg'
import icon_27 from '../../assets/images/icon/icon_27.svg'
import shape_31 from '../../assets/images/shape/shape_31.svg'
function FancyFeatureThirteen(props) {
    return (
        <Fragment>
            <div className="fancy-feature-thirteen position-relative mt-100 pb-150 lg-pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-7 m-auto" data-aos="fade-up">
                            <div className="title-style-one text-center mb-55 lg-mb-30">
                                <div className="sc-title-five">Our Services</div>
                                <h2 className="main-title">What we offer? Let’s check it out.</h2>
                            </div> {/* /.title-style-one */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 d-flex" data-aos="fade-up">
                            <div className="block-style-ten tran3s mt-30">
                                <div className="icon d-flex align-items-end"><img src={icon_24} alt="" /></div>
                                <h6><a href="service-details-V1.html">Video Intelligence</a></h6>
                                <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="read-btn tran3s"><i className="bi bi-arrow-right" /></a>
                            </div> {/* /.block-style-ten */}
                        </div>
                        <div className="col-xl-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
                            <div className="block-style-ten tran3s mt-30">
                                <div className="icon d-flex align-items-end"><img src={icon_25} alt="" /></div>
                                <h6><a href="service-details-V1.html">Machine Learning</a></h6>
                                <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="read-btn tran3s"><i className="bi bi-arrow-right" /></a>
                            </div> {/* /.block-style-ten */}
                        </div>
                        <div className="col-xl-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
                            <div className="block-style-ten tran3s mt-30">
                                <div className="icon d-flex align-items-end"><img src={icon_26} alt="" /></div>
                                <h6><a href="service-details-V1.html">Voice Tracking</a></h6>
                                <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="read-btn tran3s"><i className="bi bi-arrow-right" /></a>
                            </div> {/* /.block-style-ten */}
                        </div>
                        <div className="col-xl-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
                            <div className="block-style-ten tran3s mt-30">
                                <div className="icon d-flex align-items-end"><img src={icon_27} alt="" /></div>
                                <h6><a href="service-details-V1.html">Data Analysis</a></h6>
                                <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="read-btn tran3s"><i className="bi bi-arrow-right" /></a>
                            </div> {/* /.block-style-ten */}
                        </div>
                    </div>
                </div> {/* /.container */}
                <img src={shape_31} alt="" className="shapes shape-one" />
            </div> {/* /.fancy-feature-thirteen */}
        </Fragment>
    );
}

export default FancyFeatureThirteen;