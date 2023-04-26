import React from "react";
import "./error.scss";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="error">
      <div className="error-section">
        <div className="error-section_top">
          <h2>404</h2>
          <p>The Page you searching is not found.</p>
        </div>
        <div className="error-section_bottom">
          <button className="error-section_bottom_btn" onClick={handleClick}>
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
