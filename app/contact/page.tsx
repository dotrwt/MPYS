import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import ContactHero from "@/components/contact/hero";
import ContactForm from "@/components/contact/contactForm";

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper flex flex-col min-h-screen selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <ContactHero />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
