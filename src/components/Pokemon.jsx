import React from "react";
import Description from "./Description";
import PokeImg from "./PokeImg";

const Pokemon = () => {
  const randomId = () => {
    return Math.floor(Math.random() * 20);
  };

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId()}`)
    .then((response) => response.json())
    .then((pokemonData) => {
      const { name, official_artwork } = pokemonData;

    });

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId()}/`)
    .then((response) => response.json())
    .then((pokedexData) => {
      const { flavor_text_entries } = pokedexData;
    });

  return (
    <div>
      <PokeImg pokeimg={official_artwork.front_default} alt={name} />
      <Description name={name} description={flavor_text_entries} />
    </div>
  );
};

export default Pokemon;
