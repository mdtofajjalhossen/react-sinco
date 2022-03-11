import React, {Fragment} from 'react';
import icon_06 from '../../assets/images/icon/icon_06.svg'
import icon_07 from '../../assets/images/icon/icon_07.svg'
import bg_05 from '../../assets/images/img/bg_05.svg'
import shape_01 from '../../assets/images/shape/shape_01.svg'
import shape_02 from '../../assets/images/shape/shape_02.svg'
import shape_03 from '../../assets/images/shape/shape_03.svg'
function AddressOne(props) {
    return (
        <Fragment>
            <div className="address-section-one pt-130 lg-pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-9 m-auto">
                            <div className="title-style-one text-center mb-50" data-aos="fade-up">
                                <div className="sc-title-two">Be a pro with us</div>
                                <h2 className="main-title">Get Ready to Started It’s Fast, Free &amp; very easy</h2>
                            </div> {/* /.title-style-one */}
                            <div className="text-center" data-aos="fade-up" data-aos-delay={150}><a href="contact-us.html" className="btn-four ripple-btn">Get Started <i className="fas fa-chevron-right" /></a></div>
                        </div>
                    </div>
                    <div className="inner-content" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-0">
                            <div className="col-md-6 d-flex">
                                <div className="address-block-one d-flex border-right">
                                    <div className="icon"><img src={icon_06} alt="" /></div>
                                    <div className="text-meta">
                                        <h4 className="title">Our Address</h4>
                                        <p>1012 Pebda Parkway, Mirpur 2 <br />Dhaka, Bangladesh</p>
                                    </div> {/* /.text-meta */}
                                </div> {/* /.address-block-one */}
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="address-block-one d-flex">
                                    <div className="icon"><img src={icon_07} alt="" /></div>
                                    <div className="text-meta">
                                        <h4 className="title">Contact Info</h4>
                                        <p>Open a chat or give us call at <br /><a href="#">310.841.5500</a></p>
                                    </div> {/* /.text-meta */}
                                </div> {/* /.address-block-one */}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bg_05} alt="" className="shapes shape-one" />
                <img src={shape_01} alt="" className="shapes shape-two" />
                <img src={shape_02} alt="" className="shapes shape-three" />
                <img src={shape_02} alt="" className="shapes shape-four" />
                <img src={shape_03} alt="" className="shapes shape-five" />
            </div> {/* /.address-section-one */}

        </Fragment>
    );
}

export default AddressOne;