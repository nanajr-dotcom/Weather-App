import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/weatherhublogo.png";
import { fetchWeather } from "./api/fetchWeather";


function Main( { setUserLoggedIn}){
 
  const [query, setQuery] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null)
  const [weather_descriptions, setWeather_descriptions] = useState(null);
  const [weather_icons, setWeather_icons]= useState(null)
 

  const search = async (e) => {
    if (e.key === "Enter") {
      console.log("query", query)
      const data = await fetchWeather(query);
      console.log("data", data)

      setWeather_icons(`${data["current"].weather_icons}`)
      setTemperature(`${data["current"].temperature}°C`);
      setLocation( `${data["location"].name} , ${data["location"].country}` );
      setWeather_descriptions(`${data["current"].weather_descriptions}`); 
      setQuery("");

    }
  };

  function handleLogOut(event) {
    event.preventDefault();
    setUserLoggedIn(false)
  }

  return (
    <>
      <div className="header">
        <img className="header-logo" src={logo} alt="logo" />
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
        <button className="btn" onClick={handleLogOut}>
          Logout
        </button>
      </div>
      <div>
        <div className="location-box">
          <div className="location">{location}</div>
        </div>
      </div>
      <div>
        <div className="weather-box">
          <div className="temp">{temperature}</div>
          <div className="icon">
            <i className="wi wi-day-sunny"> </i>
          </div>
          <div className="weather">{ weather_descriptions }</div>
        </div>
      </div>
    </>
  )
  ;
}

export default Main;
