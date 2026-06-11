"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideFromRight, viewportConfig } from "@/app/lib/animations";
import { categories } from "@/app/lib/data";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { CategoryIcon, IconArrowUpRight } from "@/app/lib/icons";

const staggerFromRight = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export default function Categories() {
  return (
    <section style={{ backgroundColor: "#FAFAF9" }} className="py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Offer"
          title={
            <>
              Explore by{" "}
              <em className="font-medium" style={{ color: "#6B35A8" }}>
                Discipline
              </em>
            </>
          }
          action={{ label: "All 87+ courses", href: "/courses" }}
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={slideFromRight}>
              <Link
                href={`/courses?cat=${encodeURIComponent(cat.name)}`}
                className="group relative flex flex-col items-start gap-10 p-5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E0F0",
                  transitionTimingFunction: "var(--ease-luxe)",
                }}
              >
                {/* Ink flood on hover */}
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{ backgroundColor: "#1A1235", transitionTimingFunction: "var(--ease-luxe)" }}
                  aria-hidden="true"
                />

                <span className="relative flex w-full items-start justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 bg-[#F3EEFF] group-hover:bg-white/[0.08]"
                    style={{ color: "#6B35A8" }}
                  >
                    <span className="transition-colors duration-500 group-hover:text-[#D4AF37] flex">
                      <CategoryIcon category={cat.name} size={20} />
                    </span>
                  </span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"
                    style={{ border: "1px solid rgba(212,175,55,0.5)", color: "#D4AF37" }}
                  >
                    <IconArrowUpRight size={13} />
                  </span>
                </span>

                <span className="relative block">
                  <span
                    className="block text-sm font-bold leading-snug transition-colors duration-500 group-hover:text-white"
                    style={{ color: "#1A1235" }}
                  >
                    {cat.name}
                  </span>
                  <span
                    className="block text-xs mt-1 transition-colors duration-500 group-hover:text-[#9B8AB8]"
                    style={{ color: "#7C7A99" }}
                  >
                    {cat.count} courses
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
