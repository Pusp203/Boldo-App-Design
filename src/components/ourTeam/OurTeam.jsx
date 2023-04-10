import React from "react";
import "./ourTeam.scss";
import { data } from "./Data";

const OurTeam = () => {
  console.log(data);
  return (
    <div className="team">
      <div className="team-body">
        <div className="team-body__top">
          <div className="team-body__top-heading">
            <h4>Our team</h4>
            <h2>The leadership team</h2>
          </div>
          <div className="team-body__top-paragraph">
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.{" "}
            </p>
          </div>
        </div>
        <div className="team-body__bottom">
          {data.map((values) => {
            console.log("first", values);
            return (
              <div className="team-body__bottom-mappedValue">
                <div className="team-body__bottom-mappedValue-image">
                  {/* <p>{values.image}</p> */}
                  <img src={values.image} alt="" />
                </div>
                <div className="team-body__bottom-mappedValue-bottomTxt">
                  {" "}
                  <p>{values.name}</p>
                  <h5>{values.post}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
