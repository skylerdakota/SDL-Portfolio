import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card sm-6 card mt-5 text-center card-about">{props.children} </div>
  );
}

export default Card;
