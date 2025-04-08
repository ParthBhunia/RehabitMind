import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default SignIn;
