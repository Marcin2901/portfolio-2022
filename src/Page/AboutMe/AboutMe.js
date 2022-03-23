import React, {useEffect} from "react";
import "./AboutMe.css";
import myImage from "../../images/aboutMe-me.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <section className="about-me">
            <div className="container about-me__container">
                <img data-aos="flip-right" className="about-me--img" src={myImage}/>
                <div data-aos="fade-left" className="about-me__content">
                    <h2>O mnie</h2>
                    <p> Nauke programowania zaczynałem hobbistycznie od Javy aż w pewnym momencie trafiłem na 
                        tworzenie stron internetowych. Rozpoczołem nauke frontendu i w nim chciałbym spróbować się 
                        zawodowo. Prawie wszystko co umiem postarałem się zamieścić w projektach. W przyszłości
                        chciałbym wrócić do backendu w celu lepszego zrozumienia całości.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;