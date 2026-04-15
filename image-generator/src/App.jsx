import Header from "./Components/Header";
import ImageGrid from "./Components/ImageGrid";
import axios from "axios";
import { images } from "./imageList";
import "./App.css";

function App() {
  const generateImage = async () => {
    let response = await axios.get("https://picsum.photos/200");
    let image = response.data;
    images.push({ id: 3, image: image });
  };

  console.log(images);

  return (
    <>
      <Header onClick={generateImage} images={images} />
      <ImageGrid />
    </>
  );
}

export default App;
