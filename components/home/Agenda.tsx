"use client";

import React, { useState } from "react";
import "./home.css";

interface Committee {
  id: string;
  name: string;
  fullName: string;
  logoLetters: string;
  topic: string;
  about: string;
}

const COMMITTEES_DATA: Committee[] = [
  {
    id: "unga",
    name: "UNGA (DISEC)",
    fullName: "United Nations General Assembly - Disarmament and International Security Committee",
    logoLetters: "UNGA",
    topic: "Prevention of an Arms Race in Outer Space (PAROS)",
    about: "The militarization of outer space poses a growing risk to international peace. Delegates will address the deployment of anti-satellite (ASAT) weapons, orbital security frameworks, and the drafting of international treaties to ensure space remains a peaceful domain for scientific discovery and cooperative development rather than a field of conflict."
  },
  {
    id: "unsc",
    name: "UNSC",
    fullName: "United Nations Security Council",
    logoLetters: "UNSC",
    topic: "Stabilizing Transnational Cybersecurity Threats and Geopolitical Crises",
    about: "With the rise of state-sponsored cyber warfare targeting critical public infrastructure, the Security Council must evaluate measures to deter digital threats. Delegates will negotiate parameters for international cybersecurity accountability, crisis containment, and maintaining state sovereignty under the immediate threat of cyber escalation."
  },
  {
    id: "loksabha",
    name: "Lok Sabha",
    fullName: "Lower House of the Indian Parliament",
    logoLetters: "LS",
    topic: "National Youth Policy Framework and Digital Information Protection Rights",
    about: "In this legislative simulation of the Lok Sabha, representatives will debate amendments to the national youth development plan, focusing on job creation in emerging tech sectors. Additionally, members will debate the Digital Personal Data Protection Act to balance citizen privacy rights with national internal security requirements."
  },
  {
    id: "aippm",
    name: "AIPPM",
    fullName: "All India Political Parties Meet",
    logoLetters: "AIPPM",
    topic: "Re-evaluating Federal Autonomy and Electoral Funding Reforms",
    about: "This forum gathers leaders from various political alignments to discuss federal relations, focusing on financial autonomy and state tax allocations. A key point of contention will be reformations in electoral funding to increase transparency and mitigate corporate monopolies in democratic elections."
  },
  {
    id: "unep",
    name: "UNEP",
    fullName: "United Nations Environment Programme",
    logoLetters: "UNEP",
    topic: "Combating Industrial Deforestation and Preserving Biodiversity in Central India",
    about: "Central India’s ecological zones are under strain due to rapid industrial expansion. The UNEP committee will deliberate on setting up protected green corridors, standardizing carbon credit systems for industries, and creating community-led models to ensure local tribes participate in forest conservation."
  },
  {
    id: "hcc",
    name: "HCC",
    fullName: "Historical Crisis Committee (1962 Geopolitics)",
    logoLetters: "HCC",
    topic: "The Sino-Indian War: Navigating Geopolitical Escalation and Backchannel Alliances",
    about: "Frozen in the autumn of 1962, this committee places delegates in the cabinet during the outbreak of the Sino-Indian border conflict. Members must respond to real-time intelligence feeds, manage military positions on the border, and engage in high-stakes backchannel negotiations to resolve the crisis or forge alternate historical outcomes."
  },
  {
    id: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    logoLetters: "UNHRC",
    topic: "Protecting Freedom of Expression and Privacy Rights in the Digital Age",
    about: "As state control over digital communications increases globally, this council will investigate human rights violations related to network shutdowns and surveillance. Delegates will draft resolutions establishing international guidelines on the ethical limits of AI monitoring, facial recognition, and securing journalists’ safety."
  },
  {
    id: "ip",
    name: "IP",
    fullName: "International Press",
    logoLetters: "IP",
    topic: "Ethical Journalism, Media Bias, and Mitigating AI-Generated Misinformation",
    about: "Acting as reporters, photojournalists, and editors, the International Press team will cover live developments across all committees. They will also deliberate on the challenges facing modern media, including deepfakes, ethical reportage under state influence, and drafting guidelines to verify information in the era of generative AI."
  }
];

export default function Agenda() {
  const [activeTab, setActiveTab] = useState<string>("unga");

  const currentCommittee = COMMITTEES_DATA.find((c) => c.id === activeTab) || COMMITTEES_DATA[0];

  // Render a custom symbolic SVG icon for each committee
  const renderCommitteeIcon = (id: string) => {
    switch (id) {
      case "unga":
        return (
          <g>
            <circle cx="50" cy="45" r="16" fill="none" stroke="#d1b8fc" strokeWidth="1.5" />
            <path d="M50,29 L50,61 M34,45 L66,45" stroke="#d1b8fc" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M38,36 C42,42 42,48 38,54 M62,36 C58,42 58,48 62,54" fill="none" stroke="#d1b8fc" strokeWidth="1.2" />
            <path d="M36,54 C42,58 58,58 64,54" fill="none" stroke="#d1b8fc" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "unsc":
        return (
          <g>
            <path d="M36,32 L64,32 C64,32 68,48 50,66 C32,48 36,32 36,32 Z" fill="none" stroke="#d1b8fc" strokeWidth="2" strokeLinejoin="round" />
            <path d="M50,38 L50,56 M42,47 L58,47" stroke="#d1b8fc" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "loksabha":
        return (
          <g>
            <path d="M32,62 L68,62 M50,28 L50,35" stroke="#d1b8fc" strokeWidth="2" strokeLinecap="round" />
            <path d="M38,62 C38,44 62,44 62,62" fill="none" stroke="#d1b8fc" strokeWidth="1.8" />
            <path d="M44,62 L44,50 M50,62 L50,47 M56,62 L56,50" stroke="#d1b8fc" strokeWidth="1" />
            <circle cx="50" cy="40" r="3" fill="#d1b8fc" />
          </g>
        );
      case "aippm":
        return (
          <g>
            <path d="M35,62 L44,34 L50,44 L56,34 L65,62 M40,50 L60,50" fill="none" stroke="#d1b8fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="28" r="4" fill="none" stroke="#d1b8fc" strokeWidth="1.5" />
          </g>
        );
      case "unep":
        return (
          <g>
            <path d="M50,28 C36,40 40,60 50,64 C60,60 64,40 50,28 Z" fill="rgba(209, 184, 252, 0.05)" stroke="#d1b8fc" strokeWidth="2" />
            <path d="M50,28 L50,64" stroke="#d1b8fc" strokeWidth="1.5" />
            <path d="M50,38 Q42,42 42,42 M50,48 Q58,44 58,44 M50,54 Q44,52 44,52" stroke="#d1b8fc" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "hcc":
        return (
          <g>
            <path d="M36,30 L64,30 L50,46 L64,62 L36,62 L50,46 Z" fill="none" stroke="#d1b8fc" strokeWidth="2" strokeLinejoin="round" />
            <path d="M40,34 L60,34 M40,58 L60,58" stroke="#d1b8fc" strokeWidth="1" />
            <circle cx="50" cy="56" r="3" fill="#d1b8fc" />
          </g>
        );
      case "unhrc":
        return (
          <g>
            <path d="M35,50 C35,40 42,32 50,32 C58,32 65,40 65,50 C65,56 61,61 56,63 L56,66 L44,66 L44,63 C39,61 35,56 35,50 Z" fill="none" stroke="#d1b8fc" strokeWidth="1.8" />
            <path d="M44,48 L56,48 M50,42 L50,54" stroke="#d1b8fc" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "ip":
        return (
          <g>
            <path d="M50,26 L62,42 L56,60 L44,60 L38,42 Z" fill="rgba(209, 184, 252, 0.05)" stroke="#d1b8fc" strokeWidth="2" strokeLinejoin="round" />
            <path d="M50,26 L50,50" stroke="#d1b8fc" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="54" r="2" fill="#d1b8fc" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-container">
        
        {/* Header Block matching the design layout */}
        <div className="agenda-header-wrapper">
          <div className="agenda-header-left">
            <span className="agenda-date">
              <span className="agenda-date-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              MAY 15-17, 2025
            </span>
            <h2 className="agenda-main-title">Agenda</h2>
          </div>
          <div className="agenda-header-right">
            <span className="agenda-tagline">Think Forward®</span>
          </div>
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
        <div className="committee-display">
          
          {/* Logo Column */}
          <div className="committee-logo-col">
            <div className="committee-emblem-wrap">
              <div className="committee-emblem-glow" />
              <div className="committee-emblem">
                <svg className="committee-emblem-svg" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id={`grad-${currentCommittee.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d1b8fc" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Decorative outer dotted/dashed circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="44" 
                    fill="none" 
                    stroke={`url(#grad-${currentCommittee.id})`} 
                    strokeWidth="1.5" 
                    strokeDasharray="6 4" 
                  />
                  
                  {/* Inner glow ring */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="37" 
                    fill="rgba(209, 184, 252, 0.03)" 
                    stroke="rgba(255, 255, 255, 0.08)" 
                    strokeWidth="1" 
                  />
                  
                  {/* Committee Symbolic SVG Drawing */}
                  {renderCommitteeIcon(currentCommittee.id)}
                </svg>
              </div>
              <span className="committee-shortname">{currentCommittee.logoLetters}</span>
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
