"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import { events } from "@/app/lib/data";
import { fadeUp, fadeLeft, scaleIn, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";

const typeColors: Record<string, { bg: string; text: string }> = {
  Webinar:     { bg: "rgba(107,53,168,0.12)", text: "#6B35A8" },
  Workshop:    { bg: "rgba(212,175,55,0.15)", text: "#A07820" },
  Conference:  { bg: "rgba(46,19,80,0.12)", text: "#4A2278" },
  Seminar:     { bg: "rgba(139,85,200,0.12)", text: "#6B35A8" },
  Masterclass: { bg: "rgba(212,175,55,0.2)", text: "#8B5E00" },
};

const typeIcons: Record<string, string> = {
  Webinar: "💻", Workshop: "🛠️", Conference: "🎤", Seminar: "📖", Masterclass: "🏆",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

const allTypes = ["All", "Webinar", "Workshop", "Conference", "Seminar", "Masterclass"];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 60%, #6B35A8 100%)" }}
          className="px-6 py-20 relative overflow-hidden"
        >
          {/* Background blob */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ backgroundColor: "#D4AF37", transform: "translate(30%, -30%)" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="text-xs font-semibold tracking-widest uppercase mb-3 inline-flex items-center gap-2"
                style={{ color: "#D4AF37" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>📅</span> Live Events & Programmes
              </motion.p>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Workshops, Webinars<br />& Masterclasses
              </h1>
              <p className="text-base leading-relaxed" style={{ color: "#C8B8E8" }}>
                Learn live from Nigeria's leading practitioners. In-person workshops, online webinars, and executive masterclasses — all CPD-accredited.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex flex-wrap gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                { value: events.length.toString(), label: "Upcoming Events" },
                { value: "6", label: "Cities & Online" },
                { value: "CPD", label: "Accredited" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#9B8AB8" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E8E0F0" }} className="px-6 py-4 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7C7A99" }}>Filter:</span>
            {allTypes.map((t) => (
              <motion.button
                key={t}
                onClick={() => setFilter(t)}
                className="text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
                style={{
                  backgroundColor: filter === t ? "#6B35A8" : "#F3EEFF",
                  color: filter === t ? "#FFFFFF" : "#6B35A8",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
              >
                {t !== "All" && <span className="mr-1">{typeIcons[t]}</span>}{t}
              </motion.button>
            ))}
            <span className="ml-auto text-sm" style={{ color: "#7C7A99" }}>
              <strong style={{ color: "#1A1235" }}>{filtered.length}</strong> event{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* Events grid */}
        <section style={{ backgroundColor: "#FAFAF9" }} className="px-6 py-14">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filtered.map((event, i) => {
                  const tc = typeColors[event.type] || typeColors.Seminar;
                  const urgency = event.seatsLeft <= 10;
                  return (
                    <motion.div
                      key={event.slug}
                      variants={fadeUp}
                      layout
                    >
                      <motion.div
                        className="rounded-2xl overflow-hidden flex flex-col h-full"
                        style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(107,53,168,0.12)" }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Card top accent */}
                        <div
                          className="px-5 pt-5 pb-4"
                          style={{ borderBottom: "1px solid #F0E8F8" }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <motion.span
                              className="text-xs font-bold px-3 py-1 rounded-full"
                              style={{ backgroundColor: tc.bg, color: tc.text }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {typeIcons[event.type]} {event.type}
                            </motion.span>
                            {urgency && (
                              <motion.span
                                className="text-xs font-bold px-2 py-1 rounded-full"
                                style={{ backgroundColor: "rgba(212,68,68,0.1)", color: "#C0392B" }}
                                animate={{ opacity: [1, 0.6, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                🔥 {event.seatsLeft} seats left
                              </motion.span>
                            )}
                          </div>
                          <h3
                            className="text-base font-bold leading-snug mb-2"
                            style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                          >
                            {event.title}
                          </h3>
                          <p className="text-xs leading-relaxed" style={{ color: "#7C7A99" }}>{event.subtitle}</p>
                        </div>

                        {/* Details */}
                        <div className="px-5 py-4 flex-1 flex flex-col gap-2.5">
                          {[
                            { icon: "📅", text: formatDate(event.date) },
                            { icon: "🕐", text: event.time },
                            { icon: "📍", text: event.location },
                            { icon: "🎤", text: event.speaker },
                          ].map((d) => (
                            <div key={d.icon} className="flex items-start gap-2">
                              <span className="text-sm shrink-0 mt-px">{d.icon}</span>
                              <span className="text-xs leading-snug" style={{ color: "#4B4465" }}>{d.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div
                          className="px-5 py-4 flex items-center justify-between"
                          style={{ borderTop: "1px solid #E8E0F0" }}
                        >
                          <div>
                            {event.price === "Free" ? (
                              <span className="text-lg font-black" style={{ color: "#2E7D32" }}>Free</span>
                            ) : (
                              <span className="text-lg font-black" style={{ color: "#6B35A8" }}>
                                ₦{event.price.toLocaleString()}
                              </span>
                            )}
                            <p className="text-xs" style={{ color: "#9B8AB8" }}>
                              {event.seatsLeft} / {event.seats} seats left
                            </p>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link
                              href={`/events/${event.slug}`}
                              className="text-sm font-bold px-4 py-2 rounded-lg text-white"
                              style={{ backgroundColor: "#6B35A8" }}
                            >
                              Register →
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA banner */}
        <section
          style={{ background: "linear-gradient(135deg, #1A1235 0%, #2E1350 100%)" }}
          className="px-6 py-16"
        >
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4AF37" }}>
              Want to Stay Informed?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get Early Access to New Events
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm mb-8" style={{ color: "#9B8AB8" }}>
              Join 12,000+ professionals who receive priority event announcements, early-bird pricing, and exclusive invitations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
              />
              <motion.button
                className="px-6 py-3 rounded-lg font-bold text-sm"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
