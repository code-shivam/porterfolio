import React from "react";
import "../style/home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
import { useNavigate } from "react-router-dom";

function Home() {
  const navgation = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="seaction">
          <p>HI, I'M shivam singh </p>
          <h1>FRONTEND REACT DEVELOPER</h1>
          <div>
            <button className="btn yellow">Project</button>
            <button className=" btn" onClick={() => navgation("/contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <About />
      <Project />
     
    </div>
  );
}

export default Home;
