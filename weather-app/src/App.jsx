import { useState } from "react";
import axios from "axios";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
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

    setCity("");
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>

      <div>
        <input
          className="input"
          placeholder="Enter city"
          onChange={handleChange}
          value={city}
        />
        <button className="button" onClick={fetchWeather}>
          search
        </button>
        <div className="weather-container">
          <div>{error && <p>{error}</p>}</div>
          {weather && (
            <div>
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <div className="temp">
                <FaTemperatureThreeQuarters />
                <p>{weather.main.temp}</p>
                feels like : <p>{weather.main.feels_like}</p>
              </div>
              <div className="humid">
                <WiHumidity />
                <p>{weather.main.humidity}</p>
              </div>
              <div className="pressure">
                <p>{weather.main.pressure}</p>
                <p>{weather.weather[0].main}</p>
                <p>{weather.weather[0].description}</p>
              </div>

              <div className="wind">
                <TiWeatherWindy />
                <p>{weather.wind.speed}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
