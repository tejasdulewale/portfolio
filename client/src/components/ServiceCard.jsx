import React from "react";
import "../css/servicecard.css";
import posterImage from '../assets/poster1.jpg'
const ServiceCard = () => {
  return (
    <div className="servicecard">
      <div className="servicecardimg">
        <img src={posterImage} alt="" />
      </div>
      <h3 className="servivecardname">web desinging</h3>
      <p className="servicecarddesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi
        consequatur
      </p>
    </div>
  );
};

export default ServiceCard;
