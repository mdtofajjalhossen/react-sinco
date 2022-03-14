
import React, {Fragment} from 'react';
import icon_28 from '../../assets/images/icon/icon_28.svg'
import icon_29 from '../../assets/images/icon/icon_29.svg'
import icon_30 from '../../assets/images/icon/icon_30.svg'
import shape_33 from '../../assets/images/shape/shape_33.svg'

function FancyFeatureFifteen(props){
    return(
        <Fragment>
            <div className="fancy-feature-fifteen position-relative mt-65">
                <div className="container">
                    <div className="title-style-one text-center mb-90 lg-mb-30" data-aos="fade-up">
                        <div className="sc-title-five">OUR APPROACH</div>
                        <h2 className="main-title">How sinco works</h2>
                    </div> {/* /.title-style-one */}
                    <div className="bg-wrapper">
                        <div className="row justify-content-center gx-xxl-5">
                            <div className="col-md-4 col-sm-6" data-aos="fade-right">
                                <div className="block-style-eleven position-relative mt-50">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src={icon_28} alt="" />
                                        <div className="num">1</div>
                                    </div>
                                    <h5>Identify the probelm <br /> with ai</h5>
                                </div> {/* /.block-style-eleven */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="block-style-eleven position-relative mt-50 shape-arrow">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src={icon_29} alt="" />
                                        <div className="num">2</div>
                                    </div>
                                    <h5>Collect data with our <br /> advance ai.</h5>
                                </div> {/* /.block-style-eleven */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-left" data-aos-delay={200}>
                                <div className="block-style-eleven position-relative mt-50">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src={icon_30} alt="" />
                                        <div className="num">3</div>
                                    </div>
                                    <h5>Deliver Accurate data <br /> solution.</h5>
                                </div> {/* /.block-style-eleven */}
                            </div>
                        </div>
                    </div> {/* /.bg-wrapper */}
                </div> {/* /.container */}
                <img src={shape_33} alt="" className="shapes shape-one" />
            </div> {/* /.fancy-feature-fifteen */}

        </Fragment>
    )

}
export default FancyFeatureFifteen;
