"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { EASE } from "@/app/lib/animations";
import { IconArrowRight } from "@/app/lib/icons";

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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "rgba(250,250,249,0.7)",
        borderBottom: `1px solid ${scrolled ? "#E8E0F0" : "rgba(232,224,240,0.5)"}`,
        boxShadow: scrolled ? "0 16px 48px -16px rgba(18,10,37,0.18)" : "none",
      }}
    >
      {/* Gold reading-progress hairline */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 origin-left"
        style={{ scaleX: progress, background: "linear-gradient(90deg, #D4AF37, #F5E090)" }}
      />

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Formation Exceptionelle home">
          <Image
            src="/images/logo.png"
            alt="Formation Exceptionelle"
            width={180}
            height={44}
            style={{ height: "40px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE }}
            >
              <Link
                href={l.href}
                className="relative group text-[13px] font-medium tracking-wide transition-colors duration-200 hover:text-[#1A1235]"
                style={{ color: "#4B4465" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                  style={{ backgroundColor: "#D4AF37", transitionTimingFunction: "var(--ease-luxe)" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="hidden md:flex items-center gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
        >
          <Link
            href="/dashboard"
            className="link-underline text-[13px] font-semibold"
            style={{ color: "#4A2278" }}
          >
            Sign In
          </Link>
          <Link
            href="/courses"
            className="btn-sheen group inline-flex items-center gap-2.5 rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#1A1235" }}
          >
            Browse Courses
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-400 group-hover:rotate-45"
              style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
            >
              <IconArrowRight size={13} strokeWidth={2.2} />
            </span>
          </Link>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-6 h-0.5 rounded"
                style={{ backgroundColor: "#1A1235" }}
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
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid #E8E0F0", backgroundColor: "rgba(255,255,255,0.95)" }}
          >
            <div className="px-6 pb-5 flex flex-col gap-1 pt-3">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    className="block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors hover:bg-[#F3EEFF]"
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
                transition={{ delay: navLinks.length * 0.05, duration: 0.4, ease: EASE }}
                className="pt-2"
              >
                <Link
                  href="/courses"
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-full text-white"
                  style={{ backgroundColor: "#1A1235" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Browse Courses
                  <IconArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
