import React from "react";
import "./Projects.css";
import {Parallax} from "react-parallax"
import Aos from "aos";
import "aos/dist/aos.css";


function Projects() {

 
  
    // const [projectsOffsetY, setProjectsOffsetY] = React.useState(projectsElem.scrollHeight)
    let a = 0;
    
    React.useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <section className="projects">
    

            
            <div data-aos="fade-up" className="container projects__container">
     

          
                        <div data-aos="fade-right" className="project--card" >
                            <h4>Project Title</h4>
                            <p>akls; sakdl;f  ksdajf; sdfk ;lskdjf k sdf; 
                                ksadl fkjfsdjsfhdjhsa flsd f aks;djf 
                                k asdf;kjsakdfj;klsjadf kl dsjfa;k sdfa k;jl
                            </p>
                        </div>
         
                        <div data-aos="flip-up" className="project--card"> 
                            <h4>Project T</h4>
                            <p>akls; sakdl;f  ksdajf; sdfk ;lskdjf k sdf; 
                                ksadl fkjfsdjsfhdjhsa flsd f aks;djf 
                                k asdf;kjsakdfj;klsjadf kl dsjfa;k sdfa k;jl
                            </p>
                        </div>

                        <div data-aos="fade-left" className="project--card" >
                            <h4>Project </h4>
                            <p>akls; sakdl;f  ksdajf; sdfk ;lskdjf k sdf; 
                                ksadl fkjfsdjsfhdjhsa flsd f aks;djf 
                                k asdf;kjsakdfj;klsjadf kl dsjfa;k sdfa k;jl
                            </p>
                        </div>
        
       
             </div>


         </section>
    )
}

export default Projects;