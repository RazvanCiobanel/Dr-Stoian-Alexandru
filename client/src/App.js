import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
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
