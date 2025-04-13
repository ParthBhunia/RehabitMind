import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import About from "./About"; // ✅ adjust path if needed
import Contact from "./Contact"; // ✅ adjust path if needed

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <h1>Welcome to RehabitMind</h1>
        <button
          className="meditate-btn"
          onClick={() => navigate("/signup")} // ✅ Navigates to SignUp page
        >
          Let's Meditate
        </button>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
