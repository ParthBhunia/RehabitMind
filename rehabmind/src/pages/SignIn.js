import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <form className="signin-box">
        <h2>Sign In</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit">Sign In</button>

        {/* Sign Up Link */}
        <p className="signin-login-link">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
