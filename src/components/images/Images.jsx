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
      <div className="images-main">
        <div className="images-main__left">
          <img className="images-main__left-img1" src={leftTop} alt="" />
          <img className="images-main__left-img2" src={leftBottom} alt="" />
        </div>
        <div className="images-main__middle">
          <img src={middleImage} alt="" />
        </div>
        <div className="images-main__left">
          <img src={rightTop} alt="" />
          <img src={rightBottom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;
