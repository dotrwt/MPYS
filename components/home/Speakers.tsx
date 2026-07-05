import React from "react";
import "./home.css";

interface Speaker {
  name: string;
  company: string;
  role: string;
  initials: string;
}

const SPEAKERS_DATA: Speaker[] = [
  {
    name: "Alina Chen",
    company: "NEW FUTURES",
    role: "Founder",
    initials: "AC",
  },
  {
    name: "Sara Bloom",
    company: "BETTER MADE FOODS",
    role: "VP of brand strategy",
    initials: "SB",
  },
  {
    name: "Jonas Richter",
    company: "COLLABWORKS",
    role: "Founder",
    initials: "JR",
  },
  {
    name: "Ethan Cole",
    company: "THE PURPOSE ECONOMY PODCAST",
    role: "Author and host",
    initials: "EC",
  },
];

export default function Speakers() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-container">
        <div className="speakers-row">
          {/* Left Column: Description & Action */}
          <div className="speakers-info-col">
            <div className="speakers-label">
              <span className="speakers-label-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="speakers-label-text">SPEAKERS</span>
            </div>
            
            <h2 className="speakers-title">
              Keynote speakers
            </h2>
            
            <p className="speakers-subtitle">
              Hear from some of the best minds across technology and sustainability.
            </p>
            
            <a href="/speakers" className="speakers-all-link">
              <span className="speakers-all-arrow">→</span> All speakers
            </a>
          </div>

          {/* Right Column: Speakers Grid */}
          <div className="speakers-grid-col">
            <div className="speakers-grid">
              {SPEAKERS_DATA.map((speaker, index) => (
                <div className="speaker-card" key={index}>
                  {/* Premium Portrait Placeholder */}
                  <div className="speaker-image-placeholder">
                    <div className="speaker-placeholder-bg" />
                    <div className="speaker-avatar-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="speaker-avatar-icon"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="speaker-initials">{speaker.initials}</span>
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="speaker-details">
                    <h3 className="speaker-name">{speaker.name}</h3>
                    <p className="speaker-company">{speaker.company}</p>
                    <p className="speaker-role">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
