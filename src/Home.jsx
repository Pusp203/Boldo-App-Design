import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Heading from "./components/heading/Heading";
import Service from "./components/services/Service";
import FirstSection from "./components/sections/FirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import Cta from "./components/callToAction/Cta";
import Footer from "./components/footer/Footer";
import Faqs from "./components/faqs/Faqs";
import Testimonial from "./Testimonial";
import Logo from "./components/logos/Logo";

const Home = () => {
  return (
    <div>
      <div className="app__BannerWrapper">
        <HeroSection />
        <Logo />
      </div>
      {/* <Heading /> */}
      <Service />
      <FirstSection />
      <SecondSection />
      <div className="app__BannerWrapper">
        <Testimonial />
      </div>
      <Blog />
      <Article />
      <Faqs />
    </div>
  );
};

export default Home;
