import React, {Fragment} from 'react';
import ils_02 from '../../assets/images/img/ils_02.svg'
import ils_02_1 from '../../assets/images/img/ils_02_1.svg'
import ils_02_2 from '../../assets/images/img/ils_02_2.svg'
import ils_02_3 from '../../assets/images/img/ils_02_3.svg'
import ils_02_4 from '../../assets/images/img/ils_02_4.svg'

function FancyFeatureTwoHomeThree(props) {
    return (
        <Fragment>
            <div className="fancy-feature-two position-relative mt-200 lg-mt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
                            <div className="block-style-two" data-aos="fade-left">
                                <div className="title-style-one">
                                    <div className="sc-title">Over 150k+ Client</div>
                                    <h2 className="main-title">We offer Real-time Data Solutions.</h2>
                                </div> {/* /.title-style-one */}
                                <p className="pt-10 pb-20 lg-pb-10">Sinco is data science, machine learning and artificial intelligence provide business solution.</p>
                                <ul className="style-none list-item">
                                    <li>Various analysis options.</li>
                                    <li>Page Load (time, size, number of requests).</li>
                                    <li>Big data analysis.</li>
                                </ul>
                                <div className="btn-three mt-45 lg-mt-30">Want to learn more about us? <a href="about-us1.html">Click here <i className="fas fa-chevron-right" /></a></div>
                            </div> {/* /.block-style-two */}
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder sm-mt-20">
                    <img src={ils_02} alt="" className="main-illustration w-100" />
                    <img src={ils_02_1} alt="" className="shapes shape-one" />
                    <img src={ils_02_1} alt="" className="shapes shape-two" />
                    <img src={ils_02_1} alt="" className="shapes shape-three" />
                    <img src={ils_02_2} alt="" className="shapes shape-four" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay={100} data-aos-duration={1500} />
                    <img src={ils_02_2} alt="" className="shapes shape-five" data-aos="fade-down" data-aos-anchor=".fancy-feature-two" data-aos-delay={200} data-aos-duration={1500} />
                    <img src={ils_02_3} alt="" className="shapes shape-six" data-aos="fade-down" data-aos-anchor=".fancy-feature-two" data-aos-delay={100} data-aos-duration={1500} />
                    <img src={ils_02_4} alt="" className="shapes shape-seven" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay={250} data-aos-duration={1500} />
                </div> {/* /.illustration-holder */}
            </div> {/* /.fancy-feature-two */}

        </Fragment>
    );
}

export default FancyFeatureTwoHomeThree;