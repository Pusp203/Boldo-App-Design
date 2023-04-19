import React, { useState } from "react";
import "./faqs.scss";
import upArrow from "../../assets/upArrow.png";
import Image from "../../assets/Image.png";
import { Data } from "./Data";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const Faqs = () => {
  const [data, setData] = useState(Data);

  const handleToggle = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].isShowing = !newData[index].isShowing;
      return newData;
    });
  };

  return (
    <div className="faqs">
      <div className="faqs-body">
        <div className="faqs-body_image">
          <img src={Image} alt="" />
        </div>
        <div className="faqs-body__texts">
          <div className="faqs-body__texts-left">
            <p>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
          </div>
          <div className="faqs-body__texts-right">
            {data.map((value, index) => {
              return (
                <div
                  className="faqs-body__texts-right-top"
                  key={index}
                  onClick={() => handleToggle(index)}
                >
                  <div className="faqs-body__texts-right-top-question">
                    <p>{value.question}</p>
                    <h4>
                      {value.isShowing ? (
                        <AiFillUpCircle size={32} />
                      ) : (
                        <AiFillDownCircle size={32} />
                      )}
                    </h4>
                  </div>
                  <div>
                    {value.isShowing && <p>{value.answer}</p>}
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
