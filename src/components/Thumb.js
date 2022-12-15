import React from "react";

const Thumb = ({ cover, title }) => {
  return (
    <div className="thumb">
      <div className="logement__card">
        <img src={cover} alt="couverture logement" />
        <h2 className="logement__card__title">{title}</h2>
      </div>
    </div>
  );
};

export default Thumb;
