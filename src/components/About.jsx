import React from "react";
import "../Css/about.css"; // Import the CSS file

const About = () => {
  return (
    <section className="hero-root">
      <nav className="hero-nav">
        <div className="hero-nav-logo">
          <svg height="20" viewBox="0 0 20 20" width="20">
            {/* Replace this SVG with your actual logo - for demo */}
            <circle cx="10" cy="10" r="9" fill="#1e90ff" />
          </svg>
          <span>About us</span>
        </div>
      </nav>
      <div className="hero-content">
        <h1>
          A Trusted Partner in Compliance & Excellence
          <span className="hero-since"> <i>Since 2017</i></span>
        </h1>
        <div className="hero-img-wrap">
          <img
            src="./image.jpg"
            alt="hero visual"
            className="hero-img"
            loading="lazy"
          />
        </div>
        <p className="hero-desc">
          Bexex Global Pvt. Ltd. delivers practical, cost-effective solutions that strengthen safety, quality, and sustainability.
        </p>
        <a href="#" className="hero-btn">
          Discovery more
          <span className="hero-btn-icon">
            <svg width="24" height="24" viewBox="0 0 20 20">
              <rect x="0" y="0" width="20" height="20" rx="5" fill="#007bff" />
              <path
                d="M6 10.1L10.1 14L14 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;
