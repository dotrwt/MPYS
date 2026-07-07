"use client";

import React, { useState } from "react";
import "./venue.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VenueDetails() {
  const [imageSrc, setImageSrc] = useState("/assets/venue/venue.jpg");

  const handleImageError = () => {
    // If the local file doesn't exist yet, fall back to a high-quality modern grayscale architectural image
    setImageSrc("https://findmycollege.com/colleges/itm-university-gwalior-55287/gallery");
  };

  return (
    <section className="venue-content-section">
      {/* Banner Image Container */}
      <ScrollReveal delay={100}>
        <div className="venue-banner-container">
          {/* Coordinates Badge */}
          <div className="venue-coordinates-badge">
            <h3 className="venue-badge-title">ITM University,</h3>
            <p className="venue-badge-sub">Gwalior, MP </p>
          </div>

          {/* Grayscale Banner Image */}
          <img
            src={imageSrc}
            alt="Ravindra Bhawan Auditorium, Bhopal"
            className="venue-banner-image"
            onError={handleImageError}
          />
        </div>
      </ScrollReveal>

      {/* Details Row */}
      <div className="venue-details-row">
        <ScrollReveal className="venue-label-wrap" delay={180}>
          <span className="venue-label-wavy">
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Venue</span>
        </ScrollReveal>

        <ScrollReveal className="venue-description-tagline" delay={240}>
          At the heart of transformative education, <span className="venue-description-highlight">ITM University</span> is more than a campus — it's a place designed for <span className="venue-description-highlight">for innovation, learning, and limitless opportunities.</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
