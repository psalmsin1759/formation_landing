import Link from "next/link";
import { instructors } from "@/app/lib/data";
import StarRating from "@/app/components/shared/StarRating";

export default function InstructorHighlight() {
  return (
    <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
              Learn from the Best
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
            >
              World-Class Instructors
            </h2>
          </div>
          <Link
            href="/about#team"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#6B35A8" }}
          >
            Meet all instructors →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.slice(0, 3).map((inst) => (
            <div
              key={inst.name}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ backgroundColor: "#6B35A8" }}
              >
                {inst.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: "#1A1235" }}>{inst.name}</h3>
                <p className="text-xs mb-2" style={{ color: "#7C7A99" }}>{inst.title}</p>
                <StarRating rating={inst.rating} />
                <div className="flex gap-4 mt-2">
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{inst.courses}</strong> courses
                  </span>
                  <span className="text-xs" style={{ color: "#4B4465" }}>
                    <strong style={{ color: "#6B35A8" }}>{(inst.students / 1000).toFixed(1)}k</strong> students
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
