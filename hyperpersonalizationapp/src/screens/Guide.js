import React from "react";
import { useNavigate } from "react-router-dom";
import "./Guide.css";
import leftImage from "../../src/images/Group 48095889.png";
import rightImage from "../../src/images/Group 48095890.png";

const Guide = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleContinue = () => {
    navigate("/CameraVerification"); // Change "/next-page" to your actual route
  };
  return (
    <div className="scan-guide-container">
      <h2 className="title">How to Scan</h2>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={leftImage} alt="Accepted scan" className="scan-image" />
        </div>
        <div className="image-wrapper">
          <img src={rightImage} alt="Rejected scan" className="scan-image" />
        </div>
      </div>
      <p className="description">
        Ensure proper lighting for an accurate AI analysis of your body type. Good lighting helps the AI capture detailed and precise photo data, leading to better insights.
      </p>
      <button className="continue-button" onClick={handleContinue}>
      Continue
      </button>
      </div>
  );
};

export default Guide;
