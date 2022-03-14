import React, {Fragment} from 'react';
import logo_01 from '../../assets/images/logo/logo_01.png'
function FooterOneHomeFive(props) {
    return (
        <Fragment>
            <div className="footer-style-one theme-basic-footer">
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row">
                            <div className="col-lg-4 footer-intro mb-40">
                                <div className="logo"><a href="index.html"><img src={logo_01} alt="" width={130} /></a></div>
                                <p>In this class, you will learn about the most effective machine learning techniques, and gain practice implementing them.</p>
                                <ul className="d-flex social-icon style-none">
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                                <h5 className="footer-title">Links</h5>
                                <ul className="footer-nav-link style-none">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="about-us2.html">About us</a></li>
                                    <li><a href="service-V1.html">Service</a></li>
                                    <li><a href="blog-V1.html">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-4 mb-30">
                                <h5 className="footer-title">Services</h5>
                                <ul className="footer-nav-link style-none">
                                    <li><a href="service-details-V1.html">Artificial Intelligence</a></li>
                                    <li><a href="service-details-V1.html">Data Analytics</a></li>
                                    <li><a href="service-details-V1.html">Data Visualization</a></li>
                                    <li><a href="service-details-V1.html">Deep Learning</a></li>
                                    <li><a href="service-details-V1.html">Statistical Modeling</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 mb-30">
                                <h5 className="footer-title">Legal</h5>
                                <ul className="footer-nav-link style-none">
                                    <li><a href="faq.html">Terms of use</a></li>
                                    <li><a href="faq.html">Terms &amp; conditions</a></li>
                                    <li><a href="faq.html">Privacy policy</a></li>
                                    <li><a href="faq.html">Cookie policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom-footer">
                            <div className="d-lg-flex justify-content-between align-items-center">
                                <ul className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                                    <li><a href="faq.html">Privacy &amp; Terms.</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                                <p className="copyright text-center order-lg-0 pb-15">Copyright @2022 sinco inc.</p>
                            </div>
                        </div>
                    </div> {/* /.inner-wrapper */}
                </div>
            </div> {/* /.footer-style-one */}

        </Fragment>
    );
}

export default FooterOneHomeFive;