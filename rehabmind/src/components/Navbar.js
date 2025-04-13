import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigate("/");
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#" + sectionId); // optional — could also just go to "/"
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay to allow render
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={handleHomeClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
        </li>
        <li>
          <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className={({ isActive }) => isActive ? "active" : ""}>
            Quiz
          </NavLink>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
