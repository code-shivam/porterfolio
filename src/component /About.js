import React from "react";
import "../style/about.css";
import Resume from "../pdf/Resume.pdf";

function About() {
  return (
    <div className="about">
      <div className="leftseaction">
        <h1>WhoAm I ?</h1>
        <p>
          Im a React Front-End Developer.
          <br /> I create reponsive and secure <br />
          websites.
        </p>
        <a href={Resume} download="Resume.pdf">
          <button className="aboutbtn">Resume</button>
        </a>
      </div>
      <div className="rightseaction">
        <img
          className="frontphoto"
          src="https://d2ms8rpfqc4h24.cloudfront.net/React_JS_for_Enterprise_Application_Development_63c3d01e8d.jpg"
        />

        <img
          className="backphoto"
          src="https://kinsta.com/wp-content/uploads/2022/06/what-is-react-js-feature-image-1024x512.png"
        />
      </div>
    </div>
  );
}

export default About;
