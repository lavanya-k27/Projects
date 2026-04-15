import { useState } from "react";
import Header from "./Components/Header";
import ImageGrid from "./Components/ImageGrid";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const generateImage = () => {
    const imageUrl = "https://picsum.photos/200?" + Math.random();
    setImages([...images, imageUrl]);
  };

  return (
    <>
      <Header onClick={generateImage} />
      <ImageGrid images={images} />
    </>
  );
}

export default App;
