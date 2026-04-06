"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import { blogPosts } from "@/app/lib/data";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const [cat, setCat] = useState("All");

  const featured = blogPosts.filter((p) => p.featured);
  const filtered = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 60%, #6B35A8 100%)" }}
          className="px-6 py-20 relative overflow-hidden"
        >
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
            style={{ backgroundColor: "#8B55C8", transform: "translate(-30%, 30%)" }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: "#D4AF37" }}>
                <span>✍️</span> Insights & Perspectives
              </p>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Formation<br />Exceptionelle Blog
              </h1>
              <p className="text-base leading-relaxed" style={{ color: "#C8B8E8" }}>
                Expert commentary on law, business, and professional development — written by the practitioners who teach on our platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured posts */}
        <section style={{ backgroundColor: "#FFFFFF" }} className="px-6 py-14">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex items-center justify-between mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#8B55C8" }}>Editor's Picks</p>
                <h2 className="text-2xl font-bold" style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}>
                  Featured Articles
                </h2>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {featured.map((post, i) => (
                <motion.div
                  key={post.slug}
                  variants={i === 0 ? fadeLeft : fadeRight}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(107,53,168,0.12)" }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #E8E0F0" }}
                >
                  {/* Colourful top band */}
                  <div
                    className="h-3"
                    style={{ background: "linear-gradient(90deg, #6B35A8, #D4AF37)" }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#9B8AB8" }}>{post.readTime}</span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 leading-snug"
                      style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#4B4465" }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                          style={{ backgroundColor: "#6B35A8" }}
                        >
                          {post.author.split(" ").map((w) => w[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-xs font-bold" style={{ color: "#1A1235" }}>{post.author}</p>
                          <p className="text-xs" style={{ color: "#9B8AB8" }}>{formatDate(post.date)}</p>
                        </div>
                      </div>
                      <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-semibold flex items-center gap-1"
                          style={{ color: "#6B35A8" }}
                        >
                          Read →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All posts with filter */}
        <section style={{ backgroundColor: "#FAFAF9" }} className="px-6 py-14">
          <div className="max-w-7xl mx-auto">
            {/* Category filter */}
            <motion.div
              className="flex items-center gap-3 flex-wrap mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7C7A99" }}>Topics:</span>
              {allCategories.map((c) => (
                <motion.button
                  key={c}
                  onClick={() => setCat(c)}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: cat === c ? "#6B35A8" : "#FFFFFF",
                    color: cat === c ? "#FFFFFF" : "#6B35A8",
                    border: "1.5px solid #6B35A8",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  {c}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {filtered.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={fadeUp}
                  whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(107,53,168,0.1)" }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                >
                  {/* Category colour bar */}
                  <div className="h-1.5" style={{ backgroundColor: "#6B35A8" }} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#9B8AB8" }}>{post.readTime}</span>
                    </div>
                    <h3
                      className="text-base font-bold mb-2 leading-snug flex-1"
                      style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#7C7A99" }}>
                      {post.excerpt.slice(0, 110)}…
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid #F0E8F8" }}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0"
                          style={{ backgroundColor: "#6B35A8" }}
                        >
                          {post.author.split(" ").map((w) => w[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}
                        </div>
                        <p className="text-xs font-semibold" style={{ color: "#4B4465" }}>
                          {post.author.split(" ").slice(-2).join(" ")}
                        </p>
                      </div>
                      <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold"
                          style={{ color: "#6B35A8" }}
                        >
                          Read →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
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
              Weekly Insights
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Formation Brief
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm mb-8" style={{ color: "#9B8AB8" }}>
              Expert analysis on law, business, and professional development — delivered to your inbox every Friday.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
              />
              <motion.button
                className="px-6 py-3 rounded-lg font-bold text-sm"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe Free
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
