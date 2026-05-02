import { useState } from "react";
import SelectBox from "./components/SelectBox";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (!quote) return;

    const newLiked = !liked;
    setLiked(newLiked);

    await fetch(`http://localhost:3001/quotes/${quote.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: newLiked }),
    });
  };

  const handleDislike = async () => {
    if (!quote) return;

    const newUnlike = !liked;
    setLiked(newUnlike);

    await fetch(`http://localhost:3001/quotes/${quote.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: newUnlike }),
    });
  };

  const generateQuote = async () => {
    setIsLoading(true);

    const response = await fetch(
      `http://localhost:3001/quotes?category=${selectedValue}`,
    );
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const newQuote = data[randomIndex];

    setQuote(newQuote);
    setLiked(newQuote.liked);

    setIsLoading(false);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Quote Generator</h1>
      <SelectBox
        handleChange={handleChange}
        generateQuote={generateQuote}
        isLoading={isLoading}
      />
      <Quotes
        selectedValue={selectedValue}
        quote={quote}
        isLoading={isLoading}
        handleDislike={handleDislike}
        handleLike={handleLike}
        liked={liked}
      />
    </div>
  );
}

export default App;
