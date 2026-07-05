import React from "react";
import "./home.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-row">
          {/* Left Label Column */}
          <div className="about-label-column">
            <span className="about-label-squiggle">
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="about-label-text">ABOUT</span>
          </div>
          
          {/* Right Content Column */}
          <div className="about-content-column">
            <h2 className="about-heading">
              <span className="about-text-grey">Where ambitious </span>
              <span className="about-text-black">founders, creatives, and technologists </span>
              <span className="about-text-grey">come together to reimagine what progress looks like.</span>
            </h2>

            {/* Bottom Stats Grid */}
            <div className="about-stats-grid">
              {/* Stat 1: Speakers */}
              <div className="about-stat-item">
                <span className="about-stat-number">12</span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </span>
                  <span className="about-stat-label">SPEAKERS</span>
                </div>
              </div>

              {/* Stat 2: Talks */}
              <div className="about-stat-item">
                <span className="about-stat-number">32</span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span className="about-stat-label">TALKS</span>
                </div>
              </div>

              {/* Stat 3: Attendees */}
              <div className="about-stat-item">
                <span className="about-stat-number">96</span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span className="about-stat-label">ATTENDEES</span>
                </div>
              </div>

              {/* Stat 4: Workshops */}
              <div className="about-stat-item">
                <span className="about-stat-number">20</span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </span>
                  <span className="about-stat-label">WORKSHOPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
