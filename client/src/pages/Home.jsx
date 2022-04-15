import React from "react";

import { Link } from "react-router-dom";

const Home = ({ titles }) => {
  console.log("props: ",titles)
  // const actTitles = titles[0].titles;
  // console.log("activitate: ", actTitles);
  return (
    <div className="links">
      {/* {actTitles.map((item) => {
        return (
          <div key={item.id} >
            <p>{item.title}</p>
            <img src={item.icon} alt="" className="logo"height="50px" width="50px" />
          </div>
        );
      })} */}
    </div>
  );
};

export default Home;
