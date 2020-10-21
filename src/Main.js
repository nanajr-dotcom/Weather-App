import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/weatherhublogo.png";
import { fetchWeather } from "./api/fetchWeather";


let storageArray = [];
function Main( { setUserLoggedIn}){
 
  const [query, setQuery] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null)
  const [weather_descriptions, setWeather_descriptions] = useState(null);
  const [weather_icons, setWeather_icons]= useState(null)
  const [history, setHistory] = useState(null)
 

  const search = async (e) => {
    if (e.key === "Enter") {
      console.log("query", query)
      const data = await fetchWeather(query);
      console.log("data", data)
      storageArray.push({
        temperature:data.current.temperature,
        location: data.location.name,
        weather_descriptions: data.current.weather_descriptions

      })

      localStorage.setItem('browserStorage', JSON.stringify(storageArray));
      getLocalStorage();

      
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


  function getLocalStorage() {
    let userSearchVar = JSON.parse(localStorage.getItem('browserStorage'));
    console.log("data in browser", userSearchVar)

    let OnlyFive = userSearchVar.slice(Math.max(userSearchVar.length - 5, 0))
    console.log("OnlyFive", OnlyFive)

    let mySearchResults = OnlyFive.map((r) => {
      return <div className="history-box">
        <div className="history" >
          {r.location}, {r.temperature}°C
        </div>
      </div>
    });
   
    setHistory(mySearchResults)


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
     
      <div className="weather-box-main">
        
        <div className="weather-box">
          <div className="weather">{location}</div>
          <div className="temp">{temperature}</div>
          <div className="icon">
            <i className="wi wi-day-sunny"> </i>
          </div>
          <div className="weather">{ weather_descriptions }</div>
        </div>
      <div>

          { history }
          
      </div>
      </div>
    </>
  )
  ;
}

export default Main;
