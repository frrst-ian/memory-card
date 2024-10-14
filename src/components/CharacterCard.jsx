/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CharacterCard = ({ name, image, saying }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{saying}</p>
    </div>
  );
};

export { CharacterCard };
