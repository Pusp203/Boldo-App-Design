import React from "react";
import "./service.scss";
import coolLogo from "../../assets/coolLogo.png";
import feature from "../../assets/feature.png";
import title from "../../assets/title.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/blogs");
  };
  return (
    <div className="service">
      <div className="service-body">
        <div className="service-body-text">
          <p>Our Services</p>
          <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        </div>
        <div className="service-body-cards">
          <div className="service-body-cards__Card1">
            <div className="service-body-cards__Card1-image">
              <img src={coolLogo} alt="" />
            </div>
            <div
              className="service-body-cards__Card1-text"
              onClick={handleExploreClick}
            >
              <h6>Cool feature title</h6>
              <p>Learning curve network effects return on investment.</p>
              <div className="service-body-cards__Card1-text_explore">
                <h2>Explore page </h2>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="service-body-cards__Card1">
            <div className="service-body-cards__Card1-image">
              <img src={feature} alt="" />
            </div>
            <div className="service-body-cards__Card1-text">
              <h6>Even cooler feature</h6>
              <p>Learning curve network effects return on investment.</p>
              <div
                className="service-body-cards__Card1-text_explore"
                onClick={handleExploreClick}
              >
                <h2>Explore page </h2>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="service-body-cards__Card1">
            <div className="service-body-cards__Card1-image">
              <img src={title} alt="" />
            </div>
            <div className="service-body-cards__Card1-text">
              <h6>Cool feature title</h6>
              <p>Learning curve network effects return on investment.</p>
              <div
                className="service-body-cards__Card1-text_explore"
                onClick={handleExploreClick}
              >
                <h2>Explore page </h2>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
