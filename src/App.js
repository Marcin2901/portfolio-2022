import React, {useState, useEffect} from "react";
import './App.css';

import Navbar from "./Page/Navbar/Navbar";
import Hero from "./Page/Hero/Hero";
import AboutMe from "./Page/AboutMe/AboutMe";
import Projects from "./Page/Projects/Projects";
import Skills from "./Page/Skills/Skills";
// import  {Animator, MoveIn, ScrollContainer, ScrollPage, batch, Zoom, Sticky, StickyIn, FadeIn, ZoomIn, MoveOut, Fade} from "react-scroll-motion";

function App() {

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY])


  return (
    <div className="App">
        {/* <Navbar /> */}
     
        <Hero offsetY={offsetY}/>
       
        {/* <div className='ex'></div> */}
        <AboutMe/>

        <Projects/>
        
        <Skills />
        {/* <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <Footer /> */}
        <h1>Tutaj spróbujemy jeszcze dodać sekcje contact z możliwością wysłąnia emaila ale zobaczymy
            czy to wgl możliwe
        </h1>
        <h1>Na koniec dajemy footer - nie dużego</h1>
        <h1>I zastanów się czy dodać sekcje z menu nawigacji po stronie czy zrobić hamburgera czy to i to???</h1>
    </div>
  );
}

export default App;
