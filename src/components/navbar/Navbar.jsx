import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import ellpse from "../../assets/ellpse.png";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar">
      {/* <div className="navbar-ellipse">
        {" "}
        <img src={ellipse} alt="" />{" "}
      </div> */}
      {/* <div className="navbar__bgimage">
        <img src={ellpse} alt="" />
      </div> */}

      <div className="navbar-container">
        <div className="navbar-container__wrappper">
          <div className="navbar-container__wrappper-logo">
            <Link to="/" className="logos">
              {" "}
              <img className="itemss" src={logo} alt="" />
              <p className="itemss">Boldo</p>
            </Link>
          </div>
          <div className="navbar-container__wrappper-links">
            <Link to="/" className="items">
              Home
            </Link>
            <Link to="/about" className="items">
              About
            </Link>
            <Link to="/blogs" className="items">
              Blogs
            </Link>
            <button className="primary-btn">Log In</button>
          </div>
          <div className="navbar-container__wrappper-hamburgurMenu">
            {toggleMenu ? (
              <RiCloseLine
                className="ri-closeline"
                size={32}
                onClick={handleToggle}
              />
            ) : (
              <GiHamburgerMenu color="azure" size={32} onClick={handleToggle} />
            )}
            {toggleMenu && (
              <div className="navbar-container__wrappper-hamburgurMenu_container">
                <div className="navbar-container__wrappper-hamburgurMenu_container-links">
                  <Link to="/" className="item">
                    Home
                  </Link>
                  <Link to="/blogs" className="item">
                    Blogs
                  </Link>
                  <Link to="/about" className="item">
                    About
                  </Link>
                  <button className="primary-btn">Log In</button>
                  <RiCloseLine
                    className="ri-closeline"
                    size={32}
                    color="black"
                    onClick={handleToggle}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="navbar-container__color"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
