import React from 'react';
import logo from './Images/weatherhub.png';
import Location from './Location';

function Homescreen() {
    return (
      <div className="homepage">
        <div className="logo">
          <img className="mainlogo" src={logo} alt="Weatherhub's Logo" />
        </div>
        <Location/>
      </div>
    );
}

export default Homescreen;
