import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Homescreen from './Homescreen';
import Main from './Main';




function App() {
  


 
  

   const [userLoggedIn, setUserLoggedIn] = useState(false);
   

  return (
    <div className="app">
     
      <main>
        {!userLoggedIn && <Homescreen setUserLoggedIn={setUserLoggedIn} />}
        {userLoggedIn && <Main  setUserLoggedIn={setUserLoggedIn} />}
      </main>
    </div>
  );
}

export default App;
