import React from "react";
import { data } from "./Data";

import "./value.scss";
const Value = () => {
  return (
    <div className="values">
      <div className="values-body">
        <div className="values-body__top">
          <div className="values-body__top-heading">
            <h4>Our Values</h4>
            <h2>Things in we believe</h2>
          </div>
          <div className="values-body__top-paragraph">
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </div>
        </div>
        <div className="values-body-bottom">
          {data.map((values, index) => {
            // console.log("first", values);
            return (
              <div className="values-body-bottom-data" key={index}>
                <div className="values-body-bottom-data-image">
                  {/* <p>{values.image}</p> */}
                  <img src={values.image} alt="" />
                </div>
                <div className="values-body-bottom-data-bottomTxt">
                  {" "}
                  <p>{values.topic}</p>
                  <h5>{values.paragraph}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Value;
