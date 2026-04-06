"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/app/lib/animations";

const footerLinks = {
  Platform: [
    { label: "Browse Courses", href: "/courses" },
    { label: "Corporate Training", href: "/courses#corporate" },
    { label: "Certifications", href: "/courses#certificates" },
    { label: "Become an Instructor", href: "/about#instructors" },
  ],
  "Course Categories": [
    { label: "Legal Training", href: "/courses?cat=legal" },
    { label: "Business & Management", href: "/courses?cat=business" },
    { label: "Technical Skills", href: "/courses?cat=technical" },
    { label: "Leadership", href: "/courses?cat=leadership" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Instructors", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/about#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2E1350", color: "#C8B8E8" }}>
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <motion.div className="lg:col-span-1" variants={fadeUp}>
            <div className="font-black italic text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span style={{ color: "#FFFFFF" }}>Formation</span><br />
              <span style={{ color: "#D4AF37" }}>Exceptionelle</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#9B8AB8" }}>
              Empowering Excellence Across Industries. Premium professional training for lawyers, business leaders, and technical experts.
            </p>
            <div className="flex gap-3 mt-5">
              {["L", "T", "Y"].map((s, i) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ scale: 1.15, backgroundColor: "#6B35A8" }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#C8B8E8" }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <motion.div key={group} variants={fadeUp}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#FFFFFF" }}>
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#9B8AB8" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "#7B6A9B" }}
        >
          <p>© 2026 Formation Exceptionelle. All rights reserved.</p>
          <p>Empowering Excellence Across Industries</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
