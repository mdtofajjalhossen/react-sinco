import React, {Fragment} from 'react';
import ils_04 from '../../assets/images/img/ils_04.svg'
import ils_04_1 from '../../assets/images/img/ils_04_1.svg'
import ils_04_2 from '../../assets/images/img/ils_04_2.svg'
import ils_04_3 from '../../assets/images/img/ils_04_3.svg'
import ils_04_4 from '../../assets/images/img/ils_04_4.svg'
import ils_04_5 from '../../assets/images/img/ils_04_5.svg'
import ils_04_6 from '../../assets/images/img/ils_04_6.svg'

function HeroBannerTwo(props) {
    return (
        <Fragment>
            <div className="hero-banner-two">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-7">
                                <h1 className="hero-heading">I’m Gorgia. Magical AI for solution.</h1>
                                <p className="text-lg pt-25 pb-40 lg-pb-20 sm-pt-10">Sinco delivered blazing fast, striking ai solution</p>
                                <ul className="style-none button-group d-sm-flex align-items-center">
                                    <li className="me-4 mt-10"><a href="about-us1.html" className="btn-one ripple-btn">Explore</a></li>
                                    <li><a className="demo-btn tran3s mt-10" href="contact-us.html">Request a demo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* /.container */}
                    <div className="illustration-holder">
                        <img src={ils_04} alt="" className="main-illustration w-100" />
                        <img src={ils_04_1} alt="" className="shapes shape-one" />
                        <img src={ils_04_2} alt="" className="shapes shape-two" />
                        <img src={ils_04_2} alt="" className="shapes shape-three" />
                        <img src={ils_04_3} alt="" className="shapes shape-four" />
                        <img src={ils_04_4} alt="" className="shapes shape-five" />
                        <img src={ils_04_5} alt="" className="shapes shape-six" />
                        <img src={ils_04_6} alt="" className="shapes shape-seven" />
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
                    </div> {/* /.illustration-holder */}
                </div> {/* /.bg-wrapper */}
            </div> {/* /.hero-banner-two */}

        </Fragment>
    );
}

export default HeroBannerTwo;