import React, {Fragment} from 'react';
import ils_08 from '../../assets/images/img/ils_08.svg'
import ils_08_1 from '../../assets/images/img/ils_08_1.svg'

function FancyFeatureNine(props) {
    return (
        <Fragment>

            <div className="fancy-feature-nine mt-190 lg-mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-lg-6 ms-auto order-lg-last">
                            <div className="block-style-two md-mb-50" data-aos="fade-left">
                                <div className="title-style-one">
                                    <div className="sc-title-four">What is Chatbot</div>
                                    <h2 className="main-title">Customer service by our chatbot.</h2>
                                </div> {/* /.title-style-one */}
                                <ul className="nav nav-tabs justify-content-between" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#sp1" type="button" role="tab">Speech</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sp2" type="button" role="tab">Auto Text</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sp3" type="button" role="tab">Q&amp;A</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sp4" type="button" role="tab">Generate Leads</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="sp1">
                                        <p className="pt-10 pb-10">Save web pages (without the ads) and mark them up with arrows, highlights, and text.</p>
                                        <ul className="style-none list-item">
                                            <li>Various analysis options.</li>
                                            <li>Page Load (time, size, number of requests).</li>
                                            <li>Big data analysis.</li>
                                        </ul>
                                    </div> {/* /.tab-pane */}
                                    <div className="tab-pane fade" id="sp2">
                                        <p className="pt-10 pb-10">Sinco is data science, machine learning and artificial intelligence provide business solution.</p>
                                        <ul className="style-none list-item">
                                            <li>Page Load (time, size, number of requests).</li>
                                            <li>Various analysis options.</li>
                                            <li>Big data analysis.</li>
                                        </ul>
                                    </div> {/* /.tab-pane */}
                                    <div className="tab-pane fade" id="sp3">
                                        <p className="pt-10 pb-10">Save web pages (without the ads) and mark them up with arrows, highlights, and text.</p>
                                        <ul className="style-none list-item">
                                            <li>Various analysis options.</li>
                                            <li>Page Load (time, size, number of requests).</li>
                                            <li>Big data analysis.</li>
                                        </ul>
                                    </div> {/* /.tab-pane */}
                                    <div className="tab-pane fade" id="sp4">
                                        <p className="pt-10 pb-10">Sinco is data science, machine learning and artificial intelligence provide business solution.</p>
                                        <ul className="style-none list-item">
                                            <li>Page Load (time, size, number of requests).</li>
                                            <li>Various analysis options.</li>
                                            <li>Big data analysis.</li>
                                        </ul>
                                    </div> {/* /.tab-pane */}
                                </div> {/* /.tab-content */}
                            </div> {/* /.block-style-two */}
                        </div>
                        <div className="col-lg-6 order-lg-first text-center text-lg-start" data-aos="fade-right">
                            <div className="illustration-holder d-inline-block ms-xxl-5 mt-40 lg-mt-10">
                                <img src={ils_08} alt="" className="transform-img-meta" />
                                <img src={ils_08_1} alt="" className="shapes shape-one" />
                            </div>
                        </div>
                    </div>
                </div> {/* /.container */}
            </div> {/* /.fancy-feature-nine */}

        </Fragment>
    );
}

export default FancyFeatureNine;