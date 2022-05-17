import React from "react";
import "./Home.css";
import Photo from "../components/home components/Photo";
import Description from "../components/home components/Description";
import Titles from "../components/home components/Titles";
import Certifications from "../components/home components/Certifications";

const Home = () => {
  return (
    <div className="home">
      <Photo/>
      <Description />
      <Certifications />
      <Titles />
    </div>
  );
};

export default Home;
