import React, {Fragment, useState} from 'react';
import ils_13 from '../../assets/images/img/ils_13.svg'
import ils_13_1 from '../../assets/images/img/ils_13_1.svg'
import ils_13_2 from '../../assets/images/img/ils_13_2.svg'
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css'

const HeroBannerFive = () => {

    const [isOpen, setOpen] = useState(false)

    // return (
    //     <React.Fragment>
    //         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    //
    //         <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
    //     </React.Fragment>
    // )

    return (

        <Fragment>
            <React.Fragment>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aXFSJTjVjw0" onClose={() => setOpen(false)} />
            </React.Fragment>

            <div className="hero-banner-five">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-md-7">
                            <h1 className="hero-heading">Customer Ai Solution for user <span>Analystics.</span></h1>
                            <p className="text-lg mb-50 pt-40 pe-xl-5 md-pt-30 md-mb-40">Sinco delivered blazing fast, striking ai solution lorem quis data user learning analysis.</p>
                            <ul className="style-none button-group d-flex align-items-center">
                                <li className="me-4"><a href="contact-us.html" className="demo-btn ripple-btn tran3s">Request A Demo</a></li>
                                <li><a className="fancybox video-icon tran3s" data-fancybox onClick={()=> setOpen(true)}><i className="fas fa-play" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder">
                    <img src={ils_13} alt="" className="main-illustration ms-auto" />
                    <img src={ils_13_1} alt="" className="shapes shape-one" />
                    <img src={ils_13_2} alt="" className="shapes shape-two" data-aos="fade-down" />
                    <img src={ils_13_2} alt="" className="shapes shape-three" data-aos="fade-down" />
                </div> {/* /.illustration-holder */}
                <div className="shapes oval-one" />
            </div> {/* /.hero-banner-five */}

        </Fragment>
    );
};

export default HeroBannerFive;