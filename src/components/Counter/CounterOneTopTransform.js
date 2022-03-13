import React, {Fragment} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterOneTopTransform(props) {
    return (
        <Fragment>
            <div className="counter-section-one top-transform">
                <div className="container">
                    <div className="inner-container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6" data-aos="fade-up">
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count">
                                        <span className="counter">
                                        <CountUp start={0} end={20} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp></span>mil</div>
                                    <p>Human labor hours saved <br /> with help of AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>

                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count"><span className="counter">
                                            <CountUp start={0} end={3} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp>
                                    </span>b+</div>
                                    <p>Generated revenue by <br />AI Solutions</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count">$<span className="counter">
                                        <CountUp start={0} end={15} delay={0}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                                // <span className="counter">20</span>
                                            )}
                                        </CountUp>
                                    </span>mil+</div>
                                    <p>Saved operational costs <br />due to AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                        </div>
                    </div> {/* /.inner-container */}
                </div>
            </div> {/* /.counter-section-one */}
        </Fragment>
    );
}

export default CounterOneTopTransform;