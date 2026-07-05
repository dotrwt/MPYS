import React from "react";
import "./home.css";

export default function Hero() {
    return (
        <section className="hero-container">
            {/* Dynamic Animated Background Blobs */}
            <div className="hero-glow-blob-1" />
            <div className="hero-glow-blob-2" />
            <div className="hero-glow-blob-3" />
            <div className="hero-grain" />

            <div className="hero-content">
                {/* Top: Lavender Squiggle Icon */}
                <div className="hero-top-icon">
                    <svg
                        width="28"
                        height="12"
                        viewBox="0 0 28 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hero-squiggle"
                    >
                        <path
                            d="M2 6C5 3 7 3 10 6C13 9 15 9 18 6C21 3 23 3 26 6"
                            stroke="#d1b8fc"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Center: Main Title & CTA */}
                <div className="hero-center-section">
                    <h1 className="hero-title">
                        <span className="hero-title-line-1">
                            Madhya Pradesh Youth
                        </span>
                        <span className="hero-title-line-2">Summit</span>
                    </h1>

                    <div className="hero-cta-wrap">
                        <a href="/registration" className="hero-cta-button">
                            <span className="hero-cta-arrow">→</span>
                            <span>Get tickets</span>
                        </a>
                    </div>
                </div>

                {/* Bottom: Event Metadata */}
                <div className="hero-bottom-row">
                    <div className="hero-meta-item text-left">October</div>
                    <div className="hero-meta-item text-center">ITM University</div>
                    <div className="hero-meta-item text-right">Gwalior</div>
                </div>
            </div>
        </section>
    );
}
