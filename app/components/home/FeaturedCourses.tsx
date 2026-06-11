"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import CourseCard from "@/app/components/shared/CourseCard";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { courses } from "@/app/lib/data";
import { fadeUp, staggerContainer, viewportConfig } from "@/app/lib/animations";
import { IconArrowRight } from "@/app/lib/icons";

export default function FeaturedCourses() {
  const featured = courses.slice(0, 4);
  return (
    <section className="relative py-20 lg:py-28 px-6 overflow-hidden" style={{ backgroundColor: "#F3EEFF" }}>
      {/* Soft radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(700px 380px at 90% 0%, rgba(212,175,55,0.1), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Top Picks"
          title={
            <>
              Featured{" "}
              <em className="font-medium" style={{ color: "#6B35A8" }}>
                Courses
              </em>
            </>
          }
          sub="Hand-picked programmes our professionals rate highest — taught by practitioners, built for real casework."
          action={{ label: "View all courses", href: "/courses" }}
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {featured.map((course) => (
            <motion.div key={course.slug} variants={fadeUp} className="h-full">
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Link
            href="/courses"
            className="btn-sheen group inline-flex items-center gap-3 rounded-full pl-7 pr-2 py-2 font-bold text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#1A1235" }}
          >
            Browse All 87+ Courses
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-400 group-hover:rotate-45"
              style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
            >
              <IconArrowRight size={15} strokeWidth={2.2} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
