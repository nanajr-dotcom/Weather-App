import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Main from './Main';
import Loginform from './Loginform';


function App() {

  
   const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="app">
      <main>
        {!userLoggedIn && <Loginform setUserLogged={setUserLoggedIn} />}
        {userLoggedIn && <Main setUserLoggedIn={setUserLoggedIn} />}
      </main>
    </div>
  );
}

export default App;
