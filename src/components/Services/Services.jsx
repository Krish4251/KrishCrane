import React from "react";
import "./Services.css";
import Service_1 from "../../assets/Service_1.png";
import Service_2 from "../../assets/Service_2.png";
import Service_3 from "../../assets/Service_3.png";
const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={Service_1} alt="" />
        <div className="caption">
          <p>Repair</p>
        </div>
      </div>
      <div className="service">
        <img src={Service_2} alt="" />
        <div className="caption">
          <p>Service</p>
        </div>
      </div>
      <div className="service">
        <img src={Service_3} alt="" />
        <div className="caption">
          <p>Checkup</p>
        </div>
      </div>
      <button className="dark-btn">More</button>
    </div>
  );
};

export default Services;
