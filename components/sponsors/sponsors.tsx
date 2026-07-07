"use client";

import React from "react";
import "./sponsor.css";
import sponsorsData from "@/data/sponsor.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Sponsor {
  id: string;
  name: string;
  tier: string;
}

const SPONSORS_LIST = sponsorsData as Sponsor[];

const LOGO_MAP: Record<string, React.ReactNode> = {
  globalbank: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 12l10 10 10-10z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  cubekit: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  "flora-fauna": (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="17" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="7" cy="12" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="17" cy="12" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  euphoria: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5L7 19M22 12H2M17 19L7 5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  eclipseful: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  quantum: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c5.523 0 10 4.477 10 10c0 2.21-.72 4.25-1.93 5.9L16 12H12V8" />
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  pollinate: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  launchsimple: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" fill="currentColor" fillOpacity="0.15" />
      <path d="m15 9-6 6" />
      <path d="M9 9h6v6" />
    </svg>
  ),
  ikigai: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  contrast: (
    <svg className="sponsor-logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M12 2v20a10 10 0 0 0 0-20z" fill="currentColor" />
    </svg>
  ),
};

export default function SponsorsList() {
  return (
    <section className="sponsors-section-wrap">
      {/* Partners Tagline Header */}
      <div className="sponsors-partners-header">
        <ScrollReveal className="sponsors-label-wrap" delay={50}>
          <span className="sponsors-label-wavy">
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Partners</span>
        </ScrollReveal>

        <ScrollReveal className="sponsors-tagline" delay={120}>
          Our <span className="sponsors-tagline-highlight">cornerstone partners</span> make Madhya Pradesh Youth Summit possible and help shape its lasting impact.
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <a href="/contact" className="sponsors-touch-link">
            <span className="sponsors-touch-arrow">→</span> Get in touch
          </a>
        </ScrollReveal>
      </div>

      {/* Grid of Sponsors */}
      <div className="sponsors-grid-layout">
        {SPONSORS_LIST.map((sponsor, index) => {
          const staggerDelay = (index % 4) * 80 + 100;
          return (
            <ScrollReveal className="sponsor-card-item" key={sponsor.id} delay={staggerDelay}>
              <div className="sponsor-logo-container">
                {LOGO_MAP[sponsor.id] || null}
                <span className="sponsor-name">{sponsor.name}</span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
