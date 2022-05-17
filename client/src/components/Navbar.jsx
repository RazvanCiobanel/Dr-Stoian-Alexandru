import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flags from "country-flag-icons/react/3x2";
import "./Navbar.css";
import { selectTitles } from "../redux/slices/titlesSlice";
import { changeLanguage } from "../redux/slices/languageSlice";
import { selectLanguage } from "../redux/slices/languageSlice";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 2px;
  display: inline-block;
  margin-bottom: 5px;
  color: black;

  &:focus,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  const titles = useSelector(selectTitles);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const handleLanguage = (e) => {
    dispatch(
      changeLanguage(e.target.nearestViewportElement.id)
    );
  };

  const displayFlag = (language) => {
    if (language === "rom") {
      return (
        <Flags.GB
          onClick={(e) => handleLanguage(e)}
          id="en"
          title="english"
          className="flag"
        />
      );
    } else if (language === "en") {
      return (
        <Flags.RO
          title="română"
          id="rom"
          onClick={(e) => handleLanguage(e)}
          className="flag"
        />
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <ul className="navbar__ul">
          <li>
          <StyledLink to="/">Home</StyledLink>
          </li>
          {titles &&
            titles.titles?.map((item) => (
              <li key={item.id}>
              <StyledLink  to={`/${item.id}`}>
                {item.link}
              </StyledLink>
              </li>
            ))}
        </ul>
      </div>
      <div className="navbar__flag">
        {displayFlag(language)}
      </div>
    </nav>
  );
};

export default Navbar;
