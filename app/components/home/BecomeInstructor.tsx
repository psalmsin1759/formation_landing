"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";

const perks = [
  {
    icon: "💰",
    title: "Earn in Naira",
    desc: "Set your own course price and earn up to 70% revenue share. Top instructors earn over ₦5M per month.",
  },
  {
    icon: "🌍",
    title: "Reach Thousands",
    desc: "Tap into our 30,000+ enrolled professionals across Nigeria and 60+ countries worldwide.",
  },
  {
    icon: "🎓",
    title: "Build Your Brand",
    desc: "Establish yourself as a thought leader. Our platform gives you the tools to grow your personal brand.",
  },
  {
    icon: "🛠️",
    title: "Full Production Support",
    desc: "Our team helps you script, record, and produce your course — no technical experience required.",
  },
];

const instructorStats = [
  { value: "42", label: "Active Instructors" },
  { value: "₦5M+", label: "Top Monthly Earnings" },
  { value: "70%", label: "Revenue Share" },
  { value: "30,000+", label: "Students to Reach" },
];

export default function BecomeInstructor() {
  return (
    <section style={{ backgroundColor: "#FFFFFF" }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
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
              Share Your Expertise
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              Become an Instructor on Formation Exceptionelle
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4B4465" }}>
              Are you a practising lawyer, business executive, compliance expert, or industry specialist? Share your knowledge with ambitious professionals across Nigeria and beyond — and earn while doing it. We provide the platform, the students, and the support. You bring the expertise.
            </p>

            {/* Perks grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {perks.map((perk) => (
                <motion.div
                  key={perk.title}
                  variants={fadeUp}
                  whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(107,53,168,0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#F3EEFF", border: "1px solid #E8E0F0" }}
                >
                  <motion.span
                    className="text-2xl shrink-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {perk.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: "#1A1235" }}>{perk.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#7C7A99" }}>{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  Apply to Teach
                  <motion.svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about#team"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ border: "1.5px solid #6B35A8", color: "#6B35A8" }}
                >
                  Meet Our Instructors
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: stats + instructor card */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {instructorStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl text-center"
                  style={{ backgroundColor: "#2E1350" }}
                >
                  <p
                    className="text-2xl font-black mb-1"
                    style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "#9B8AB8" }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Instructor testimonial card */}
            <motion.div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #4A2278 0%, #6B35A8 100%)",
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(107,53,168,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  TA
                </motion.div>
                <div>
                  <p className="text-sm font-bold text-white">Tunde Adesanya</p>
                  <p className="text-xs" style={{ color: "#C8B8E8" }}>Former McKinsey Principal · 2,740 students</p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed italic" style={{ color: "#E8D8FF" }}>
                &ldquo;Teaching on Formation Exceptionelle has been incredibly rewarding. The platform handles everything from payments to marketing — I focus purely on delivering value. My course has now reached professionals across 18 countries.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#D4AF37">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ color: "#D4AF37" }}>
                  ₦4.2M earned last month
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
