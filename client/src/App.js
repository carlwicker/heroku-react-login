import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test ExpressJS API End Point
        </a>
      </header>
    </div>
  );
}

export default App;
