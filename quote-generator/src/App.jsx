import { useState } from "react";
import SelectBox from "./components/SelectBox";
import Quotes from "./components/Quotes";
import { quotes } from "./data";
import "./App.css";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [quote, setQuote] = useState(null);

  const generateQuote = () => {
    const matched = quotes.find((quote) => quote.title === selectedValue);

    if (matched) {
      const randomIndex = Math.floor(Math.random() * matched.quotes.length);
      setQuote(matched.quotes[randomIndex]);
    }
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Quote Generator</h1>
      <SelectBox handleChange={handleChange} generateQuote={generateQuote} />
      <Quotes selectedValue={selectedValue} quote={quote} />
    </div>
  );
}

export default App;
