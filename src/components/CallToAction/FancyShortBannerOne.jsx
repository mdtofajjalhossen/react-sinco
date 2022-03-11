import React, {Fragment} from 'react';
import shape_10 from '../../assets/images/shape/shape_10.svg'
import shape_11 from '../../assets/images/shape/shape_11.svg'

function FancyShortBannerOne(props) {
    return (
        <Fragment>
            <div className="fancy-short-banner-one position-relative mt-160 lg-mt-100 md-mt-80">
                <div className="container">
                    <div className="bg-wrapper">
                        <div className="row align-items-center gx-xxl-5">
                            <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                                <div className="sub-title">Work Inquiry</div>
                                <h3 className="pe-xl-5 md-pb-20">Having Any Query! Book an appointment.</h3>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end" data-aos="fade-left">
                                <a href="contact-us.html" className="msg-btn tran3s">Send Us Message</a>
                            </div>
                        </div>
                    </div> {/* /.bg-wrapper */}
                </div> {/* /.container */}
                <img src={shape_10} alt="" className="shapes shape-one" />
                <img src={shape_11} alt="" className="shapes shape-two" />
            </div> {/* /.fancy-short-banner-one */}

        </Fragment>
    );
}

export default FancyShortBannerOne;