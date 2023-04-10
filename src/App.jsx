import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/herosection/HeroSection";

import "./styles/components/app.scss";
import Footer from "./components/footer/Footer";
import Service from "./components/services/Service";
import Heading from "./components/heading/Heading";
import Cta from "./components/callToAction/Cta";
import Article from "./components/article/Article";
import Faqs from "./components/faqs/Faqs";
import Testimonials from "./components/testimonials/Testimonials";
import FirstSection from "./components/sections/FirstSection";
import Logo from "./components/logos/Logo";
import SecondSection from "./components/secondSection/SecondSection";
import Blog from "./components/blog/Blog";
import OurBlog from "./components/ourBlog/OurBlog";
import Slickss from "./components/testimonials/Slickss";
import Services from "./Services";
import Products from "./Products";
import Numbers from "./components/numbers/Numbers";
import Featured from "./components/featured/Featured";
import Story from "./components/ourStory/Story";
import Value from "./components/values/Value";
import OurTeam from "./components/ourTeam/OurTeam";
import About from "./About";
function App() {
  return (
    // <div className="app">
    <BrowserRouter>
      <div className="app__BannerWrapper">
        <Navbar />
      </div>
      {/* <HeroSection />
        <Logo />
       <Heading />
      <Service />
      <FirstSection />
      <SecondSection />
      <Testimonials />
      <Blog />
      <Article />
      <Faqs /> */}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Cta />
      <Footer />
      {/*

    
     
     


     */}
      {/*      
          
               <Numbers />
            --done */}

      {/* <Services /> 
            <Products />*/}
    </BrowserRouter>
  );
}

export default App;
/* <OurBlog /> */

{
  /* <div className="app__BannerWrapper">
        <HeroSection />
       
      </div> */
}
{
  // <About />
  // <Story />
}
