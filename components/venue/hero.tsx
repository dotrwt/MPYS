import React from "react";
import "./venue.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VenueHero() {
  return (
    <section className="venue-hero-section">
      <ScrollReveal delay={0}>
        <h1 className="venue-hero-title">Venue</h1>
      </ScrollReveal>
    </section>
  );
}
