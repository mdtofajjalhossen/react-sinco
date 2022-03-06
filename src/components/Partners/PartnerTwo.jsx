import React, {Fragment} from 'react';
import PLogo_13 from '../../assets/images/logo/Plogo-13.png'
import PLogo_12 from '../../assets/images/logo/Plogo-12.png'
import PLogo_9 from '../../assets/images/logo/Plogo-9.png'
import PLogo_7 from '../../assets/images/logo/Plogo-7.png'
import PLogo_8 from '../../assets/images/logo/Plogo-8.png'

function PartnerTwo(props) {
    return (
        <Fragment>
            <div className="partner-section-two mt-30 mb-130 lg-mb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 m-auto">
                            <ul className="style-none text-center mt-40 lg-mt-10">
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up"><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_13} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={100}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_12} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={200}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_9} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={300}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_7} alt="" /></a></li>
                                <li className="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay={400}><a href="#" className="d-flex align-items-center justify-content-center"><img src={PLogo_8} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.partner-section-two */}

        </Fragment>
    );
}

export default PartnerTwo;