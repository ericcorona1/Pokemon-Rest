import "./App.css";
import React, { useEffect, useState } from "react";
import RenderData from "./components/RenderData";
import RandomBtn from "./components/RandomBtn";
import Footer from "./components/Footer";

function App() {
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 1010));
  console.log(randomId);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Fetch Pokemon Data and set it
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.sprites.other["official-artwork"].front_default);
        setName(data.name);
      });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}/`)
      .then((response) => response.json())
      .then((data) => {
        const flavorText = data.flavor_text_entries;
        const englishPokedexEntry = flavorText.find(
          (entry) => entry.language.name === "en"
        );
        setDescription(
          englishPokedexEntry
            ? englishPokedexEntry.flavor_text
            : `This Pokemon doesn't have an English Pokedex entry`
        );
      });
  }, [randomId]);

  const generateRandomId = () => {
    const newRandomId = Math.floor(Math.random() * 1010);
    setRandomId(newRandomId);
  };

  return (
    <div>
      <RenderData name={name.toUpperCase()} image={image} description={description} />
      <RandomBtn newRandomId={generateRandomId} />
      <Footer />
    </div>
  );
}

export default App;
