import React from "react";
import { useParams, Navigate } from "react-router-dom";

import Logements from "../data/logements.json";

import fullstar from "../assets/img/fullstar.svg";
import emptystar from "../assets/img/emptystar.svg";

import Accordion from "../components/Accordion";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";

const Logement = () => {
  const { logementId } = useParams();
  const oneLogement = Logements.find((logement) => logement.id === logementId);

  const ratingStars = [];
  let fullStar = true;
  const ratingLogement = parseInt(oneLogement?.rating);
  for (let i = 0; i < 5; i++) {
    if (ratingLogement <= i) {
      fullStar = false;
    }
    if (fullStar) {
      ratingStars.push(
        <img
          key={i}
          className="star"
          src={fullstar}
          alt="notation étoile pleine"
        />
      );
    } else {
      ratingStars.push(
        <img
          key={i}
          className="star"
          src={emptystar}
          alt="notation étoile vide"
        />
      );
    }
  }

  const tags = oneLogement.tags.map((tag, index) => {
    return <Tag key={index} tag={tag} />;
  });

  const equipmentsDescription = oneLogement.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <>
      {oneLogement ? (
        <div className="logement__page">
          <Slideshow images={oneLogement.pictures} />
          <div className="ficheLogement">
            <div className="ficheLogement__info">
              <span className="ficheLogement__info__title">
                {oneLogement?.title}
              </span>
              <span className="ficheLogement__info__location">
                {oneLogement?.location}
              </span>
              <div className="tags">{tags}</div>
            </div>
            <div className="ficheLogement__owner">
              <div className="ficheLogement__owner__info">
                <span className="ownerName">{oneLogement.host.name}</span>
                <img
                  className="profilpicture"
                  src={oneLogement?.host.picture}
                  alt="Profil propriétaire"
                />
              </div>
              <div className="ratingStars">{ratingStars}</div>
            </div>
          </div>
          <div className="ficheLogement__description">
            <Accordion
              titre="Description"
              description={oneLogement?.description}
            />
            <Accordion
              titre="Équipements"
              description={equipmentsDescription}
            />
          </div>
        </div>
      ) : (
        <Navigate replace to="/error" />
      )}
    </>
  );
};

export default Logement;
