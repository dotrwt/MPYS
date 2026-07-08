import React from "react";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Background visual elements */}
            <div className="footer-glow-left" />
            <div className="footer-glow-right" />
            <div className="footer-glow-center" />
            <div className="footer-grain" />

            <div className="footer-content">
                {/* Top Row: Brand & Designer */}
                <div className="footer-top-row">
                    <div className="footer-brand">
                        <img src="/MPYS_T.png" alt="MPYS Logo" className="footer-logo" />
                        <span className="footer-brand-text">Madhya Pradesh Youth Summit®</span>
                    </div>
                    <div className="footer-designer">Developed by <a href="https://dotrwt.in" target="_blank" rel="noopener noreferrer">dotrwt</a></div>
                </div>

                {/* Center Call to Action */}
                <div className="footer-cta-section">
                    <h2 className="footer-cta-title">Join us in October.</h2>
                    <p className="footer-cta-subtitle">
                        Secure your spot for MPYS 2026 now.
                    </p>
                    <a href="/registration" className="footer-cta-button">
                        <span className="footer-cta-arrow">→</span>
                        <span>Get your ticket</span>
                    </a>
                </div>

                {/* Bottom Row: Nav Links & Socials */}
                <div className="footer-bottom-row">
                    <nav className="footer-nav-links" aria-label="Footer Navigation">
                        <Link href="/speakers" className="footer-nav-link">
                            SPEAKERS
                        </Link>
                        <Link href="/agenda" className="footer-nav-link">
                            AGENDA
                        </Link>
                        <Link href="/venue" className="footer-nav-link">
                            VENUE
                        </Link>
                        <Link href="/sponsors" className="footer-nav-link">
                            SPONSORS
                        </Link>
                        <Link href="/contact" className="footer-nav-link">
                            CONTACT
                        </Link>
                        <Link href="/legal" className="footer-nav-link">
                            TERMS
                        </Link>
                        <Link href="/legal" className="footer-nav-link">
                            PRIVACY
                        </Link>
                    </nav>

                    <div className="footer-social-links">
                        <a
                            href="https://www.linkedin.com/company/madhya-pradesh-youth-summit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-icon"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/mpys_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-icon"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
