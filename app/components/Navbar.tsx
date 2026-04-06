"use client";
import { useState } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#f5f7fa" }}
      className="sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b border-gray-100"
    >
      {/* Logo */}
      <a href="#" className="text-xl font-black italic tracking-tight" style={{ color: "#1a2b3c", fontFamily: "Arial, sans-serif" }}>
        fourseven
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-6 text-sm font-medium" style={{ color: "#1a2b3c" }}>
        <a href="#" className="hover:opacity-70">Home</a>
        <a href="#about" className="hover:opacity-70">About</a>
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:opacity-70"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {servicesOpen && (
            <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg py-2 w-48 text-sm" style={{ color: "#1a2b3c" }}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Web Design</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Website Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Shopify Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Search Engine Optimisation</a>
            </div>
          )}
        </div>
        <a href="#projects" className="hover:opacity-70">Projects</a>
        <a href="#blog" className="hover:opacity-70">Blog</a>
        <a href="#contact" className="hover:opacity-70">Contact</a>
      </div>
    </nav>
  );
}
