import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import General from "./pages/General";
import NonSurgical from "./pages/NonSurgical";
import Plastic from "./pages/Plastic";
import Traumatic from "./pages/Traumatic";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
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
