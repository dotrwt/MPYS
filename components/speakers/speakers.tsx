"use client";

import React from "react";
import "./speakers.css";
import speakersData from "@/data/speaker.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Speaker {
  name: string;
  photoUrl: string;
  role: string;
  committee: string;
}

const SPEAKERS_DATA = speakersData as Speaker[];

export default function SpeakersList() {
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>({});

  const handleImageError = (photoUrl: string) => {
    setFailedImages((prev) => ({ ...prev, [photoUrl]: true }));
  };

  return (
    <section className="speakers-section-wrap">
      {/* Keynote Header Row with Divider */}
      <ScrollReveal className="speakers-section-header" delay={50}>
        <h2 className="speakers-section-title">Keynote speakers</h2>
        <div className="speakers-section-divider" />
        <a 
          href="https://forms.gle/mpys2026-speak" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="speakers-apply-link"
        >
          <span className="speakers-apply-arrow">→</span> Apply to speak
        </a>
      </ScrollReveal>

      {/* Grid of Speakers */}
      <div className="speakers-grid-layout">
        {SPEAKERS_DATA.map((speaker, index) => {
          // Initials for avatar fallback
          const initials = speaker.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          // 4-column stagger delay for cards
          const staggerDelay = (index % 4) * 80 + 100;
          const isFailed = speaker.photoUrl ? failedImages[speaker.photoUrl] : true;

          return (
            <ScrollReveal className="speakers-card-item" key={index} delay={staggerDelay}>
              {/* Portrait container */}
              <div className="speakers-image-container">
                {speaker.photoUrl && !isFailed ? (
                  <img 
                    src={speaker.photoUrl} 
                    alt={speaker.name} 
                    className="speakers-card-image"
                    onError={() => handleImageError(speaker.photoUrl)}
                  />
                ) : null}

                {/* Backup avatar if image fails to load */}
                <div className="speakers-avatar-fallback">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="speakers-avatar-icon-svg"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="speakers-avatar-initials">{initials}</span>
                </div>
              </div>

              {/* Speaker metadata */}
              <div className="speakers-card-details">
                <h3 className="speakers-card-name">{speaker.name}</h3>
                <p className="speakers-card-company">{speaker.committee}</p>
                <p className="speakers-card-role">{speaker.role}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
