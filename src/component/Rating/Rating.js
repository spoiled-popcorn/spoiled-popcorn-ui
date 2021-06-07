import React from "react";

import "./Rating.css";

const Rating = ({rating}) => {
  let style = {
    "--rating": rating / 2,
  };
  let label = `Rating of this product is ${rating} out of 10.`;
  return (
    <div>
      <p>Rating:&nbsp;{rating}/10</p>
      <div className="Rating">
        <div className="Popcorn" style={style} aria-label={label}></div>
      </div>
    </div>
  )
}

export default Rating;