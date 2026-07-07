"use client";

import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import SpeakersHero from "@/components/speakers/hero";
import SpeakersList from "@/components/speakers/speakers";
import "@/components/speakers/speakers.css";

export default function SpeakersPage() {
  return (
    <div className="speakers-page-wrapper selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <main className="relative">
        {/* Giant header title */}
        <SpeakersHero />

        {/* Speakers list grid */}
        <SpeakersList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
