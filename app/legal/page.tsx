import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-32 pb-24 px-4 max-w-4xl mx-auto w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Legal
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
          Madhya Pradesh Youth Summit is committed to transparency and privacy.
        </p>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-2xl text-left">
          <h3 className="text-lg font-bold text-white mb-2">Terms & Conditions</h3>
          <p className="text-gray-400 mb-6 text-sm">
            All tickets, registrations, and delegate applications are subject to screening. Details entered in registration forms must be accurate.
          </p>
          <h3 className="text-lg font-bold text-white mb-2">Privacy Policy</h3>
          <p className="text-gray-400 text-sm">
            Your data is stored securely and is only used to organize delegation assignments, security clearances, and notifications about MPYS 2026.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
