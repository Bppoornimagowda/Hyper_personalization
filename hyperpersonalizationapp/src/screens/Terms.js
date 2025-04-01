import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css"; 

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (isChecked) {
      navigate("/Guide"); // Navigate to Guide page
    }
  };

  return (
    <div className="container">
    
      <div className="overlay"></div> {/* Dark Overlay */}
      <div className="content-box">
        <div className="icon-container">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M6.938 17h10.124a2 2 0 002-2V9a2 2 0 00-2-2H6.938a2 2 0 00-2 2v6a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <h2 className="title">
          Receive your comprehensive dress collection in under a minute.
        </h2>
        <p className="description">
          Areta360 takes your privacy seriously. Learn more about how your
          personal data from this test is processed in our{" "}
          <span className="highlight">privacy policy</span>.
        </p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="checkbox-label">
            I Agree To Fitwave{" "}
            <span className="highlight">
              Public Agreement, Terms, Privacy Policy
            </span>
            , And Confirm That I Am Over 17 Years Old
          </label>
        </div>
        <button
          className={`continue-button ${isChecked ? "enabled" : "disabled"}`}
          disabled={!isChecked}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Terms;
