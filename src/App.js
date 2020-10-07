import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Location from './Location';
import Weatherbox from './Weatherbox';
import Searchbox from './Searchbox';


function App() {
  return (
    <div className="app">
      <main>
         <Searchbox/>
         <Location/> 
         <Weatherbox/> 
      </main>
    </div>
  );
}

export default App;
