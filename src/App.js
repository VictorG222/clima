import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css"; 
import Weather from "./weather.js";
import Push from "./push.js";

function App() {

  return (
    <div>
      <Weather/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Push/>
    </div>
  );
}


export default App;