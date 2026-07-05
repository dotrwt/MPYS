import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import WhattoExpect from "@/components/home/WhattoExpect";
import Speakers from "@/components/home/Speakers";
import Agenda from "@/components/home/Agenda";
import Sponsers from "@/components/home/Sponsers";
import Footer from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar overlay */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* What to Expect Section */}
      <WhattoExpect />

      {/* Speakers Section */}
      <Speakers />

      {/* Agenda Section */}
      <Agenda />

      {/* Sponsors Section */}
      <Sponsers />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

