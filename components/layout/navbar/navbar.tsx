import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <a href="/" className="navbar-item navbar-brand">
                    Madhya Pradesh Youth Summit®
                </a>
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
                <a href="/registration" className="navbar-item navbar-cta">
                    <span className="navbar-cta-arrow">→</span> Get tickets
                </a>
            </div>
        </header>
    );
}
