
import React from "react";
import "./Complete.css";
import personImage from "../../src/images/complete.png"; // Add the correct path for the uploaded person image

const CompletePose = () => {
  return (
    <div className="container">
      <div className="camera-indicator">
        <span className="red-dot"></span> Camera On
      </div>
      <div className="overlay">
        <img src={personImage} alt="Person" className="person-image" />
        <div className="checkmark">&#10003;</div>
        <p className="text">Complete</p>
      </div>
    </div>
  );
};

export default CompletePose;