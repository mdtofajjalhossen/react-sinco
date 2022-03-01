import React, {Fragment} from 'react';
import icon_32 from '../../assets/images/icon/icon_32.svg'
import icon_20 from '../../assets/images/icon/icon_20.svg'
import icon_33 from '../../assets/images/icon/icon_33.svg'
function FancyFeatureSeventeen(props) {
    return (
        <Fragment>
            <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5" data-aos="fade-right">
                            <div className="title-style-three text-center text-lg-start">
                                <h2 className="main-title"><span>Services</span> We Provide with Quality.</h2>
                            </div> {/* /.title-style-three */}
                        </div>
                        <div className="col-xl-6 col-lg-7" data-aos="fade-left">
                            <p className="m0 text-center text-lg-start md-pt-30">NLP entails applying algorithms to identify and extract rules such that the unstructured language data is converted.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-30">
                        <div className="col-lg-4 col-md-6" data-aos="fade-right">
                            <div className="block-style-twelve mt-30 ps-lg-0 pe-xl-5 me-xl-2">
                                <div className="icon d-flex align-items-end"><img src={icon_32} alt="" /></div>
                                <h5><a href="service-details-V1.html">Data Science</a></h5>
                                <p>Convert data noise intelligent insights for competitive differentiation qulaity check equlity.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-twelve */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="block-style-twelve mt-30 active">
                                <div className="icon d-flex align-items-end"><img src={icon_32} alt="" /></div>
                                <h5><a href="service-details-V1.html">Customer Support</a></h5>
                                <p>Convert data noise to intelligent insights for competitive differentiation qulaity check.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-twelve */}
                        </div> {/* /.item */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-left">
                            <div className="block-style-twelve mt-30">
                                <div className="icon d-flex align-items-end"><img src={icon_33} alt="" /></div>
                                <h5><a href="service-details-V1.html">Machine Learning</a></h5>
                                <p>Convert data noise intelligent insights for competitive differentiation qulaity check equlity.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-twelve */}
                        </div> {/* /.item */}
                    </div>
                </div> {/* /.container */}
                <div className="shapes shape-one" />
            </div> {/* /.fancy-feature-seventeen */}

        </Fragment>
    );
}

export default FancyFeatureSeventeen;