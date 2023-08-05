import React from "react";
import Description from "./Description";
import PokeImg from "./PokeImg";

const Pokemon = () => {
    const randomId = () => {
        return Math.floor(Math.random() * 1281)
    }

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId()}`).then((response) =>
    response.json()
  ).then(data => {
    const {name, official_artwork, }
  });

  return (
    <div>
      <PokeImg pokeimg={pathToImage} alt={name} />
      <Description name={name} description={description} />
    </div>
  );
};

export default Pokemon;
