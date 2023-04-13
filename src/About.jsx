import React from "react";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Numbers from "./components/numbers/Numbers";
import Article from "./components/article/Article";
import OurTeam from "./components/ourTeam/OurTeam";
import Value from "./components/values/Value";
import Story from "./components/ourStory/Story";
import Images from "./components/images/Images";
import AboutHero from "./components/aboutHero/AboutHero";
import Navbar from "./components/navbar/Navbar";

const About = () => {
  return (
    <div>
      {/* <Story /> */}
      <div className="app__BannerWrapper">
        <Navbar />
        <AboutHero />
      </div>
      {/* <Images /> */}
      <Story />
      <div className="app__BannerWrapper">
        <Numbers />
      </div>
      <OurTeam />
      <div className="app__BannerWrapper">
        <Value />
      </div>
    </div>
  );
};

export default About;
