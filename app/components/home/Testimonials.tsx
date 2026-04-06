import StarRating from "@/app/components/shared/StarRating";
import { testimonials } from "@/app/lib/data";

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#FAFAF9" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
            What Our Students Say
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
          >
            Trusted by Professionals Across Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#2E1350",
                border: "1px solid #E8E0F0",
              }}
            >
              <StarRating rating={t.rating} />
              <blockquote
                className="mt-4 text-sm leading-relaxed italic"
                style={{ color: i % 2 === 0 ? "#4B4465" : "#C8B8E8" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-5 pt-4" style={{ borderTop: `1px solid ${i % 2 === 0 ? "#E8E0F0" : "rgba(255,255,255,0.1)"}` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: i % 2 === 0 ? "#1A1235" : "#FFFFFF" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: i % 2 === 0 ? "#7C7A99" : "#9B8AB8" }}
                  >
                    {t.title}
                  </p>
                </div>
                <span
                  className="ml-auto text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#F3EEFF" : "rgba(107,53,168,0.4)",
                    color: i % 2 === 0 ? "#6B35A8" : "#C8B8E8",
                  }}
                >
                  {t.course.split(" ").slice(0, 3).join(" ")}…
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
