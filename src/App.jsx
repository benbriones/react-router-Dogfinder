import './App.css';
import React from 'react';
import { useState } from 'react';
import RouteList from "./RouteList"
import Nav from "./Nav"
import { BrowserRouter } from 'react-router-dom';


/** Component for rendering Dogfinder App
 *
 * App -> { Nav, RouteList }
 *
 */
function App() {

  const [hasDataLoaded, setHasDataLoaded] = useState(false);
  const [dogData, setDogData] = useState(null)

  /** need to make:
   * function to fetch dog data
   * use function in this if statement
   */
  if(!hasDataLoaded) {
    // getdogdata()
  }

  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
