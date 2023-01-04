import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {useLocation} from 'react-router-dom'

function WeatherDisplay () {

    const location = useLocation();
    const check = location.state;
    console.log(location.state)
    console.log(check)

    // const getWeather = () => {
    //   const location = useLocation()
    //   const {check} = location.state
    //   console.log(check)
    // };
  
    return (
      <div className="App">
        <h1>weather</h1>
      </div>
    );
  }

  export default WeatherDisplay;
  
  