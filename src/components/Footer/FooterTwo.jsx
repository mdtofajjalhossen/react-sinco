import React, {Fragment} from 'react';
import shape_16 from '../../assets/images/shape/shape_16.svg'
import shape_17 from '../../assets/images/shape/shape_17.svg'
import logo_01 from '../../assets/images/logo/logo_01.png'

function FooterTwo(props) {
    return (
        <Fragment>
            <div className="footer-style-two theme-basic-footer">
                <img src={shape_16} alt="" className="shapes shape-one" />
                <img src={shape_17} alt="" className="shapes shape-two" />
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row">
                            <div className="col-lg-3 footer-intro mb-40">
                                <div className="logo"><a href="index.html"><img src={logo_01} alt="" width={130} /></a></div>
                                <p>We will assist you in becoming more successful.</p>
                                <ul className="d-flex social-icon style-none">
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-30">
                                <h5 className="footer-title">Links</h5>
                                <ul className="footer-nav-link style-none">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="about-us2.html">About us</a></li>
                                    <li><a href="service-V1.html">Service</a></li>
                                    <li><a href="blog-V1.html">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-6 mb-30">
                                <h5 className="footer-title">Legal</h5>
                                <ul className="footer-nav-link style-none">
                                    <li><a href="faq.html">Terms of use</a></li>
                                    <li><a href="faq.html">Terms &amp; conditions</a></li>
                                    <li><a href="faq.html">Privacy policy</a></li>
                                    <li><a href="faq.html">Cookie policy</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
                                <div className="newsletter ps-xl-5">
                                    <h5 className="footer-title">Subscribe </h5>
                                    <p>Join over <span>68,000</span> people getting our emails</p>
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" required/>
                                        <button>Sign Up</button>
                                    </form>
                                    <div className="info">We only send interesting and relevant emails.</div>
                                </div> {/* /.newsletter */}
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
            </div> {/* /.footer-style-two */}

        </Fragment>
    );
}

export default FooterTwo;