import React from "react";
import "../css/mywork.css";
import ProjectSlide from './ProjectSlide.jsx'
const MyProject = () => {
  return (
    <div className="myproject" id="myproject">
      <div className="workname">My Work</div>
      <h2 className="recentproject">RECENT PROJECT</h2>

      <div className="projectcardcontainer">
           <ProjectSlide/>
      </div>
    </div>
  );
};

export default MyProject;
