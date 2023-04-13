import React from "react";
import hero from "../../assets/hero.svg";
import "./heroSection.scss";
import ellpse from "../../assets/ellpse.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="container">
        <div className="heroSection-division">
          <div className="heroSection-division__left">
            <div className="heroSection-division__left-texts">
              <span> Save time by building fast with Boldo Template </span>
              <p>
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator sucess deployment
                non-disclosure.
              </p>
            </div>
            <div className="heroSection-division__left-buttons">
              <button className="buy-template">Buy template</button>
              <button className="explore">Explore</button>
            </div>
          </div>
          <div className="heroSection-division__graphics">
            <img src={hero} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
