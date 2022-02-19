import React from "react";
import "./Skills.css";
function Skills(props) {

    return (
        <section className="skills">
            <div className="container">
                <div className="skill">
                    icona <h4>HTML</h4>
                    <p>wszytko co wiem o HTMLu może być w ul</p>
                </div>
                <div className="skill">
                    icona <h4>CSS</h4>
                    <p>wszytko co wiem o CSSie może być w ul</p>
                </div>
                <div className="skill">
                    icona <h4>SASS</h4>
                    <p>wszytko co wiem o SASSie może być w ul</p>
                </div>
                <div className="skill">
                    icona <h4>JavaScript</h4>
                    <p>wszytko co wiem o JavaScript może być w ul</p>
                </div>
                <div className="skill">
                    icona <h4>React</h4>
                    <p>wszytko co wiem o Reactcie może być w ul</p>
                </div>
                <div className="skill">
                    icona <h4>Podstawowa Java</h4>
                    <p>wszytko co wiem o Javie może być w ul</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;