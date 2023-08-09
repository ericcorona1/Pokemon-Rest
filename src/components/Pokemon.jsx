import PokeImage from "./PokeImage";
import PokedexEntry from "./PokedexEntry";

const RenderData = ({ name, image, description }) => {
  return (
    <div>
      <PokeImage pathToImage={image} alt={name} />
      <PokedexEntry name={name} description={description} />
    </div>
  );
};

export default RenderData;
