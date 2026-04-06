"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/app/lib/animations";
import { categories } from "@/app/lib/data";

export default function Categories() {
  return (
    <section style={{ backgroundColor: "#FAFAF9" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
            What We Offer
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
          >
            Explore by Category
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={scaleIn}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(107,53,168,0.14)" }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={`/courses?cat=${encodeURIComponent(cat.name)}`}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#F3EEFF" }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold leading-snug" style={{ color: "#1A1235" }}>{cat.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#7C7A99" }}>{cat.count} courses</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
