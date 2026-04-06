import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import StarRating from "@/app/components/shared/StarRating";
import { instructors } from "@/app/lib/data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{ background: "linear-gradient(135deg, #2E1350 0%, #4A2278 50%, #6B35A8 100%)" }}
          className="px-6 py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4AF37" }}>
              Our Story
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Empowering Excellence<br />Across Industries
            </h1>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#C8B8E8" }}>
              Formation Exceptionelle was founded with a single mission: to give ambitious professionals access to the same calibre of training as those at the world&rsquo;s top firms — without the six-figure price tag.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section style={{ backgroundColor: "#FAFAF9" }} className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
                Our Mission
              </p>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Democratising Expert-Level Professional Training
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B4465" }}>
                For too long, the highest quality professional training was reserved for those at elite firms with elite budgets. Formation Exceptionelle changes that. We partner with leading practitioners — partners, judges, professors, and industry experts — to create courses that reflect how the profession actually works.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#4B4465" }}>
                Our programs are built around real cases, real documents, and real decisions. Not textbooks. We believe that the best training happens when theory meets practice — and we&rsquo;ve built our entire curriculum around that principle.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white"
                style={{ backgroundColor: "#6B35A8" }}
              >
                Explore Our Courses
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚖️", title: "Practitioner-Led", desc: "Every course is designed and delivered by active practitioners at the top of their field." },
                { icon: "🌍", title: "Global Reach", desc: "Learners from 60+ countries access our programs in English and French." },
                { icon: "📜", title: "Accredited Certs", desc: "Our certifications are recognised by leading firms, chambers, and employers." },
                { icon: "🔄", title: "Continuously Updated", desc: "Courses are updated regularly to reflect legislative changes and new case law." },
              ].map((v) => (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
                >
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "#1A1235" }}>{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#7C7A99" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ backgroundColor: "#2E1350" }} className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2019", label: "Founded" },
                { value: "30,000+", label: "Professionals Trained" },
                { value: "87+", label: "Expert Courses" },
                { value: "60+", label: "Countries Reached" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-4xl font-black mb-2"
                    style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm" style={{ color: "#9B8AB8" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section id="team" style={{ backgroundColor: "#FFFFFF" }} className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
                The Experts Behind the Courses
              </p>
              <h2
                className="text-3xl font-bold"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                Meet Our Instructors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((inst) => (
                <div
                  key={inst.name}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "#FAFAF9", border: "1px solid #E8E0F0" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0"
                      style={{ backgroundColor: "#6B35A8" }}
                    >
                      {inst.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: "#1A1235" }}>{inst.name}</h3>
                      <p className="text-xs" style={{ color: "#7C7A99" }}>{inst.title}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#4B4465" }}>{inst.bio}</p>
                  <StarRating rating={inst.rating} />
                  <div className="flex gap-4 mt-3 pt-3" style={{ borderTop: "1px solid #E8E0F0" }}>
                    <span className="text-xs" style={{ color: "#4B4465" }}>
                      <strong style={{ color: "#6B35A8" }}>{inst.courses}</strong> courses
                    </span>
                    <span className="text-xs" style={{ color: "#4B4465" }}>
                      <strong style={{ color: "#6B35A8" }}>{(inst.students / 1000).toFixed(1)}k</strong> students
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "#F3EEFF" }} className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8B55C8" }}>
                Get in Touch
              </p>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#1A1235", fontFamily: "'Playfair Display', serif" }}
              >
                We&rsquo;d Love to Hear From You
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#4B4465" }}>
                Whether you&rsquo;re an individual looking to advance your career, an organisation seeking corporate training solutions, or an expert who wants to teach on our platform — we&rsquo;re here to help.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "📧", label: "hello@formationexceptionelle.com" },
                  { icon: "🌍", label: "Lagos · Abuja · Port Harcourt" },
                  { icon: "🕐", label: "Monday – Friday, 9:00 – 18:00 CET" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-lg">{c.icon}</span>
                    <span className="text-sm" style={{ color: "#4B4465" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0F0" }}
            >
              <div className="flex flex-col gap-4">
                {[
                  { label: "Full Name", placeholder: "Your name", type: "text" },
                  { label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { label: "Organisation (optional)", placeholder: "Company or firm name", type: "text" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#1A1235" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ border: "1.5px solid #E8E0F0", color: "#1A1235", backgroundColor: "#FAFAF9" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#1A1235" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                    style={{ border: "1.5px solid #E8E0F0", color: "#1A1235", backgroundColor: "#FAFAF9" }}
                  />
                </div>
                <button
                  className="w-full py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#6B35A8" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
