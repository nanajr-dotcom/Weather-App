import React, {useState} from 'react';
import Time from './Time';
const api = {
  key: "8d73894b6447019a3f1b92b5ffe4f46d ",
  base: "api.openweathermap.org/data/2.5/",
};


function Location( setWeather){
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base})weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log();
        });
    }
  };

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
      
     <div> 
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
              <Time />
            </div>
         </div>
     </div>
      
    
    );
}

export default Location;