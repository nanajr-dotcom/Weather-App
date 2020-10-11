import React, { useState } from 'react';
import Location from './Location';
import search from './Images/search-white.png';
import Weatherbox from './Weatherbox';
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




    return (
      <>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search...."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div className="img-box">
            {" "}
            <svg
              height="50"
              viewBox="0 0 512 512"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              onClick={search}
            >
              <g id="_02-search" data-name="02-search">
                <g id="glyph">
                  <path d="m502.52 447.813a24.1 24.1 0 0 0 -8.019-17.227l-138.078-123.108a202.683 202.683 0 0 1 -48.945 48.945l123.108 138.077c8.716 10.185 25.595 10.673 34.885 1l30.029-30.029a24.1 24.1 0 0 0 7.02-17.658z" />
                  <path d="m381 192c0-104.215-84.785-189-189-189s-189 84.785-189 189 84.785 189 189 189 189-84.785 189-189zm-189 144c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144z" />
                  <path d="m192 92a84.1 84.1 0 0 0 -84 84c0 22.962 13.148 49.214 39.081 78.027a323.174 323.174 0 0 0 37.552 35.445 12 12 0 0 0 14.734 0 323.174 323.174 0 0 0 37.552-35.445c25.933-28.813 39.081-55.065 39.081-78.027a84.1 84.1 0 0 0 -84-84zm0 124a40 40 0 1 1 40-40 40.045 40.045 0 0 1 -40 40z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <Location setWeather={setWeather} />
      </>
    );
}

export default Searchbox;
