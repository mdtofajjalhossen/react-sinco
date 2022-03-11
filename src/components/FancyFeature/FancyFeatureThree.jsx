import React, {Fragment} from 'react';
import ils_03 from '../../assets/images/img/ils_03.svg'
import ils_03_1 from '../../assets/images/img/ils_03_1.svg'
import ils_03_2 from '../../assets/images/img/ils_03_2.svg'
import ils_03_3 from '../../assets/images/img/ils_03_3.svg'
import ils_03_4 from '../../assets/images/img/ils_03_4.svg'
function FancyFeatureThree(props) {
    return (
        <Fragment>
            <div className="fancy-feature-three position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="block-style-two pe-xxl-5" data-aos="fade-right">
                                <div className="title-style-one">
                                    <div className="sc-title">Working Process</div>
                                    <h2 className="main-title">Let’s see how do we works.</h2>
                                </div> {/* /.title-style-one */}
                                <p className="pt-20 pb-30 lg-pb-10">Sinco is data science, machine learning and artificial intelligence provide business solution and delivered blazing fast, striking result.</p>
                                <div className="btn-three">Want to learn more about us? <a href="about-us1.html">Click here <i className="fas fa-chevron-right" /></a></div>
                            </div> {/* /.block-style-two */}
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-6 ms-auto text-end">
                            <div className="illustration-holder position-relative d-inline-block sm-mt-50">
                                <img src={ils_03} alt="" className="main-illustration w-100" />
                                <img src={ils_03_1} alt="" className="shapes shape-one" />
                                <img src={ils_03_2} alt="" className="shapes shape-two" />
                                <img src={ils_03_2} alt="" className="shapes shape-three" />
                                <img src={ils_03_4} alt="" className="shapes shape-four" />
                                <img src={ils_03_3} alt="" className="shapes shape-five" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1500} />
                                <img src={ils_03_3} alt="" className="shapes shape-six" data-aos="fade-up" data-aos-delay={150} data-aos-duration={1500} />
                            </div> {/* /.illustration-holder */}
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="mt-100 lg-mt-70">
                    <div className="container">
                        <div className="row justify-content-center gx-xxl-5">
                            <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up">
                                <div className="block-style-three mb-25">
                                    <div className="numb">1</div>
                                    <h6>Data Automation Solution.</h6>
                                    <p>Learn content by interacting quis expert lesson a video.</p>
                                </div> {/* /.block-style-three */}
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={150}>
                                <div className="block-style-three mb-25">
                                    <div className="numb">2</div>
                                    <h6>Analytics Business.</h6>
                                    <p>Practice what you realistic SAT test questions.</p>
                                </div> {/* /.block-style-three */}
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
                                <div className="block-style-three mb-25">
                                    <div className="numb">3</div>
                                    <h6>A New Breed Of AI.</h6>
                                    <p>Review your practice and learn how to improve.</p>
                                </div> {/* /.block-style-three */}
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* /.fancy-feature-three */}

        </Fragment>
    );
}

export default FancyFeatureThree;