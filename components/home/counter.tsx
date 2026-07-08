"use client";

import React, { useState, useEffect } from "react";
import "./home.css";

export default function Counter() {
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setMounted(true);
        // Target Date: October 9, 2026 09:00:00 AM IST (Indian Standard Time)
        // October 9, 2026 09:00:00 IST is UTC 2026-10-09T03:30:00Z
        const targetDate = new Date("2026-10-09T03:30:00Z").getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };

        // Set initial
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => {
        return num.toString().padStart(2, "0");
    };

    // Before mounting, render standard zero skeleton to prevent layout shift
    const displayDays = mounted ? formatNumber(timeLeft.days) : "00";
    const displayHours = mounted ? formatNumber(timeLeft.hours) : "00";
    const displayMinutes = mounted ? formatNumber(timeLeft.minutes) : "00";
    const displaySeconds = mounted ? formatNumber(timeLeft.seconds) : "00";

    return (
        <section className="countdown-section">
            <div className="countdown-container">
                <h3 className="countdown-title">Countdown to Summit</h3>
                <div className="countdown-grid">
                    <div className="countdown-card">
                        <span className="countdown-value">{displayDays}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <span className="countdown-colon">:</span>
                    <div className="countdown-card">
                        <span className="countdown-value">{displayHours}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <span className="countdown-colon">:</span>
                    <div className="countdown-card">
                        <span className="countdown-value">{displayMinutes}</span>
                        <span className="countdown-label">Minutes</span>
                    </div>
                    <span className="countdown-colon">:</span>
                    <div className="countdown-card">
                        <span className="countdown-value">{displaySeconds}</span>
                        <span className="countdown-label">Seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
