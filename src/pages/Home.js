import React from "react";

import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

import Logements from "../data/logements.json";

import image from "../assets/img/IMG.png";

const title = "Chez vous, partout et ailleurs";

const Home = () => {
  return (
    <div className="home__page">
      <section className="home__page__section1">
        <Banner cover={image} title={title} />
      </section>
      <section className="home__page__section2">
        <div className="home__page__section2__display">
          {Logements.map((logement) => {
            return (
              <Thumb
                cover={logement.cover}
                title={logement.title}
                link={logement.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
