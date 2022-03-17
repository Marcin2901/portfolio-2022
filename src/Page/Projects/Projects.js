import React from "react";
import "./Projects.css";
import {Parallax} from "react-parallax"
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
                            <div>
                                <h4>Facebook Clone</h4>
                                <p>Projekt stworzony za pomocą biblioteki React, z możliwością
                                tworzenia nowego konta, wysyłania wiadomości, wstawiania postów
                                i komentarzy
                                </p>
                                <div>
                                    <a href="">Github</a>
                                    <a href="https://marcin2901.github.io/facebook-clone/">Zobacz project</a>
                                </div>
                            </div>
                        </div>
         
                        {/* <div data-aos="flip-up" className="project--card"> 
                            <h4>Project T</h4>
                            <p>akls; sakdl;f  ksdajf; sdfk ;lskdjf k sdf; 
                                ksadl fkjfsdjsfhdjhsa flsd f aks;djf 
                                k asdf;kjsakdfj;klsjadf kl dsjfa;k sdfa k;jl
                            </p>
                        </div> */}

                        <div data-aos="fade-left" className="project--card" >
                            <img className="project--img" src={casinoProjectImg} />
                            <div>
                                <h4>Mini Casino</h4>
                                <p>Projekt stworzony za pomocą biblioteki React, z możliwością 
                                granie w Poker, Poker 5 Cards, BlackJack i War
                                </p>
                                <div>
                                    <a href="">Github</a>
                                    <a href="https://marcin2901.github.io/mini-casino/">Zobacz project</a>
                                </div>
                            </div>
                        </div>
        
       
             </div>


         </section>
    )
}

export default Projects;