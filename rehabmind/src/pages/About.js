// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Navbar /> {/* Include the Navbar here */}
      <div className="about-overlay">
        <div className="about-left">
          <h1>
            Healthy Minds, Happy Lives
            <br />
            <span>Mental Health Consultancy</span>
          </h1>
          <p>
            We are a dedicated team of open-source contributors who have developed
            this platform, RehabitMind, to serve as a one-stop solution for improving mental well-being.
          </p>
          <p>
            Our mission is to help individuals build healthier habits and lead a
            balanced life through the resources and support provided by RehabitMind.
          </p>
          <p>
            We believe that with the right tools and guidance, everyone can nurture their
            mental health and achieve a more fulfilling, stress-free lifestyle.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;