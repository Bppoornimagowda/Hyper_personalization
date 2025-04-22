import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CameraVerification.css';

const CameraVerification = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="camera-verification">
      {/* Header Section */}
      <div className="header">
        <div className="logo-section">
          <img src="/areta360-logo.png" alt="Areta360" className="logo" />
        </div>
        <div className="controls-section">
          <button className="control-button help-button">
            <span className="info-icon">ⓘ</span>
            Help
          </button>
          <button className="control-button language-button">
            <span className="globe-icon">🌐</span>
            UK English
            <span className="arrow-icon">▼</span>
          </button>
          <div className="control-button camera-status">
            <span className="camera-dot"></span>
            Camera On
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Main Content */}
      <div className="main-content">
        <div className="frame-container">
          <div className="photo-frame">
            <img src="/model-pose.jpg" alt="Model pose" className="model-image" />
            <div className="text-overlay">
              <div className="get-ready">Get Ready</div>
              <div className="countdown-number">{countdown}</div>
            </div>
          </div>
        </div>

        {/* Instructions Panel */}
        <div className="instruction-box">
          <p>Hold or place your phone until you fit into this frame</p>
          <button className="continue-button" onClick={() => navigate('/next')}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraVerification; 