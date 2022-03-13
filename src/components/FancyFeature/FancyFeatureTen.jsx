import React, {Fragment} from 'react';
import PLogo_16 from '../../assets/images/logo/Plogo-16.png'
import PLogo_17 from '../../assets/images/logo/Plogo-17.png'
import PLogo_18 from '../../assets/images/logo/Plogo-18.png'
import PLogo_19 from '../../assets/images/logo/Plogo-19.png'
import PLogo_20 from '../../assets/images/logo/Plogo-20.png'
import PLogo_21 from '../../assets/images/logo/Plogo-21.png'

function FancyFeatureTen(props) {
    return (
        <Fragment>
            <div className="fancy-feature-ten mt-190 lg-mt-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="block-style-two md-mb-50" data-aos="fade-right">
                                <div className="title-style-one">
                                    <div className="sc-title-four">App Integration</div>
                                    <h2 className="main-title">Chatbot platform works all with your tools.</h2>
                                </div> {/* /.title-style-one */}
                                <p className="pt-25 pb-30 lg-pt-20 lg-pb-10">Sinco is data science, machine learning and artificial intelligence provide business solution and delivered blazing fast, striking result.</p>
                                <div className="btn-three color-three">How to integrate? <a href="about-us1.html">Click here <i className="fas fa-chevron-right" /></a></div>
                            </div> {/* /.block-style-two */}
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-6 ms-auto" data-aos="fade-left">
                            <div className="screen-holder-one d-flex align-items-center justify-content-center">
                                <div className="round-bg d-flex align-items-center justify-content-center" style={{width: '200px', height: '200px'}}><img src={PLogo_16} alt="" /></div>
                                <div className="round-bg d-flex align-items-center justify-content-center shapes logo-one" style={{width: '70px', height: '70px'}}><img src={PLogo_17} alt="" /></div>
                                <div className="round-bg d-flex align-items-center justify-content-center shapes logo-two" style={{width: '115px', height: '115px'}}><img src={PLogo_18} alt="" /></div>
                                <div className="round-bg d-flex align-items-center justify-content-center shapes logo-three" style={{width: '89px', height: '89px'}}><img src={PLogo_19} alt="" /></div>
                                <div className="round-bg d-flex align-items-center justify-content-center shapes logo-four" style={{width: '162px', height: '162px'}}><img src={PLogo_20} alt="" /></div>
                                <div className="round-bg d-flex align-items-center justify-content-center shapes logo-five" style={{width: '115px', height: '115px'}}><img src={PLogo_21} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.fancy-feature-ten */}


        </Fragment>
    );
}

export default FancyFeatureTen;