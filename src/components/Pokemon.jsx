import React from "react";
import Description from "./Description";
import PokeImg from "./PokeImg";
import { useState, useEffect } from "react";

const Pokemon = () => {
  const [randomId, setRandomId] = useState(() =>
    Math.floor(Math.random() * 20)
  );
  const [pokeName, setPokeName] = useState("");
  const [pokeImage, setPokeImage] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((pokemonData) => {
        setPokeImage(pokemonData.official_artwork.front_default);
        setPokeName(pokemonData.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}/`)
  //   .then((response) => response.json())
  //   .then((pokedexData) => {
  //     const { flavor_text_entries } = pokedexData;
  //     console.log(flavor_text_entries);
  //   });

  return (
    <div>
      <PokeImg pathToImage={pokeImage} name={pokeName} />
      {/* <Description name={name} description={flavor_text_entries} /> */}
    </div>
  );
};

export default Pokemon;
