"use client";

import React from "react";
import "./agendas.css";
import agendaData from "@/data/agendas.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Committee {
  id: string;
  name: string;
  fullName: string;
  logoUrl: string;
  topic: string;
  about: string;
}

const COMMITTEES_DATA = agendaData as Committee[];

export default function AgendasList() {
  return (
    <section className="agendas-content-section">
      {/* Subtitle Header Bar */}
      <div className="agendas-subtitle-wrap">
        <ScrollReveal className="agendas-subtitle-left" delay={50}>
          <span className="agendas-subtitle-squiggle">
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Committees</span>
        </ScrollReveal>
        <ScrollReveal className="agendas-subtitle-right" delay={100}>
          <span>Madhya Pradesh Youth Summit®</span>
        </ScrollReveal>
      </div>

      {/* Grid List */}
      <div className="agendas-grid">
        {COMMITTEES_DATA.map((committee, index) => (
          <ScrollReveal 
            key={committee.id} 
            className="agenda-card" 
            delay={100 + (index % 4) * 80}
          >
            {/* Card Header Info */}
            <div>
              <div className="agenda-card-top">
                <div className="agenda-emblem-wrap">
                  {committee.logoUrl ? (
                    <img
                      src={committee.logoUrl}
                      alt={`${committee.name} Logo`}
                      className="agenda-emblem-img"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                        const fallback = e.currentTarget.nextSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* SVG Fallback */}
                  <div
                    className="agenda-emblem-fallback"
                    style={{ display: committee.logoUrl ? "none" : "flex" }}
                  >
                    <svg className="agenda-emblem-svg" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id={`grad-list-${committee.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d1b8fc" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        fill="none"
                        stroke={`url(#grad-list-${committee.id})`}
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="37"
                        fill="rgba(139, 92, 246, 0.02)"
                        stroke="rgba(0, 0, 0, 0.05)"
                        strokeWidth="1"
                      />
                      <text
                        x="50"
                        y="55"
                        fill="#8b5cf6"
                        fontSize="14"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {committee.name.split(" ").map(n => n[0]).join("").slice(0, 4).toUpperCase() || committee.name.slice(0, 3).toUpperCase()}
                      </text>
                    </svg>
                  </div>
                </div>
                
                <h3 className="agenda-short-name">{committee.name}</h3>
              </div>

              {/* Full Name and Topic Details */}
              <span className="agenda-full-name">{committee.fullName}</span>
              <h4 className="agenda-topic-title">{committee.topic}</h4>
            </div>

            {/* Divider and About text */}
            <div>
              <div className="agenda-divider" />
              <div className="agenda-about-section">
                <span className="agenda-about-title">About The Agenda Topic</span>
                <p className="agenda-about-text">{committee.about}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
