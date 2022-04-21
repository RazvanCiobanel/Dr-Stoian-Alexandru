import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setTitles } from "../redux/slices/titlesSlice";

const Home = () => {
  const titlesR = useSelector(setTitles);

  const actTitles = titlesR.titles;
  
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
