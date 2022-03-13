import React, {Fragment} from 'react';
import shape_20 from '../../assets/images/shape/shape_20.svg'
import shape_21 from '../../assets/images/shape/shape_21.svg'
import shape_22 from '../../assets/images/shape/shape_22.png'
import shape_23 from '../../assets/images/shape/shape_23.png'
function FancyFeatureEleven(props) {
    return (
        <Fragment>

            <div className="fancy-feature-eleven mt-225 lg-mt-120">
                <div className="container">
                    <div className="title-style-one white-vr text-center mb-55 lg-mb-30" data-aos="fade-up">
                        <h2 className="main-title">How It works</h2>
                        <p className="sub-title">Our advance AI system work seamlesly &amp; smartly.</p>
                    </div> {/* /.title-style-one */}
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <div className="row justify-content-center gx-xxl-5">
                                <div className="col-md-4 col-sm-6" data-aos="fade-right">
                                    <div className="block-style-eight position-relative mt-50">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <img src="images/icon/icon_21.svg" alt="" />
                                            <div className="num">1</div>
                                        </div>
                                        <h5>Identify the probelm <br /> with ai</h5>
                                    </div> {/* /.block-style-eight */}
                                </div>
                                <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="block-style-eight position-relative mt-50 shape-arrow">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <img src="images/icon/icon_22.svg" alt="" />
                                            <div className="num">2</div>
                                        </div>
                                        <h5>Collect data with our <br /> advance ai.</h5>
                                    </div> {/* /.block-style-eight */}
                                </div>
                                <div className="col-md-4 col-sm-6" data-aos="fade-left" data-aos-delay={200}>
                                    <div className="block-style-eight position-relative mt-50">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <img src="images/icon/icon_23.svg" alt="" />
                                            <div className="num">3</div>
                                        </div>
                                        <h5>Deliver Accurate data <br /> solution.</h5>
                                    </div> {/* /.block-style-eight */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* /.container */}
                <img src={shape_20} alt="" className="shapes shape-one" />
                <img src={shape_21} alt="" className="shapes shape-two" />
                <img src={shape_22} alt="" className="shapes shape-three" />
                <img src={shape_23} alt="" className="shapes shape-four" />
            </div> {/* /.fancy-feature-eleven */}

        </Fragment>
    );
}

export default FancyFeatureEleven;