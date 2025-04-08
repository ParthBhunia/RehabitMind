import React from "react";
import "./Navbar.css"; // Separate styles if you prefer

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;