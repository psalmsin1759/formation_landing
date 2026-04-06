import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import CourseCard from "@/app/components/shared/CourseCard";
import { courses, categories } from "@/app/lib/data";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 100%)" }}
          className="px-6 py-16"
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>
              Formation Exceptionelle
            </p>
            <h1
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              All Courses
            </h1>
            <p style={{ color: "#C8B8E8" }} className="text-sm max-w-xl">
              Expert-led training in law, business, and technical disciplines. Practical knowledge, real-world case studies, and industry-recognized certifications.
            </p>
            {/* Search */}
            <div className="mt-6 flex gap-3 max-w-xl">
              <div
                className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="bg-transparent text-sm text-white outline-none flex-1 placeholder-opacity-50"
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <button
                className="px-5 py-3 rounded-lg text-sm font-bold"
                style={{ backgroundColor: "#D4AF37", color: "#1A1235" }}
              >
                Search
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12 flex gap-8">
          {/* Sidebar filters */}
          <aside className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-20 flex flex-col gap-6">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A1235" }}>
                  Category
                </h3>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="cat" defaultChecked style={{ accentColor: "#6B35A8" }} />
                    <span style={{ color: "#4B4465" }}>All Categories</span>
                  </label>
                  {categories.map((c) => (
                    <label key={c.name} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="cat" style={{ accentColor: "#6B35A8" }} />
                      <span style={{ color: "#4B4465" }}>{c.name}</span>
                      <span className="ml-auto text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "#F3EEFF", color: "#8B55C8" }}>
                        {c.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Level filter */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A1235" }}>
                  Level
                </h3>
                <div className="flex flex-col gap-1.5">
                  {["All Levels", "Beginner", "Intermediate", "Advanced"].map((l) => (
                    <label key={l} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" style={{ accentColor: "#6B35A8" }} defaultChecked={l === "All Levels"} />
                      <span style={{ color: "#4B4465" }}>{l}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A1235" }}>
                  Price Range
                </h3>
                <div className="flex flex-col gap-1.5">
                  {["Any Price", "Under ₦200k", "₦200k – ₦400k", "₦400k+"].map((p) => (
                    <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="price" style={{ accentColor: "#6B35A8" }} defaultChecked={p === "Any Price"} />
                      <span style={{ color: "#4B4465" }}>{p}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A1235" }}>
                  Language
                </h3>
                <div className="flex flex-col gap-1.5">
                  {["All Languages", "English", "French", "English / French"].map((lang) => (
                    <label key={lang} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" style={{ accentColor: "#6B35A8" }} defaultChecked={lang === "All Languages"} />
                      <span style={{ color: "#4B4465" }}>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                className="w-full py-2.5 rounded-lg text-sm font-bold mt-2"
                style={{ backgroundColor: "#6B35A8", color: "#FFFFFF" }}
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Course grid */}
          <div className="flex-1">
            {/* Sort + count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm" style={{ color: "#7C7A99" }}>
                Showing <strong style={{ color: "#1A1235" }}>{courses.length}</strong> courses
              </p>
              <select
                className="text-sm px-3 py-2 rounded-lg outline-none"
                style={{ border: "1px solid #E8E0F0", color: "#4B4465", backgroundColor: "#FFFFFF" }}
              >
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              {[1, 2, 3, "...", 8].map((p, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg text-sm font-semibold"
                  style={{
                    backgroundColor: p === 1 ? "#6B35A8" : "#FFFFFF",
                    color: p === 1 ? "#FFFFFF" : "#4B4465",
                    border: "1px solid #E8E0F0",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
