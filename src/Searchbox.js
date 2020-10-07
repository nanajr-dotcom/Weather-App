import React from 'react';

function Searchbox() {
    return ( 
          <div class="search-box">
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
