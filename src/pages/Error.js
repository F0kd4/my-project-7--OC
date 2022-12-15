import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error__page">
        <h1 className="bigerror">404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <NavLink className="backlink" to="/">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
