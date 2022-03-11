import React, {Fragment} from 'react';
import ils_01 from '../../assets/images/img/ils_01.svg'
import bg_01 from '../../assets/images/img/bg_01.png'
import ils_01_1 from '../../assets/images/img/ils_01_1.svg'
import ils_01_2 from '../../assets/images/img/ils_01_2.svg'
import ils_01_3 from '../../assets/images/img/ils_01_3.svg'
import ils_01_4 from '../../assets/images/img/ils_01_4.svg'
import ils_01_5 from '../../assets/images/img/ils_01_5.svg'
import ils_01_6 from '../../assets/images/img/ils_01_6.svg'
import ils_01_7 from '../../assets/images/img/ils_01_7.svg'
function HeroBannerOne(props) {
    return (
        <Fragment>
            <div className="hero-banner-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <a href="pricing.html" className="slogan"><strong>Offer</strong> is going on till friday, $1.99/mo. <i className="fas fa-chevron-right" /></a>
                            <h1 className="hero-heading">Ai &amp; Data Machine deep Learning.</h1>
                            <p className="text-lg mb-60 lg-mb-40">Sinco delivered blazing fast, striking ai solution</p>
                            <ul className="style-none button-group d-lg-flex align-items-center">
                                <li className="me-4"><a href="contact-us.html" className="btn-one ripple-btn">Start Free Trial</a></li>
                                <li className="help-btn">Need any help? <a href="contact-us.html">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder">
                    <img src={ils_01} alt="" className="main-illustration ms-auto" />
                    <img src={bg_01} alt="" className="shapes bg-shape" />
                    <img src={ils_01_1} alt="" className="shapes shape-one" />
                    <img src={ils_01_2} alt="" className="shapes shape-two" />
                    <img src={ils_01_3} alt="" className="shapes shape-three" />
                    <img src={ils_01_4} alt="" className="shapes shape-four" />
                    <img src={ils_01_5} alt="" className="shapes shape-five" />
                    <img src={ils_01_6} alt="" className="shapes shape-six" />
                    <img src={ils_01_7} alt="" className="shapes shape-seven" />
                    <div className="card-one shapes">
                        <div className="icon"><i className="bi bi-check-lg" /></div>
                        <h6>Data Automation <br />Solution.</h6>
                        <span className="info">faster process</span>
                    </div> {/* /.card-one */}
                    <div className="card-two shapes">
                        <div className="icon"><i className="bi bi-check-lg" /></div>
                        <h6>Data Quality Audit</h6>
                    </div> {/* /.card-two */}
                </div> {/* /.illustration-holder */}
            </div> {/* /.hero-banner-one */}


        </Fragment>
    );
}

export default HeroBannerOne;