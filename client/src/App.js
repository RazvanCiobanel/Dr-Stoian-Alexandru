import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import General from "./pages/General";
import NonSurgical from "./pages/NonSurgical";
import Plastic from "./pages/Plastic";
import Traumatic from "./pages/Traumatic";
import { useEffect, useState } from "react";



function App() {

  const [titles, setTitles] = useState()

  useEffect(() => {
    getTitles()
  }, [])

  const getTitles = async () => {
    const res = await fetch('http://localhost:5000/titles')
    const titles = await res.json()
    console.log("titluri: ", titles)
    setTitles(...titles)
  }


  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home titles/>} />
          <Route path="general" element={<General />} />
          <Route path="nonsurgical" element={<NonSurgical />} />
          <Route path="plastic" element={<Plastic />} />
          <Route path="traumatic" element={<Traumatic />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}

export default App;
