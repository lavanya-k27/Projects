import { useState } from "react";
import { quotes } from "../data";

const Quotes = ({ selectedValue }) => {
  const [quote, setQuote] = useState(null);

  const generateQuote = () => {
    const matched = quotes.find((quote) => quote.title === selectedValue);

    if (matched) {
      const randomIndex = Math.floor(Math.random() * matched.quotes.length);
      setQuote(matched.quotes[randomIndex]);
    }
  };

  return (
    <>
      <div>
        <div>
          <button onClick={generateQuote}>Generate</button>
        </div>
        <div>{quote}</div>
      </div>
    </>
  );
};

export default Quotes;
