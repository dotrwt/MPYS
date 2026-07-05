import React from "react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-400">Feel free to reach out to us at contact@mpys.in</p>
      <a href="/" className="mt-8 text-[#d1b8fc] hover:underline">← Go Back Home</a>
    </div>
  );
}
