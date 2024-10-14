/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CharacterCard = ({ image, name }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export { CharacterCard };
