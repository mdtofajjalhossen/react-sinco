import React, {Fragment} from 'react';
import PLogo_14 from "../../assets/images/logo/Plogo-14.png";
import PLogo_13 from "../../assets/images/logo/Plogo-13.png";
import PLogo_12 from "../../assets/images/logo/Plogo-12.png";
import PLogo_11 from "../../assets/images/logo/Plogo-11.png";
import PLogo_10 from "../../assets/images/logo/Plogo-10.png";
import PLogo_9 from "../../assets/images/logo/Plogo-9.png";
import PLogo_7 from "../../assets/images/logo/Plogo-7.png";
import PLogo_6 from "../../assets/images/logo/Plogo-6.png";
import PLogo_8 from "../../assets/images/logo/Plogo-8.png";
function PartnerOne(props) {
    return (
        <Fragment>
            <div className="partner-section-one">
                <div className="container">
                    <div className="title-style-one text-center" data-aos="fade-up">
                        <div className="sc-title">over 150k+ client</div>
                        <h2 className="main-title md">Join 27,000+ companies who’ve reached </h2>
                    </div> {/* /.title-style-one */}
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <ul className="style-none text-center mt-40 lg-mt-10">
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up"><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_6} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={100}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_7} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={200}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_8} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={300}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_9} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={400}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_10} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={100}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_11} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={200}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_12} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={300}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_13} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={400}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_14} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.partner-section-one */}
        </Fragment>
    );
}

export default PartnerOne;