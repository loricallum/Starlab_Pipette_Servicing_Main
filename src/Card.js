import { useThemeProps } from "@mui/material";
import React from "react";
import "./Card.css";

// function handleClick() {
//     console.log('in cardClick');
// }
// return (
//     <div>
//         <Row>
//         <card onClick={() => handleClick()} style={{cursor : 'pointer'}} >

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        {/* <ButtonBase
            className={useThemeProps.classes.cardAction}
            onClick: event { ... } 
            {">"} */}
      </div>
    </div>
  );
}

export default Card;
