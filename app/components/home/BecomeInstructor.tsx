"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerFast, viewportConfig } from "@/app/lib/animations";
import { IconBanknote, IconGlobe, IconAward, IconWrench, IconArrowRight } from "@/app/lib/icons";

const perks = [
  {
    icon: <IconBanknote size={19} />,
    title: "Earn in Naira",
    desc: "Set your own course price and earn up to 70% revenue share. Top instructors earn over ₦5M per month.",
  },
  {
    icon: <IconGlobe size={19} />,
    title: "Reach Thousands",
    desc: "Tap into our 30,000+ enrolled professionals across Nigeria and 60+ countries worldwide.",
  },
  {
    icon: <IconAward size={19} />,
    title: "Build Your Brand",
    desc: "Establish yourself as a thought leader. Our platform gives you the tools to grow your personal brand.",
  },
  {
    icon: <IconWrench size={19} />,
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
            <p className="eyebrow mb-4" style={{ color: "#9A7B1F" }}>
              Share Your Expertise
            </p>
            <h2
              className="font-display font-bold mb-5 tracking-tight"
              style={{ color: "#1A1235", fontSize: "clamp(1.9rem, 3.5vw, 3rem)", lineHeight: 1.12 }}
            >
              Become an{" "}
              <em className="font-medium" style={{ color: "#6B35A8" }}>
                Instructor
              </em>{" "}
              on Formation Exceptionelle
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
                  className="flex items-start gap-3.5 p-5 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(46,19,80,0.3)]"
                  style={{
                    backgroundColor: "#F3EEFF",
                    border: "1px solid #E8E0F0",
                    transitionTimingFunction: "var(--ease-luxe)",
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#FFFFFF", color: "#6B35A8", border: "1px solid #E8E0F0" }}
                  >
                    {perk.icon}
                  </span>
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
              <Link
                href="/about#contact"
                className="btn-sheen group inline-flex items-center justify-center gap-3 rounded-full pl-7 pr-2 py-2 font-bold text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#1A1235" }}
              >
                Apply to Teach
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-400 group-hover:rotate-45"
                  style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
                >
                  <IconArrowRight size={15} strokeWidth={2.2} />
                </span>
              </Link>
              <Link
                href="/about#team"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-[#F3EEFF]"
                style={{ border: "1px solid #6B35A8", color: "#4A2278" }}
              >
                Meet Our Instructors
              </Link>
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
