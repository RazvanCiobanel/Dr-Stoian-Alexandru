import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getTitles } from "./redux/slices/titlesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitles());
  }, []);

  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
