import React from "react";
import "./agendas.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AgendasHero() {
  return (
    <section className="agendas-hero-section">
      <ScrollReveal delay={0}>
        <h1 className="agendas-hero-title">Agenda</h1>
      </ScrollReveal>
    </section>
  );
}
