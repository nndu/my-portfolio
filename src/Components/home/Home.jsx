import React from 'react';
import "./home.css";
import Me from "../../asset/avt.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shape from './Shape';

const Home = () => {
    return (
        <section className='home container' id="home">
            <div className='intro'>
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Jenny Nguyen</h1>
                <span className="home__education">I'm a software developer</span>
                <HeaderSocials />
                <a href="#contact" className="btn">Get In Touch</a>
                <ScrollDown />
            </div>
            <Shape />
        </section>
    )
}

export default Home