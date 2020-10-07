import React from 'react';

function Loginform() {
    return (
      <form>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlfor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlfor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlfor="password">Password:</label>
            <input type="password" name="password" id="password"/>
          </div>
        </div>
      </form>
    );
}

export default Loginform;
