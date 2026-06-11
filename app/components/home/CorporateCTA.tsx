"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeLeft, scaleIn, staggerContainer, viewportConfig } from "@/app/lib/animations";
import { IconUsers, IconChart, IconGraduationCap, IconHeadset, IconArrowRight } from "@/app/lib/icons";

const features = [
  { icon: <IconUsers size={20} />, title: "Team Learning Paths", desc: "Curated curricula tailored to your team's role and seniority level." },
  { icon: <IconChart size={20} />, title: "Progress Analytics", desc: "Real-time dashboards tracking completion, scores, and certifications." },
  { icon: <IconGraduationCap size={20} />, title: "Bulk Certifications", desc: "Issue accredited certificates to your entire workforce at once." },
  { icon: <IconHeadset size={20} />, title: "Dedicated Support", desc: "Dedicated account manager and priority support for all enterprise clients." },
];

export default function CorporateCTA() {
  return (
    <section
      className="grain relative overflow-hidden py-24 lg:py-32 px-6"
      style={{
        background:
          "radial-gradient(900px 480px at 12% -10%, rgba(107,53,168,0.45), transparent 60%), radial-gradient(700px 420px at 95% 110%, rgba(212,175,55,0.12), transparent 60%), #120A25",
      }}
    >
      <div className="relative z-[2] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="eyebrow mb-4" style={{ color: "#D4AF37" }}>
            For Organisations
          </p>
          <h2
            className="font-display font-bold text-white mb-6 tracking-tight"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", lineHeight: 1.1 }}
          >
            Train Your Entire Team with{" "}
            <em className="font-medium" style={{ color: "#D4AF37" }}>
              Corporate Plans
            </em>
          </h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-lg" style={{ color: "#9B8AB8" }}>
            Equip your legal, compliance, or business teams with world-class professional development. Custom learning paths, progress tracking, and bulk pricing — all managed from a single admin dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about#contact"
              className="btn-sheen group inline-flex items-center justify-center gap-3 rounded-full pl-7 pr-2 py-2 font-bold text-sm transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
            >
              Request a Demo
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-400 group-hover:rotate-45"
                style={{ backgroundColor: "#120A25", color: "#D4AF37" }}
              >
                <IconArrowRight size={15} strokeWidth={2.2} />
              </span>
            </Link>
            <Link
              href="/courses#corporate"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white transition-colors duration-300 hover:bg-white/[0.07]"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              View Corporate Pricing
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className="group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                transitionTimingFunction: "var(--ease-luxe)",
              }}
            >
              {/* Gold hairline draws on hover */}
              <span
                className="absolute top-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, #D4AF37, transparent)", transitionTimingFunction: "var(--ease-luxe)" }}
                aria-hidden="true"
              />
              <span
                className="font-display text-outline absolute top-4 right-5 text-xl font-black italic select-none opacity-50"
                style={{ color: "rgba(212,175,55,0.6)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 group-hover:text-[#D4AF37]"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#C8B8E8" }}
              >
                {f.icon}
              </span>
              <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8B7AA8" }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
