import React, { useState } from 'react';

function Loginform({ setUserLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  function handleEmailInput (event){
    setEmail(event.target.value)
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);

  }

  function handleLogin(event) {
    event.preventDefault();

    if (email === 'admin@weatherapp.com' && password ==='@123456'){
    setUserLoggedIn(true);
    }


  }

    return (
      <form>
        <div className="form-inner">
          <h2 className="form-group1">Login</h2>
          <br></br>
          <div className="form-group2">
            <label>Email:</label>
            <input
              className="search-bar"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailInput}
            />
          </div>
          <br></br>
          <div className="form-group2">
            <label>Password:</label>
            <input
              className="search-bar"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordInput}
            />
          </div>
          <br></br>
          <div className="form-group1">
            <button className="btn btn-primary shelf-cta" onClick={handleLogin}>
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </form>
    );
}

export default Loginform;
