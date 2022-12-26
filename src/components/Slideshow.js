import React, { useState } from "react";

import fleche from "../assets/img/flecheslide.svg";

function Slideshow({ images }) {
  let [img, changeImg] = useState(0);
  let nbrImg = images.length;

  const previousImg = () => {
    if (img === 0) {
      changeImg(nbrImg - 1);
    } else {
      changeImg(img - 1);
    }
    return changeImg;
  };

  const nextImg = () => {
    if (img === nbrImg - 1) {
      changeImg((nbrImg = 0));
    } else {
      changeImg(img + 1);
    }
    return changeImg;
  };

  return (
    <div className="slideshow">
      {nbrImg > 1 && (
        <img
          className="fleche fleche-gauche"
          src={fleche}
          alt="flèche slider précédent"
          onClick={previousImg}
        />
      )}
      <img className="slideshow__img actif" src={images[img]} alt="Logement" />
      <div className="slideshow__compteur actif">
        {img + 1}/{nbrImg}
      </div>
      {nbrImg > 1 && (
        <img
          className="fleche fleche-droite"
          src={fleche}
          alt="flèche slider suivant"
          onClick={nextImg}
        />
      )}
    </div>
  );
}

export default Slideshow;
