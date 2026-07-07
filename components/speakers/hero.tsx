import React from "react";
import "./speakers.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SpeakersHero() {
  return (
    <section className="speakers-hero">
      <ScrollReveal delay={0}>
        <h1 className="speakers-hero-title">Speakers</h1>
      </ScrollReveal>
    </section>
  );
}
