import React from "react";
import "./Skills.css";
import postmanImg from "../../images/postman.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {

    React.useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <section className="skills">
            <h2 className="skills--title">Umiejętności</h2>
            <div data-aos="fade-up" className="container skills__container">
                <div  className="skill">
                    <div className="skill-header">
                        <i class="fab fa-html5"></i>
                        <h4>HTML</h4>     
                    </div>
                </div>
                <div  className="skill">
                    <div className="skill-header">
                         <i class="fab fa-css3-alt"></i>
                        <h4>CSS</h4>
                    </div>
                  
                </div>
                <div  className="skill">
                    <div className="skill-header">
                        <i class="fab fa-sass"></i>
                        <h4>SASS</h4>
                    </div>
                </div>
                <div  className="skill skill-extended">
                    <div className="skill-header">
                        <i class="fab fa-js"></i>
                        <h4><span>JavaScript</span></h4>
                    </div>
                    <p>kolekcje, ES6, streams, async await, REST API  </p>
                </div>
                <div  className="skill skill-extended">
                    <div className="skill-header">
                        <i class="fab fa-react"></i>
                        <h4>React</h4>
                    </div>
                    <p>JSX, Props, Controlled inputs, Hooks, Context, Router</p>
                </div>
                <div  className="skill skill-extended">
                    <div className="skill-header">
                        <i class="fab fa-java"></i>
                        <h4>Java</h4>
                    </div>
                    <p>Podstawowa zjajomość języka, podejście obiektowe</p>
                </div>
                <div  className="skill">
                    <div className="skill-header">
                        <i class="fab fa-github"></i>
                        <h4>Git</h4>
                    </div>
                </div>
                <div  className="skill">
                    <img className="postman--img" src={postmanImg} alt="example"/>
                </div>

              
            </div>
        </section>
    )
}

export default Skills;