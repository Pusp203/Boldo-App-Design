import React from "react";
import "./testimonial.scss";
import { Data } from "./testimonialsCards/Data";

import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Arrows from "../../assets/Arrows.png";
import TestimonialsCards from "./testimonialsCards/TestimonialsCards";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/types";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// import "swiper/css";

const Testimonials = () => {
  // const [index, setIndex] = useState(0);
  // // const [name, email, id, quote] = Data[index];
  // const leftTestimonialHandler = () => {};
  // const rightTestimonialHandler = () => {
  //   setIndex((prev) => prev + 1);
  // };
  return (
    <section className="testimonials">
      <div className="containers">
        <div className="testimonials-content">
          <h2>An enterprise template to ramp up your company website</h2>
          {/* <div className="testimonials-content-arrows">
            <AiOutlineArrowLeft color="white" size={40} />
            <AiOutlineArrowRight color="white" size={40} />
          </div> */}
        </div>
        <div className="testimonials-cards">
          <TestimonialsCards />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
