"use client";

import React from "react";
import "./home.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TicketOption {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  stars?: number;
  buttonText: string;
  footerText: string;
  formUrl: string;
}

const TICKET_OPTIONS: TicketOption[] = [
  {
    id: "committee",
    title: "Committee Registration",
    price: "₹1,999",
    originalPrice: "₹2,500",
    description: "For individual delegates representing nations or portfolios across our committees:",
    features: [
      "Access to all primary committee sessions (UNHRC, WTO, AIPPM, Lok Sabha, etc.)",
      "Official delegate kit, research guides, and resources",
      "Executive lunches, high tea, and networking sessions over 3 days",
      "Certificate of Participation signed by the Executive Board",
      "Eligible for Best Delegate, High Commendation, and Special Mention awards"
    ],
    buttonText: "Register as Delegate",
    footerText: "Limited slots available for early bird",
    formUrl: "https://forms.gle/mpys2026-delegate" // Placeholder Google Form link for Delegate
  },
  {
    id: "ip",
    title: "International Press",
    price: "₹1,499",
    originalPrice: "₹2,000",
    description: "For aspiring journalists, photographers, and caricaturists documenting the summit:",
    features: [
      "Dedicated role as a Reporter, Photographer, or Caricaturist",
      "Access to cover and audit all active committee proceedings",
      "Opportunity to publish articles and artwork in the official summit newsletter",
      "One-on-one mentorship from veteran IP Chiefs",
      "Official press badge and digital press kit"
    ],
    isFeatured: true,
    stars: 3,
    buttonText: "Register for IP",
    footerText: "Portfolio review details will be sent via email",
    formUrl: "https://forms.gle/mpys2026-ip" // Placeholder Google Form link for IP
  },
  {
    id: "school",
    title: "School Delegation",
    price: "₹1,299",
    originalPrice: "₹1,800",
    description: "Special discounted rate per delegate for institutions registering official teams:",
    features: [
      "Reduced entry fee per delegate (minimum 5 delegates per school)",
      "Coordinated committee allotment for the entire school group",
      "Eligible to compete for the prestigious Best Delegation Trophy",
      "One Faculty Advisor enters completely free of charge",
      "Priority registration and group documentation handling"
    ],
    buttonText: "Register School",
    footerText: "Minimum 5 delegates required",
    formUrl: "https://forms.gle/mpys2026-school" // Placeholder Google Form link for School
  }
];

export default function Registration({ isDarkTheme = false }: { isDarkTheme?: boolean }) {
  return (
    <section id="registration" className={`pricing-section ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="pricing-container">
        {/* Top Header */}
        <div className="pricing-header">
          <ScrollReveal className="pricing-header-left">
            <div className="pricing-label">
              <span className="pricing-label-text">PRICING & TICKETS</span>
            </div>
            <h2 className={`pricing-title ${isDarkTheme ? "text-light" : ""}`}>Get tickets</h2>
          </ScrollReveal>
          
          <ScrollReveal className="pricing-header-right" delay={100}>
            <p className="pricing-subtitle">
              Secure your participation at the MP Youth Summit 2026. Register early to benefit from special rates.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {TICKET_OPTIONS.map((option, idx) => (
            <ScrollReveal 
              key={option.id} 
              className={`pricing-card ${option.isFeatured ? "featured" : ""}`}
              delay={idx * 100}
            >
              {/* Card Top / Header */}
              <div className="pricing-card-header">
                <div className="pricing-card-title-wrap">
                  <h3 className="pricing-card-title">{option.title}</h3>
                  {option.stars && (
                    <div className="pricing-card-badge-wrap">
                      {Array.from({ length: option.stars }).map((_, i) => (
                        <span key={i} style={{ fontSize: "1.1rem" }}>★</span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="pricing-price-wrap">
                  <span className="pricing-price">{option.price}</span>
                  <span className="pricing-original-price">{option.originalPrice}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pricing-card-body">
                <p className="pricing-card-description">{option.description}</p>
                
                <ul className="pricing-features-list">
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx} className="pricing-feature-item">
                      <span className="pricing-feature-icon">
                        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer / Action */}
              <div className="pricing-card-action-wrap">
                <a 
                  href={option.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pricing-btn ${option.isFeatured ? "btn-primary" : "btn-outline"}`}
                >
                  <span className="pricing-btn-arrow">→</span>
                  <span>{option.buttonText}</span>
                </a>
                <p className="pricing-card-footer">{option.footerText}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
