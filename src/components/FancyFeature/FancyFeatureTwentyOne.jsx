import React, {Fragment} from 'react';
import ils_16 from '../../assets/images/img/ils_16.svg'
import shape_37 from '../../assets/images/shape/shape_37.svg'

const FancyFeatureTwentyOne = () => {
    return (
        <Fragment>
            <div className="fancy-feature-twentyOne mt-200 pb-100 lg-mt-120 lg-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 ms-auto">
                            <div className="block-style-five ps-xxl-5" data-aos="fade-left">
                                <div className="title-style-three">
                                    <div className="sc-title">Contact us</div>
                                    <h2 className="main-title">Get Ready to Started. It’s Fast &amp; Easy.</h2>
                                </div> {/* /.title-style-three */}
                                <p className="pt-20 pb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  quis nostrud ullamco laboris nisi.</p>
                                <a href="contact-us.html" className="btn-eight ripple-btn">Send Message</a>
                            </div> {/* /.block-style-five */}
                        </div>
                    </div>
                </div>
                <div className="illustration-holder" data-aos="fade-right">
                    <img src={ils_16} alt="" className="w-100 main-illustration" />
                </div> {/* /.illustration-holder */}
                <img src={shape_37} alt="" className="shapes shape-one" />
                <div className="shapes oval-one" />
                <div className="shapes oval-two" />
            </div> {/* /.fancy-feature-twentyOne */}

        </Fragment>
    );
};

export default FancyFeatureTwentyOne;