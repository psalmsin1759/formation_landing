"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/app/lib/animations";
import { IconArrowRight } from "@/app/lib/icons";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeader({ eyebrow, title, sub, action, align = "left", dark = false }: Props) {
  const centered = align === "center";
  return (
    <motion.div
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : "flex flex-wrap items-end justify-between gap-6"}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className={centered ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        <p
          className={`eyebrow mb-4 ${centered ? "justify-center" : ""}`}
          style={{ color: dark ? "#D4AF37" : "#8B55C8" }}
        >
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold tracking-tight"
          style={{
            color: dark ? "#FFFFFF" : "#1A1235",
            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
            lineHeight: 1.12,
          }}
        >
          {title}
        </h2>
        {sub && (
          <p className="mt-4 text-sm leading-relaxed" style={{ color: dark ? "#9B8AB8" : "#7C7A99" }}>
            {sub}
          </p>
        )}
      </div>
      {action && !centered && (
        <Link
          href={action.href}
          className="link-underline hidden sm:inline-flex items-center gap-2 pb-1 text-sm font-semibold"
          style={{ color: dark ? "#D4AF37" : "#6B35A8" }}
        >
          {action.label}
          <IconArrowRight size={15} />
        </Link>
      )}
    </motion.div>
  );
}
