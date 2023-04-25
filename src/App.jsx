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
import Form from "./form/Form";
import LoginForm from "./form/LoginForm";
import Login from "./Login";
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
          <Route path="/logIn" element={<LoginForm />} />
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
