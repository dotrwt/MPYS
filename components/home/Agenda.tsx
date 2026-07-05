"use client";

import React, { useState } from "react";
import "./home.css";
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

export default function Agenda() {
  const [activeTab, setActiveTab] = useState<string>(
    COMMITTEES_DATA[0]?.id || "unhrc"
  );

  const currentCommittee =
    COMMITTEES_DATA.find((c) => c.id === activeTab) || COMMITTEES_DATA[0];

  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-container">
        
        {/* Header Block matching the design layout */}
        <div className="agenda-header-wrapper">
          <ScrollReveal className="agenda-header-left">
            <span className="agenda-date">
              <span className="agenda-date-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              MAY 15-17, 2025
            </span>
            <h2 className="agenda-main-title">Agenda</h2>
          </ScrollReveal>
          <ScrollReveal className="agenda-header-right" delay={100}>
            <span className="agenda-tagline">Think Forward®</span>
          </ScrollReveal>
        </div>

        {/* Committee Navigation Tabs */}
        <div className="committee-tabs-container">
          <div className="committee-tabs">
            {COMMITTEES_DATA.map((committee) => (
              <button
                key={committee.id}
                className={`committee-tab-btn ${activeTab === committee.id ? "active" : ""}`}
                onClick={() => setActiveTab(committee.id)}
              >
                {committee.name}
              </button>
            ))}
          </div>
        </div>

        {/* Committee Display Layout */}
        <div className="committee-display" key={activeTab}>
          
          {/* Logo Column */}
          <div className="committee-logo-col">
            <div className="committee-emblem-wrap">
              <div className="committee-emblem-glow" />
              <div className="committee-emblem">
                {currentCommittee.logoUrl ? (
                  <img
                    src={currentCommittee.logoUrl}
                    alt={`${currentCommittee.name} Logo`}
                    className="committee-logo-img"
                    onError={(e) => {
                      // Hide image on load error and fallback to text initials
                      (e.currentTarget as HTMLElement).style.display = "none";
                      const fallback = e.currentTarget.nextSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}

                {/* Dotted emblem ring and text fallback */}
                <div 
                  className="committee-emblem-fallback" 
                  style={{ display: currentCommittee.logoUrl ? "none" : "flex" }}
                >
                  <svg className="committee-emblem-svg" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id={`grad-${currentCommittee.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d1b8fc" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="44" 
                      fill="none" 
                      stroke={`url(#grad-${currentCommittee.id})`} 
                      strokeWidth="1.5" 
                      strokeDasharray="6 4" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="37" 
                      fill="rgba(209, 184, 252, 0.03)" 
                      stroke="rgba(255, 255, 255, 0.08)" 
                      strokeWidth="1" 
                    />
                    <text 
                      x="50" 
                      y="55" 
                      fill="#ffffff" 
                      fontSize="14" 
                      fontWeight="bold" 
                      textAnchor="middle" 
                      letterSpacing="0.5"
                    >
                      {currentCommittee.name.split(" ").map(n => n[0]).join("").slice(0, 4).toUpperCase() || currentCommittee.name.slice(0, 3).toUpperCase()}
                    </text>
                  </svg>
                </div>
              </div>
              <span className="committee-shortname">{currentCommittee.name}</span>
            </div>
          </div>

          {/* Details / Text Column */}
          <div className="committee-content-col">
            <div className="committee-badge">
              <span className="committee-badge-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="committee-badge-name">{currentCommittee.fullName}</span>
            </div>

            <h3 className="committee-topic-title">
              {currentCommittee.topic}
            </h3>

            <div className="committee-divider" />

            <div className="committee-about-section">
              <h4 className="committee-about-heading">About The Agenda Topic</h4>
              <p className="committee-about-text">
                {currentCommittee.about}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
