import React from "react";
import "./testiMonialsCards.scss";
import Albus from "../../../assets/Albus.png";
import Severus from "../../../assets/Severus.png";
import Harry from "../../../assets/Harry.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";

import { Data } from "./Data";

const TestimonialsCards = () => {
  return (
    <div className="testimonial">
      {/* <div className="card"> */}

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
    </div>
  );
};

export default TestimonialsCards;
