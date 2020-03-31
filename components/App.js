import React from "react";
import VideoChat from "./VideoChat";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Petit live</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Fait avec{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          par <a href="https://julien-juge.com">Julien J.</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
