"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

const stats = [
  { value: 30000, suffix: "+", label: "Enrolled Professionals", icon: "👩‍⚖️" },
  { value: 87, suffix: "+", label: "Expert-Led Courses", icon: "📚" },
  { value: 42, suffix: "", label: "Industry Experts", icon: "🎓" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
  { value: 60, suffix: "+", label: "Countries Reached", icon: "🌍" },
  { value: 4.8, suffix: "/5", label: "Average Course Rating", icon: "🏆" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
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
            target < 10
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toLocaleString();
        }
      },
    });
  }, [start, target]);

  return (
    <span ref={ref}>
      {target < 10 ? "0.0" : "0"}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#2E1350" }} className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-2xl mb-1"
                animate={inView ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              >
                {s.icon}
              </motion.div>
              <p
                className="text-2xl font-black"
                style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}
              >
                <CountUp target={s.value} suffix={s.suffix} start={inView} />
                {s.suffix}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#9B8AB8" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
