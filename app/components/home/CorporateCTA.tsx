"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewportConfig } from "@/app/lib/animations";

const features = [
  { icon: "👥", title: "Team Learning Paths", desc: "Curated curricula tailored to your team's role and seniority level." },
  { icon: "📊", title: "Progress Analytics", desc: "Real-time dashboards tracking completion, scores, and certifications." },
  { icon: "🎓", title: "Bulk Certifications", desc: "Issue accredited certificates to your entire workforce at once." },
  { icon: "🔒", title: "Dedicated Support", desc: "Dedicated account manager and priority support for all enterprise clients." },
];

export default function CorporateCTA() {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #1A1235 0%, #2E1350 60%, #4A2278 100%)" }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D4AF37" }}
          >
            For Organisations
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Train Your Entire Team with Corporate Plans
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#9B8AB8" }}>
            Equip your legal, compliance, or business teams with world-class professional development. Custom learning paths, progress tracking, and bulk pricing — all managed from a single admin dashboard.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeUp}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
              >
                Request a Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/courses#corporate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}
              >
                View Corporate Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="text-2xl mb-3"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                {f.icon}
              </motion.div>
              <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#7B6A9B" }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
