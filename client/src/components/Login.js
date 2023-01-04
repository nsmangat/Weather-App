import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import {Link, useNavigate} from "react-router-dom";

function Login() {
  // //prob use this for 2nd page
  // useEffect(() => {
  //   axios.post('http://localhost:3001/weather', {
  //       city: 'Cambridge'
  //   })
  //   .then(response => {
  //       const data = response.data
  //       console.log(data)
  //   })
  // })

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    console.log("trying login");
    axios.post('http://localhost:3001/weather/login', {
        username: username,
        password: password
    })
    .then(response => {
        // const data = response.data
        // console.log(data)
        // console.log('/n/n')
        // console.log(response.data.user)
        // console.log('/n/n')
        // console.log(response.data.sendWeatherData)
        //send user as well from here, right now have backend re-sending
        console.log(response.data)
        if(response.data.username) {
          console.log(response.data.username)
            navigate("/WeatherDisplay", {state: response.data.username})
        }
    });
    
    //navigate("/weatherDisplay", {state: test})
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={login}>
              Login
            </button>
          </div>
      </div>
      <h3>{username}</h3>
    </div>
  );
}

export default Login;
