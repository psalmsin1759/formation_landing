"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

const stats = [
  { value: 30000, suffix: "+", label: "Enrolled Professionals", icon: "👩‍⚖️", desc: "across Nigeria & 60+ countries" },
  { value: 87,    suffix: "+", label: "Expert-Led Courses",     icon: "📚",   desc: "law, business & tech" },
  { value: 42,    suffix: "",  label: "Industry Experts",       icon: "🎓",   desc: "active practitioners" },
  { value: 98,    suffix: "%", label: "Satisfaction Rate",      icon: "⭐",   desc: "from post-course surveys" },
  { value: 60,    suffix: "+", label: "Countries Reached",      icon: "🌍",   desc: "global professional network" },
  { value: 4.8,   suffix: "",  label: "Average Rating",         icon: "🏆",   desc: "out of 5.0" },
];

function CountUp({ target, start }: { target: number; start: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start || !ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate() {
        if (ref.current) {
          ref.current.textContent =
            target < 10 ? obj.val.toFixed(1) : Math.round(obj.val).toLocaleString();
        }
      },
    });
  }, [start, target]);

  return <span ref={ref}>{target < 10 ? "0.0" : "0"}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16"
      style={{ background: "linear-gradient(135deg, #1A1235 0%, #2E1350 50%, #3D1A6E 100%)" }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: "#6B35A8" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: "#D4AF37" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: "#D4AF37" }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Formation Exceptionelle by the Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center px-5 py-8 relative group"
              style={{ backgroundColor: "rgba(20,10,40,0.6)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.55, ease: "easeOut" }}
              whileHover={{ backgroundColor: "rgba(107,53,168,0.15)" }}
            >
              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                style={{ backgroundColor: "#D4AF37", width: 0 }}
                animate={inView ? { width: "40%" } : { width: 0 }}
                transition={{ delay: 0.4 + i * 0.09, duration: 0.6, ease: "easeOut" }}
              />

              {/* Icon */}
              <motion.div
                className="text-2xl mb-3 leading-none"
                animate={inView ? { rotate: [0, -12, 12, 0], scale: [1, 1.25, 1] } : {}}
                transition={{ delay: 0.3 + i * 0.09, duration: 0.55 }}
              >
                {s.icon}
              </motion.div>

              {/* Number */}
              <p
                className="text-3xl font-black leading-none mb-1"
                style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
              >
                <CountUp target={s.value} start={inView} />
                <span style={{ color: "#D4AF37" }}>{s.suffix}</span>
              </p>

              {/* Label */}
              <p className="text-xs font-semibold mt-1 leading-snug" style={{ color: "#C8B8E8" }}>
                {s.label}
              </p>

              {/* Sub-description — fades in on hover */}
              <p
                className="text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug"
                style={{ color: "#7B6A9B" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
