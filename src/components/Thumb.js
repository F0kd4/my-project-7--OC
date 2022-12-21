import React from "react";
import { Link } from "react-router-dom";

const Thumb = ({ cover, title, link }) => {
  return (
    <article className="thumb">
      <div className="thumb__card">
        <Link to={`/logement/${link}`} className="thumb__card__link">
            <img
              src={cover}
              alt="couverture logement"
              className="thumb__card__img"
            />
            <h2 className="thumb__card__title">{title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default Thumb;
