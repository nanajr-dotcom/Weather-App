import React from 'react';

function Searchbox() {
    return ( 
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="City"
              autoComplete="off"
            />
          </div>
 
    );
}

export default Searchbox;
