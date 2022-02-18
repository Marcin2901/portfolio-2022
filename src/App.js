import React, {useState, useEffect} from "react";
import './App.css';
import Hero from "./Page/Hero/Hero";

function App() {

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY])


  return (
    <div className="App">
        <Hero offsetY={offsetY}/>
       
        <div className='ex'></div>
        {/* <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <Footer /> */}
    </div>
  );
}

export default App;
