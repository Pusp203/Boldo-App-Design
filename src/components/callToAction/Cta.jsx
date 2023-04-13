import React, { useState } from "react";
import "./cta.scss";
import logos from "../../assets/logos.svg";
import miniEllipse from "../../assets/miniEllipse.png";

const Cta = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <div className="cta">
      <div className="cta-body">
        {/* <div className="cta-body__img">{/* <img src={logos} alt="" /> 
        
        </div> */}
        {/* <div className="cta-body__random"></div> */}

        <div className="cta-body__text">
          <p> An enterprise template to ramp up your company website</p>
        </div>
        <div className="cta-body__buttons">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="cta-body__buttons-emailfield"
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
            />
          </form>
          <button
            className="cta-body__buttons-startNowBtn"
            onClick={handleSubmit}
          >
            Start now
          </button>
        </div>
      </div>
      <div className="cta-bgImages">
        <img src={miniEllipse} alt="" />
      </div>
      {/* <div className="cta-backgrounds"></div> */}
      {/* hello */}
    </div>
  );
};

export default Cta;
