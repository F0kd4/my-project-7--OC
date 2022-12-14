import React from "react";
import { NavLink } from "react-router-dom";
import Logowhite from "../assets/img/LOGOWHITE.svg";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/">
        <img src={Logowhite} alt="Logo Kasa" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
