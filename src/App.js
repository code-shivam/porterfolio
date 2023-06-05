import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component /Navbar";
import Home from "./component /Home";

import Projectpage from "./component /Projectpage";
import Footer from "./component /Footer";
import Aboutpage from "./component /Aboutpage";
import Contanctpage from "./component /Contanctpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/contact" element={<Contanctpage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
