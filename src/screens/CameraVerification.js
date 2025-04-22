import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CameraVerification.css";
import logoImage from "../../src/images/areta360-logo.png";
import personImage from "../../src/images/straightpose.png";

export default function CameraVerification() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="camera-screen">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Areta360" className="logo" />
        </div>
        <div className="header-controls">
          <button className="control-btn">
            <span className="info-icon">ⓘ</span>
            Help
          </button>
          <button className="control-btn">
            <span className="globe-icon">🌐</span>
            UK English
            <span className="arrow-icon">▼</span>
          </button>
          <div className="camera-status">
            <span className="camera-dot"></span>
            Camera On
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Main Content */}
      <div className="main-content">
        <div className="frame-container">
          <div className="model-frame">
            <img src={personImage} alt="Reference pose" className="model-image" />
            <div className="text-overlay">
              <h1 className="get-ready">Get Ready</h1>
              <div className="countdown">{count}</div>
            </div>
          </div>
        </div>

        {/* Instruction Box */}
        <div className="instruction-box">
          <p>Hold or place your phone until you fit into this frame</p>
          <button 
            className="continue-btn" 
            onClick={() => navigate("/SidePose")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
} 