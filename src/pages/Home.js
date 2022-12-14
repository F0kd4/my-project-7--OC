import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_page">
        <div className="home_page_section1">
          <h1 className="home_page_section1_txt">
            Chez vous, partout et ailleurs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
