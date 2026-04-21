import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
  };

  return (
    <div>
      <div>
        <h1>Weather App</h1>
      </div>
      <div>
        <input placeholder="Enter city" onChange={handleChange} value={city} />
        <button onClick={fetchWeather}>search</button>
      </div>
    </div>
  );
}

export default App;
