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
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod doloremque unde reiciendis,
                       magni quaerat sunt temporibus facere esse a in amet porro minus maxime sapiente officiis
                       deserunt excepturi accusantium doloribus repellat. Suscipit, culpa blanditiis provident
                       facere cumque minus labore. Architecto inventore quis officiis voluptatibus ad! Eligendi
                       velit beatae qui non exercitationem, ullam quia soluta animi maiores, suscipit dicta
                       cumque libero sunt dolore eaque, voluptatibus impedit praesentium distinctio fugit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;