import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <div className="navbar-brand">
          <a href="/" className="navbar-brand-link">
            Think Forward®
          </a>
        </div>

        {/* Center: Navigation Link List */}
        <nav className="navbar-nav">
          <a href="#speakers" className="navbar-link">
            SPEAKERS
          </a>
          <a href="#agenda" className="navbar-link">
            AGENDA
          </a>
          <a href="#venue" className="navbar-link">
            VENUE
          </a>
          <a href="#sponsors" className="navbar-link">
            SPONSORS
          </a>
        </nav>

        {/* Right: Get Tickets CTA */}
        <div className="navbar-cta">
          <a href="/registration" className="navbar-cta-link">
            <span className="navbar-cta-arrow">→</span>
            <span>Get tickets</span>
          </a>
        </div>
      </div>
    </header>
  );
}
