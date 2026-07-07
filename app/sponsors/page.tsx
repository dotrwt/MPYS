import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import SponsorsHero from "@/components/sponsors/hero";
import SponsorsList from "@/components/sponsors/sponsors";

export default function SponsorsPage() {
  return (
    <div className="sponsors-page-wrapper flex flex-col min-h-screen selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <SponsorsHero />
        <SponsorsList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
