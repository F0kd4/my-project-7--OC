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
          {Collapses.map((collapse, index) => {
            return (
              <Accordion
                key={index}
                titre={collapse.title}
                description={collapse.body}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
