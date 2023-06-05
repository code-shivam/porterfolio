import React from "react";
import "../style/about.css";
import About from "./About";

function Aboutpage() {
  return (
    <div>
      <div className="pagecontainer">
        <h1>About.</h1>
        <p>I Am A Expirence Front-End Developer</p>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default Aboutpage;
