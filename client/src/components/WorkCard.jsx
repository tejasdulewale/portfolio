import React from "react";
import "../css/workcard.css";
const WorkCard = ({number,category}) => {
  return (
    <div className="workcard">
      <h2 className="number">
        {number}+
        <br />
        <span className="numberspan">{category}</span>
      </h2>
    </div>
  );
};
export default WorkCard;
