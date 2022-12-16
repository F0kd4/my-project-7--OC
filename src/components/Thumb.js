import React from "react";

const Thumb = ({ cover, title }) => {
  return (
    <div className="thumb">
      <div className="thumb__card">
        <img src={cover} alt="couverture logement" className="thumb__card__img" />
        <h2 className="thumb__card__title">{title}</h2>
      </div>
    </div>
  );
};

export default Thumb;
