import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src=".\LOGO.svg" className="header__logo" alt="Logo Kasa" />
      </NavLink>
      <div className="header__navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
