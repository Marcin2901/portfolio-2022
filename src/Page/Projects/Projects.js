import React from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fbProjectImg from "../../images/fb-project.jpg";
import casinoProjectImg from "../../images/casino-project.jpg";


function Projects() {

 
  
    // const [projectsOffsetY, setProjectsOffsetY] = React.useState(projectsElem.scrollHeight)
    let a = 0;
    
    React.useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <section className="projects">
    

            <h2>Projekty</h2>
            
            <div data-aos="fade-up" className="container projects__container">
     
          
                        <div data-aos="fade-right" className="project--card" >
                            <img className="project--img" src={fbProjectImg} />
                            <div className="project--content">
                                <h4>Facebook Clone</h4>
                                <p>Projekt stworzony za pomocą biblioteki React, z możliwością
                                tworzenia nowego konta, wysyłania wiadomości, wstawiania postów
                                i komentarzy
                                </p>
                                <div>
                                    <a className="project--btn" href="https://github.com/Marcin2901/facebook-clone" target={"_blank"}>Github</a>
                                    <a className="project--btn" href="https://adoring-darwin-82ad13.netlify.app/" target={"_blank"}>Zobacz project</a>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="project--card" >
                            <img className="project--img" src={casinoProjectImg} />
                            <div className="project--content">
                                <h4>Mini Casino</h4>
                                <p>Projekt stworzony za pomocą biblioteki React, z możliwością 
                                granie w Poker, Poker 5 Cards, BlackJack i War
                                </p>
                                <div>
                                    <a className="project--btn" href="https://github.com/Marcin2901/mini-casino" target={"_blank"}>Github</a>
                                    <a className="project--btn " href="https://loving-lewin-7dac0f.netlify.app/" target={"_blank"}>Zobacz project</a>
                                </div>
                            </div>
                        </div>
        
       
             </div>


         </section>
    )
}

export default Projects;