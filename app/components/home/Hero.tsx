"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, lineReveal } from "@/app/lib/animations";
import {
  IconScale,
  IconArrowRight,
  IconPlay,
  IconStar,
  IconSparkle,
} from "@/app/lib/icons";

const headlineLines = ["The Ultimate", "Destination for"];

const marqueeItems = [
  "Legal Training",
  "Business & Management",
  "Compliance",
  "Leadership",
  "Finance & Tax",
  "Technical Skills",
];

const avatarSeeds = [
  { initials: "AO", bg: "#6B35A8" },
  { initials: "CN", bg: "#4A2278" },
  { initials: "TA", bg: "#8B55C8" },
  { initials: "FE", bg: "#2E1350" },
];

export default function Hero() {
  return (
    <section
      className="grain relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 620px at 82% -12%, rgba(107,53,168,0.55), transparent 62%), radial-gradient(900px 520px at -8% 112%, rgba(74,34,120,0.5), transparent 56%), #120A25",
      }}
    >
      {/* Editorial column hairlines */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />
      {/* Gold aurora drift */}
      <motion.div
        className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.22), transparent 65%)", filter: "blur(40px)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-20 pb-20 lg:pt-24 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase mb-8"
            style={{
              backgroundColor: "rgba(212,175,55,0.08)",
              color: "#E5C961",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <IconSparkle size={13} />
            Trusted by 30,000+ professionals worldwide
          </motion.div>

          <h1
            className="font-display font-bold text-white tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.9rem)", lineHeight: 1.04 }}
          >
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  className="block"
                  custom={i}
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2 -mb-2">
              <motion.span
                className="block italic font-medium"
                style={{ color: "#D4AF37" }}
                custom={2}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
              >
                Professional Excellence.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="text-[15px] leading-relaxed mt-7 max-w-md"
            style={{ color: "#B9A8DC" }}
          >
            Expert-led training in law, business, and technical disciplines.
            Practical, real-world knowledge with industry-recognized
            certifications — designed for professionals who demand the best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="/courses"
              className="btn-sheen group inline-flex items-center justify-center gap-3 rounded-full pl-7 pr-2 py-2 font-bold text-sm transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
            >
              Explore All Courses
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-400 group-hover:rotate-45"
                style={{ backgroundColor: "#120A25", color: "#D4AF37" }}
              >
                <IconArrowRight size={15} strokeWidth={2.2} />
              </span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 font-semibold text-sm text-white transition-colors duration-300 hover:bg-white/[0.07]"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{ border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <IconPlay size={9} />
              </span>
              How It Works
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.95 }}
            className="flex flex-wrap items-center gap-5 mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex -space-x-2.5">
              {avatarSeeds.map((a) => (
                <span
                  key={a.initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2"
                  style={{ backgroundColor: a.bg, ["--tw-ring-color" as string]: "#120A25" }}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IconStar key={i} size={12} style={{ color: "#D4AF37" }} />
                ))}
                <span className="text-sm font-bold text-white ml-1">4.8</span>
              </div>
              <p className="text-xs mt-1" style={{ color: "#9B8AB8" }}>
                From lawyers, executives & specialists in 60+ countries
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: floating course card */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
        >
          {/* Offset gold frame */}
          <div
            className="absolute rounded-3xl"
            style={{
              inset: "-14px -14px 42px 130px",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
            aria-hidden="true"
          />

          <motion.div
            className="relative rounded-3xl p-7"
            style={{
              backgroundColor: "#FFFFFF",
              maxWidth: "380px",
              marginLeft: "auto",
              boxShadow: "0 48px 90px -24px rgba(0,0,0,0.55)",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl p-3"
                style={{ backgroundColor: "#F3EEFF", color: "#6B35A8", width: "52px", height: "52px" }}
              >
                <IconScale size={26} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em]" style={{ color: "#D4AF37" }}>
                  BESTSELLER
                </p>
                <h3 className="font-display text-[15px] font-bold leading-snug" style={{ color: "#1A1235" }}>
                  Contract Drafting &amp; Negotiation
                </h3>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1.5" style={{ color: "#7C7A99" }}>
                <span>Module 3 of 5</span>
                <span style={{ color: "#6B35A8", fontWeight: 600 }}>60% complete</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1.3, duration: 1.4, ease: EASE }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-5" style={{ borderTop: "1px solid #E8E0F0" }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  AO
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#1A1235" }}>Barr. A. Okonkwo</p>
                  <p className="text-[11px]" style={{ color: "#7C7A99" }}>Lead Instructor</p>
                </div>
              </div>
              <span className="font-display text-base font-black" style={{ color: "#6B35A8" }}>
                ₦300,000
              </span>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-5 left-10 rounded-2xl px-5 py-3"
            style={{ backgroundColor: "#D4AF37", boxShadow: "0 24px 48px -12px rgba(212,175,55,0.45)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <p className="font-display text-base font-black leading-none" style={{ color: "#120A25" }}>30,000+</p>
            <p className="text-[10px] font-semibold tracking-wide mt-1" style={{ color: "#4A3A0E" }}>Students enrolled</p>
          </motion.div>
          <motion.div
            className="absolute -bottom-6 right-2 flex items-center gap-2.5 rounded-2xl px-5 py-3 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(18,10,37,0.85)",
              border: "1px solid rgba(212,175,55,0.3)",
              boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)",
            }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <IconStar size={16} style={{ color: "#D4AF37" }} />
            <div>
              <p className="font-display text-base font-black leading-none text-white">4.8</p>
              <p className="text-[10px] font-medium mt-0.5" style={{ color: "#9B8AB8" }}>Average rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom discipline marquee */}
      <div className="relative z-[2] overflow-hidden py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="marquee-track items-center gap-10" style={{ "--marquee-duration": "36s" } as React.CSSProperties}>
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center gap-10 pr-10">
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-10">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.28em] whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {item}
                  </span>
                  <IconSparkle size={11} style={{ color: "rgba(212,175,55,0.55)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
