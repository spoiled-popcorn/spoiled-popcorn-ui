import React from "react";

import "./Card.css";

import Rating from "../Rating/Rating";

const Card = ({film}) => {
  return (
    <div className="Card">
      <img src={film.pictureUrl} alt="" />
      <p>{film.title}</p>
      <p>{film.year}</p>
      <p>{film.director}</p>
      <Rating value={film.rating}></Rating>
    </div>
  )
}

export default Card;