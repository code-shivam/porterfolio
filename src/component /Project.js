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
      view:"https://647dc6eb6b3eef0782dd4e54--tourmaline-muffin-e2416a.netlify.app/"
,code:"https://github.com/code-shivam/portfolio",
    },
    {
      id: 2,
      name: "Ticket Booking app",
      image: project02,
      discription:
        "Technology Used - React ,React-redux ",
        view :"https://64781fbf43afce30c9a2380a--tourmaline-muffin-e2416a.netlify.app/",
        code:"https://github.com/code-shivam/ticket-booking-app"
    },
    {
      id: 3,
      name: "Thali bookin app",
      image: project03,
      discription: "Technology Used - React ,React-redux",
      view :"https://647dc465d02a2b09072b9304--tourmaline-muffin-e2416a.netlify.app/"
,code:"https://github.com/code-shivam/thaliapp"
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
              <a href={el.view} target="blank"><button className=" projectbtn">View</button></a>
              <a href={el.code} target="blank"><button className=" projectbtn">Code</button></a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
