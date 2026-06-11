"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { EASE } from "@/app/lib/animations";

const stats = [
  { value: 30000, suffix: "+", label: "Enrolled Professionals", desc: "Nigeria & 60+ countries" },
  { value: 87,    suffix: "+", label: "Expert-Led Courses",     desc: "law, business & tech" },
  { value: 42,    suffix: "",  label: "Industry Experts",       desc: "active practitioners" },
  { value: 98,    suffix: "%", label: "Satisfaction Rate",      desc: "post-course surveys" },
  { value: 60,    suffix: "+", label: "Countries Reached",      desc: "global network" },
  { value: 4.8,   suffix: "",  label: "Average Rating",         desc: "out of 5.0" },
];

function CountUp({ target, start }: { target: number; start: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start || !ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: "power3.out",
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
    <section ref={ref} className="grain relative overflow-hidden py-20" style={{ backgroundColor: "#120A25" }}>
      {/* Faint radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(800px 360px at 50% 0%, rgba(107,53,168,0.22), transparent 70%)" }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-6">
        <motion.p
          className="eyebrow justify-center w-full mb-14"
          style={{ color: "#D4AF37" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Formation Exceptionelle by the Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="relative flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.9, ease: EASE }}
            >
              {/* Hairline separator between cells */}
              {i % 6 !== 0 && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block h-16 w-px"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  aria-hidden="true"
                />
              )}

              {/* Ghost index */}
              <span
                className="font-display text-outline text-xs font-bold tracking-[0.3em] mb-4"
                style={{ color: "rgba(212,175,55,0.5)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="font-display font-black leading-none text-white" style={{ fontSize: "clamp(2.1rem, 3.2vw, 2.9rem)" }}>
                <CountUp target={s.value} start={inView} />
                <span style={{ color: "#D4AF37" }}>{s.suffix}</span>
              </p>

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mt-4 leading-relaxed" style={{ color: "#B9A8DC" }}>
                {s.label}
              </p>
              <p className="text-[11px] mt-1.5 leading-snug" style={{ color: "#6B5A8C" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
