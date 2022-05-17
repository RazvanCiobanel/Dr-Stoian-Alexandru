import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Titles.css"
import { selectTitles } from "../../redux/slices/titlesSlice"

function Titles() {
    const titlesR = useSelector(selectTitles);
    
  return (
    <div className='home__links'>
        {titlesR.titles?.map((item) => {
        return (
          <div key={item.id} className="home__links__link">
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
      })}</div>
  )
}

export default Titles