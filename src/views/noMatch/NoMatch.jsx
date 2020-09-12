import React from "react";

export default function NoMatch() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/error-404.jpg"} alt="img" />
    
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Inicio
        </a>
      </header>
    </div>
  );
}
