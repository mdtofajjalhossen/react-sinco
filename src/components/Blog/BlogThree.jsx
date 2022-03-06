import React, {Fragment} from 'react';
import blog_img_01 from '../../assets/images/blog/blog_img_01.jpg'
import blog_img_02 from '../../assets/images/blog/blog_img_02.jpg'
import blog_img_03 from '../../assets/images/blog/blog_img_03.jpg'

const BlogThree = () => {
    return (
        <Fragment>
            <div className="blog-section-three position-relative pt-70 lg-pt-40">
                <div className="container">
                    <div className="title-style-three text-center mb-50 lg-mb-20" data-aos="fade-up">
                        <div className="sc-title">RECENT NEWS</div>
                        <h2 className="main-title">Inside Story &amp; <span>Blog</span></h2>
                    </div> {/* /.title-style-three */}
                    <div className="row gx-xxl-5">
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up">
                            <article className="blog-meta-one color-two tran3s mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_01} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">Data Science</a> - 15 minute read</div>
                                    <a href="blog-details.html" className="blog-title"><h5>Make more daily productive  working flow like pro.</h5></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
                            <article className="blog-meta-one color-two tran3s mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_02} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">UI/UX Design</a> - 10 minute read</div>
                                    <a href="blog-details.html" className="blog-title"><h5>Internet of the things and why it’s becoming important in the century.</h5></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
                            <article className="blog-meta-one color-two tran3s mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_03} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">Marketing</a> - 8 minute read</div>
                                    <a href="blog-details.html" className="blog-title"><h5>The power product and the quotient rules.</h5></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-lg-none d-flex" data-aos="fade-up">
                            <article className="blog-meta-one color-two tran3s mt-30">
                                <figure className="post-img m0"><a href="blog-details.html" className="w-100 d-block"><img src={blog_img_01} alt="" className="w-100 tran4s" /></a></figure>
                                <div className="post-data">
                                    <div className="post-tag"><a href="blog-details.html">Data Science</a> - 15 minute read</div>
                                    <a href="blog-details.html" className="blog-title"><h5>Make more daily productive  working flow like pro.</h5></a>
                                </div> {/* /.post-data */}
                            </article>
                        </div>
                    </div>
                </div>
            </div> {/* /.blog-section-three */}

        </Fragment>
    );
};

export default BlogThree;