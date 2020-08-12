import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";

const nasaAxios = axios.get('https://api.nasa.gov/planetary/apod')
  .then((response) => {
    console.log(response)
  })

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
