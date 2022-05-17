import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/slices/languageSlice";
import './Specialisation.css'

function Specialisation() {
  const [specialisation, setSpecialisation] = useState();

  const id = useParams();
  const pageId = id.id
  const language = useSelector(selectLanguage);


  const getSpecialisation = async (id, language) => {
    const res = await fetch(
      `http://localhost:5000/activities/${id}&${language}`
    );
    const specialisation = await res.json();
    setSpecialisation(specialisation);
  };

  useEffect(() => {
    getSpecialisation(pageId, language);
  }, [pageId, language]);

  return (
    <div className="specialisation">
      {specialisation && (
        <div className="specialisation__body">
          <p>{specialisation.title}</p>
          <ul className="specialisation__list">
            {specialisation.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Specialisation;
