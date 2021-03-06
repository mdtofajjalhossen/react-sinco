import React, {Fragment} from 'react';
import logo_01 from '../../assets/images/logo/logo_01.png'
function TopNavOneHomeFive(props) {
    return (
        <Fragment>
            <header className="theme-main-menu sticky-menu theme-menu-one">
                <div className="inner-content">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo order-lg-0"><a href="index.html" className="d-block"><img src={logo_01} alt="" width={130} /></a></div>
                        <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
                            <button className="menu-search-btn tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="bi bi-search" /></button>
                            <a href="contact-us.html" className="req-demo-btn tran3s d-none d-lg-block">Request a Demo</a>
                        </div> {/* /.right-widget */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="d-block d-lg-none"><div className="logo"><a href="index.html"><img src={logo_01} alt="" width={130} /></a></div></li>
                                    <li className="nav-item active dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html" className="dropdown-item"><span>User Analysis</span></a></li>
                                            <li><a href="index-2.html" className="dropdown-item"><span>Artificial Intelligence</span></a></li>
                                            <li><a href="index-3.html" className="dropdown-item"><span>Data Science</span></a></li>
                                            <li><a href="index-4.html" className="dropdown-item"><span>Chatboot</span></a></li>
                                            <li><a href="index-5.html" className="dropdown-item"><span>Machine Learning</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu dropdown">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>About Us</span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="about-us1.html" className="dropdown-item"><span>About Us One</span></a></li>
                                                    <li><a href="about-us2.html" className="dropdown-item"><span>About Us Two</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu dropdown">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Services</span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="service-V1.html" className="dropdown-item"><span>Service One</span></a></li>
                                                    <li><a href="service-V2.html" className="dropdown-item"><span>Service Two</span></a></li>
                                                    <li><a href="service-details-V1.html" className="dropdown-item"><span>Service Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu dropdown">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Our Team</span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="team.html" className="dropdown-item"><span>Team Member</span></a></li>
                                                    <li><a href="team-details.html" className="dropdown-item"><span>Team Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="testimonial.html" className="dropdown-item"><span>Testimonials</span></a></li>
                                            <li><a href="pricing.html" className="dropdown-item"><span>Our Pricing</span></a></li>
                                            <li><a href="faq.html" className="dropdown-item"><span>FAQ</span></a></li>
                                            <li><a href="404.html" className="dropdown-item"><span>404 Error</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-V1.html" className="dropdown-item"><span>Portfolio 3 Column</span></a></li>
                                            <li><a href="portfolio-V2.html" className="dropdown-item"><span>Portfolio 2 Column</span></a></li>
                                            <li><a href="portfolio-V3.html" className="dropdown-item"><span>Portfolio Masonry</span></a></li>
                                            <li><a href="portfolio-details-V1.html" className="dropdown-item"><span>Single Portfolio</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="blog-V1.html" className="dropdown-item"><span>Grid Layout</span></a></li>
                                            <li><a href="blog-V2.html" className="dropdown-item"><span>Grid With Sidebar</span></a></li>
                                            <li><a href="blog-V3.html" className="dropdown-item"><span>Blog Masonary</span></a></li>
                                            <li><a href="blog-V4.html" className="dropdown-item"><span>Blog Standard</span></a></li>
                                            <li><a href="blog-details.html" className="dropdown-item"><span>Blog Details</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact-us.html" role="button">Contact</a>
                                    </li>
                                </ul>
                                {/* Mobile Content */}
                                <div className="mobile-content d-block d-lg-none">
                                    <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <a href="contact-us.html" className="req-demo-btn tran3s">Request a Demo</a>
                                    </div>
                                </div> {/* /.mobile-content */}
                            </div>
                        </nav>
                    </div>
                </div> {/* /.inner-content */}
            </header> {/* /.theme-main-menu */}
        </Fragment>
    );
}

export default TopNavOneHomeFive;