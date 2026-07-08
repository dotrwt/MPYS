"use client";

import React from "react";
import "./home.css";
import speakersData from "@/data/speaker.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Speaker {
  name: string;
  photoUrl: string;
  role: string;
  committee: string;
}

const SPEAKERS_DATA = speakersData as Speaker[];

export default function Speakers() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-container">
        <div className="speakers-row">
          {/* Left Column: Description & Action */}
          <ScrollReveal className="speakers-info-col" delay={0}>
            <div className="speakers-label">
              <span className="speakers-label-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          </ScrollReveal>

          {/* Right Column: Speakers Grid */}
          <div className="speakers-grid-col">
            <div className="speakers-grid">
              {SPEAKERS_DATA.slice(0, 4).map((speaker, index) => {
                // Generate initials dynamically from name
                const initials = speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                // Column-based staggering: left column (even indexes) at 0ms, right column (odd indexes) at 100ms
                const staggerDelay = (index % 2) * 100;

                return (
                  <ScrollReveal className="speaker-card" key={index} delay={staggerDelay}>
                    {/* Premium Portrait Container */}
                    <div className="speaker-image-placeholder">
                      <div className="speaker-placeholder-bg" />

                      {speaker.photoUrl ? (
                        <img
                          src={speaker.photoUrl}
                          alt={speaker.name}
                          className="speaker-image"
                          onError={(e) => {
                            // Hide image on load error and fallback to avatar initials
                            (e.currentTarget as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : null}

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
                        <span className="speaker-initials">{initials}</span>
                      </div>
                    </div>

                    {/* Speaker Details */}
                    <div className="speaker-details">
                      <h3 className="speaker-name">{speaker.name}</h3>
                      <p className="speaker-company">{speaker.committee}</p>
                      <p className="speaker-role">{speaker.role}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
