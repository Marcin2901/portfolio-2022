import React from "react";
import "./Navbar.css";
import myImage from "../../images/aboutMe-me.jpg";

function Navbar() {
    return (
        <nav>
            <div className="left">
            <img src={myImage} alt="example"/>
            <h2>{`Marcin Jaworski => portfolio`}</h2>
            </div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projekty</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;