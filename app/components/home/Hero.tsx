"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2E1350 0%, #4A2278 50%, #6B35A8 100%)",
        minHeight: "580px",
      }}
      className="relative overflow-hidden flex items-center"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#D4AF37", transform: "translate(30%, -30%)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "#8B55C8", transform: "translate(-30%, 30%)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              ⭐
            </motion.span>
            Trusted by 30,000+ Professionals Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Ultimate Destination for{" "}
            <motion.span
              style={{ color: "#D4AF37" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Professional Excellence
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base leading-relaxed mb-8"
            style={{ color: "#C8B8E8" }}
          >
            Expert-led training in law, business, and technical disciplines. Practical, real-world knowledge with industry-recognized certifications — designed for professionals who demand the best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
              >
                Explore All Courses
                <motion.svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm"
                style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "#FFFFFF" }}
              >
                How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            {[
              { icon: "🏆", text: "Industry-recognized certs" },
              { icon: "🎓", text: "Expert practitioners" },
              { icon: "🌍", text: "Nigeria & Pan-Africa" },
            ].map((badge, i) => (
              <motion.div
                key={badge.text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span>{badge.icon}</span>
                <span className="text-xs font-medium" style={{ color: "#C8B8E8" }}>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating card */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="rounded-2xl p-6 shadow-2xl"
            style={{ backgroundColor: "#FFFFFF", maxWidth: "360px", marginLeft: "auto" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: "#F3EEFF" }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                ⚖️
              </motion.div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#8B55C8" }}>BESTSELLER</p>
                <h3 className="text-sm font-bold" style={{ color: "#1A1235" }}>Contract Drafting & Negotiation</h3>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1" style={{ color: "#7C7A99" }}>
                <span>Module 3 of 5</span>
                <span style={{ color: "#6B35A8", fontWeight: 600 }}>60% complete</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid #E8E0F0" }}>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  AO
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#1A1235" }}>Barr. A. Okonkwo</p>
                  <p className="text-xs" style={{ color: "#7C7A99" }}>Instructor</p>
                </div>
              </div>
              <span className="text-sm font-black" style={{ color: "#6B35A8" }}>₦300,000</span>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -left-4 rounded-xl px-4 py-3 shadow-xl"
            style={{ backgroundColor: "#D4AF37" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="text-xs font-black text-center" style={{ color: "#1A1235" }}>
              30,000+<br /><span className="font-medium text-xs">Students</span>
            </p>
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 shadow-xl"
            style={{ backgroundColor: "#2E1350" }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-xs font-black text-center text-white">
              4.8 ★<br /><span className="font-medium text-xs" style={{ color: "#C8B8E8" }}>Avg Rating</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
