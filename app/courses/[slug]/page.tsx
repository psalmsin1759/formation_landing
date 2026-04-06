import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import StarRating from "@/app/components/shared/StarRating";
import { courses } from "@/app/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <>
      <Navbar />
      <main>
        {/* Course header bar */}
        <div
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 100%)" }}
          className="px-6 py-10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Course info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
                >
                  {course.category}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#C8B8E8" }}
                >
                  {course.level}
                </span>
                {course.bestseller && (
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
                  >
                    Bestseller
                  </span>
                )}
              </div>
              <h1
                className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {course.title}
              </h1>
              <p className="text-sm mb-5" style={{ color: "#C8B8E8" }}>{course.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <StarRating rating={course.rating} count={course.reviews} />
                <span className="text-sm" style={{ color: "#C8B8E8" }}>
                  {course.students.toLocaleString()} students enrolled
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#9B8AB8" }}>
                <span>👨‍🏫 {course.instructor}</span>
                <span>🌐 {course.language}</span>
                <span>⏱ {course.duration}</span>
                <span>📋 {course.lessons} lessons</span>
                {course.certificate && <span>🏆 Certificate of Completion</span>}
              </div>
            </div>

            {/* Right: Purchase card (visible on mobile inside header, floating on desktop) */}
            <div className="lg:hidden">
              <PurchaseCard course={course} discount={discount} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* What you'll learn */}
            <section className="mb-10">
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                What You&rsquo;ll Learn
              </h2>
              <div
                className="rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                style={{ border: "1px solid #E8E0F0", backgroundColor: "#FAFAF9" }}
              >
                {course.learningOutcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B35A8" strokeWidth="2.5" className="mt-0.5 shrink-0">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm leading-snug" style={{ color: "#4B4465" }}>{o}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-10">
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Requirements
              </h2>
              <ul className="flex flex-col gap-2">
                {course.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#4B4465" }}>
                    <span style={{ color: "#6B35A8" }}>•</span> {r}
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section className="mb-10">
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Course Curriculum
              </h2>
              <p className="text-sm mb-5" style={{ color: "#7C7A99" }}>
                {course.curriculum.reduce((acc, s) => acc + s.lessons.length, 0)} lessons · {course.duration} total length
              </p>
              <div className="flex flex-col gap-3">
                {course.curriculum.map((section, si) => (
                  <details
                    key={si}
                    open={si === 0}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid #E8E0F0" }}
                  >
                    <summary
                      className="flex items-center justify-between px-5 py-4 cursor-pointer select-none font-semibold text-sm"
                      style={{ backgroundColor: "#F3EEFF", color: "#1A1235" }}
                    >
                      <span>{section.section}</span>
                      <span className="text-xs font-normal" style={{ color: "#8B55C8" }}>
                        {section.lessons.length} lessons
                      </span>
                    </summary>
                    <div style={{ backgroundColor: "#FFFFFF" }}>
                      {section.lessons.map((lesson, li) => (
                        <div
                          key={li}
                          className="flex items-center gap-3 px-5 py-3 text-sm"
                          style={{ borderTop: "1px solid #F0E8F8", color: "#4B4465" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={lesson.free ? "#6B35A8" : "#9B8AB8"} strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M10 8l6 4-6 4V8z" fill={lesson.free ? "#6B35A8" : "#9B8AB8"}/>
                          </svg>
                          <span className="flex-1">{lesson.title}</span>
                          {lesson.free && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}>
                              Preview
                            </span>
                          )}
                          <span className="text-xs" style={{ color: "#9B8AB8" }}>{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="mb-10">
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Your Instructor
              </h2>
              <div
                className="rounded-xl p-6"
                style={{ border: "1px solid #E8E0F0", backgroundColor: "#FAFAF9" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                    style={{ backgroundColor: "#6B35A8" }}
                  >
                    {course.instructor.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "#1A1235" }}>{course.instructor}</h3>
                    <p className="text-sm" style={{ color: "#7C7A99" }}>{course.instructorTitle}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4B4465" }}>
                  {course.description}
                </p>
              </div>
            </section>

            {/* Reviews */}
            <section className="mb-10">
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Student Reviews
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <p
                    className="text-5xl font-black"
                    style={{ color: "#6B35A8", fontFamily: "'Playfair Display', serif" }}
                  >
                    {course.rating}
                  </p>
                  <StarRating rating={course.rating} />
                  <p className="text-xs mt-1" style={{ color: "#7C7A99" }}>Course Rating</p>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const pct = stars === 5 ? 72 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 2 : 1;
                    return (
                      <div key={stars} className="flex items-center gap-3">
                        <div className="w-20 h-2 rounded-full" style={{ backgroundColor: "#E8E0F0" }}>
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${pct}%`, backgroundColor: "#F5A623" }}
                          />
                        </div>
                        <span className="text-xs" style={{ color: "#7C7A99" }}>{stars} ★</span>
                        <span className="text-xs" style={{ color: "#7C7A99" }}>{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sample reviews */}
              {[
                { name: "Amaka O.", date: "March 2026", text: "Absolutely exceptional course. The real-world case studies make all the difference — I applied the negotiation frameworks in a major deal within a week of completing Module 3.", rating: 5 },
                { name: "Emeka E.", date: "February 2026", text: "The instructor brings genuine practitioner experience. This isn't theory — it's how things actually work in practice. Highly recommended for any legal professional.", rating: 5 },
                { name: "Bimpe F.", date: "January 2026", text: "Well-structured, comprehensive, and professionally delivered. The certification is widely respected in our firm. My team has now enrolled collectively.", rating: 4 },
              ].map((review, i) => (
                <div
                  key={i}
                  className="py-5"
                  style={{ borderTop: "1px solid #E8E0F0" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "#6B35A8" }}
                    >
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1A1235" }}>{review.name}</p>
                      <p className="text-xs" style={{ color: "#9B8AB8" }}>{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4B4465" }}>{review.text}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Desktop Purchase card (sticky) */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <PurchaseCard course={course} discount={discount} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PurchaseCard({ course, discount }: { course: typeof courses[0]; discount: number }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{ border: "1px solid #E8E0F0", backgroundColor: "#FFFFFF" }}
    >
      {/* Course preview image */}
      <div
        className="w-full h-40 flex items-center justify-center text-5xl"
        style={{ backgroundColor: "#F3EEFF" }}
      >
        {course.category === "Legal Training" ? "⚖️" : course.category === "Business & Management" ? "💼" : course.category === "Technical Skills" ? "💻" : "🎯"}
      </div>

      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-3 mb-1">
          <span
            className="text-3xl font-black"
            style={{ color: "#6B35A8" }}
          >
            ₦{course.price.toLocaleString()}
          </span>
          <span className="text-base line-through" style={{ color: "#B0A8C8" }}>
            ₦{course.originalPrice.toLocaleString()}
          </span>
          <span
            className="text-sm font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: "#F3EEFF", color: "#6B35A8" }}
          >
            {discount}% off
          </span>
        </div>
        <p className="text-xs mb-4" style={{ color: "#D4263A" }}>
          ⏳ Offer ends in 2 days
        </p>

        {/* Enroll CTA */}
        <button
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm mb-3 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#6B35A8" }}
        >
          Enrol Now — ₦{course.price.toLocaleString()}
        </button>
        <button
          className="w-full py-3 rounded-xl font-semibold text-sm mb-4 transition-opacity hover:opacity-80"
          style={{ border: "1.5px solid #6B35A8", color: "#6B35A8", backgroundColor: "transparent" }}
        >
          Add to Wishlist
        </button>

        <p className="text-xs text-center mb-5" style={{ color: "#9B8AB8" }}>
          30-day money-back guarantee · Lifetime access
        </p>

        {/* Course includes */}
        <div style={{ borderTop: "1px solid #E8E0F0" }} className="pt-4">
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1A1235" }}>
            This course includes:
          </p>
          {[
            `${course.duration} of on-demand video`,
            `${course.lessons} structured lessons`,
            "Downloadable resources & templates",
            "Real-world case study materials",
            "Access on desktop and mobile",
            course.certificate ? "Certificate of Completion" : "",
            "Full lifetime access",
          ].filter(Boolean).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs mb-2" style={{ color: "#4B4465" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B35A8" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>

        {/* Share */}
        <div className="flex gap-3 mt-4 pt-4" style={{ borderTop: "1px solid #E8E0F0" }}>
          <button className="flex-1 text-xs py-2 rounded-lg font-semibold" style={{ border: "1px solid #E8E0F0", color: "#7C7A99" }}>
            Share
          </button>
          <button className="flex-1 text-xs py-2 rounded-lg font-semibold" style={{ border: "1px solid #E8E0F0", color: "#7C7A99" }}>
            Gift this course
          </button>
        </div>
      </div>
    </div>
  );
}
