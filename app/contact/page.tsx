import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-32 pb-24 px-4 max-w-4xl mx-auto w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
          Have any questions or suggestions? Feel free to reach out to our team.
        </p>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-md">
          <p className="text-gray-300 mb-2">Email us at</p>
          <a href="mailto:contact@mpys.in" className="text-2xl font-bold text-[#d1b8fc] hover:underline transition">
            contact@mpys.in
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
