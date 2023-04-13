import React from "react";
import Article from "./article/Article";
import OurBlog from "./ourBlog/OurBlog";
import Navbar from "./navbar/Navbar";
import Featured from "./featured/Featured";
import Heading from "./heading/Heading";

const Blogs = () => {
  return (
    <div>
      <div className="app__BannerWrapper">
        <Navbar />
      </div>
      <Heading />
      <Featured />

      <Article />
    </div>
  );
};

export default Blogs;
