import React from "react";
import "./SecondSection.scss";
import eye from "../../assets/eye.png";
import sun from "../../assets/sun.png";
import star from "../../assets/star.png";
import secondCalling from "../../assets/secondCalling.png";
import pieGraph from "../../assets/pieGraph.png";

const SecondSection = () => {
  return (
    <div className="main">
      <div className="main-body">
        <div className="main-body__heading">
          <div className="main-body__heading_text">
            <div className="main-body__heading_text-top">
              <p>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </p>
            </div>
            <div className="main-body__heading_text-middle">
              <div className="main-body__heading_text-middle_top">
                <img src={star} alt="" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className="main-body__heading_text-middle_middle">
                {" "}
                <img src={eye} alt="" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className="main-body__heading_text-middle_bottom">
                {" "}
                <img src={sun} alt="" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body__img">
          <img src={secondCalling} alt="" />
          <div className="main-body__img-subImg">
            <img src={pieGraph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
