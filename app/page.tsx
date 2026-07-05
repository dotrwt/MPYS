import Footer from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#d1b8fc] selection:text-black">
      {/* Spacer / Minimal Hero Section for the Landing Page */}
      <main className="flex flex-col flex-1 items-center justify-center py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-semibold text-[#d1b8fc] tracking-wider uppercase">
            Madhya Pradesh Youth Summit 2025
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white max-w-4xl leading-[1.05]">
            Think Forward.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mt-2">
            The premier Model United Nations and youth conference of Madhya Pradesh. Shaping the leaders of tomorrow.
          </p>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

