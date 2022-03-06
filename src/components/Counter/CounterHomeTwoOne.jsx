import React, {Fragment} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import shape_04 from '../../assets/images/shape/shape_04.svg'
import shape_05 from '../../assets/images/shape/shape_05.svg'

function CounterHomeTwoOne(props) {
    return (
        <Fragment>
            <div className="counter-section-one fancy-bg">
                <div className="container">
                    <div className="inner-container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6" data-aos="fade-up">
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">
                                        <span className="counter">
                                           <CountUp start={0} end={20} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp>
                                        </span> mil</div>
                                    <p>Human labor hours saved <br /> with help of AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">
                                           <span className="counter">
                                            <CountUp start={0} end={3} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp></span>

                                        b+</div>
                                    <p>Generated revenue by <br />AI Solutions</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">$

                                        <span className="counter">
                                            <CountUp start={0} end={15} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp></span>

                                        mil+</div>
                                    <p>Saved operational costs <br />due to AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                        </div>
                    </div> {/* /.inner-container */}
                </div>
                <img src={shape_04} alt="" className="shapes shape-one" />
                <img src={shape_04} alt="" className="shapes shape-two" />
            </div> {/* /.counter-section-one */}

        </Fragment>
    );
}

export default CounterHomeTwoOne;