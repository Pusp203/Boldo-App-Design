import React from "react";
import "./featured.scss";
import rectangle from "../../assets/rectangle.png";
import chandler from "../../assets/chandler.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-body">
        <div className="featured-body_image">
          <img src={rectangle} alt="" />
        </div>
        <div className="featured-body_text">
          <div className="featured-body_text-main">
            <div className="featured-body_text-main-headings">
              <h2>Category</h2>
              <p>November 22, 2021</p>
            </div>
            <div className="featured-body_text-main-paragraph">
              <p>Pitch termsheet backing validation focus release.</p>
            </div>
          </div>
          <div className="featured-body_text-bottom">
            <img src={chandler} alt="" />
            <h4>Chandler Bing</h4>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Featured;
