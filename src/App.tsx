import React from 'react';

import Map from "./components/Map";
import './App.css';

function App() {
  return (
    <div className="App">
          <section className="hero App-header">
                <div className="hero-body is-primary">
                    <h1 className="title is-1">Paname Buddy</h1>
                </div>
            </section>
            <div className="container">
              <Map />
            </div>
        </div>
  );
}

export default App;
