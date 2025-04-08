import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CameraVerification.css"; // Import the CSS file
import logo from '../../src/images/logo.png';
import personImage from '../../src/images/straightpose.png';

const CameraVerification = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleContinue = () => {
    navigate('/SidePose'); // Navigate to the side pose page
  };

  return (
    <div className="camera-screen">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Areta360" className="logo" />
        </div>
        <div className="header-right">
          <button className="help-button">
            <span className="help-icon">ⓘ</span>
            Help
          </button>
          <div className="language-selector">
            <span className="globe-icon">🌐</span>
            UK English
          </div>
          <div className="camera-status">
            <span className="camera-dot"></span>
            Camera On
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <div className="frame-container">
          <div className="frame-box">
            <img src={personImage} alt="Person" className="person-image" />
            <div className="countdown-overlay">
              <h2 className="get-ready-text">Get Ready</h2>
              <div className="countdown-number">{countdown}</div>
            </div>
          </div>
        </div>

        <div className="instruction-box">
          <p className="instruction-text">
            Hold or place your phone until you fit into this frame
          </p>
          <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CameraVerification;
