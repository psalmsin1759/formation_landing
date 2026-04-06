"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Event } from "@/app/lib/data";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerFast, viewportConfig } from "@/app/lib/animations";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Webinar:     { bg: "rgba(107,53,168,0.12)", text: "#6B35A8", border: "rgba(107,53,168,0.25)" },
  Workshop:    { bg: "rgba(212,175,55,0.12)", text: "#A07820", border: "rgba(212,175,55,0.3)" },
  Conference:  { bg: "rgba(46,19,80,0.15)",   text: "#4A2278", border: "rgba(107,53,168,0.2)" },
  Seminar:     { bg: "rgba(139,85,200,0.12)", text: "#6B35A8", border: "rgba(139,85,200,0.25)" },
  Masterclass: { bg: "rgba(212,175,55,0.18)", text: "#8B5E00", border: "rgba(212,175,55,0.35)" },
};

const typeIcons: Record<string, string> = {
  Webinar: "💻", Workshop: "🛠️", Conference: "🎤", Seminar: "📖", Masterclass: "🏆",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

function SeatBar({ total, left }: { total: number; left: number }) {
  const pct = Math.round((left / total) * 100);
  const color = pct < 20 ? "#C0392B" : pct < 50 ? "#E67E22" : "#6B35A8";
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5" style={{ color: "#7C7A99" }}>
        <span>{left} seats remaining</span>
        <span>{total - left} registered</span>
      </div>
      <div className="h-2 rounded-full" style={{ backgroundColor: "#E8E0F0" }}>
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        />
      </div>
    </div>
  );
}

export default function EventDetailContent({ event, related }: { event: Event; related: Event[] }) {
  const [registered, setRegistered] = useState(false);
  const tc = typeColors[event.type] || typeColors.Seminar;
  const isOnline = event.location.toLowerCase().includes("online") || event.location.toLowerCase().includes("zoom");
  const urgency = event.seatsLeft <= 15;

  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #1A1235 0%, #2E1350 50%, #4A2278 100%)" }}
        className="px-6 py-20 relative overflow-hidden"
      >
        {/* Animated blob */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#D4AF37", transform: "translate(30%, -30%)" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-6 text-xs"
            style={{ color: "#7B6A9B" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <span>›</span>
            <span style={{ color: "#C8B8E8" }}>{event.type}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: event info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}
                >
                  {typeIcons[event.type]} {event.type}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#C8B8E8" }}
                >
                  {event.category}
                </span>
                {urgency && (
                  <motion.span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(192,57,43,0.15)", color: "#E74C3C", border: "1px solid rgba(192,57,43,0.3)" }}
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🔥 Only {event.seatsLeft} seats left
                  </motion.span>
                )}
              </div>

              <h1
                className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {event.title}
              </h1>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#C8B8E8" }}>
                {event.subtitle}
              </p>

              {/* Key details row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "📅", label: "Date", value: formatDate(event.date) },
                  { icon: "🕐", label: "Time", value: event.time },
                  { icon: isOnline ? "💻" : "📍", label: isOnline ? "Format" : "Venue", value: event.location },
                  { icon: "🎤", label: "Speaker", value: event.speaker },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-xs mb-1" style={{ color: "#7B6A9B" }}>{d.icon} {d.label}</p>
                    <p className="text-xs font-semibold leading-snug" style={{ color: "#FFFFFF" }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Registration card */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              <RegistrationCard event={event} registered={registered} onRegister={() => setRegistered(true)} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* About */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              About This Event
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4B4465" }}>
              {event.description}
            </p>
          </motion.section>

          {/* Agenda */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              Programme Agenda
            </h2>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[19px] top-4 bottom-4 w-px"
                style={{ backgroundColor: "#E8E0F0" }}
              />
              <motion.div
                className="absolute left-[19px] top-4 w-px"
                style={{ backgroundColor: "#6B35A8", transformOrigin: "top" }}
                initial={{ height: 0 }}
                whileInView={{ height: "calc(100% - 32px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />

              <div className="flex flex-col gap-0">
                {event.agenda.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-5 pb-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black relative z-10"
                      style={{ backgroundColor: "#F3EEFF", border: "2px solid #6B35A8", color: "#6B35A8" }}
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    >
                      {i + 1}
                    </motion.div>

                    <div
                      className="flex-1 p-4 rounded-xl mt-1"
                      style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                    >
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md mr-3"
                        style={{ backgroundColor: "#F3EEFF", color: "#8B55C8" }}
                      >
                        {item.time}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "#1A1235" }}>
                        {item.topic}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Speaker */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              className="text-xl font-bold mb-5"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              Your Speaker
            </h2>
            <motion.div
              className="flex items-start gap-5 p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #F3EEFF 0%, #EDE0FF 100%)", border: "1px solid #E0D0F8" }}
              whileHover={{ boxShadow: "0 12px 32px rgba(107,53,168,0.12)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shrink-0"
                style={{ background: "linear-gradient(135deg, #4A2278, #6B35A8)" }}
                whileHover={{ scale: 1.06, rotate: -3 }}
                transition={{ duration: 0.2 }}
              >
                {event.speaker.split(" ").map((w) => w[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}
              </motion.div>
              <div>
                <h3 className="text-base font-bold mb-0.5" style={{ color: "#1A1235" }}>{event.speaker}</h3>
                <p className="text-sm mb-3" style={{ color: "#7C7A99" }}>{event.speakerTitle}</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: "rgba(107,53,168,0.1)", color: "#6B35A8" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* What you'll gain */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2
              className="text-xl font-bold mb-5"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              What You&rsquo;ll Gain
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {[
                "Practical, immediately applicable knowledge from an active practitioner",
                "CPD certificate of attendance for professional development records",
                "Exclusive event materials and reference guides",
                "Direct Q&A with the speaker — get your specific questions answered",
                "Access to the Formation Exceptionelle alumni network",
                "Priority access to the full course from this speaker",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B35A8" strokeWidth="2.5" className="mt-0.5 shrink-0">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm leading-snug" style={{ color: "#4B4465" }}>{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Related events */}
          {related.length > 0 && (
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                More Events You May Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((e) => (
                  <motion.div
                    key={e.slug}
                    whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(107,53,168,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`/events/${e.slug}`}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                    >
                      <div
                        className="shrink-0 w-12 text-center py-2 rounded-xl"
                        style={{ backgroundColor: "#2E1350" }}
                      >
                        <p className="text-base font-black leading-none" style={{ color: "#D4AF37" }}>
                          {new Date(e.date).getDate()}
                        </p>
                        <p className="text-xs font-semibold" style={{ color: "#9B8AB8" }}>
                          {new Date(e.date).toLocaleDateString("en-NG", { month: "short" }).toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-snug mb-1" style={{ color: "#1A1235" }}>{e.title}</p>
                        <p className="text-xs" style={{ color: "#7C7A99" }}>
                          {e.type} · {e.price === "Free" ? "Free" : `₦${e.price.toLocaleString()}`}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Sticky sidebar */}
        <div className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 flex flex-col gap-5">
            <RegistrationCard event={event} registered={registered} onRegister={() => setRegistered(true)} />

            {/* Share */}
            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A1235" }}>
                Share This Event
              </p>
              <div className="flex gap-2">
                {["LinkedIn", "Twitter", "WhatsApp"].map((s) => (
                  <motion.button
                    key={s}
                    className="flex-1 py-2 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: "#F3EEFF", color: "#6B35A8", border: "1px solid #E8E0F0" }}
                    whileHover={{ scale: 1.05, backgroundColor: "#6B35A8", color: "#FFFFFF" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function RegistrationCard({
  event,
  registered,
  onRegister,
}: {
  event: Event;
  registered: boolean;
  onRegister: () => void;
}) {
  const urgency = event.seatsLeft <= 15;

  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{ border: "1px solid #E8E0F0", backgroundColor: "#FFFFFF" }}
    >
      {/* Price banner */}
      <div
        className="px-6 py-5"
        style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 100%)" }}
      >
        <div className="flex items-baseline gap-3">
          {event.price === "Free" ? (
            <span className="text-3xl font-black text-white">Free</span>
          ) : (
            <>
              <span className="text-3xl font-black text-white">₦{event.price.toLocaleString()}</span>
              <span className="text-sm" style={{ color: "#9B8AB8" }}>per attendee</span>
            </>
          )}
        </div>
        {urgency && (
          <motion.p
            className="text-xs font-semibold mt-1"
            style={{ color: "#E74C3C" }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🔥 Only {event.seatsLeft} seats remaining
          </motion.p>
        )}
      </div>

      <div className="p-5">
        <SeatBar total={event.seats} left={event.seatsLeft} />

        <div className="mt-5 mb-4 flex flex-col gap-2.5 text-xs" style={{ color: "#4B4465" }}>
          {[
            { icon: "📅", text: new Date(event.date).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" }) },
            { icon: "🕐", text: event.time },
            { icon: event.location.toLowerCase().includes("online") ? "💻" : "📍", text: event.location },
          ].map((d) => (
            <div key={d.icon} className="flex items-start gap-2">
              <span className="shrink-0">{d.icon}</span>
              <span>{d.text}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {registered ? (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-center"
              style={{ backgroundColor: "#E8F5E9", color: "#2E7D32", border: "2px solid #A5D6A7" }}
            >
              ✓ You&rsquo;re Registered!
            </motion.div>
          ) : (
            <motion.button
              key="register"
              onClick={onRegister}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #4A2278 0%, #6B35A8 100%)" }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(107,53,168,0.35)" }}
              whileTap={{ scale: 0.97 }}
              exit={{ opacity: 0 }}
            >
              {event.price === "Free" ? "Register Free →" : `Reserve My Seat →`}
            </motion.button>
          )}
        </AnimatePresence>

        <p className="text-xs text-center mt-3" style={{ color: "#9B8AB8" }}>
          Free cancellation up to 48 hours before
        </p>

        {/* Includes */}
        <div className="mt-5 pt-5" style={{ borderTop: "1px solid #E8E0F0" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1A1235" }}>Includes</p>
          {[
            "CPD certificate of attendance",
            "Event materials & slide deck",
            "Recording (where available)",
            "Post-event Q&A summary",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs mb-2" style={{ color: "#4B4465" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B35A8" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
