import React from 'react';

function Weatherbox() {
    return (
      <div className="weather-box">
        <div className="temp">27&deg; </div>
        <div className="icon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weather">Sunny</div>
      </div>
    )
}

export default Weatherbox;
