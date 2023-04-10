import React from "react";
import HeroSection from "./components/herosection/HeroSection";
import Logo from "./components/logos/Logo";
import Heading from "./components/heading/Heading";
import Service from "./components/services/Service";
import FirstSection from "./components/sections/FirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import Faqs from "./components/faqs/Faqs";

const Products = () => {
  return (
    <div>
      <div className="app__BannerWrapper">
        <HeroSection />
        <Logo />
      </div>
      <Heading />
      <Service />
      <FirstSection />
      <SecondSection />
      <Testimonials />
      <Blog />
      <Article />
      <Faqs />
    </div>
  );
};

export default Products;
