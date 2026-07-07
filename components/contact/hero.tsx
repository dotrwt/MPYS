import React from "react";
import "./contact.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactHero() {
  return (
    <section className="contact-hero-section">
      <ScrollReveal delay={0}>
        <h1 className="contact-hero-title">Contact</h1>
      </ScrollReveal>
    </section>
  );
}
