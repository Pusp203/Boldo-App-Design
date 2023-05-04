import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef, useEffect } from "react";
import { Data } from "./components/testimonials/testimonialsCards/Data";
import Albus from "./assets/Albus.png";
import "./testimonial.scss";

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // console.log(sliderRef);
  }, []);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="testimonoals ">
      <div className="testimonoals-division">
        <div className="testimonoals-division-header">
          <h1 className="testimonoals-division-header-heading">
            An enterprise template to ramp up your company website
          </h1>
          <div className="testimonoals-division-header-buttons">
            <div
              className="testimonoals-division-header-buttons-left"
              onClick={handlePrev}
            >
              <AiOutlineArrowLeft color="white" size={32} />
            </div>
            <div
              className="testimonoals-division-header-buttons-left"
              onClick={handleNext}
            >
              <AiOutlineArrowRight color="white" size={32} />
            </div>
          </div>
        </div>
        <div className="testimonoals-division-bottom">
          <Slider
            dots="false"
            dotsClass="slick-dots line-indicator"
            arrows={false}
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
            responsive={[
              {
                breakpoint: 1060,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {Data.map((val) => {
              return (
                <div className="testimonoals-division-bottom-card" key={val.id}>
                  <div className="testimonoals-division-bottom-card-Card1">
                    <div className="testimonoals-division-bottom-card-Card1__top">
                      {val.quote}
                    </div>
                    <div className="testimonoals-division-bottom-card-Card1__bottom">
                      <div className="testimonoals-division-bottom-card-Card1__bottom-image">
                        <img src={Albus} alt="" />
                      </div>
                      <div className="testimonoals-division-bottom-card-Card1__bottom-heading">
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
    </div>
  );
};

export default Testimonial;
