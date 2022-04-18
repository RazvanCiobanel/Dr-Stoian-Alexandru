import React, { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getTitles();
  }, []);

  const getTitles = async () => {
    const res = await fetch("http://localhost:5000/titles");
    const titles = await res.json();
    setTitles([...titles]);
  };
  const actTitles = titles[0]?.titles;
  console.log("titluri: ", actTitles);
  return (
    <div className="home-links">
      {actTitles?.map((item) => {
        return (
          <div key={item.id}
          className="home-link">
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
      <Outlet />
    </div>
  );
};

export default Home;
