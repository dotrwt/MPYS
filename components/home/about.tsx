"use client";

import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

function AnimatedNumber({ value, trigger }: { value: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = Math.max(0, value - 15); // Start counting from 15 below the target (or 0 if value is small)
    if (value > 50) start = Math.max(0, value - 30);
    setCount(start);
    
    let startTime: number | null = null;
    const duration = 1200; // 1.2 seconds duration

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo transition
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (value - start) * easeProgress);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, trigger]);

  return <>{count}</>;
}

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-row">
          {/* Left Label Column */}
          <ScrollReveal className="about-label-column">
            <span className="about-label-squiggle">
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.5C2.5 3.5 3 1.5 4.5 1.5C6 1.5 6.5 4.5 8 4.5C9.5 4.5 10.5 2.5 11.5 2.5C12 2.5 12.5 3 13 3.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="about-label-text">ABOUT</span>
          </ScrollReveal>
          
          {/* Right Content Column */}
          <div className="about-content-column">
            <ScrollReveal delay={100}>
              <h2 className="about-heading">
                <span className="about-text-grey">Where ambitious </span>
                <span className="about-text-black">founders, creatives, and technologists </span>
                <span className="about-text-grey">come together to reimagine what progress looks like.</span>
              </h2>
            </ScrollReveal>

            {/* Bottom Stats Grid */}
            <div className="about-stats-grid">
              {/* Stat 1: Speakers */}
              <ScrollReveal className="about-stat-item" delay={200}>
                <span className="about-stat-number">
                  <AnimatedNumber value={12} trigger={inView} />
                </span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </span>
                  <span className="about-stat-label">SPEAKERS</span>
                </div>
              </ScrollReveal>

              {/* Stat 2: Talks */}
              <ScrollReveal className="about-stat-item" delay={300}>
                <span className="about-stat-number">
                  <AnimatedNumber value={32} trigger={inView} />
                </span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span className="about-stat-label">TALKS</span>
                </div>
              </ScrollReveal>

              {/* Stat 3: Attendees */}
              <ScrollReveal className="about-stat-item" delay={400}>
                <span className="about-stat-number">
                  <AnimatedNumber value={96} trigger={inView} />
                </span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span className="about-stat-label">ATTENDEES</span>
                </div>
              </ScrollReveal>

              {/* Stat 4: Workshops */}
              <ScrollReveal className="about-stat-item" delay={500}>
                <span className="about-stat-number">
                  <AnimatedNumber value={20} trigger={inView} />
                </span>
                <div className="about-stat-meta">
                  <span className="about-stat-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </span>
                  <span className="about-stat-label">WORKSHOPS</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
