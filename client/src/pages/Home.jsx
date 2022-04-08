import React from "react";
import activities from "../data/activities";
import { Link } from "react-router-dom";

const Home = () => {
  const activity = activities.activities[0].activity;
  console.log("activitate: ", activity);
  return (
    <div className="links">
      {activity.map((item) => {
        return (
          <div key={item.id} >
            <p>{item.title}</p>
            <img src={item.icon} alt="" className="logo"height="50px" width="50px" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
