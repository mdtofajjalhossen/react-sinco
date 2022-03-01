import React, {Fragment} from 'react';
import shape_36 from '../../assets/images/shape/shape_36.svg'
import Accordion from 'react-bootstrap/Accordion'
// import '../../assets/vendor/bootstrap/css/bootstrap.min.css'


function FancyFeatureTwenty(props) {
    return (
        <Fragment>
            <div className="fancy-feature-twenty position-relative mt-160 pb-100 lg-mt-100 lg-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="block-style-five pe-xxl-5 me-xxl-5 md-pb-50" data-aos="fade-right">
                                <div className="title-style-three">
                                    <div className="sc-title">QUESTIONS &amp; ANSWERS</div>
                                    <h2 className="main-title">Any <span>Questions?</span> Find here.</h2>
                                </div> {/* /.title-style-three */}
                                <p className="pt-20 pb-15">Don’t find your answer here? just send us a message for any query.</p>
                                <a href="contact-us.html" className="btn-eight ripple-btn">Contact us</a>
                            </div> {/* /.block-style-five */}
                        </div>
                        <div className="col-lg-7" data-aos="fade-left">
                            <div className="accordion accordion-style-one" id="accordionOne">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            What is web hosting?
                                        </button>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How do you weigh different criteria in your process?
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What can I use to build my website?
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingFour">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            If I already have a website, can I transfer it to your web hosting?
                                        </button>
                                    </div>
                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How can I accept credit cards online?
                                        </button>
                                    </div>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* /.container */}
                <img src={shape_36} alt="" className="shapes shape-one" />
                <div className="shapes oval-one" />
            </div> {/* /.fancy-feature-twenty */}

        </Fragment>
    );
}

export default FancyFeatureTwenty;