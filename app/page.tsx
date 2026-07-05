import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/home/hero";
import Footer from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#d1b8fc] selection:text-black">
      {/* Navbar overlay */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Spacer / Content filler if needed between sections */}
      <div className="flex-1" />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

