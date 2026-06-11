"use client";
import { motion } from "framer-motion";
import { instructors } from "@/app/lib/data";
import StarRating from "@/app/components/shared/StarRating";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { fadeUp, staggerContainer, viewportConfig } from "@/app/lib/animations";
import { IconArrowUpRight } from "@/app/lib/icons";

export default function InstructorHighlight() {
  return (
    <section style={{ backgroundColor: "#FFFFFF" }} className="py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Learn from the Best"
          title={
            <>
              World-Class{" "}
              <em className="font-medium" style={{ color: "#6B35A8" }}>
                Instructors
              </em>
            </>
          }
          action={{ label: "Meet all instructors", href: "/about#team" }}
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {instructors.slice(0, 3).map((inst, i) => (
            <motion.div
              key={inst.name}
              variants={fadeUp}
              className="group relative flex items-start gap-5 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(46,19,80,0.3)]"
              style={{
                backgroundColor: "#FAFAF9",
                border: "1px solid #E8E0F0",
                transitionTimingFunction: "var(--ease-luxe)",
              }}
            >
              {/* Ghost index */}
              <span
                className="font-display absolute top-4 right-5 text-outline text-2xl font-black italic select-none opacity-40"
                style={{ color: "#8B55C8" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-black text-white transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #4A2278, #6B35A8)",
                  boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.35)",
                }}
              >
                {inst.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold" style={{ color: "#1A1235" }}>{inst.name}</h3>
                <p className="text-xs mb-2.5" style={{ color: "#7C7A99" }}>{inst.title}</p>
                <StarRating rating={inst.rating} />
                <div className="flex gap-4 mt-2.5">
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{inst.courses}</strong> courses
                  </span>
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{(inst.students / 1000).toFixed(1)}k</strong> students
                  </span>
                </div>
              </div>

              <span
                className="absolute bottom-4 right-5 flex h-7 w-7 items-center justify-center rounded-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                style={{ border: "1px solid #D4AF37", color: "#9A7B1F" }}
                aria-hidden="true"
              >
                <IconArrowUpRight size={13} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
