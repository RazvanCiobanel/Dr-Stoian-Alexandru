import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Certifications.css";
import { selectLanguage } from "../../redux/slices/languageSlice";

function Certifications() {
  const [certifications, setCertifications] = useState();
  const language = useSelector(selectLanguage);

  const getCertifications = async (language) => {
    const res = await fetch(
      `http://localhost:5000/certifications/${language}`
    );
    const cert = await res.json();
    setCertifications(cert);
  };

  useEffect(() => {
    getCertifications(language);
  }, [language]);

  return (
    <div className="certifications">
      {certifications && (
        <>
          <p className="certifications__title">{certifications?.title}:</p>
          <ul className="certifications__list">
            {certifications.cert.map((item) => (
              <li className="list__item" key={item}>
                -{item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Certifications;
