import React, {Fragment} from 'react';
import shape_30 from '../../assets/images/shape/shape_30.png'
import shape_28 from '../../assets/images/shape/shape_28.png'
import shape_29 from '../../assets/images/shape/shape_29.png'
import logo_02 from '../../assets/images/logo/logo_02.png'

function FooterThree(props) {
    return (
        <Fragment>

            <div className="footer-style-three theme-basic-footer">
                <img src={shape_30} alt="" className="shapes shape-one" />
                <img src={shape_28} alt="" className="shapes shape-two" />
                <img src={shape_29} alt="" className="shapes shape-three" />
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row">
                            <div className="col-lg-3 footer-intro mb-40">
                                <div className="logo"><a href="index.html"><img src={logo_02} alt="" width={129} /></a></div>
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
            </div> {/* /.footer-style-three */}

        </Fragment>
    );
}

export default FooterThree;