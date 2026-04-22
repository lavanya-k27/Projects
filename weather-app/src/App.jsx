import { useState } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY}&units=metric`,
      );

      console.log(response.data);
      if (response.data.count > 0) {
        setWeather(response.data.list[0]);
      } else {
        setError("City not found");
      }
    } catch (error) {
      setError("An Error Occurred");
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
        <div>{error && <p>{error}</p>}</div>
        {weather && (
          <div>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
