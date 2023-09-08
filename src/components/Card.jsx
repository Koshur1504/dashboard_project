import React from "react";
import "./Card.css";
import arrow from "./assets/Arrow_down.svg";

const Card = ({ icon, color, text, value, pvalue }) => {
  return (
    <div className="card">
      <div className="icon" style={{ backgroundColor: color }}>
        <img src={icon} alt="" />
      </div>
      <p>{text}</p>
      <div className="values">
        <h3>{value}</h3>
        <img src={arrow} alt="" />
        <div className="metric" style={{ backgroundColor: "#E9F9EB" }}>
          <p>{pvalue}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
