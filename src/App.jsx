import './App.css';
import React from 'react';
import { useState } from 'react';
import RouteList from "./RouteList";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';


/** Component for rendering Dogfinder App
 *
 * App -> { Nav, RouteList }
 *
 */
function App() {

  // const [hasDataLoaded, setHasDataLoaded] = useState(false);
  const [dogData, setDogData] = useState(null);

  const DOG_API_ENDPOINT = "http://localhost:5001/dogs";

  /** need to make:
   * function to fetch dog data
   * use function in this if statement
   */
  if (!dogData) {
    fetchDogData();
    return <h1>Loading...</h1>;

  }

  async function fetchDogData() {
    const response = await fetch(DOG_API_ENDPOINT);
    const data = await response.json();
    setDogData(data);

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogData={dogData} />
        <RouteList dogData={dogData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
