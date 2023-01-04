import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
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

  const login = () => {
    console.log("trying login");
    console.log(username)
    axios.post('http://localhost:3001/weather/login', {
        username: username,
        password: password
    })
    .then(response => {
        const data = response.data
        console.log(data)
    });
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
    </div>
  );
}

// function login(username, password) {
//     console.log('trying login')
//      axios.post('http://localhost:3001/weather/login', {
//         username: username,
//         password: password
//     })
//     .then(response => {
//         const data = response.data
//         console.log(data)
//     });
//   }

export default App;
