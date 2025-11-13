import React from "react";
import { Link } from "react-router-dom";
import "../Css/header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <span className="logo">Bexex</span>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link active">HOME</Link></li>
          <li><Link to="/services" className="nav-link">SERVICES</Link></li>
          <li><Link to="/aboutus" className="nav-link">ABOUT US</Link></li>
          <li><Link to="/resources" className="nav-link">RESOURCES</Link></li>
          <li><Link to="/communities" className="nav-link">COMMUNITIES</Link></li>
        </ul>

        <div className="nav-actions">
          {/* Hamburger (mobile only) */}
          <button className="hamburger">
            <svg viewBox="0 0 20 20" fill="none" className="hamburger-icon">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Search Icon (desktop only) */}
          <button className="search-btn">
            <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-3.5-3.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
