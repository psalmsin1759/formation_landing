"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { events, blogPosts } from "@/app/lib/data";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerFast, viewportConfig } from "@/app/lib/animations";
import { IconArrowRight } from "@/app/lib/icons";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}

const upcomingEvents = events.slice(0, 3);
const latestPosts = blogPosts.slice(0, 3);

export default function EventsBlogPreview() {
  return (
    <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Events column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-end justify-between mb-7">
              <div>
                <p className="eyebrow mb-2" style={{ color: "#8B55C8" }}>
                  Live Programmes
                </p>
                <h2
                  className="font-display text-2xl lg:text-3xl font-bold tracking-tight"
                  style={{ color: "#1A1235" }}
                >
                  Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="link-underline inline-flex items-center gap-2 pb-1 text-sm font-semibold"
                style={{ color: "#6B35A8" }}
              >
                All events
                <IconArrowRight size={14} />
              </Link>
            </div>

            <motion.div
              className="flex flex-col gap-3"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.slug}
                  variants={fadeUp}
                  whileHover={{ x: 4, boxShadow: "0 8px 28px rgba(107,53,168,0.09)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                  >
                    {/* Date block */}
                    <div
                      className="shrink-0 w-12 text-center py-2 rounded-xl"
                      style={{ backgroundColor: "#2E1350" }}
                    >
                      <p className="text-lg font-black leading-none" style={{ color: "#D4AF37" }}>
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: "#9B8AB8" }}>
                        {new Date(event.date).toLocaleDateString("en-NG", { month: "short" }).toUpperCase()}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
                        >
                          {event.type}
                        </span>
                        {event.price === "Free" ? (
                          <span className="text-xs font-bold" style={{ color: "#2E7D32" }}>Free</span>
                        ) : (
                          <span className="text-xs font-bold" style={{ color: "#6B35A8" }}>₦{event.price.toLocaleString()}</span>
                        )}
                      </div>
                      <p className="text-sm font-bold leading-snug mb-0.5" style={{ color: "#1A1235" }}>
                        {event.title}
                      </p>
                      <p className="text-xs" style={{ color: "#7C7A99" }}>{event.location}</p>
                    </div>
                    {event.seatsLeft <= 15 && (
                      <motion.span
                        className="shrink-0 text-xs font-bold px-2 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(212,68,68,0.1)", color: "#C0392B" }}
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        {event.seatsLeft} left
                      </motion.span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Blog column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-end justify-between mb-7">
              <div>
                <p className="eyebrow mb-2" style={{ color: "#8B55C8" }}>
                  Insights &amp; Analysis
                </p>
                <h2
                  className="font-display text-2xl lg:text-3xl font-bold tracking-tight"
                  style={{ color: "#1A1235" }}
                >
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="link-underline inline-flex items-center gap-2 pb-1 text-sm font-semibold"
                style={{ color: "#6B35A8" }}
              >
                All articles
                <IconArrowRight size={14} />
              </Link>
            </div>

            <motion.div
              className="flex flex-col gap-3"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {latestPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={fadeUp}
                  whileHover={{ x: 4, boxShadow: "0 8px 28px rgba(107,53,168,0.09)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                  >
                    {/* Colour pip */}
                    <div
                      className="shrink-0 w-1 self-stretch rounded-full mt-1"
                      style={{ backgroundColor: "#6B35A8", minHeight: "40px" }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs" style={{ color: "#9B8AB8" }}>{post.readTime}</span>
                      </div>
                      <p className="text-sm font-bold leading-snug mb-0.5" style={{ color: "#1A1235" }}>
                        {post.title}
                      </p>
                      <p className="text-xs" style={{ color: "#7C7A99" }}>
                        {post.author.split(" ").slice(-2).join(" ")} · {formatDate(post.date)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
