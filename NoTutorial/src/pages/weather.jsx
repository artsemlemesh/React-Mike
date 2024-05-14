import { useEffect } from "react";
import { useState } from "react";
import Search from "../components/weather-comp";

export default function WeatherApp() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  async function fetchWD(param) {
    setLoading(true);

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
    );
    const data = await res.json();

    if (data) {
      setWeather(data);
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWD(search);
  }

  useEffect(() => {
    fetchWD("Beijing");
  }, []);
  console.log(weather);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? <div> wait a little bit</div> : 
      <div>
        <div>{weather?.sys?.country}</div>
        <div>{weather?.weather[0]?.main}</div>
        <div>{weather?.weather[0]?.description}</div>
        <div>{weather?.main?.temp} degrees</div>
        </div>
      
      }
    </div>
  );
}
