import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CameraVerification.css';
import logo from '../src/images/logo.png';
import personImage from '../src/images/straightpose.png';

const CameraVerification = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate('/next-page'); // Replace with your next route
  };

  const handleHelp = () => {
    // Add help functionality
    console.log('Help clicked');
  };

  const handleLanguageChange = () => {
    // Add language change functionality
    console.log('Language change clicked');
  };

  return (
    <div className="camera-screen">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Areta360" className="logo" />
        </div>

        <div className="header-right">
          <button className="help-button" onClick={handleHelp}>
            <span className="info-icon">ⓘ</span>
            <span>Help</span>
          </button>

          <div className="language-selector" onClick={handleLanguageChange}>
            <span className="globe-icon">🌐</span>
            <span>UK English</span>
            <span className="dropdown-icon">▼</span>
          </div>

          <div className="camera-status">
            <div className="camera-dot"></div>
            <span>Camera On</span>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        <span>←</span>
        <span>Back</span>
      </button>

      {/* Main Content */}
      <main className="main-content">
        {/* Frame Box */}
        <div className="frame-box">
          <div className="image-container">
            <img 
              src={personImage} 
              alt="Reference Pose" 
              className="person-image"
            />
          </div>

          {/* Countdown Overlay */}
          <div className="countdown-overlay">
            <h2 className="get-ready-text">Get Ready</h2>
            <div className="countdown-number">{count}</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="instruction-box">
          <p className="instruction-text">
            Hold or place your phone until you fit into this frame
          </p>
          <button 
            className="continue-button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default CameraVerification; 