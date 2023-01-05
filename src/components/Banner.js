import React from "react";
import PropTypes from "prop-types";

const Homebanner = ({ cover, title }) => {
  return (
    <div className="homebanner">
      <img
        src={cover}
        alt="illustration bannière"
        className="homebanner__img"
      />
      <h1 className="homebanner__title">{title}</h1>
    </div>
  );
};

Homebanner.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Homebanner;
