import React from "react";
import "../css/hero.css";
import posterImage from '../assets/poster1.jpg'
import TypewriterSpan from "./TypewriterSpan";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="herocontect">
        <div className="name">Tejas Dulewale</div>
        <h1 className="introduction">
          Hay! I’m Tejas
          <br />
          <span className="highlight">
            i'm <TypewriterSpan />{" "}
          </span>
        </h1>
        <p className="decreption">
          I am a passionate <span className="highlight">Web Developer</span>{" "}
          with a keen interest in creating dynamic and responsive web
          applications. I love to explore new technologies and continuously
          improve my skills to deliver the best user experience.
        </p>
        <div className="icons-button">
          <button className="btn2">get in touch</button>
          <div className="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="posterImage">
        <img src={posterImage} alt="image herr" />
      </div>
    </div>
  );
};
export default Hero;
