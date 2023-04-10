import React from "react";
import "./testiMonialsCards.scss";
import Albus from "../../../assets/Albus.png";
import Severus from "../../../assets/Severus.png";
import Harry from "../../../assets/Harry.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";

import { Data } from "./Data";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }
const TestimonialsCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-slick",
    centerPadding: "20px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="testimonial">
      {/* <div className="card"> */}
      <Slider {...settings}>
        {Data.map((val) => {
          console.log("val", val);
          return (
            <div className="card">
              <div className="testimonial-Card1">
                <div className="testimonial-Card1__top">{val.quote}</div>
                <div className="testimonial-Card1__bottom">
                  <div className="testimonial-Card1__bottom-image">
                    <img src={Albus} alt="" />
                  </div>
                  <div className="testimonial-Card1__bottom-heading">
                    <h2>{val.name}</h2>
                    <h6>{val.email}</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* </div> */}
      {/* <div className="testimonial-Card2">
        <div className="testimonial-Card2__top">
          “Learning curve infrastructure value proposition advisor strategy user
          experience hypotheses investor.”
        </div>
        <div className="testimonial-Card2__bottom">
          <div className="testimonial-Card2__bottom-image">
            <img src={Severus} alt="" />
          </div>
          <div className="testimonial-Card2__bottom-heading">
            <h2>Severus Snape</h2>
            <h6>Manager @ Slytherin</h6>
          </div>
        </div>
      </div> */}
      {/* <div className="testimonial-Card3">
        <div className="testimonial-Card3__top">
          “Release facebook responsive web design business model canvas seed
          money monetization.”
        </div>
        <div className="testimonial-Card3__bottom">
          <div className="testimonial-Card3__bottom-image">
            <img src={Harry} alt="" />
          </div>
          <div className="testimonial-Card3__bottom-heading">
            <h2>Harry Potter</h2>
            <h6>Team Leader @ Gryffindor</h6>
          </div>
        </div>
      </div>
      <div className="testimonial-Card2"></div>
      <div className="testimonial-Card3"></div> */}
    </div>
  );
};

export default TestimonialsCards;
