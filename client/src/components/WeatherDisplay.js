import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

//display: temp, wind speed, weather[0].main, city

function WeatherDisplay() {
  const [city, setCity] = useState("");

  const location = useLocation();
  console.log(location.state);

  const newCity = () => {

   
  };

  return (
    <div className="WeatherDisplay">
      <div class="container">
        <div class="header">
          <div class="icon-container">
            <canvas id="icon" width="100" height="100"></canvas>
          </div>
        </div>
        <div class="content">
          <div class="location">{location.state.city}</div>
        </div>
        <div class="detail-section">
          <div class="detail">
            <div class="title">Wind</div>
            <div class="value">{location.state.windSpeed}</div>
          </div>
          <div class="detail">
            <div class="title">Temperature</div>
            <div class="value" id="temperature" data-temperature>
              {location.state.temperature}
            </div>
          </div>
          <div class="detail">
            <div class="title">Precipitation</div>
            <div class="value">{location.state.precipitation}</div>
          </div>
          <div class="city-search-container">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter a location"
            />
            <button type="button" onclick="getSubmit()">
              Search
            </button>
          </div>
        </div>
      </div>
      <a href="https://openweathermap.org/" class="openweather-credit">
        Weather data provided by OpenWeather
      </a>
    </div>
  );
}

export default WeatherDisplay;
