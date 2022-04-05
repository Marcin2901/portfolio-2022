import React, {useState, useEffect} from "react";
import './App.css';

import Navbar from "./Page/Navbar/Navbar";
import Hero from "./Page/Hero/Hero";
import AboutMe from "./Page/AboutMe/AboutMe";
import Projects from "./Page/Projects/Projects";
import Skills from "./Page/Skills/Skills";
import Contact from "./Page/Contact/Contact";
import Footer from "./Page/Footer/Footer"
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
        <Navbar />
        <Hero offsetY={offsetY}/>
        <AboutMe/>
        <Projects/>
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
