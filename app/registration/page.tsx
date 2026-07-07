import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Registration from "@/components/home/Registration";
import Footer from "@/components/layout/footer/footer";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-24 bg-black">
        {/* Render Registration in Dark Theme mode for the subpage */}
        <Registration isDarkTheme={true} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
