import React from "react";

import Banner from "../components/Banner";
import Accordion from "../components/Accordion";

import Collapses from "../data/collapses.json";

import image from "../assets/img/IMG2.png";

const About = () => {
  return (
    <div className="about__page">
      <section className="about__page__section1">
        <Banner cover={image} />
      </section>
      <section className="about__page__section2">
        <div className="about__page__section2__display">
          {Collapses.map((collapse) => {
            return (
              <Accordion
                titre={collapse.title}
                description={collapse.body}
                key={collapse.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
