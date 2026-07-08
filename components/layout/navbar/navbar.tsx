"use client";

import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`navbar-header ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-item navbar-brand">
                    Madhya Pradesh Youth Summit®
                </a>

                {/* Desktop navigation links */}
                <div className="navbar-links-desktop">
                    <a href="/speakers" className="navbar-item navbar-link">
                        SPEAKERS
                    </a>
                    <a href="/agendas" className="navbar-item navbar-link">
                        AGENDA
                    </a>
                    <a href="/venue" className="navbar-item navbar-link">
                        VENUE
                    </a>
                    <a href="/sponsors" className="navbar-item navbar-link">
                        SPONSORS
                    </a>
                    <a href="/contact" className="navbar-item navbar-link">
                        CONTACT
                    </a>
                </div>

                <div className="navbar-actions-desktop">
                    <a href="/registration" className="navbar-item navbar-cta">
                        <span className="navbar-cta-arrow">→</span> Get tickets
                    </a>
                </div>

                {/* Mobile hamburger menu toggle */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className={`hamburger-line ${isMenuOpen ? "open-top" : ""}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? "open-middle" : ""}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? "open-bottom" : ""}`}></span>
                </button>
            </div>

            {/* Mobile slide-in menu drawer */}
            <div className={`navbar-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
                <nav className="navbar-mobile-nav">
                    <a href="/speakers" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        SPEAKERS
                    </a>
                    <a href="/agendas" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        AGENDA
                    </a>
                    <a href="/venue" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        VENUE
                    </a>
                    <a href="/sponsors" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        SPONSORS
                    </a>
                    <a href="/contact" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        CONTACT
                    </a>
                    <a href="/registration" className="navbar-mobile-cta" onClick={() => setIsMenuOpen(false)}>
                        GET TICKETS <span className="navbar-cta-arrow">→</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
