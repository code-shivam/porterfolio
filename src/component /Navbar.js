import React from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className="linkseaction">
        <h3 onClick={() => navigate("/")}>Home</h3>
        <h3 onClick={() => navigate("/about")}>About</h3>
        <h3 onClick={() => navigate("/project")}>Project</h3>
        <h3 onClick={() => navigate("/contact")}>Contact</h3>
      </div>
    </div>
  );
}

export default Navbar;
