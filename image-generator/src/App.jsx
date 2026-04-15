import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ImageGrid from "./Components/ImageGrid";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("http://localhost:5000/images");
      setImages(response.data);
    };

    fetchImages();
  }, []);

  const generateImage = async () => {
    const imageUrl = "https://picsum.photos/200?" + Math.random();

    console.log(imageUrl);
    const response = await axios.post("http://localhost:5000/images", {
      image: imageUrl,
    });
    setImages([...images, response.data]);
    console.log(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/images/${id}`);
    const currImages = images.filter((image) => image.id !== id);
    setImages(currImages);
  };

  return (
    <>
      <Header onClick={generateImage} />
      <ImageGrid images={images} handleDelete={handleDelete} />
    </>
  );
}

export default App;
