import React, {useState,useEffect} from "react";
import "./Card.css";

 
  function Card(props){

    let angle = useState(Math.random() * 90 - 45)[0];
    let xPos = useState(Math.random() * 40 - 20)[0];	   
    let yPos = useState(Math.random() * 40 - 20)[0];
    let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

 
    return (
      <img
        style={{ transform: transform }}
        className='Card'
        src={props.image}
        alt={props.name}
      />
    );
  
}
export default Card;