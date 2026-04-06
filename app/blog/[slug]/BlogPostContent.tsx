"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/app/lib/data";
import { fadeUp, fadeLeft, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });
}

function renderBody(body: string) {
  const lines = body.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-xl font-bold mt-8 mb-3"
          style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
        >
          {line.slice(3)}
        </h2>
      );
    }
    if (line.startsWith("---")) {
      return <hr key={i} className="my-8" style={{ borderColor: "#E8E0F0" }} />;
    }
    if (line.trim() === "") return <div key={i} className="h-3" />;
    return (
      <p key={i} className="text-base leading-relaxed" style={{ color: "#4B4465" }}>
        {line}
      </p>
    );
  });
}

export default function BlogPostContent({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 60%, #6B35A8 100%)" }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                href="/blog"
                className="text-xs font-semibold"
                style={{ color: "#D4AF37" }}
              >
                ← Blog
              </Link>
              <span style={{ color: "#4A2278" }}>·</span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
              >
                {post.category}
              </span>
              <span className="text-xs" style={{ color: "#9B8AB8" }}>{post.readTime}</span>
            </div>
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {post.title}
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#C8B8E8" }}>{post.excerpt}</p>
            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black text-white shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {post.author.split(" ").map((w) => w[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author}</p>
                <p className="text-xs" style={{ color: "#9B8AB8" }}>{post.authorTitle}</p>
              </div>
              <p className="text-xs ml-auto" style={{ color: "#9B8AB8" }}>{formatDate(post.date)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        {/* Article body */}
        <motion.article
          className="flex-1 min-w-0 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Body */}
          <div className="prose-custom">{renderBody(post.body)}</div>

          {/* Bio card */}
          <motion.div
            className="mt-12 p-6 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #F3EEFF 0%, #E8E0F0 100%)", border: "1px solid #E8E0F0" }}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-4 mb-3">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ backgroundColor: "#6B35A8" }}
              >
                {post.author.split(" ").map((w) => w[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#1A1235" }}>{post.author}</p>
                <p className="text-xs" style={{ color: "#7C7A99" }}>{post.authorTitle}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#4B4465" }}>
              {post.author.split(" ")[0]} teaches on the Formation Exceptionelle platform. Explore their courses below.
            </p>
            <motion.div className="mt-4" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: "#6B35A8" }}
              >
                View Their Courses →
              </Link>
            </motion.div>
          </motion.div>
        </motion.article>

        {/* Sidebar */}
        <motion.aside
          className="hidden lg:block w-72 shrink-0"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="sticky top-24 flex flex-col gap-6">
            {/* CTA */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #4A2278 0%, #6B35A8 100%)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#D4AF37" }}>
                Deepen Your Knowledge
              </p>
              <p
                className="text-base font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore expert-led courses on {post.category}
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={`/courses?cat=${encodeURIComponent(post.category)}`}
                  className="block text-center text-sm font-bold py-2.5 rounded-lg"
                  style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
                >
                  Browse Courses
                </Link>
              </motion.div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#1A1235" }}>
                  Related Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((rp) => (
                    <motion.div
                      key={rp.slug}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link href={`/blog/${rp.slug}`} className="block">
                        <p
                          className="text-sm font-semibold leading-snug mb-1"
                          style={{ color: "#1A1235" }}
                        >
                          {rp.title}
                        </p>
                        <p className="text-xs" style={{ color: "#9B8AB8" }}>{rp.readTime} · {formatDate(rp.date)}</p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "#F3EEFF", border: "1px solid #E8E0F0" }}
            >
              <p className="text-sm font-bold mb-1" style={{ color: "#1A1235" }}>The Formation Brief</p>
              <p className="text-xs mb-4" style={{ color: "#7C7A99" }}>Weekly expert insights. Free, every Friday.</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2.5 rounded-lg text-xs outline-none mb-2"
                style={{ border: "1.5px solid #E8E0F0", backgroundColor: "#FFFFFF", color: "#1A1235" }}
              />
              <motion.button
                className="w-full py-2.5 rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: "#6B35A8" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}
