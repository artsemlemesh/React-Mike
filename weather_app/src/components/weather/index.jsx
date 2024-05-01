import { useState } from "react";
import Search from "../search";
import { useEffect } from "react";

export default function Weather() {
  //creating these consts bcz from Search we need to pass this props:search, setSearch, handleSearch
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await res.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("Beijing");
  }, []);

  console.log(weatherData);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          {/* weatherData?.main?.temp- in this case ? is optional operator, the way to access nested props without worrying about whether intermediate props are null or undefined */}
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData &&
            weatherData.weather[0] &&
            weatherData.weather[0].description
              ? weatherData.weather[0].description
              : 0}
          </p>

          <div className="weather-info">
            <div>
              <p className="wind">{weatherData?.wind?.speed}</p>
              <p>wind Speed</p>
            </div>
            <div>
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>humidity </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
