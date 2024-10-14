/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

function Card() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacter() {
    try {
      const response = await fetch(`https://futuramaapi.com/api/characters`, {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Invalid");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  fetchCharacter();
  return (
    <div>
      <div className="main-container">
        {characters.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
      </div>
    </div>
  );
}

export { Card };
