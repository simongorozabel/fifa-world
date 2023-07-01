import { fetchImg } from "../utils/fetchData";
import { useEffect, useState } from "react";

const Image = ({ id, name }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const loadImages = async () => {
      const imageData = await fetchImg(id);

      setImage(imageData);
      console.log(imageData);
    };

    loadImages();
  }, [id]);
  return (
    <img
      src={image}
      alt={name}
      width="200px"
      style={{
        cursor: "pointer",
      }}
    />
  );
};

export default Image;
