import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-division">
        <div className="footer-division__left">
          <div className="footer-division__left-logo">
            <img src={footerLogo} alt="" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <span>All rights reserved.</span>
          </div>

          <div className="footer-division__left-landings">
            <h3>Landings</h3>
            <p>Home</p>
            <p>Products</p>
            <p>Service</p>
          </div>
        </div>
        <div className="footer-division__right">
          <div className="footer-division__right-company">
            <h3>Company</h3>
            <p>Home</p>
            <div className="footer-division__right-company_careers">
              {" "}
              <p>Careers</p> <button className="hiring-btn">Hiring!</button>
            </div>

            <p>Services</p>
          </div>
          <div className="footer-division__right-resources">
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
