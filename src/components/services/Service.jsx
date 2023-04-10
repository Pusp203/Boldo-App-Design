import React from "react";
import "./service.scss";
import coolLogo from "../../assets/coolLogo.png";
import feature from "../../assets/feature.png";
import title from "../../assets/title.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
  return (
    <div className="service">
      <div className="service-cards">
        <div className="service-cards__Card1">
          <div className="service-cards__Card1-image">
            <img src={coolLogo} alt="" />
          </div>
          <div className="service-cards__Card1-text">
            <h6>Cool feature title</h6>
            <p>Learning curve network effects return on investment.</p>
            <div className="service-cards__Card1-text_explore">
              <h2>Explore page </h2>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        <div className="service-cards__Card1">
          <div>
            <img src={feature} alt="" />
          </div>
          <div className="service-cards__Card1-text">
            <h6>Even cooler feature</h6>
            <p>Learning curve network effects return on investment.</p>
            <div className="service-cards__Card1-text_explore">
              <h2>Explore page </h2>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        <div className="service-cards__Card1">
          <div className="service-cards__Card1-image">
            <img src={title} alt="" />
          </div>
          <div className="service-cards__Card1-text">
            <h6>Cool feature title</h6>
            <p>Learning curve network effects return on investment.</p>
            <div className="service-cards__Card1-text_explore">
              <h2>Explore page </h2>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
