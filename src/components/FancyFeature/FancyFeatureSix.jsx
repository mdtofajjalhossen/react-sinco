import React, {Fragment} from 'react';
import shape_10 from '../../assets/images/shape/shape_10.svg'
import shape_11 from '../../assets/images/shape/shape_11.svg'

function FancyFeatureSix(props) {
    return (
        <Fragment>
            <div className="fancy-feature-six position-relative mt-80">
                <div className="container">
                    <div className="bg-wrapper">
                        <div className="row gx-xxl-5 justify-content-center">
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="block-style-six text-center mt-40">
                                    <div className="icon" style={{background: 'rgba(68, 109, 255, 0.07)', color: '#446DFE'}}><i className="bi bi-check-lg" /></div>
                                    <h6>Qulaity Support</h6>
                                    <p>Learn content by interacting anything expert lesson a video.</p>
                                </div> {/* /.block-style-six */}
                            </div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="block-style-six text-center mt-40">
                                    <div className="icon" style={{background: 'rgba(253, 232, 255, 1)', color: '#F36EFF'}}><i className="bi bi-check-lg" /></div>
                                    <h6>Fastest AI Machine</h6>
                                    <p>Practice what you realistic test great  questions lorem.</p>
                                </div> {/* /.block-style-six */}
                            </div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="block-style-six text-center mt-40">
                                    <div className="icon" style={{background: 'rgba(255, 122, 65, 0.12)', color: '#FF7A41'}}><i className="bi bi-check-lg" /></div>
                                    <h6>Great Pricing</h6>
                                    <p>Review your practice &amp; learn how to improve your skill.</p>
                                </div> {/* /.block-style-six */}
                            </div>
                        </div>
                    </div> {/* /.bg-wrapper */}
                </div> {/* /.container */}
                <img src={shape_10} alt="" className="shapes shape-one" />
                <img src={shape_11} alt="" className="shapes shape-two" />
            </div> {/* /.fancy-feature-six */}
        </Fragment>
    );
}

export default FancyFeatureSix;