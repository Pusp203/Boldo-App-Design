import React from "react";
import "./image.scss";
import middleImage from "../../assets/middleImage.png";
import rightTop from "../../assets/rightTop.png";
import rightBottom from "../../assets/rightBottom.png";
import leftTop from "../../assets/leftTop.png";
import leftBottom from "../../assets/leftBottom.png";

const Images = () => {
  return (
    <div className="images">
      <div className="images--main">
        <div className="images--main__top">
          <img src={leftTop} alt="" />
          <img src={leftBottom} alt="" />
        </div>
        <div className="images--main__middle">
          <img src={middleImage} alt="" />
        </div>

        <div className="images--main__bottom">
          <img src={rightTop} alt="" />
          <img src={rightBottom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;
