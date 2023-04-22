import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css"; 


const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "e97e2746601816c2e0fa9aa328f3a131";
  const cities = ["London", "New York", "Tokyo", "Paris", "Sydney"];

  useEffect(() => {
    const fetchData = async () => {
      const promises = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`)
      );
      const results = await Promise.all(promises);
      const data = results.map(result => result.data.list);
      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!weatherData.length) return <div>Loading...</div>;

  return (
    <div className="weather-container">
      {weatherData.map((cityData, index) => (
        <div key={index} className="city-card">
          <h2 className="city-name">{cities[index]}</h2>
          <div className="weather-data">
            {cityData.map((data, index) => (
              <div key={index} className="weather-card">
                <h3>{new Date(data.dt_txt).toLocaleDateString()}</h3>
                <p>Temperature: {data.main.temp} Kelvin</p>
                <p>Weather: {data.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherApp;