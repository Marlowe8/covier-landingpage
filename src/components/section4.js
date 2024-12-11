import React from "react";
import "./section4.css";
import buildingImage from "../image/buildingview3.png";

const Section4 = () => {
  const scrollToHeader = () => {
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="section4">
      <div className="section4-text">
        <h2 className="section4-heading">WORLD-CLASS AMENITIES</h2>
        <p className="section4-description">
        Residents can enjoy a vibrant lifestyle complemented by world-class amenities and recreational facilities. With features like pocket parks and outdoor fitness areas, the community is thoughtfully designed to encourage an active, dynamic, and inclusive environment for all ages.        </p>

        <ul className="section4-list">
          <li>• Dual Infinity Pools</li>
          <li>• Premium Health Club</li>
          <li>• Steam Room</li>
          <li>• Sauna</li>
          <li>• Exclusive Clubhouse</li>
          <li>• BBQ Pavilions</li>
          <li>• Children's Play Area</li>
          <li>• Landscaped Gardens</li>
        </ul>

        <div className="button-container">
          <button className="section4-button" onClick={scrollToHeader}>
           Get in touch with us
          </button>
        </div>
      </div>

      <div className="section4-image-block">
        <img src={buildingImage} alt="Building View 3" className="section4-image" />
      </div>
    </div>
  );
};

export default Section4;
