import React, {Fragment} from 'react';

function CounterOne(props) {
    return (
        <Fragment>
            <div className="counter-section-one mt-140 lg-mt-100">
                <div className="container">
                    <div className="inner-container bg-color">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6" data-aos="fade-up">
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count"><span className="counter">20</span>mil</div>
                                    <p>Human labor hours saved <br /> with help of AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count"><span className="counter">1.3</span>b+</div>
                                    <p>Generated revenue by <br />AI Solutions</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">$<span className="counter">15</span>mil+</div>
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

export default CounterOne;