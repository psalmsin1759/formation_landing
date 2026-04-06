export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: label only */}
          <div className="flex items-center gap-2 pt-1">
            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#ff6b2b" }}></div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#ff6b2b" }}>
              About Fourseven
            </span>
          </div>

          {/* Right: all content */}
          <div>
            <h2
              className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
              style={{ color: "#1a2b3c" }}
            >
              Twickenham &amp; Richmond&rsquo;s Leading Independent Web Design &amp; SEO Agency
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#1a2b3c" }}>
              Transform your service business into a client-generating machine. Since 2019, our South
              West London web designer team have helped 130+ established UK and EU companies achieve a
              conservative average 7x increase in qualified leads through data-driven web design and
              ROI-focused SEO.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
              style={{ color: "#1a2b3c" }}
            >
              More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8l4 4-4 4M8 12h8"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#ff6b2b" }}></div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#ff6b2b" }}>
              By the Numbers
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { num: "140", label: "Project\nCompleted", desc: "Over 140 successful projects completed for small to medium businesses across the UK & EU showcasing our experience." },
              { num: "30", label: "Years of\nExpertise", desc: "Combined experience of over 30 years across our team, a wealth of knowledge in web design, development and marketing." },
              { num: "100", label: "Happy Clients", desc: "Proudly serving more than 100 satisfied clients who have trusted us with new websites & marketing with us." },
            ].map(({ num, label, desc }) => (
              <div
                key={num}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#edf2f7" }}
              >
                <div className="flex items-start mb-4">
                  <span
                    className="font-black leading-none"
                    style={{ color: "#1a2b3c", fontSize: "80px", lineHeight: 1 }}
                  >
                    {num}
                  </span>
                  <span
                    className="font-black"
                    style={{ color: "#ff6b2b", fontSize: "40px", lineHeight: 1, marginTop: "8px" }}
                  >
                    +
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3 whitespace-pre-line"
                  style={{ color: "#1a2b3c" }}
                >
                  {label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#1a2b3c" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
