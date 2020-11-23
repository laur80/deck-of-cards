import React from "react";
import "./Card.css";

function Card(props){
  
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
  let  _transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  
  
    return (
      <img
        style={{ transform: _transform }}
        className='Card'
        src={props.image}
        alt={props.name}
      />
    );
  
}
export default Card;
