import React, {Fragment} from 'react';
import shape_34 from '../../assets/images/shape/shape_34.svg'
function PricingTwo(props) {
    return (
        <Fragment>
            <div className="pricing-section-two position-relative mt-150 lg-mt-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-8 m-auto">
                            <div className="title-style-one text-center mb-20" data-aos="fade-up">
                                <div className="sc-title-five">Pricing &amp; Plan</div>
                                <h2 className="main-title">No Hidden Cost. Choose your plan.</h2>
                            </div> {/* /.title-style-one */}
                        </div>
                    </div>
                    <div className="pricing-table-area-two">
                        <div className="row">
                            <div className="col-xxl-10 m-auto">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-sm-6" data-aos="fade-right">
                                        <div className="pr-table-wrapper tran3s mt-40">
                                            <div className="pack-name">Standard</div>
                                            <div className="price"><sup>$</sup>0</div>
                                            <ul className="pr-feature style-none">
                                                <li>1 Domain</li>
                                                <li>1 Year Premium Support</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="#" className="btn-seven w-100 mt-50 lg-mt-30">Choose Plan</a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="pr-table-wrapper tran3s mt-40 active">
                                            <div className="pack-name">Gold</div>
                                            <div className="price"><sup>$</sup>27. <sup>99</sup></div>
                                            <ul className="pr-feature style-none">
                                                <li>1 Domain</li>
                                                <li>1 Year Premium Support</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="#" className="btn-seven w-100 mt-50 lg-mt-30">Choose Plan</a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6" data-aos="fade-left">
                                        <div className="pr-table-wrapper tran3s mt-40">
                                            <div className="pack-name">Diamond</div>
                                            <div className="price"><sup>$</sup>39. <sup>99</sup></div>
                                            <ul className="pr-feature style-none">
                                                <li>1 Domain</li>
                                                <li>1 Year Premium Support</li>
                                                <li>Team fundraising</li>
                                            </ul>
                                            <a href="#" className="btn-seven w-100 mt-50 lg-mt-30">Choose Plan</a>
                                        </div> {/* /.pr-table-wrapper */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-5 col-xl-6 col-lg-7 m-auto">
                                <p className="info mt-75 lg-mt-50" data-aos="fade-up">We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.</p>
                            </div>
                        </div>
                    </div> {/* /.pricing-table-area-two */}
                </div>
                <img src={shape_34} alt="" className="shapes shape-one" />
            </div> {/* /.pricing-section-two */}

        </Fragment>
    );
}

export default PricingTwo;