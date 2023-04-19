import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/components/app.scss";
import Footer from "./components/footer/Footer";
import Cta from "./components/callToAction/Cta";

import About from "./About";
import Home from "./Home";
import Blogs from "./components/Blogs";
import Ipl from "./Ipl";
import Images from "./components/images/Images";
import Rupal from "./Testimonial";
import Testimonial from "./Testimonial";
import Logo from "./components/logos/Logo";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__BannerWrapper">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <Cta />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
/**/

{
  /* <div className="app__BannerWrapper">
        <HeroSection />
         {/*      
             <Numbers />
           <Services /> 
            <Products />
               {/* <Ipl />
        <Rupal /> **/
}
{
  // <About />
  // <Story />
}
