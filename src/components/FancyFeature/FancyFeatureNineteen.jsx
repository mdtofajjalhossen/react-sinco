import React, {Fragment} from 'react';
import ils_15 from '../../assets/images/img/ils_15.svg'
import ils_15_1 from '../../assets/images/img/ils_15_1.svg'
import ils_15_2 from '../../assets/images/img/ils_15_2.svg'
import ils_15_3 from '../../assets/images/img/ils_15_3.svg'
import ils_15_4 from '../../assets/images/img/ils_15_4.svg'
import ils_15_5 from '../../assets/images/img/ils_15_5.svg'
import ils_15_6 from '../../assets/images/img/ils_15_6.svg'
import ils_15_7 from '../../assets/images/img/ils_15_7.svg'

function FancyFeatureNineteen(props) {
    return (
        <Fragment>

            <div className="fancy-feature-nineteen position-relative pt-130 lg-pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-lg-6 col-md-7">
                            <div className="block-style-thirteen" data-aos="fade-right">
                                <div className="title-style-three pb-15">
                                    <div className="sc-title">WORK PROCESS</div>
                                    <h2 className="main-title">How sinco <span>process</span> &amp; works.</h2>
                                </div> {/* /.title-style-three */}
                                <ul className="style-none list-item">
                                    <li data-aos="fade-up">
                                        <div className="numb tran3s">1</div>
                                        <h6>Frame the Problem</h6>
                                        <span>Learn content by interacting with an expert lesson or watching a video.</span>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={50}>
                                        <div className="numb tran3s">2</div>
                                        <h6>Collect the Data</h6>
                                        <span>Practice what you learned on realistic SAT test questions.</span>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={100}>
                                        <div className="numb tran3s">3</div>
                                        <h6>Process the Data</h6>
                                        <span>Have to be repudiated annoyances accepted the wise lorem ispum sample text.</span>
                                    </li>
                                </ul>
                            </div> {/* /.block-style-thirteen */}
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder" data-aos="fade-left">
                    <img src={ils_15} alt="" className="w-100 main-illustration" />
                    <img src={ils_15_1} alt="" className="shapes shape-one" />
                    <img src={ils_15_2} alt="" className="shapes shape-two" />
                    <img src={ils_15_3} alt="" className="shapes shape-three" />
                    <img src={ils_15_4} alt="" className="shapes shape-four" />
                    <img src={ils_15_5} alt="" className="shapes shape-five" data-aos="fade-down" data-aos-delay={200} data-aos-duration={2000} />
                    <img src={ils_15_6} alt="" className="shapes shape-six" data-aos="fade-down" data-aos-delay={100} data-aos-duration={2000} />
                    <img src={ils_15_7} alt="" className="shapes shape-seven" data-aos="fade-down" data-aos-duration={2000} />
                </div> {/* /.illustration-holder */}
                <div className="shapes oval-one" />
                <div className="shapes oval-two" />
                <img src="images/shape/shape_35.svg" alt="" className="shapes bg-shape" />
            </div> {/* /.fancy-feature-nineteen */}

        </Fragment>
    );
}

export default FancyFeatureNineteen;