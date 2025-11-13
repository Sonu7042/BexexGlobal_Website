import React from 'react';
// import './Resources.css'; // Import your custom CSS

export default function Resources() {
  return (
    <div className="resources-container">
      {/* Navbar */}
      <div className="resources-navbar">
        <div className="navbar-logo" />
        <span className="navbar-title">B2B Marketing Agency</span>
      </div>

      {/* Main Headline */}
      <div className="resources-headline">
        <h1>
          We build <span className="headline-italic">high-performing</span><br />
          marketing engines for <br />
          B2B Brands
        </h1>
      </div>

      {/* Subtext */}
      <div className="resources-subtext">
        <p>
          We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI.
        </p>
      </div>

      {/* Discover more link */}
      <button className="resources-discover-btn">
        <span>Discover more</span>
        <svg className="discover-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Decorative Leaf Image */}
      {/* <img
        src="/leaf.png"
        alt="Decorative Leaf"
        className="resources-leaf"
      /> */}

      {/* Testimonial/Story Card */}
      <div className="resources-card">
        <div className="card-content">
          <div className="card-title">54% increase in pipeline with Demand Generation strategy</div>
          <div className="card-storyteq">
            <span className="storyteq-icon"></span>
            <span className="storyteq-text">storyteq</span>
            <a href="#" className="card-demo">
              <svg className="demo-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            src="/campaigns.png"
            alt="Story Example"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
}
