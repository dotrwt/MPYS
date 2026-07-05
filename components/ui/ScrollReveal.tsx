"use client";

import React, { useEffect, useState, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  duration = 800,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if window is defined (SSR safety)
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "translateY(0)" : "translateY(24px)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
