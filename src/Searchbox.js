import React, { useState } from 'react';
import Location from './Location';
import Weatherbox from './Weatherbox';
const api = {
  key: "8d73894b6447019a3f1b92b5ffe4f46d ",
  base: "api.openweathermap.org/data/2.5/",
};


function Searchbox() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base})weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res=> res.json())
        .then(result => {
         setWeather(result);
         setQuery('');
         console.log();
        });
      
    }
  }




    return ( 
      <>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search...."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <Location setWeather={setWeather} />
        
     </>
    );
}

export default Searchbox;
