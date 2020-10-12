import React, { useState } from 'react';
import Time from './Time';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './Images/weatherhublogo.png';
import Date from './Date';
import { fetchWeather } from './api/fetchWeather';


function Searchbox() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

        setWeather(data);
        setQuery("");
    }
   
    

};

  
   


    return (
      <>
        <div className="header">
          <img className="header-logo" src={logo} alt="logo"/>
          <div className="search-box1">
            <input
              type="text"
              className="search-bar"
              placeholder="Search any city..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
        </div>
          
        </div>
        <div>
          <div className="location-box">
            <div className="location">Accra, Ghana</div>
            
            
          </div>
        </div>
        <div>
          <div className="weather-box">
            <div className="temp">27&deg;</div>
            <div className="icon">
              <i className="wi wi-day-sunny"></i>
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </>
    );
}

export default Searchbox;
