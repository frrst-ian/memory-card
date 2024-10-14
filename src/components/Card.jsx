/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Card() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/futurama/characters"
      );
      const data = await response.json();
      const simplifiedData = data.map((character) => ({
        name: character.name.first + " " + character.name.last,
        image: character.images.main,
        saying: character.sayings[0] || "No saying",
      }));
      console.log("First character:", data[0]);
      setCharacters(simplifiedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
}

export { Card };
