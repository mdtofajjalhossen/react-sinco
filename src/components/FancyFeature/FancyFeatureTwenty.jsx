import React, {Fragment} from 'react';
import shape_36 from '../../assets/images/shape/shape_36.svg'
import {Accordion} from 'react-bootstrap'
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


                            <Accordion className="accordion-style-one" defaultActiveKey="0" id="accordionOne">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is web hosting?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How do you weigh different criteria in your process?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What can I use to build my website?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>If I already have a website, can I transfer it to your web hosting?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How can I accept credit cards online?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>







                            {/*<Accordion className="accordion-style-one" defaultActiveKey="0" id="accordionOne">*/}
                            {/*    <Accordion.Item eventKey="1">*/}
                            {/*        <Accordion.Header>What is web hosting?</Accordion.Header>*/}
                            {/*        <Accordion.Body>*/}
                            {/*            They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.*/}
                            {/*        </Accordion.Body>*/}
                            {/*    </Accordion.Item>*/}

                            {/*    <Accordion.Item eventKey="2">*/}
                            {/*        <Accordion.Header>How do you weigh different criteria in your process?</Accordion.Header>*/}
                            {/*        <Accordion.Body>*/}
                            {/*            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>*/}
                            {/*        </Accordion.Body>*/}
                            {/*    </Accordion.Item>*/}

                            {/*    <Accordion.Item eventKey="3">*/}
                            {/*        <Accordion.Header>What can I use to build my website?</Accordion.Header>*/}
                            {/*        <Accordion.Body>*/}
                            {/*            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>*/}
                            {/*        </Accordion.Body>*/}
                            {/*    </Accordion.Item>*/}

                            {/*    <Accordion.Item eventKey="0">*/}
                            {/*        <Accordion.Header>If I already have a website, can I transfer it to your web hosting?</Accordion.Header>*/}
                            {/*        <Accordion.Body>*/}
                            {/*            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>*/}
                            {/*        </Accordion.Body>*/}
                            {/*    </Accordion.Item>*/}

                            {/*    <Accordion.Item eventKey="4">*/}
                            {/*        <Accordion.Header>How can I accept credit cards online?</Accordion.Header>*/}
                            {/*        <Accordion.Body>*/}
                            {/*            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions. </p>*/}
                            {/*        </Accordion.Body>*/}
                            {/*    </Accordion.Item>*/}

                            {/*</Accordion>*/}
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