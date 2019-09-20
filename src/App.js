import React from 'react';
<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import LandingScreen from './individualComponents/LandingScreen/LandingScreen.js';

function App() {
 return (
   <div className="App">
     <Router>
      <Route exact path="/" component={LandingScreen} />
    </Router>
   </div>
 );
>>>>>>> Stashed changes
}

export default App;
