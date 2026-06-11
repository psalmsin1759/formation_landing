"use client";
import { motion } from "framer-motion";
import StarRating from "@/app/components/shared/StarRating";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { testimonials } from "@/app/lib/data";
import { fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/app/lib/animations";

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#FAFAF9" }} className="py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          align="center"
          eyebrow="What Our Students Say"
          title={
            <>
              Trusted by Professionals{" "}
              <em className="font-medium" style={{ color: "#6B35A8" }}>
                Across Industries
              </em>
            </>
          }
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((t, i) => {
            const dark = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                variants={dark ? fadeRight : fadeLeft}
                className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-28px_rgba(46,19,80,0.35)]"
                style={{
                  backgroundColor: dark ? "#1A1235" : "#FFFFFF",
                  border: dark ? "1px solid rgba(212,175,55,0.18)" : "1px solid #E8E0F0",
                  transitionTimingFunction: "var(--ease-luxe)",
                }}
              >
                {/* Oversized quote glyph */}
                <span
                  className="font-display absolute -top-7 right-4 text-[8rem] font-black italic leading-none select-none"
                  style={{ color: dark ? "rgba(212,175,55,0.1)" : "rgba(107,53,168,0.07)" }}
                  aria-hidden="true"
                >
                  &rdquo;
                </span>

                <StarRating rating={t.rating} />
                <blockquote
                  className="font-display relative mt-5 text-[17px] leading-relaxed italic"
                  style={{ color: dark ? "#E8D8FF" : "#2E2348" }}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div
                  className="flex items-center gap-3.5 mt-7 pt-5"
                  style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "#E8E0F0"}` }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #4A2278, #6B35A8)",
                      boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.35)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: dark ? "#FFFFFF" : "#1A1235" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: dark ? "#9B8AB8" : "#7C7A99" }}>
                      {t.title}
                    </p>
                  </div>
                  <span
                    className="ml-auto hidden sm:inline-block text-[11px] font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: dark ? "rgba(212,175,55,0.12)" : "#F3EEFF",
                      color: dark ? "#E5C961" : "#6B35A8",
                    }}
                  >
                    {t.course.split(" ").slice(0, 3).join(" ")}…
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
