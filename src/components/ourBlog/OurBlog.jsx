import React from "react";
import "./OurBlog.scss";

const OurBlog = () => {
  return (
    <div className="blog">
      <div className="blog-body">
        <div className="blog-body__top">
          <p>Our Blog</p>
          <h2>Value proposition accelerator product management venture</h2>
        </div>
        <hr />
        <div className="blog-body__bottom">
          <div className="blog-body__bottom-first">
            <h1>We are commited.</h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
          <div className="blog-body__bottom-second">
            <h1>We are responsible.</h1>
            <p>
              Mass market iPhone buzz conversion analytics stock iteration
              responsive web design user experience business plan handshake.
              Return on investment seed round MVP backing supply chain.{" "}
            </p>
          </div>
          <div className="blog-body__bottom-third">
            <h1>We aim for progress.</h1>
            <p>
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
