import FetchImage from "./FetchImage";
import FetchDescription from "./FetchDescription";

const RenderData = ({ name, image, description }) => {
  return (
    <div>
      <FetchImage pathToImage={image} alt={name} />
      <FetchDescription name={name} description={description} />
    </div>
  );
};

export default RenderData;
