import React, {Fragment} from 'react';
import ils_12 from '../../assets/images/img/ils_12.svg'
import ils_12_1 from '../../assets/images/img/ils_12_1.svg'
import ils_12_2 from '../../assets/images/img/ils_12_2.svg'
import ils_12_3 from '../../assets/images/img/ils_12_3.svg'
import ils_12_4 from '../../assets/images/img/ils_12_4.svg'
function FancyFeatureFourteen(props) {
    return (
        <Fragment>
            <div className="fancy-feature-fourteen mt-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-6 order-md-last">
                            <div className="block-style-two" data-aos="fade-left">
                                <div className="title-style-one">
                                    <div className="sc-title-five">Over 150k+ Client</div>
                                    <h2 className="main-title">Provides Realtime Data Solutions.</h2>
                                </div> {/* /.title-style-one */}
                                <p className="pt-10 pb-20">AI technology is perfect for best business solutions &amp; we offer help to achieve your goals.</p>
                                <ul className="style-none list-item color-rev">
                                    <li>Various analysis options.</li>
                                    <li>Page Load (time, size, number of requests).</li>
                                    <li>Adance Data analysis operation.</li>
                                </ul>
                                <a href="about-us2.html" className="btn-six ripple-btn mt-50 lg-mt-30">More about us</a>
                            </div> {/* /.block-style-two */}
                        </div>
                        <div className="col-xl-7 col-md-6 order-md-first">
                            <div className="illustration-holder d-inline-block position-relative sm-mt-50">
                                <img src={ils_12} alt="" />
                                <img src={ils_12_1} alt="" className="shapes shape-one" data-aos="fade-down" data-aos-duration={1500} />
                                <img src={ils_12_1} alt="" className="shapes shape-two" data-aos="fade-down" data-aos-delay={100} data-aos-duration={1500} />
                                <img src={ils_12_2} alt="" className="shapes shape-three" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1500} />
                                <img src={ils_12_3} alt="" className="shapes shape-four" />
                                <img src={ils_12_4} alt="" className="shapes shape-five" data-aos="fade-left" data-aos-duration={1500} />
                            </div> {/* /.illustration-holder */}
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.fancy-feature-fourteen */}
        </Fragment>
    );
}

export default FancyFeatureFourteen;