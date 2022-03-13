import React, {Fragment} from 'react';
import ils_07 from '../../assets/images/img/ils_07.svg'
import shape_18 from '../../assets/images/shape/shape_18.svg'
import shape_19 from '../../assets/images/shape/shape_19.png'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
function HeroBannerThree(props) {
    return (
        <Fragment>
            <div className="hero-banner-three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-6">
                            <h1 className="hero-heading">Next Level Client Support with lily.</h1>
                            <p className="text-lg mb-50 lg-mb-40">Sinco delivered blazing fast, striking ai solution</p>
                            <ul className="style-none button-group d-lg-flex align-items-center">
                                <li className="me-4"><a href="contact-us.html" className="btn-one ripple-btn">Start Free Trial</a></li>
                                <li className="help-btn">Need any help? <a href="contact-us.html">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder sm-mt-50">
                    <Tilt
                        className="parallax-effect-glare-scale"
                        perspective={1500}
                    >
                    <img src={ils_07} alt="" className="main-illustration transform-img-meta ms-auto" />
                    </Tilt>
                    <img src={shape_19} alt="" className="shapes shape-one" />
                </div> {/* /.illustration-holder */}
                <img src={shape_18} alt="" className="shapes cube-shape" />
            </div> {/* /.hero-banner-three */}
        </Fragment>
    );
}

export default HeroBannerThree;