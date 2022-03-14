import React, {Fragment} from 'react';
import ils_10 from '../../assets/images/img/ils_10.svg'
import ils_11 from '../../assets/images/img/ils_11.svg'
import ils_10_1 from '../../assets/images/img/ils_10_1.svg'
import ils_10_2 from '../../assets/images/img/ils_10_2.svg'
function HeroBannerFour(props) {
    return (
        <Fragment>
            <div className="hero-banner-four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-xl-7 col-lg-8 col-md-11 m-auto">
                            <a href="pricing.html" className="slogan"><strong>Offer</strong> is going on till friday, $1.99/mo. <i className="fas fa-chevron-right" /></a>
                            <h1 className="hero-heading">Analysis &amp; Deep Machine Learning with ai.</h1>
                            <p className="mb-50 lg-mb-30">Welcome to AI Superior - we are a German based AI Solution provider. </p>
                            <form action="#">
                                <input type="email" placeholder="Your email address" required />
                                <button>Request Demo</button>
                            </form>
                            <div className="info">No Credit Card Required.</div>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder-one">
                    <img src={ils_10} alt="" />
                    <img src={ils_10_1} alt="" className="shapes shape-one" />
                    <img src={ils_10_2} alt="" className="shapes shape-two" />
                </div> {/* /.illustration-holder-one */}
                <div className="illustration-holder-two">
                    <img src={ils_11} alt="" />
                    <img src={ils_10_1} alt="" className="shapes shape-one" />
                </div> {/* /.illustration-holder-two */}
            </div> {/* /.hero-banner-four */}
        </Fragment>
    );
}

export default HeroBannerFour;