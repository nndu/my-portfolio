import React from 'react';
import "./about.css";
import Avt from "../../asset/avt2.png";
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About me</h2>
            <div className="about__container grid">
                <img src={Avt} alt="" className="about__img" />
                <div className='about__data grid'>
                    <div className='about__info'>
                        <p className="about__description">
                            I am an entry-level software engineer with a Diploma's degree in Computer Science. I am proficient in programming languages such as Java, Python, and C#, as well as web development technologies like ReactJS, HTML, CSS, SQL, Node.js and JavaScript. I am a quick learner and a proactive team player, who is eager to contribute to a dynamic software development team.
                        </p>
                        <a href="" className="btn">Download my Resume</a>
                    </div>
                    <div className='about__skills grid'>
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">JAVA</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">C#</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">HTML, CSS</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">REACTJS</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">JAVASCRIPT</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">NODE.JS</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">SQL</h3>
                                <span className='skills__number'></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About