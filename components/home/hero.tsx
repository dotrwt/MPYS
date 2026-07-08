"use client";

import React, { useEffect, useState } from "react";
import "./home.css";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Subtle fade out for hero content as it scrolls
    const opacity = Math.max(1 - scrollY / 600, 0);
    // Subtle content parallax (moves slightly slower by 15%)
    const contentTranslate = scrollY * 0.15;

    return (
        <section className="hero-container">
            {/* Dynamic Animated Background Blobs with parallax scrolling (translating down relative to container) */}
            <div
                className="hero-glow-blob-1"
                style={{ transform: `translate3d(0, ${scrollY * 0.45}px, 0)`, willChange: "transform" }}
            />
            <div
                className="hero-glow-blob-2"
                style={{ transform: `translate3d(0, ${scrollY * 0.55}px, 0)`, willChange: "transform" }}
            />
            <div
                className="hero-glow-blob-3"
                style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)`, willChange: "transform" }}
            />
            <div className="hero-grain" />

            <div
                className="hero-content"
                style={{
                    transform: `translate3d(0, ${contentTranslate}px, 0)`,
                    opacity: opacity,
                    willChange: "transform, opacity"
                }}
            >
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
                    <div className="hero-meta-item text-left">9th - 11th October</div>
                    <div className="hero-meta-item text-center">ITM University</div>
                    <div className="hero-meta-item text-right">Gwalior (M.P.)</div>
                </div>
            </div>
        </section>
    );
}
