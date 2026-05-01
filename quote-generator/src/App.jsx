import { useState } from "react";
import SelectBox from "./components/SelectBox";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <SelectBox handleChange={handleChange} />
      <Quotes selectedValue={selectedValue} />
    </>
  );
}

export default App;
