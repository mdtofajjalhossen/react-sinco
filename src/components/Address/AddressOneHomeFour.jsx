import React, {Fragment} from 'react';
import icon_06 from '../../assets/images/icon/icon_06.svg'
import icon_07 from '../../assets/images/icon/icon_07.svg'

function AddressOneHomeFour(props) {
    return (
        <Fragment>
            <div className="address-section-one">
                <div className="container">
                    <div className="inner-content bg-white" data-aos="fade-up">
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
            </div> {/* /.address-section-one */}


        </Fragment>
    );
}

export default AddressOneHomeFour;