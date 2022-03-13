import React, {Fragment} from 'react';
import shape_23 from '../../assets/images/shape/shape_23.png'
import ils_09 from '../../assets/images/img/ils_09.svg'
import Tilt from "react-parallax-tilt";

function FancyFeatureTwelve(props) {
    return (
        <Fragment>
            <div className="fancy-feature-twelve mt-170 lg-mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-6 order-md-last">
                            <div className="block-style-nine pt-30 sm-pt-10">
                                <div className="title-style-one pb-10" data-aos="fade-up">
                                    <div className="sc-title-four">WHY CHOOSE US</div>
                                    <h2 className="main-title">Why choose us for your business.</h2>
                                </div> {/* /.title-style-one */}
                                <ul className="style-none list-item">
                                    <li data-aos="fade-up">Learn content by interacting with an expert lesson or watching a video.</li>
                                    <li data-aos="fade-up" data-aos-delay={100}>Practice what you learned on realistic SAT test questions.</li>
                                    <li data-aos="fade-up" data-aos-delay={200}>Review your practice questions and learn how to improve.</li>
                                </ul>
                            </div> {/* /.block-style-nine */}
                        </div>
                        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-right">
                            <div className="illustration-holder position-relative d-inline-block ms-5 sm-mt-30">
                                <Tilt className="parallax-effect-glare-scale" perspective={1500} rotateX={0.90161} rotateY={3.29895}>
                                    <img src={ils_09} alt="" className="transform-img-meta" />
                                </Tilt>

                                <div className="card-one shapes d-flex align-items-center justify-content-center">
                                    <div className="icon"><i className="bi bi-check-lg" /></div>
                                    <h6>A++ Performance</h6>
                                </div> {/* /.card-one */}
                                <div className="card-two shapes text-center">
                                    <div className="icon"><i className="bi bi-check-lg" /></div>
                                    <div className="main-count"><span className="counter">20</span>k</div>
                                    <div className="info">5 Start Rating</div>
                                    <ul className="style-none d-flex justify-content-center rating">
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                    </ul>
                                </div> {/* /.card-two */}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={shape_23} alt="" className="shapes bg-shape" />
            </div> {/* /.fancy-feature-twelve */}

        </Fragment>
    );
}

export default FancyFeatureTwelve;