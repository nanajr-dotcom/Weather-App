import React from 'react'


function Weatherbox( weather ) {

    return (
      <div className="weather-box">
        <div className="temp">27&deg; </div>
        <div className="icon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weather">Sunny</div>
      </div>
    );
}

function minmaxTemp(min,max){
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}

export default Weatherbox;
