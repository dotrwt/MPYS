"use client";

import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import speakersData from "@/data/speaker.json";
import "@/components/home/home.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Speaker {
  name: string;
  photoUrl: string;
  role: string;
  committee: string;
}

const SPEAKERS_DATA = speakersData as Speaker[];

export default function SpeakersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar overlay */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-24 relative">
        {/* Glow Blobs for background branding */}
        <div 
          className="absolute pointer-events-none z-0" 
          style={{
            top: "10%",
            left: "5%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(209, 184, 252, 0.04) 0%, rgba(209, 184, 252, 0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div 
          className="absolute pointer-events-none z-0" 
          style={{
            top: "50%",
            right: "5%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, rgba(139, 92, 246, 0) 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="speakers-container relative z-10 px-6 sm:px-12 md:px-16">
          {/* Header Block matching the design layout */}
          <ScrollReveal className="flex flex-col gap-4 mb-16 max-w-3xl" delay={0}>
            <div className="speakers-label">
              <span className="speakers-label-squiggle">
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="speakers-label-text">OUR LEADERSHIP</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
              Keynote Speakers
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Meet the distinguished chairs, moderators, and directors guiding our committee discussions and diplomacy at the summit.
            </p>
          </ScrollReveal>

          {/* Speakers Grid - 4 Columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {SPEAKERS_DATA.map((speaker, index) => {
              // Generate initials dynamically from name
              const initials = speaker.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              // 4-column-based stagger delay
              const staggerDelay = (index % 4) * 80;

              return (
                <ScrollReveal className="speaker-card" key={index} delay={staggerDelay}>
                  {/* Premium Portrait Container */}
                  <div className="speaker-image-placeholder">
                    <div className="speaker-placeholder-bg" />
                    
                    {speaker.photoUrl ? (
                      <img 
                        src={speaker.photoUrl} 
                        alt={speaker.name} 
                        className="speaker-image"
                        onError={(e) => {
                          // Hide image on load error and fallback to avatar initials
                          (e.currentTarget as HTMLElement).style.display = "none";
                        }}
                      />
                    ) : null}

                    <div className="speaker-avatar-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="speaker-avatar-icon"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="speaker-initials">{initials}</span>
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="speaker-details">
                    <h3 className="speaker-name">{speaker.name}</h3>
                    <p className="speaker-company">{speaker.committee}</p>
                    <p className="speaker-role">{speaker.role}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
