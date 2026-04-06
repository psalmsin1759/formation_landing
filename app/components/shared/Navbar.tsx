"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full transition-shadow duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8E0F0",
        boxShadow: scrolled ? "0 4px 24px rgba(107,53,168,0.12)" : "0 1px 8px rgba(107,53,168,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
            <Image
              src="/images/logo.png"
              alt="Formation Exceptionelle"
              width={180}
              height={44}
              style={{ height: "40px", width: "auto" }}
            />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              <Link
                href={l.href}
                className="text-sm font-medium relative group transition-colors hover:opacity-80"
                style={{ color: "#4B4465" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#6B35A8" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/dashboard"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:bg-purple-50"
            style={{ color: "#6B35A8", border: "1.5px solid #6B35A8" }}
          >
            Sign In
          </Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/courses"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "#6B35A8" }}
            >
              Browse Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-6 h-0.5 rounded"
                style={{ backgroundColor: "#6B35A8" }}
                animate={
                  menuOpen
                    ? i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : i === 0
                      ? { rotate: 45, y: 8 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </div>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid #E8E0F0", backgroundColor: "#FFFFFF" }}
          >
            <div className="px-6 pb-4 flex flex-col gap-1 pt-3">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    className="block text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-purple-50"
                    style={{ color: "#4B4465" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="pt-2"
              >
                <Link
                  href="/courses"
                  className="block text-sm font-semibold px-4 py-2.5 rounded-lg text-white text-center"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  Browse Courses
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
