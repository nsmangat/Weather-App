import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import {Link, useNavigate} from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCity, setRegisterCity] = useState("");
  const [registerStatus, setRegisterStatus] = useState("")

  const navigate = useNavigate();

  const login = () => {
    console.log("trying login");
    axios.post('http://localhost:3001/weather/login', {
        username: username,
        password: password
    })
    .then(response => {
        console.log(response.data)
        if(response.data.username) {
          console.log(response.data.username)
            navigate("/WeatherDisplay", {state: response.data.username})
        }
    });
  };

  const register = () => {
    console.log("trying register");
    axios.post('http://localhost:3001/weather/register', {
        username: registerUsername,
        password: registerPassword,
        city: registerCity
    })
    .then(response => {
        console.log(response.data)
        if(response.data.registerStatus) {
          console.log(response.data.registerStatus)
          setRegisterStatus(response.data.registerStatus)
        }
    });
    
  };

  return (
    <div className="home">
      <div className="login">
        <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Password"
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
      <div className="register">
        <h1>Create an account</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="registerusername"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="registerpassword"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="registercity"
              placeholder="City"
              value={registerCity}
              onChange={(e) => setRegisterCity(e.target.value)}
            />
          </div>
          <div>
            <button onClick={register}>
              Register
            </button>
          </div>
      </div>
      <h3>{registerStatus}</h3>
    </div>
  );
}

export default Login;
