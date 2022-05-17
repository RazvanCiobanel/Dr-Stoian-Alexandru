import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/slices/languageSlice";
import "./Description.css"

function Description() {
  const [description, setDescription] = useState("");

  const language = useSelector(selectLanguage);

  const getDescription = async (language) => {
    const res = await fetch(
      `http://localhost:5000/description/${language}`
    );
    const des = await res.json();
    setDescription(des.description);
  };

  useEffect(() => {
    getDescription(language);
  }, [language]);

  return <div className="description">{description}</div>;
}

export default Description;
