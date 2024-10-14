/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

function Card() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
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

      const specificCharacters = data.items.filter((character) =>
        [
          "Philip J. Fry",
          "Bender Bending Rodríguez",
          "Snoop Dogg's head",
          "Matt Groening's head",
          "Mom",
          "Njörd",
          "Bigfoot",
          "Ronald Reagan's head",
          "Thomas Jefferson's head",
          "Theodore Roosevelt's head",
          "Loch Ness Monster",
        ].includes(character.name)
      );
      setCharacters(specificCharacters);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
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
