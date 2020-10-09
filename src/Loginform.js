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
          <h2>Login</h2>
          <div className="form-group">
            <label htmlfor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmailInput}/>
          </div>
          <div className="form-group">
            <label htmlfor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordInput}/>
          </div>
          <button onClick={handleLogin}>Login</button> 
        </div>
      </form>
    )
}

export default Loginform;
