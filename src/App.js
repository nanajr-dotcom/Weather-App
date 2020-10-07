import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import location from './location'

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search......"
          />
        </div>
         <location/> 
        <div className="weather-box">
          <div className="temp">27&deg; </div>
          <div className="icon">
            <i className="wi wi-day-sunny"></i>
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
