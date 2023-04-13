import React from "react";
import "./FirstSection.scss";
import Blacktick from "../../assets/Blacktick.png";
import dataFrame from "../../assets/dataFrame.png";
import calling from "../../assets/calling.png";
import absolute from "../../assets/absolute.png";

const FirstSection = () => {
  return (
    <div className="section">
      <div className="section-body">
        <div className="section-body__img">
          <img src={absolute} alt="" />
          {/* <img src={calling} alt="" />
          <div className="section-body__img-subImg">
            <img src={dataFrame} alt="" /> */}
          {/* </div> */}
        </div>
        <div className="section-body__heading">
          <div className="section-body__heading_text">
            <div className="section-body__heading_text-top">
              <p>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </p>
            </div>
            <div className="section-body__heading_text-middle">
              <div className="section-body__heading_text-middle_top">
                <img src={Blacktick} alt="" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className="section-body__heading_text-middle_middle">
                {" "}
                <img src={Blacktick} alt="" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className="section-body__heading_text-middle_bottom">
                {" "}
                <img src={Blacktick} alt="" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>

          <div className="section-body__heading-bottom">
            <button className="section-body__heading-bottom__startBtn">
              {" "}
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
