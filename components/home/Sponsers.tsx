"use client";

import React from "react";
import "./home.css";
import sponsorsData from "@/data/sponsor.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Sponsor {
  id: string;
  name: string;
  tier: string;
}

const HOME_SPONSORS = (sponsorsData as Sponsor[]).filter(s => s.tier === "partner");

const LOGO_MAP: Record<string, React.ReactNode> = {
  eclipseful: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  quantum: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c5.523 0 10 4.477 10 10c0 2.21-.72 4.25-1.93 5.9L16 12H12V8" />
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  pollinate: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
      <circle cx="5" cy="12" r="2" fill="currentColor" />
      <circle cx="19" cy="12" r="2" fill="currentColor" />
      <circle cx="7" cy="7" r="2" fill="currentColor" />
      <circle cx="17" cy="17" r="2" fill="currentColor" />
      <circle cx="7" cy="17" r="2" fill="currentColor" />
      <circle cx="17" cy="7" r="2" fill="currentColor" />
    </svg>
  ),
  lightbox: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  launchsimple: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" fill="currentColor" fillOpacity="0.15" />
      <path d="m15 9-6 6" />
      <path d="M9 9h6v6" />
    </svg>
  ),
  ikigai: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  contrast: (
    <svg className="sponsor-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M12 2v20a10 10 0 0 0 0-20z" fill="currentColor" />
    </svg>
  ),
};

export default function Sponsers() {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/* Sponsors Header */}
        <div className="sponsors-header">
          <ScrollReveal className="sponsors-header-left" delay={0}>
            <span className="sponsors-label-squiggle">
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="sponsors-label-text">SPONSORS</span>
          </ScrollReveal>

          <ScrollReveal className="sponsors-header-center" delay={100}>
            <h2 className="sponsors-heading">
              <span className="sponsors-text-grey">We're </span>
              <span className="sponsors-text-black">proud to partner </span>
              <span className="sponsors-text-grey">with an outstanding group of </span>
              <span className="sponsors-text-black">forward-thinking organisations.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="sponsors-header-right" delay={200}>
            <a href="/sponsors" className="sponsors-all-link">
              <span className="sponsors-all-arrow">→</span> All sponsors
            </a>
          </ScrollReveal>
        </div>

        {/* Sponsors Grid */}
        <div className="sponsors-grid">
          {HOME_SPONSORS.map((sponsor, index) => {
            const staggerDelay = (index % 4) * 100;
            return (
              <ScrollReveal className="sponsor-card" key={sponsor.id} delay={staggerDelay}>
                <div className="sponsor-logo-wrap">
                  {LOGO_MAP[sponsor.id] || null}
                  <span className="sponsor-name">{sponsor.name}</span>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Sponsor 8: Become a Sponsor CTA Card */}
          <ScrollReveal className="sponsor-card sponsor-card-cta" delay={(HOME_SPONSORS.length % 4) * 100}>
            {/* Ambient background glow */}
            <div className="sponsor-card-glow" />

            <h3 className="sponsor-cta-title">Become a sponsor</h3>

            <a href="/contact" className="sponsor-cta-button">
              <span className="sponsor-cta-arrow">→</span> Get in touch
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
