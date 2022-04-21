import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getTitles } from "./redux/slices/titlesSlice";
import { selectLanguage } from "./redux/slices/languageSlice";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage)

  useEffect(() => {
    dispatch(getTitles(language));
  }, [language]);

  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
