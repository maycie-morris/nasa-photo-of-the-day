import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaList from './Components/NasaList'



function App() {

  return (
    <div className="App">
      <NasaList />
    </div>
  );
}

export default App;



// return (
//   <div className="App">
//     <div className="logo_container">
//       <img className="logo" src={logo} alt="studio ghibli official logo" />
//       <h1>API</h1>
//       <h2>The count is: {countLevel}</h2>
//       <button onClick = {() => {setCount(count + 1)}}>{count} times </button>
//     </div>
//       <MoviesList />
//   </div>
// );
// }

// export default App;