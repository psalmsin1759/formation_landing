"use client";
import { useState } from "react";

const faqs = [
  "How long does it take to build a new website?",
  "What makes Fourseven different from other agencies?",
  "Do you offer ongoing support after launch?",
  "What kind of ROI can I expect from your services?",
  "How much does a website project cost?",
  "Will I be able to update the website myself?",
  "Do you understand my industry?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(6);

  return (
    <section style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#ff6b2b" }}></div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#ff6b2b" }}>
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight" style={{ color: "#1a2b3c" }}>
            Got questions?<br />Here are some answers.
          </h2>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col gap-1">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer"
              style={{
                backgroundColor: openIndex === i ? "#0088e9" : "#edf2f7",
                color: openIndex === i ? "#ffffff" : "#1a2b3c",
              }}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <span className="text-sm font-medium">{faq}</span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                style={{
                  backgroundColor: openIndex === i ? "#ffffff" : "transparent",
                  border: openIndex === i ? "none" : `1.5px solid #1a2b3c`,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === i ? "#0088e9" : "#1a2b3c"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
