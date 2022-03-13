import React, {Fragment} from 'react';
import {Col, Container, Row,Nav} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabPane from 'react-bootstrap/TabPane'
function PricingOne(props) {
    return (
        <Fragment>
            <div className="pricing-section-one mt-150 lg-mt-110">

                <Tab.Container defaultActiveKey="month">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-9 m-auto">
                            <div className="title-style-one text-center">
                                <h2 className="main-title">Solo, Agency or Team? We’ve got you Covered</h2>
                            </div> {/* /.title-style-one */}
                        </div>
                    </div>
                    <ul className="nav nav-tabs justify-content-center pricing-nav-one" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Nav.Link eventKey="month" className="active" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab">Monthly</Nav.Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Nav.Link eventKey="year"  data-bs-toggle="tab" data-bs-target="#year" type="button" role="tab">Yearly</Nav.Link>
                        </li>
                    </ul>

                    {/*<Tabs className="nav nav-tabs justify-content-center pricing-nav-one" role="tablist">*/}
                    {/*    <Tab eventKey="month" className="nav-link active" data-bs-toggle="tab" type="button" role="tab">Monthly</Tab>*/}
                    {/*    <Tab eventKey="year" className="nav-link active" data-bs-toggle="tab" type="button" role="tab">Monthly</Tab>*/}
                    {/*</Tabs>*/}
                    {/*<Nav>*/}
                    {/*    <Nav.Item>*/}
                    {/*        <Nav.Link eventKey="month">Tab 1</Nav.Link>*/}
                    {/*    </Nav.Item>*/}
                    {/*    <Nav.Item>*/}
                    {/*        <Nav.Link eventKey="year">Tab 2</Nav.Link>*/}
                    {/*    </Nav.Item>*/}
                    {/*</Nav>*/}


                </div> {/* /.container */}

                <div className="pricing-table-area-one" data-aos="fade-up" data-aos-delay={100}>
                    <div className="container">

                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="month">
                                <div className="row gx-xxl-5">
                                    <div className="col-md-6">
                                        <div className="pr-table-wrapper active md-mb-30">
                                            <div className="pack-name">Business</div>
                                            <div className="pack-details">For individuals and teams. Get <span>1 year <br /> premium market access</span></div>
                                            <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                                <div className="price"><sup>$</sup>75</div>
                                                <div>
                                                    <span>Monthly membership</span>
                                                    <em>Starting at $75/mo with </em>
                                                </div>
                                            </div> {/* /.top-banner */}
                                            <ul className="pr-feature style-none">
                                                <li>Unlimited campaigns</li>
                                                <li>Push Notifications</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="pricing.html" className="trial-button">Try us without risk. <span>Choose plan <i className="fas fa-chevron-right" /></span> </a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pr-table-wrapper">
                                            <div className="pack-name">Agency</div>
                                            <div className="pack-details">For big agency &amp; teams. Get <span>1 year <br /> premium market access</span></div>
                                            <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                                <div className="price"><sup>$</sup>99</div>
                                                <div>
                                                    <span>Monthly membership</span>
                                                    <em>Starting at $99/mo with </em>
                                                </div>
                                            </div> {/* /.top-banner */}
                                            <ul className="pr-feature style-none">
                                                <li>Unlimited campaigns</li>
                                                <li>Push Notifications</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="pricing.html" className="trial-button">Try us without risk. <span>Choose plan <i className="fas fa-chevron-right" /></span> </a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="year">
                                <div className="row gx-xxl-5">
                                    <div className="col-md-6">
                                        <div className="pr-table-wrapper active md-mb-30">
                                            <div className="pack-name">Business</div>
                                            <div className="pack-details">For individuals and teams. Get <span>2 year <br /> premium market access</span></div>
                                            <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                                <div className="price"><sup>$</sup>69</div>
                                                <div>
                                                    <span>Yearly membership</span>
                                                    <em>Starting at $69/mo with </em>
                                                </div>
                                            </div> {/* /.top-banner */}
                                            <ul className="pr-feature style-none">
                                                <li>Unlimited campaigns</li>
                                                <li>Push Notifications</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="pricing.html" className="trial-button">Try us without risk. <span>Choose plan <i className="fas fa-chevron-right" /></span> </a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pr-table-wrapper">
                                            <div className="pack-name">Agency</div>
                                            <div className="pack-details">For big agency &amp; teams. Get <span>2 year <br /> premium market access</span></div>
                                            <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                                <div className="price"><sup>$</sup>97</div>
                                                <div>
                                                    <span>Yearly membership</span>
                                                    <em>Starting at $97/mo with </em>
                                                </div>
                                            </div> {/* /.top-banner */}
                                            <ul className="pr-feature style-none">
                                                <li>Unlimited campaigns</li>
                                                <li>Push Notifications</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="pricing.html" className="trial-button">Try us without risk. <span>Choose plan <i className="fas fa-chevron-right" /></span> </a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                </div>

                            </Tab.Pane>


                        </Tab.Content> {/* /.tab-content */}



                        <div className="msg-note mt-80 lg-mt-50" data-aos="fade-up">If you Need any Custom or others Pricing System. <br /> Please <a href="contact-us.html">Send Message</a></div>
                    </div>
                </div> {/* /.pricing-table-area-one */}



                </Tab.Container>
            </div> {/* /.pricing-section-one */}

        </Fragment>
    );
}

export default PricingOne;

