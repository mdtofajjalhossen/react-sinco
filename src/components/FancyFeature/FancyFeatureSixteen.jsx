import React, {Fragment} from 'react';

import { Line, Circle } from 'rc-progress';


function FancyFeatureSixteen(props) {
    return (
        <Fragment>
            <div className="fancy-feature-sixteen mt-170 lg-mt-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="title-style-one mb-40 lg-mb-20">
                                <h2 className="main-title">Working skills.</h2>
                            </div> {/* /.title-style-one */}
                            <p>You’ve pored over your customers’ input. You’ve fleshed out your idea – and it’s taking real form! You know it satisfied a real need in your market,</p>
                        </div>
                        <div className="col-md-6 ms-auto">
                            <div className="skills-progress skills ps-xxl-5 mt-45 sm-mt-80">
                                <div className="habilidades_contenedor">
                                    <div className="codeconSkills">
                                        <div className="codeconSkillbar mb-80 md-mb-70">
                                            <div className="skill-text">
                                                <span className="codeconSkillArea">Data Consulting</span>
                                            </div>
                                            <div className="skillBar" data-percent="63%">
                                                <span className="PercentText">63%</span>
                                            </div>
                                        </div>
                                        <div className="codeconSkillbar mb-80 md-mb-70">
                                            <div className="skill-text">
                                                <span className="codeconSkillArea ">Big Data &amp; AI</span>
                                            </div>
                                            <div className="skillBar" data-percent="92%">
                                                <span className="PercentText">92%</span>
                                            </div>
                                        </div>
                                        <div className="codeconSkillbar">
                                            <div className="skill-text">
                                                <span className="codeconSkillArea ">Predictive Analysis</span>
                                            </div>
                                            <div className="skillBar" data-percent="78%">
                                                <span className="PercentText">78%</span>
                                            </div>
                                        </div>


                                        <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />



                                    </div> {/* /.codeconSkills */}
                                </div> {/* /.habilidades_contenedor */}
                            </div> {/* /.skills-progress */}
                        </div>
                    </div>
                </div>
            </div> {/* /.fancy-feature-sixteen */}

        </Fragment>
    );
}

export default FancyFeatureSixteen;