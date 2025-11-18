import React, { useState, useEffect } from "react";
import "../Css/header.css";
import { MdArrowOutward } from "react-icons/md";

const menuItems = [
  { label: "HOME", href: "#" },
  { label: "SERVICES", href: "#", dropdown: true, key: "services" },
  { label: "ABOUT US", href: "/aboutus" },
  { label: "RESOURCES", href: "#", dropdown: true, key: "resources" },
  { label: "COMMUNITIES", href: "#" },
];

const services = [
  { title: "Environment, health & safety (ehs) solution", link: "#" },
  { title: "Managements systems & compliance", link: "#" },
  { title: "Training & competency development", link: "#" },
  { title: "Software & digital solution", link: "#" },
  { title: "Sustainability & ESG services", link: "#" },
  { title: "Quality & business excellence", link: "#" },
];

const resources = [
  { title: "Blogs", link: "#" },
  { title: "NewsLetters", link: "#" },
];

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchActive(prev => !prev);
    setMenuOpen(false);
    setServiceOpen(false);
    setResourceOpen(false);
  };

  const handleDropdownClick = (e, key) => {
    e.preventDefault();

    if (key === "services") {
      setServiceOpen(prev => !prev);
      setResourceOpen(false);
    } else if (key === "resources") {
      setResourceOpen(prev => !prev);
      setServiceOpen(false);
    }

    // on desktop keep nav visible; on mobile just close the mobile menu overlay
    setMenuOpen(false);
  };

  const handleHamburgerToggle = () => {
    setMenuOpen(prev => !prev);
    setServiceOpen(false);
    setResourceOpen(false);
    setSearchActive(false);
  };

  useEffect(() => {
    function handleClose(e) {
      if (!e.target.closest(".header")) {
        setMenuOpen(false);
        setServiceOpen(false);
        setResourceOpen(false);
        setSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  // close dropdowns when switching to mobile menu (optional safety)
  useEffect(() => {
    if (menuOpen) {
      setServiceOpen(false);
      setResourceOpen(false);
    }
  }, [menuOpen]);

  return (
    <header className={`header ${searchActive ? "search-open" : ""} px-4 md:px-16 lg:px-12`}>
      <div className="header-inner">
        <div className="logo-area">
          <span className="logo">b e x e x</span>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={handleHamburgerToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
          {menuItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="nav-link applyfont"
                  onClick={(e) => handleDropdownClick(e, item.key)}
                >
                  {item.label}
                  <span className="dropdown-icon">&#x25BC;</span>
                </a>
              );
            }
            return (
              <a
                key={idx}
                href={item.href}
                className="nav-link applyfont"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="search-area">
          <input
            type="text"
            className={`search-input ${searchActive ? "visible" : ""}`}
            placeholder="Search..."
            autoFocus={searchActive}
            style={{ display: searchActive ? "block" : "none" }}
          />
          <button
            className={`search-icon ${searchActive ? "active" : ""}`}
            onClick={handleSearchToggle}
            aria-label="Search"
          >
            <svg
              height="22"
              width="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
          </button>
        </div>
      </div>

      {/* SERVICES dropdown */}
      <div className={`service-menu-dropdown services-dropdown ${serviceOpen ? "open" : ""}`}>
        <div className="services-grid_Head">
          {services.map((service, idx) => (
            <a className="header-service-card" href={service.link} key={idx}>
              <div className="service-title">{service.title}</div>
              <span className="service-icon">
                <MdArrowOutward />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RESOURCES dropdown */}
      <div className={`service-menu-dropdown resources-dropdown ${resourceOpen ? "open" : ""}`}>
        <div className="services-grid_Head-resources">
          {resources.map((item, idx) => (
            <a className="header-service-card" href={item.link} key={idx}>
              <div className="service-title">{item.title}</div>
              <span className="service-icon">
                <MdArrowOutward />
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
