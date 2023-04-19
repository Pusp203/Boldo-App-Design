import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.scss";
import footerLogo from "../../assets/footerLogo.png";
import { useEffect } from "react";

const Footer = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname, key]);
  return (
    <div className="footer">
      <div className="footer-division">
        <div className="footer-division__left">
          <div className="footer-division__left-logo">
            <Link to="/">
              <img src={footerLogo} alt="" />
            </Link>
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <span>All rights reserved.</span>
          </div>

          <div className="footer-division__left-landings">
            <h3>Landings</h3>
            <Link className="footer-division__left-landings-link" to="/">
              Home
            </Link>
            <Link
              className="footer-division__left-landings-link"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="footer-division__left-landings-link"
              to="/services"
            >
              Service
            </Link>
          </div>
        </div>
        <div className="footer-division__right">
          <div className="footer-division__right-company">
            <h3>Company</h3>
            <Link className="footer-division__left-landings-link" to="/">
              Home
            </Link>
            <div className="footer-division__right-company_careers">
              {" "}
              <Link
                className="footer-division__left-landings-link"
                to="/careers"
              >
                Careers
              </Link>
              <button className="hiring-btn">Hiring!</button>
            </div>

            <Link
              className="footer-division__left-landings-link"
              to="/services"
            >
              Services
            </Link>
          </div>
          <div className="footer-division__right-resources">
            <h3>Resources</h3>
            <Link className="footer-division__left-landings-link" to="/blogs">
              Blog
            </Link>
            <Link
              className="footer-division__left-landings-link"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="footer-division__left-landings-link"
              to="/services"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
