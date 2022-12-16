import React from "react";

const Homebanner = ({ cover }) => {
  return (
    <div className="homebanner">
      <img
        src={cover}
        alt="illustration bannière"
        className="homebanner__img"
      />
      <h1 className="homebanner__title">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Homebanner;
