import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
import { Data } from "./components/testimonials/testimonialsCards/Data";
import Albus from "./assets/Albus.png";
import "./ipl.scss";

const Ipl = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div className="testimonoals">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          padding: "50px",
          gap: "56px",
        }}
      >
        <h1
          style={{
            fontStyle: "normal",

            fontFamily: "Manrope",
            width: "70%",
            color: "white",
            fontSize: "48px",
          }}
        >
          An enterprise template to ramp up your company website
        </h1>
        <div style={{ display: "flex", gap: "28px" }}>
          <div
            style={{
              width: 80,
              height: 65,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
              color: "white",
              fontSize: "60px",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            style={{
              width: 65,
              height: 65,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
              color: "white",
              fontSize: "60px",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <Slider
          className="slick-slider"
          dots
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={3}
          slidesToScroll={1}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {Data.map((val) => {
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
      </div>
    </div>
  );
};

export default Ipl;
