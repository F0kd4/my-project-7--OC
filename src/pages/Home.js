import React from "react";
import { Link } from "react-router-dom";


import Homebanner from "../components/Homebanner";
import Thumb from "../components/Thumb";

import Logements from "../data/logements.json";

import image from "../assets/img/IMG.svg";

const Home = () => {
  return (
    <div className="home_page">
      <section className="home__page__section1">
        <Homebanner cover={image}/>
      </section>
      <section className="home__page__section2">
        {Logements.map((logement) => {
          return (
            <article key={logement.id}>
              <Link to={`/logement/${logement.id}`}>
                <Thumb cover={logement.cover} title={logement.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
