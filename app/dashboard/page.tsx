"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import StarRating from "@/app/components/shared/StarRating";
import { courses } from "@/app/lib/data";
import Link from "next/link";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";

const enrolled = courses.slice(0, 3);
const progressMap: Record<string, number> = {
  "legal-contract-drafting": 60,
  "employment-law-essentials": 100,
  "corporate-governance": 20,
};

export default function DashboardPage() {
  const completedCount = Object.values(progressMap).filter((p) => p === 100).length;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#FAFAF9", minHeight: "calc(100vh - 64px)" }}>
        {/* Header */}
        <div
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 100%)" }}
          className="px-6 py-10"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm mb-1" style={{ color: "#C8B8E8" }}>Welcome back,</p>
              <h1
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Amaka Okafor
              </h1>
              <p className="text-xs mt-1" style={{ color: "#9B8AB8" }}>Associate, Aelex Partners · Member since January 2025</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
              >
                Browse More Courses
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <nav className="flex flex-col gap-1">
              {[
                { icon: "📚", label: "My Learning", active: true },
                { icon: "🏆", label: "Certificates", count: completedCount },
                { icon: "❤️", label: "Wishlist" },
                { icon: "📊", label: "My Progress" },
                { icon: "⚙️", label: "Settings" },
              ].map((item) => (
                <motion.button
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors"
                  style={{
                    backgroundColor: item.active ? "#F3EEFF" : "transparent",
                    color: item.active ? "#6B35A8" : "#4B4465",
                  }}
                  whileHover={{ x: 4, backgroundColor: "#F3EEFF" }}
                  transition={{ duration: 0.15 }}
                >
                  <span>{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.count !== undefined && (
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "#6B35A8", color: "#FFFFFF" }}
                    >
                      {item.count}
                    </span>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Quick stats */}
            <motion.div
              className="mt-6 p-5 rounded-xl"
              style={{ backgroundColor: "#2E1350" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-4 text-white">Your Stats</p>
              {[
                { label: "Courses Enrolled", value: enrolled.length },
                { label: "Completed", value: completedCount },
                { label: "Certificates Earned", value: completedCount },
                { label: "Hours Studied", value: "24.5h" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-xs mb-2.5">
                  <span style={{ color: "#9B8AB8" }}>{s.label}</span>
                  <span className="font-bold" style={{ color: "#D4AF37" }}>{s.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.aside>

          {/* Main content */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Summary cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {[
                { icon: "📖", value: enrolled.length, label: "Courses", bg: "#F3EEFF", color: "#6B35A8" },
                { icon: "✅", value: completedCount, label: "Completed", bg: "#E8F5E9", color: "#2E7D32" },
                { icon: "🏆", value: completedCount, label: "Certificates", bg: "#FFF8E1", color: "#F57F17" },
                { icon: "⚡", value: "3", label: "Day Streak", bg: "#F3E5F5", color: "#7B1FA2" },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  variants={scaleIn}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: c.bg }}
                >
                  <div className="text-2xl mb-1">{c.icon}</div>
                  <p className="text-2xl font-black" style={{ color: c.color }}>{c.value}</p>
                  <p className="text-xs" style={{ color: "#7C7A99" }}>{c.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enrolled Courses */}
            <section>
              <motion.h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                My Learning
              </motion.h2>
              <motion.div
                className="flex flex-col gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {enrolled.map((course) => {
                  const progress = progressMap[course.slug] ?? 0;
                  const completed = progress === 100;
                  return (
                    <motion.div
                      key={course.slug}
                      variants={fadeUp}
                      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(107,53,168,0.08)" }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4 p-5 rounded-xl items-start"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
                        style={{ backgroundColor: "#F3EEFF" }}
                        whileHover={{ scale: 1.08, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {course.category === "Legal Training" ? "⚖️" : course.category === "Business & Management" ? "💼" : "💻"}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-bold leading-snug mb-0.5" style={{ color: "#1A1235" }}>
                              {course.title}
                            </h3>
                            <p className="text-xs mb-3" style={{ color: "#7C7A99" }}>{course.instructor}</p>
                          </div>
                          {completed && (
                            <span
                              className="shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}
                            >
                              ✓ Completed
                            </span>
                          )}
                        </div>

                        <div className="progress-bar mb-1">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs" style={{ color: "#7C7A99" }}>{progress}% complete</span>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
                              style={{
                                backgroundColor: completed ? "#F3EEFF" : "#6B35A8",
                                color: completed ? "#6B35A8" : "#FFFFFF",
                              }}
                            >
                              {completed ? "Review Course" : "Continue"}
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>

            {/* Certificate */}
            {completedCount > 0 && (
              <section>
                <motion.h2
                  className="text-xl font-bold mb-5"
                  style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  Certificates Earned
                </motion.h2>
                {enrolled.filter((c) => progressMap[c.slug] === 100).map((course) => (
                  <motion.div
                    key={course.slug}
                    className="p-6 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #2E1350 0%, #4A2278 100%)",
                      border: "2px solid #D4AF37",
                    }}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    whileHover={{ scale: 1.01, boxShadow: "0 16px 40px rgba(212,175,55,0.25)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>
                          Certificate of Completion
                        </p>
                        <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                        <p className="text-sm" style={{ color: "#9B8AB8" }}>
                          Formation Exceptionelle · Completed February 2026
                        </p>
                      </div>
                      <motion.button
                        className="shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Download PDF
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </section>
            )}

            {/* Recommended */}
            <section>
              <motion.h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                Recommended for You
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {courses.slice(3, 5).map((course) => (
                  <motion.div
                    key={course.slug}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(107,53,168,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: "#F3EEFF" }}
                      >
                        {course.category === "Business & Management" ? "💼" : "📊"}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold leading-snug mb-1" style={{ color: "#1A1235" }}>{course.title}</h3>
                        <StarRating rating={course.rating} count={course.reviews} />
                        <p className="text-sm font-black mt-1" style={{ color: "#6B35A8" }}>₦{course.price.toLocaleString()}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
