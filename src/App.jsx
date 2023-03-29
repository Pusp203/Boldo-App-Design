import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/herosection/HeroSection";

import "./styles/components/app.scss";
import Banner from "./components/banner";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <div className="app__BannerWrapper"> */}
        <HeroSection />
        {/* </div> */}
        <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
