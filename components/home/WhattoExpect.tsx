"use client";

import React from "react";
import "./home.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhattoExpect() {
  return (
    <section className="expect-section">
      <div className="expect-container">
        {/* Top Header */}
        <div className="expect-header">
          <ScrollReveal className="expect-header-left">
            <div className="expect-label">
              <span className="expect-label-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="expect-label-text">WHAT'S ON</span>
            </div>
            <h2 className="expect-title">What to expect</h2>
          </ScrollReveal>
          
          <ScrollReveal className="expect-header-right" delay={100}>
            <p className="expect-subtitle">
              Join us for a two-day youth assembly designed to spark policy discussions, forge diplomatic ties, and shape tomorrow's leadership.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="expect-grid">
          {/* Card 1: MUN track */}
          <ScrollReveal className="expect-card" delay={0}>
            <div className="expect-card-top">
              <h3 className="expect-card-title">Diplomatic debates</h3>
              <span className="expect-card-number">01</span>
            </div>
            <p className="expect-card-description">
              Engage in stimulating <strong>Model United Nations</strong> debates, resolving <strong>global crises</strong> and drafting policies for a better tomorrow.
            </p>
          </ScrollReveal>

          {/* Card 2: Workshops */}
          <ScrollReveal className="expect-card" delay={100}>
            <div className="expect-card-top">
              <h3 className="expect-card-title">Leadership workshops</h3>
              <span className="expect-card-number">02</span>
            </div>
            <p className="expect-card-description">
              Roll up your sleeves in interactive sessions focused on <strong>diplomacy</strong>, <strong>negotiation tactics</strong>, and public speaking.
            </p>
          </ScrollReveal>

          {/* Card 3: Networking */}
          <ScrollReveal className="expect-card" delay={200}>
            <div className="expect-card-top">
              <h3 className="expect-card-title">Purposeful networking</h3>
              <span className="expect-card-number">03</span>
            </div>
            <p className="expect-card-description">
              Connect with a <strong>like-minded community</strong> of young delegates, aspiring policy-makers, and <strong>future global leaders</strong>.
            </p>
          </ScrollReveal>

          {/* Card 4: CTA Black Card */}
          <ScrollReveal className="expect-card expect-card-cta" delay={300}>
            {/* Ambient background glow */}
            <div className="expect-card-glow" />
            
            <div className="expect-card-top">
              <h3 className="expect-card-title text-white">Want to be involved?</h3>
              <span className="expect-card-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
                </svg>
              </span>
            </div>
            
            <div className="expect-card-bottom">
              <a href="/contact" className="expect-cta-button">
                <span className="expect-cta-arrow">→</span> Get in touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
