import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

//display: temp, wind speed, weather[0].main, city

//need to change from using location state I think
//can try by having use effect, initializes the data like city to display that
//then call the route and update like that?

function WeatherDisplay() {
  const [city, setCity] = useState("");

  const location = useLocation();
  console.log(location.state.city)

  const newCity = () => {
    console.log("trying new city");
    console.log(city);
    console.log(location.state.username);
    axios
      .post("http://localhost:3001/weather/newcity", {
        username: location.state.username,
        city: city,
      })
      .then((response) => {
        if (response.data.sendWeatherData) {
          console.log(response.data.sendWeatherData);
          location.state.city = response.data.sendWeatherData.city;
          location.state.windSpeed = response.data.sendWeatherData.windSpeed;
          location.state.temperature =
            response.data.sendWeatherData.temperature;
          location.state.precipitation =
            response.data.sendWeatherData.precipitation;
          console.log(location.state.city);
          console.log(city)
          
          window.location.reload()
        }
      });
  };

  
  return (
    <div className="WeatherDisplay">
      <div>
        <div >
        </div>
        <div>
          <div className="location">{location.state.city}</div>
        </div>
        <div className="detail-section">
          <div className="detail">
            <div className="title">Wind</div>
            <div className="value">{location.state.windSpeed}</div>
          </div>
          <div className="detail">
            <div className="title">Temperature</div>
            <div className="value" id="temperature" data-temperature>
              {location.state.temperature}
            </div>
          </div>
          <div>
            <div>Precipitation</div>
            <div>{location.state.precipitation}</div>
          </div>
          <div>
            <label>Search for new city</label>
            <input
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <div>
              <button onClick={newCity}>
                Search
                </button>
            </div>
          </div>
        </div>
      </div>
      <a href="https://openweathermap.org/" className="openweather-credit">
        Weather data provided by OpenWeather
      </a>
    </div>
  );
}

export default WeatherDisplay;
