import React from "react";
import "../css/aboutme.css";
import WorkCard from "./WorkCard";
import posterImage from "../assets/poster1.jpg";
const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="aboutimg"><img src={posterImage} alt="" /></div>
      
      
      <div className="aboutContent">
        <div className="aboutme">about me</div>
        <h2 className="heading">
          I AM AVAILABLE FOR <br />{" "}
          <span className="highlight">
            WEB DEVLOPMENT <br />
          </span>
          PROJECTS
        </h2>
        <p className="description">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div className="workcards">
          <WorkCard number={1}  category={"Experienace"}/>
          <WorkCard number={5}  category={"projects"}/>
        
        </div>
       <button className="btn2">get in touch</button>
      </div>
    </div>
  );
};

export default AboutMe;
