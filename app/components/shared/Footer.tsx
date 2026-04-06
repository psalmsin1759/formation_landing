"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeLeft, viewportConfig } from "@/app/lib/animations";

const footerLinks = {
  Platform: [
    { label: "Browse Courses", href: "/courses" },
    { label: "Corporate Training", href: "/courses#corporate" },
    { label: "Certifications", href: "/courses#certificates" },
    { label: "Become an Instructor", href: "/about#instructors" },
  ],
  "Categories": [
    { label: "Legal Training", href: "/courses?cat=Legal Training" },
    { label: "Business & Management", href: "/courses?cat=Business & Management" },
    { label: "Technical Skills", href: "/courses?cat=Technical Skills" },
    { label: "Compliance", href: "/courses?cat=Compliance" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Events & Webinars", href: "/events" },
    { label: "Student Dashboard", href: "/dashboard" },
    { label: "About Us", href: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#120A25", color: "#C8B8E8" }} className="relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[11rem] lg:text-[16rem] font-black italic whitespace-nowrap tracking-tighter opacity-[0.025]"
          style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif", userSelect: "none" }}
        >
          Formation Exceptionelle
        </span>
      </div>

      {/* Top divider with gradient */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #6B35A8, #D4AF37, #6B35A8, transparent)" }} />

      {/* Main footer content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 pt-14 pb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <motion.div className="lg:col-span-2" variants={fadeLeft}>
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/images/logo.png"
                alt="Formation Exceptionelle"
                width={160}
                height={40}
                style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#7B6A9B" }}>
              Nigeria's premier platform for professional excellence. Expert-led training in law, business, and technical disciplines — designed for professionals who demand the best.
            </p>

            {/* Newsletter micro-form */}
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4AF37" }}>
              The Formation Brief — Weekly Insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 rounded-lg text-xs outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF" }}
              />
              <motion.button
                className="px-4 py-2.5 rounded-lg text-xs font-bold shrink-0"
                style={{ backgroundColor: "#D4AF37", color: "#120A25" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Join
              </motion.button>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, backgroundColor: "#6B35A8", color: "#FFFFFF" }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#9B8AB8", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <motion.div key={group} variants={fadeUp}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#FFFFFF" }}>
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                      <Link
                        href={l.href}
                        className="text-sm flex items-center gap-1.5 group"
                        style={{ color: "#7B6A9B" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0 transition-colors group-hover:bg-purple-400"
                          style={{ backgroundColor: "#3D2860" }}
                        />
                        <span className="transition-colors group-hover:text-white">{l.label}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-6 py-8 mb-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { icon: "🏆", text: "CPD Accredited" },
            { icon: "🔒", text: "Secure Payments" },
            { icon: "🌍", text: "60+ Countries" },
            { icon: "🎓", text: "30,000+ Students" },
            { icon: "⭐", text: "4.8 Avg Rating" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span className="text-base">{b.icon}</span>
              <span className="text-xs font-medium" style={{ color: "#7B6A9B" }}>{b.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "#4D3D6B" }}
        >
          <div className="flex items-center gap-2">
            <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
            <p>© 2026 Formation Exceptionelle. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1 font-semibold italic" style={{ color: "#4D3D6B", fontFamily: "'Playfair Display', serif" }}>
            <span style={{ color: "#6B35A8" }}>Formation</span>
            <span style={{ color: "#D4AF37" }}>Exceptionelle</span>
            <span style={{ color: "#4D3D6B", fontStyle: "normal", fontFamily: "inherit" }}>— Empowering Excellence</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
