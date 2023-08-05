import React from "react";
import Description from "./Description";
import PokeImg from "./PokeImg";

const Pokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
    response.json()
  ).then(data => {
    console.log(data);
  });

  return (
    <div>
      <PokeImg pokeimg={pathToImage} alt={name} />
      <Description name={name} description={description} />
    </div>
  );
};

export default Pokemon;
