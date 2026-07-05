import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400">The page you are looking for does not exist.</p>
      <a href="/" className="mt-8 text-[#d1b8fc] hover:underline">← Go Back Home</a>
    </div>
  );
}
