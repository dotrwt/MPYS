import React from "react";

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Legal Details</h1>
      <p className="text-gray-400">Terms, Conditions, and Privacy Policy details.</p>
      <a href="/" className="mt-8 text-[#d1b8fc] hover:underline">← Go Back Home</a>
    </div>
  );
}
