import React from "react";
import "./logo.scss";
import boldo from "../../assets/boldo.png";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import e from "../../assets/e.png";
import f from "../../assets/f.png";
import g from "../../assets/g.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-section">
        <img src={g} alt="" />
        <img src={f} alt="" />
        <img src={e} alt="" />
        <img src={d} alt="" />
        <img src={c} alt="" />
        <img src={b} alt="" />
        <img src={a} alt="" />
      </div>
    </div>
  );
};

export default Logo;
