import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import VenueHero from "@/components/venue/hero";
import VenueDetails from "@/components/venue/venue";

export default function VenuePage() {
  return (
    <div className="venue-page-wrapper flex flex-col min-h-screen selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <VenueHero />
        <VenueDetails />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
