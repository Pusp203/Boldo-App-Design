import React from "react";
import "./faqs.scss";
import upArrow from "../../assets/upArrow.png";
import Image from "../../assets/Image.png";
import { Data } from "./Data";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { useState } from "react";
const Faqs = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowing1, setIsShowing1] = useState(false);
  const handleToggle = () => {
    setIsShowing((prev) => !prev);
  };
  const handleToggle1 = () => {
    setIsShowing1((prev) => !prev);
  };
  return (
    <div className="faqs">
      <div className="faqs-body">
        <div className="faqs-body_image">
          {" "}
          <img src={Image} alt="" />
        </div>
        {Data.map((value) => {
          // console.log("value", value);

          return (
            <div className="faqs-body__texts">
              <div className="faqs-body__texts-left">
                <p>{value.paragraph}</p>
              </div>
              <div className="faqs-body__texts-right">
                <div
                  className="faqs-body__texts-right_first"
                  onClick={handleToggle}
                >
                  <p>{value.question}</p>
                  {isShowing ? (
                    <AiFillUpCircle size={32} />
                  ) : (
                    <AiFillDownCircle size={32} />
                  )}
                </div>
                <div>{isShowing && <p>{value.answer}</p>}</div>
                <hr />

                <div
                  className="faqs-body__texts-right_second"
                  onClick={handleToggle1}
                >
                  <p>{value.question}</p>
                  {isShowing1 ? (
                    <AiFillUpCircle size={32} />
                  ) : (
                    <AiFillDownCircle size={32} />
                  )}
                </div>
                <div>{isShowing1 && <p>{value.answer}</p>}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
