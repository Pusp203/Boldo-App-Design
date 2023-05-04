import React from "react";
import Slider from "react-slick";
import "./logo.scss";
// import presto from "../../assets/presto.png";
import presto from "../../assets/presto.svg";
import presto2 from "../../assets/presto2.svg";
import boldos from "../../assets/boldos.svg";

import footerLogo from "../../assets/footerLogo.png";

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="logo app__BannerWrapper">
      <div className="logo-section">
        <Slider {...settings}>
          <div>
            <img src={presto} alt="" />
          </div>
          <div>
            <img src={boldos} alt="" />
          </div>
          <div>
            <img src={presto2} alt="" />
          </div>
          <div>
            <img src={presto} alt="" />
          </div>
          <div>
            <img src={boldos} alt="" />
          </div>
          <div>
            <img src={presto2} alt="" />
          </div>
          <div>
            <img src={presto} alt="" />
          </div>
          <div>
            <img src={boldos} alt="" />
          </div>
          <div>
            <img src={presto2} alt="" />
          </div>
          <div>
            <img src={presto} alt="" />
          </div>
          <div>
            <img src={boldos} alt="" />
          </div>
          <div>
            <img src={presto2} alt="" />
          </div>
          {/* 
          <img src={footerLogo} alt="" />
          <img src={footerLogo} alt="" /> */}
        </Slider>
      </div>
    </div>
  );
};

export default Logo;
