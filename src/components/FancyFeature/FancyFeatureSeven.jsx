import React, {Fragment} from 'react';
import {Accordion} from "react-bootstrap";

function FancyFeatureSeven(props) {
    return (
        <Fragment>
            <div className="fancy-feature-seven mt-140 lg-mt-50 sm-mt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="block-style-five md-pb-50" data-aos="fade-right">
                                <div className="title-style-one">
                                    <div className="sc-title-three">Questions &amp; Answers</div>
                                    <h2 className="main-title">Any Questions? Find here.</h2>
                                </div> {/* /.title-style-one */}
                                <p className="pt-10 pb-15">Don’t find your answer here? just send us a message for any query.</p>
                                <a href="contact-us.html" className="btn-five ripple-btn">Contact us</a>
                            </div> {/* /.block-style-five */}
                        </div>
                        <div className="col-lg-7 col-lg-6 ms-auto" data-aos="fade-left">

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




                        </div>
                    </div>
                </div> {/* /.container */}
                <img src="images/shape/shape_13.svg" alt="" className="shapes shape-one" />
                <img src="images/shape/shape_14.svg" alt="" className="shapes shape-two" />
                <img src="images/shape/shape_15.svg" alt="" className="shapes shape-three" />
            </div> {/* /.fancy-feature-seven */}

        </Fragment>
    );
}

export default FancyFeatureSeven;