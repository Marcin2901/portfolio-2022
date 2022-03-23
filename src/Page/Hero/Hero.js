import React from "react";
import "./Hero.css";
import background from "../../images/hero-background.png";
import bg1 from "../../images/hero-bg1.png";
import bg2 from "../../images/hero-bg2.png";
import birds from "../../images/hero-birds.png";
import sun from "../../images/hero-sun.png";
import {Parallax} from "react-parallax"


function Hero(props) {

    const {offsetY} = props;

    return (
        <section className="hero">
            <h1 className="hero--title" style={{transform: `translateY(${offsetY * .5}px) rotateY(55deg) rotateZ(1deg) rotateX(-10deg)`,
                                                zIndex: offsetY > 250 ? 1  : 5, opacity: offsetY > 250 ? .6 : .8,
                                                animation: offsetY > 250 && "none"}}
            >
                M<span className="letter-up">a</span>r<span className="letter-up">ci</span>n J<span className="letter-up">a</span>w<span className="letter-down">o</span>rski
            </h1>
            <p className="hero--text" style={{transform: offsetY > 150 ? "translateX(500px)" : "translateX(0)" }}><span className="green">Junior</span> <span className="greena">F</span>rontend <span className="gareen">D</span>eveloper</p>

           
            <Parallax className="image" bgImage={background} strength={500} >
                 <img src={sun} className="hero--sun" style={{transform: `translateY(${offsetY * .8}px)`}}/>
                 <img src={birds} className="hero--birds" style={{transform: `translate(${offsetY * 2}px, ${offsetY * .1}px)`}}/>
                 <img src={bg1} className="hero--bg1" style={{transform: `translateY(${offsetY * .55}px)`}}/>
                 <img src={bg2} className="hero--bg2" />

            </Parallax>
            <div className="sp"></div>
        </section>
    )
}

export default Hero;