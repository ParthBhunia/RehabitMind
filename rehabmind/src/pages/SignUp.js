import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-card">
        <h2>Create Account</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          required
        />

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
          placeholder="Create a password"
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />

        <button type="submit">Sign Up</button>

        {/* Sign In Link */}
        <p className="signup-login-link">
          Already have an account?{" "}
          <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
