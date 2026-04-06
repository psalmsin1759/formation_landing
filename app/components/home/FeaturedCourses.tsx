"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import CourseCard from "@/app/components/shared/CourseCard";
import { courses } from "@/app/lib/data";
import { fadeUp, fadeLeft, staggerContainer, viewportConfig } from "@/app/lib/animations";

export default function FeaturedCourses() {
  const featured = courses.slice(0, 4);
  return (
    <section style={{ backgroundColor: "#F3EEFF" }} className="py-16 px-6">
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
              Top Picks
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}>
              Featured Courses
            </h2>
          </div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/courses"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#6B35A8" }}
            >
              View all →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {featured.map((course) => (
            <motion.div key={course.slug} variants={fadeUp}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white"
              style={{ backgroundColor: "#6B35A8" }}
            >
              Browse All 87+ Courses
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
