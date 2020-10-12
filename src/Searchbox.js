import React, { useState } from 'react';
import Time from './Time';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './Images/weatherhublogo.png';
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

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };



    return (
      <>
        <div className="header">
          <img className="header-logo" src={logo} alt="logo"/>
          <div className="search-box1">
            <input
              type="text"
              className="search-bar"
              placeholder="City"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
        </div>
          
        </div>
        <div>
          <div className="location-box">
            <div className="location">Accra, Ghana</div>
            <div className="date">{dateBuilder(new Date())}</div>
            <Time />
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
