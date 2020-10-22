import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/weatherhublogo.png";
import { fetchWeather } from "./api/fetchWeather";

// COPY START
const weatherIconObject = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sleet",
  Rain: "wi-storm-showers",
  Snow: "wi-snow",
  Atmosphere: "wi-fog",
  Clear: "wi-day-sunny",
  Clouds: "wi-day-fog"
}


// COPY END


let storageArray = [];
function Main( { setUserLoggedIn}){
 
  const [query, setQuery] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null)
  const [weather_descriptions, setWeather_descriptions] = useState(null);
  const [weather_icons, setWeather_icons]= useState(null)
  const [history, setHistory] = useState(null);


  // copy start
  function get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId === 113:
        setWeather_icons( icons.Clear );
        break;
      case rangeId >= 116 && rangeId < 144:
        setWeather_icons( icons.Clouds );
        break;
      case (rangeId === 176) || (rangeId >= 293 && rangeId <= 314) || (rangeId >= 353 && rangeId <= 359) || (rangeId >= 386 && rangeId <= 389):
        setWeather_icons( icons.Rain );
        break;
      case (rangeId === 179) || (rangeId >= 323 && rangeId <= 350) || (rangeId >= 368 && rangeId <= 375) || (rangeId >= 392 && rangeId <= 395):
        setWeather_icons( icons.Snow );
        break;
      case (rangeId === 200) || (rangeId >= 386):
        setWeather_icons( icons.Thunderstorm );
        break;
      case rangeId >= 263 && rangeId <= 284:
        setWeather_icons( icons.Drizzle );
        break;
      case rangeId === 248 || rangeId === 260:
        setWeather_icons( icons.Atmosphere );
        break;
      default:
        setWeather_icons(icons.Clear);
     
    }
  }
  // copy end
 

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

      
      // add get_weatherIcon here
      get_WeatherIcon(weatherIconObject, data.current.weather_icon)
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
          {r.location}, {r.temperature}°C, {r.weather_descriptions}
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
        
        { history &&
          <div className="weather-box">
            <div className="weather">{location}</div>
            <div className="temp">{temperature}</div>
            <div className="icon">
              <i className={`wi ${weather_icons}`}> </i>
            </div>
            <div className="weather">{ weather_descriptions }</div>
          </div>
        }
      <div>

          { history }
          
      </div>
      </div>
    </>
  )
  ;
}

export default Main;
