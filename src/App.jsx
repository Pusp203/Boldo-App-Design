import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/herosection/HeroSection";

import "./styles/components/app.scss";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";
import Cta from "./components/callToAction/Cta";
import Article from "./components/article/Article";
import Faqs from "./components/faqs/Faqs";
import Testimonials from "./components/testimonials/Testimonials";
import FirstSection from "./components/sections/FirstSection";
import Logo from "./components/logos/Logo";
import SecondSection from "./components/secondSection/SecondSection";
// import Blog from "./components/blog/Blog";
// import OurBlog from "./components/ourBlog/OurBlog";
import Slickss from "./components/testimonials/Slickss";
import Numbers from "./components/numbers/Numbers";
import Featured from "./components/featured/Featured";
import Story from "./components/ourStory/Story";
import Value from "./components/values/Value";
import OurTeam from "./components/ourTeam/OurTeam";
import About from "./About";
import Testimonial from "./components/Carosuelss";
import Home from "./Home";
import Blogs from "./components/Blogs";
import Testi from "./components/Testi";
import Ipl from "./Ipl";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__BannerWrapper">
          <Navbar />
        </div>

        {/* <Testimonials /> */}

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} /> */}
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
            <Products />*/
}
{
  // <About />
  // <Story />
}
