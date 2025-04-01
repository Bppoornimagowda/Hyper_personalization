import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CameraVerification.css";
import personImage from "../../src/images/straightpose.png";  // Correct Path for Image
import backgroundImage from "../../src/images/Frame1.jpeg"; // Background Image

export default function CameraScreen() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);
  

  return (
    <div
      className="camera-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Camera On Indicator */}
      <div className="camera-indicator">
        <span className="indicator-dot"></span> Camera On
      </div>

      {/* Frame Section */}
      <div className="frame-box">
        <img src={personImage} alt="Person" className="person-image" />
        <div className="overlay-text">
          <p className="get-ready-text">Get Ready</p>
          <p className="countdown">{count}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <p className="instruction-text">
          Hold or place your phone until you fit into this frame
        </p>
        <button className="continue-button" 
        onClick={() => navigate("/SidePose")} // Navigate when clicked
      ></button>
        Continue
      </div>
    </div>
  );
}
