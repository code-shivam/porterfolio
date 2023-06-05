import React from "react";
import project01 from "../photo/project01.png";
import project02 from "../photo/project02.png";
import project03 from "../photo/project03.png";
import "../style/project.css";
import Projectpage from "./Projectpage";

function Project() {
  const data = [
    {
      id: 1,
      name: "My Portfolio",
      image: project01,
      discription: "Technology Used - React ",
    },
    {
      id: 2,
      name: "Ticket Booking app",
      image: project02,
      discription:
        "Technology Used - React ,React-redux ",
    },
    {
      id: 3,
      name: "Thali bookin app",
      image: project03,
      discription: "Technology Used - React ,React-redux",
    },
  ];
  return (
    <div className="container">
      <h1>Project</h1>

      <div className=" projects ">
        {data.map((el) => {
          return (
            <div className="  project" key={el.id}>
              <img className="image" src={el.image} alt="photo" />
              <h3> {el.name}</h3>
              <p> {el.discription} </p>
              <div className="btnseaction">
              <a><button className=" projectbtn">View</button></a>
              <a><button className=" projectbtn">Code</button></a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
