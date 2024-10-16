/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

function Card() {
  const [characters, setCharacters] = useState([]);
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array]; // Create a copy to avoid mutating the original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

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
      setShuffledCharacters(specificCharacters); 
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  const handleCardClick = (name) => {
    alert(`You clicked on: ${name}`); 
    setShuffledCharacters((prevCharacters) => shuffleArray(prevCharacters)); 
  };

  return (
    <div>
      <div className="main-container">
        {shuffledCharacters.map((character, index) => (
          <CharacterCard
            key={index}
            {...character}
            onClick={() => handleCardClick(character.name)} 
          />
        ))}
      </div>
    </div>
  );
}

export { Card };
