import React, {Fragment} from 'react';
import blog_img_04 from '../../assets/images/blog/blog_img_04.jpg'
import blog_img_05 from '../../assets/images/blog/blog_img_05.jpg'
import blog_img_06 from '../../assets/images/blog/blog_img_06.jpg'

function BlogTwoHomeFour(props) {
    return (
        <Fragment>
            <div className="blog-section-two mt-170 lg-mt-110">
                <div className="container">
                    <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                        <h2 className="main-title">Company News</h2>
                    </div> {/* /.title-style-one */}
                    <div className="row gx-xxl-5">
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up">
                            <article className="blog-meta-two mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_04} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">23 Apr, 2021</a></div>
                                    <a href="blog-details.html" className="blog-title"><h5>A Discount Cartridge dsu is Better Ever.</h5></a>
                                    <a href="blog-details.html" className="read-btn tran3s">Continue Reading <i className="fas fa-chevron-right" /></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
                            <article className="blog-meta-two mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_05} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">23 Apr, 2021</a></div>
                                    <a href="blog-details.html" className="blog-title"><h5>Truck Side Advertising Isn It Time for action.</h5></a>
                                    <a href="blog-details.html" className="read-btn tran3s">Continue Reading <i className="fas fa-chevron-right" /></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
                            <article className="blog-meta-two mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_06} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">23 Apr, 2021</a></div>
                                    <a href="blog-details.html" className="blog-title"><h5>A discount cartridge dsu is better ever.</h5></a>
                                    <a href="blog-details.html" className="read-btn tran3s">Continue Reading <i className="fas fa-chevron-right" /></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-lg-none d-flex" data-aos="fade-up">
                            <article className="blog-meta-two mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_05} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">23 Apr, 2021</a></div>
                                    <a href="blog-details.html" className="blog-title"><h5>Truck Side Advertising Isn It Time for action.</h5></a>
                                    <a href="blog-details.html" className="read-btn tran3s">Continue Reading <i className="fas fa-chevron-right" /></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}

export default BlogTwoHomeFour;