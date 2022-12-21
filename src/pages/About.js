import React from "react";

import Banner from "../components/Banner";

import image from "../assets/img/IMG2.png";

const About = () => {
  return (
    <div className="about__page">
      <section className="about__page__section1">
        <Banner cover={image} />
      </section>
    </div>
  );
};

export default About;
