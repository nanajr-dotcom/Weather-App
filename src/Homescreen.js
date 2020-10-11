import React from 'react';
import logo from './Images/weatherhub.png';


function Homescreen() {
    return (
      <div className="homepage">
        <div className="logo">
          <img className="mainlogo" src={logo} alt="Weatherhub's Logo" />
          <div>
            <button className="btn btn-primary shelf-cta">
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Homescreen;
