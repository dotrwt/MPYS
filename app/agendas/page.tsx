import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import AgendasHero from "@/components/agendas/hero";
import AgendasList from "@/components/agendas/agendasList";

export default function AgendasPage() {
  return (
    <div className="agendas-page-wrapper flex flex-col min-h-screen selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <AgendasHero />
        <AgendasList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
