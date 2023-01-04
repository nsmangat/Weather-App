import React from "react";
//import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/WeatherDisplay" element={<WeatherDisplay />}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
