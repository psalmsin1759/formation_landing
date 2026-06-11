"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import { CategoryIcon, IconArrowUpRight } from "@/app/lib/icons";
import type { Course } from "@/app/lib/data";

const categoryArt: Record<string, string> = {
  "Legal Training":        "linear-gradient(135deg, #2E1350 0%, #4A2278 60%, #6B35A8 100%)",
  "Business & Management": "linear-gradient(135deg, #1A1235 0%, #2E1350 55%, #4A2278 100%)",
  "Technical Skills":      "linear-gradient(135deg, #3D1A6E 0%, #6B35A8 65%, #8B55C8 100%)",
  "Leadership":            "linear-gradient(135deg, #2E1350 0%, #4A2278 50%, #9A7B1F 130%)",
  "Compliance":            "linear-gradient(135deg, #122035 0%, #2E1350 60%, #4A2278 100%)",
  "Finance & Tax":         "linear-gradient(135deg, #1A1235 0%, #3D1A6E 55%, #6B35A8 100%)",
};

function monogram(category: string) {
  return category
    .split(" ")
    .filter((w) => w[0] && w[0] === w[0].toUpperCase())
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_32px_64px_-24px_rgba(46,19,80,0.35)]"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
    >
      <Link href={`/courses/${course.slug}`} className="flex h-full flex-col">
        {/* Cover art */}
        <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
            style={{
              background: categoryArt[course.category] ?? categoryArt["Legal Training"],
              transitionTimingFunction: "var(--ease-luxe)",
            }}
          >
            {/* Ghost serif monogram */}
            <span
              className="font-display absolute -right-3 -bottom-7 text-[7rem] font-black italic leading-none select-none"
              style={{ color: "rgba(255,255,255,0.07)" }}
              aria-hidden="true"
            >
              {monogram(course.category)}
            </span>
            {/* Hairline arc */}
            <span
              className="absolute -left-10 -top-16 h-44 w-44 rounded-full"
              style={{ border: "1px solid rgba(212,175,55,0.25)" }}
              aria-hidden="true"
            />
          </div>

          {/* Category icon chip */}
          <span
            className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F5E090",
            }}
          >
            <CategoryIcon category={course.category} size={19} />
          </span>

          {/* Hover arrow */}
          <span
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            style={{ backgroundColor: "#D4AF37", color: "#120A25", transitionTimingFunction: "var(--ease-luxe)" }}
          >
            <IconArrowUpRight size={15} strokeWidth={2.2} />
          </span>

          {course.bestseller && (
            <span
              className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
            >
              Bestseller
            </span>
          )}
          {course.new && !course.bestseller && (
            <span
              className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)" }}
            >
              New
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#8B55C8" }}>
            {course.category}
          </span>
          <h3
            className="font-display font-bold leading-snug text-[15px] line-clamp-2 transition-colors duration-300 group-hover:text-[#6B35A8]"
            style={{ color: "#1A1235" }}
          >
            {course.title}
          </h3>
          <p className="text-xs" style={{ color: "#7C7A99" }}>{course.instructor}</p>
          <StarRating rating={course.rating} count={course.reviews} />
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}>
              {course.level}
            </span>
            <span className="text-xs" style={{ color: "#7C7A99" }}>
              {course.lessons} lessons · {course.duration}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-auto pt-4" style={{ borderTop: "1px solid #E8E0F0" }}>
            <span className="font-display text-lg font-black" style={{ color: "#1A1235" }}>
              ₦{course.price.toLocaleString()}
            </span>
            <span className="text-xs line-through" style={{ color: "#B0A8C8" }}>
              ₦{course.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
