"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import type { Course } from "@/app/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(107,53,168,0.15)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-xl overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
    >
      <Link href={`/courses/${course.slug}`} className="group flex flex-col">
        {/* Image */}
        <div
          className="w-full relative overflow-hidden"
          style={{ paddingTop: "56.25%", backgroundColor: "#F3EEFF" }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-4xl"
            style={{ backgroundColor: "#F3EEFF" }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            {course.category === "Legal Training" && "⚖️"}
            {course.category === "Business & Management" && "💼"}
            {course.category === "Technical Skills" && "💻"}
            {course.category === "Leadership" && "🎯"}
            {course.category === "Compliance" && "🛡️"}
            {course.category === "Finance & Tax" && "📊"}
          </motion.div>
          {course.bestseller && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
            >
              Bestseller
            </motion.span>
          )}
          {course.new && !course.bestseller && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: "#6B35A8", color: "#FFFFFF" }}
            >
              New
            </motion.span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#8B55C8" }}>
            {course.category}
          </span>
          <h3
            className="font-bold leading-snug text-sm line-clamp-2 group-hover:text-purple-700 transition-colors"
            style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
          >
            {course.title}
          </h3>
          <p className="text-xs" style={{ color: "#7C7A99" }}>{course.instructor}</p>
          <StarRating rating={course.rating} count={course.reviews} />
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}>
              {course.level}
            </span>
            <span className="text-xs" style={{ color: "#7C7A99" }}>
              {course.lessons} lessons · {course.duration}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-auto pt-3" style={{ borderTop: "1px solid #E8E0F0" }}>
            <span className="text-base font-black" style={{ color: "#6B35A8" }}>
              ₦{course.price.toLocaleString()}
            </span>
            <span className="text-sm line-through" style={{ color: "#B0A8C8" }}>
              ₦{course.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
