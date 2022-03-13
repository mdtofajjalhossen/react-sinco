import React, {Fragment} from 'react';
import icon_17 from '../../assets/images/icon/icon_17.svg'
import icon_18 from '../../assets/images/icon/icon_18.svg'
import icon_19 from '../../assets/images/icon/icon_19.svg'
import icon_20 from '../../assets/images/icon/icon_20.svg'

function FancyFeatureEight(props) {
    return (
        <Fragment>
            <div className="fancy-feature-eight position-relative">
                <div className="container">
                    <div className="row justify-content-center gx-xxl-5">
                        <div className="col-lg-4 col-sm-6 d-flex mb-30" data-aos="fade-up">
                            <div className="block-style-seven">
                                <div className="icon d-flex align-items-end"><img src={icon_17} alt="" /></div>
                                <h5><a href="service-details-V1.html">Data Science</a></h5>
                                <p>Convert data noise to intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-seven */}
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex mb-30" data-aos="fade-up" data-aos-delay={100}>
                            <div className="block-style-seven">
                                <div className="icon d-flex align-items-end"><img src={icon_18} alt="" /></div>
                                <h5><a href="service-details-V1.html">Machine Learning</a></h5>
                                <p>Convert data noise to intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-seven */}
                        </div>
                        <div className="col-lg-4 d-flex mb-30" data-aos="fade-up" data-aos-delay={200}>
                            <div className="block-style-seven">
                                <div className="icon d-flex align-items-end"><img src={icon_19} alt="" /></div>
                                <h5><a href="service-details-V1.html">Customer Support</a></h5>
                                <p>Convert data noise to intelligent insights for quis competitive differentiation.</p>
                                <a href="service-details-V1.html" className="tran3s more-btn"><img src={icon_20} alt="" /></a>
                            </div> {/* /.block-style-seven */}
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.fancy-feature-eight */}

        </Fragment>
    );
}

export default FancyFeatureEight;