import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
// import "./ipl.css";
import Albus from "./assets/Albus.png";
import { Data } from "./components/testimonials/testimonialsCards/Data";

const Ipl = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      {/* <h1>Ipl</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
        <div style={{ margin: 30 }}>
          <Slider
            dots
            dotsClass="slick-dots line-indicator"
            ref={sliderRef}
            slidesToShow={4}
            slidesToScroll={4}
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
            <img src={Albus} alt="" />
            <img src={Albus} alt="" />
            <img src={Albus} alt="" />
            <img src={Albus} alt="" />
            <img src={Albus} alt="" />
            {/* {Array(10)
              .fill("")
              .map(() => (
                <img src={Albus} alt="" />
                // <div style={{ margin: 20 }}>
                //   <img
                //     style={{
                //       width: 310,
                //       objectFit: "contain",
                //       borderRadius: 10,
                //     }}
                //     src="https://resources.platform.iplt20.com/photo-resources/2021/05/02/25eae35d-5165-4608-b666-a27501622f02/H4pPnjIC.jpg?width=390&height=219"
                //     alt=""
                //   />
                // </div>
              ))} */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Ipl;
