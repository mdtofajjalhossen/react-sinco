import React, {Fragment} from 'react';
import PlayStore from '../../assets/images/icon/playstore.svg'
import Apple from '../../assets/images/icon/apple.svg'
import Screen_01 from '../../assets/images/media/screen_01.png'
import shape_27 from '../../assets/images/shape/shape_27.png'
import shape_28 from '../../assets/images/shape/shape_28.png'
import shape_29 from '../../assets/images/shape/shape_29.png'

function FancyShortBannerTwo(props) {
    return (
        <Fragment>
            <div className="fancy-short-banner-two">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row align-items-top">
                            <div className="col-xl-5 col-lg-6 order-lg-last" data-aos="fade-left">
                                <div className="title-style-two">
                                    <div className="sc-title">DOWNLOAD APP</div>
                                    <h2 className="main-title">Get our mobile Application.</h2>
                                    <p className="sub-title">Get our mobile app for best &amp; fast chatboot services</p>
                                </div> {/* /.title-style-two */}
                                <div className="d-sm-flex align-items-center button-group mt-40 lg-mt-30">
                                    <a href="#" className="d-flex align-items-center windows-button">
                                        <img src={PlayStore} alt="" className="icon" />
                                        <div>
                                            <span>Get it on</span>
                                            <strong>Google play</strong>
                                        </div>
                                    </a>
                                    <a href="#" className="d-flex align-items-center ios-button">
                                        <img src={Apple} alt="" className="icon" />
                                        <div>
                                            <span>Download on the</span>
                                            <strong>App store</strong>
                                        </div>
                                    </a>
                                </div> {/* /.button-group */}
                            </div>
                            <div className="col-xxl-6 col-xl-7 col-md-6 col-sm-9 order-lg-first m-auto me-lg-0 ms-lg-0">
                                <div className="mobile-screen md-mt-40" data-aos="fade-up"><img src={Screen_01} alt="" /></div>
                            </div>
                        </div>
                    </div> {/* /.container */}
                    <img src={shape_27} alt="" className="shapes shape-one" />
                    <img src={shape_28} alt="" className="shapes shape-two" />
                    <img src={shape_29} alt="" className="shapes shape-three" />
                </div> {/* /.bg-wrapper */}
            </div> {/* /.fancy-short-banner-two */}


        </Fragment>
    );
}

export default FancyShortBannerTwo;