import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Location from './Location';
import Weatherbox from './Weatherbox';


function App() {
  return (
    <div className="app">
      <main lSRC >
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search......"
          />
        </div>
         <Location/> 
         <Weatherbox/> 
      </main>
    </div>
  );
}

export default App;
