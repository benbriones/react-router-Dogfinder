import './App.css';
import React from 'react';
import { useState } from 'react';
import RouteList from "./RouteList";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';
import { v4 as uuid } from "uuid";


/** Component for rendering Dogfinder App
 * Props: none
 *
 * State:
 * -dogData: {name, age, src, facts}
 *
 * App -> { Nav, RouteList }
 *
 */
function App() {
  const [dogData, setDogData] = useState(null);

  const DOG_API_ENDPOINT = "http://localhost:5001/dogs";


  if (!dogData) {
    fetchDogData();
    return <h1>Loading...</h1>;

  }

  async function fetchDogData() {
    const response = await fetch(DOG_API_ENDPOINT);
    const data = await response.json();

    const dataWithId = data.map(d => ({ ...d, id: uuid() }));

    setDogData(dataWithId);

  }

  return (
    <div className="App container">
      <BrowserRouter>
        <Nav dogData={dogData} />
        <RouteList dogData={dogData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
