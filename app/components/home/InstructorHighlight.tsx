"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { instructors } from "@/app/lib/data";
import StarRating from "@/app/components/shared/StarRating";
import { fadeUp, fadeLeft, staggerContainer, viewportConfig } from "@/app/lib/animations";

export default function InstructorHighlight() {
  return (
    <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
              Learn from the Best
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              World-Class Instructors
            </h2>
          </div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/about#team"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#6B35A8" }}
            >
              Meet all instructors →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {instructors.slice(0, 3).map((inst) => (
            <motion.div
              key={inst.name}
              variants={fadeLeft}
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(107,53,168,0.1)" }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ backgroundColor: "#6B35A8" }}
                whileHover={{ scale: 1.08, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                {inst.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </motion.div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: "#1A1235" }}>{inst.name}</h3>
                <p className="text-xs mb-2" style={{ color: "#7C7A99" }}>{inst.title}</p>
                <StarRating rating={inst.rating} />
                <div className="flex gap-4 mt-2">
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{inst.courses}</strong> courses
                  </span>
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{(inst.students / 1000).toFixed(1)}k</strong> students
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
