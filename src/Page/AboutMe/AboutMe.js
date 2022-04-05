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
        <section className="about-me" id="about">
            <h2>O mnie</h2>
            <div className="container about-me__container">
                <img data-aos="flip-right" className="about-me--img" src={myImage} alt="example"/>
                <div data-aos="fade-left" className="about-me__content">
                    <p> Przygodę z programowaniem rozpocząłem hobbistycznie od Javy aż w pewnym momencie trafiłem na
                        tworzenie stron internetowych i frontend. Właśnie w tej dziedzinie programowanie chciałbym rozwijać
                        się zawodowo. Dotychczas nabyte umiejętności można ocenić na podstawie moich projektów zamieszczonych 
                        poniżej, do których obejrzenia zachęcam. W przyszłości zamierzam wrócić do backendu w celu pełniejszego
                        zrozumienia całości.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;