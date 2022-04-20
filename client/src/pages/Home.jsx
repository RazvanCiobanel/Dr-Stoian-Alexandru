import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const titlesR = useSelector(
    (state) => state.titles.titles
  );

  const actTitles = titlesR[0]?.titles;
  
  return (
    <div className="home-links">
      {actTitles?.map((item) => {
        return (
          <div key={item.id} className="home-link">
            <p>{item.title}</p>
            <Link to={`/${item.id}`}>
              <img
                src={item.icon}
                alt=""
                className="logo"
                height="50px"
                width="50px"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
