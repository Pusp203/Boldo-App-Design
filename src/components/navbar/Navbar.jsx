import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container__wrappper">
          <div className="navbar-container__wrappper-logo">
            <img src={logo} alt="" />
            <p>Boldo</p>
          </div>
          <div className="navbar-container__wrappper-links">
            <Link to="/product" className="items">
              Product
            </Link>
            <Link to="/services" className="items">
              Services
            </Link>
            <Link to="/about" className="items">
              About
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
                  <Link to="/product" className="item">
                    Product
                  </Link>
                  <Link to="/services" className="item">
                    Services
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
      </div>
    </div>
  );
};

export default Navbar;