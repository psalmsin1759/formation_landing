export default function Hero() {
  return (
    <section style={{ backgroundColor: "#f5f7fa", minHeight: "calc(100vh - 60px)" }} className="px-8 pt-20 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1
              className="text-6xl lg:text-7xl font-black leading-none tracking-tight mb-8"
              style={{ color: "#1a2b3c", fontFamily: "Arial, sans-serif" }}
            >
              Web&nbsp;design to&nbsp;drive businesses growth
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#0088e9">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Testimonial */}
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#1a2b3c" }}>
              &ldquo;We have been looking for a company like Fourseven for some time now. So
              we are delighted to have finally found a one stop shop design agency that is
              responsive, efficient, knowledgeable and friendly.&rdquo;
            </p>

            {/* Divider */}
            <div className="flex gap-1 mt-6">
              <div className="w-8 h-0.5 rounded" style={{ backgroundColor: "#1a2b3c" }}></div>
              <div className="w-4 h-0.5 rounded" style={{ backgroundColor: "#1a2b3c", opacity: 0.4 }}></div>
              <div className="w-4 h-0.5 rounded" style={{ backgroundColor: "#1a2b3c", opacity: 0.4 }}></div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start justify-between" style={{ minHeight: "340px" }}>
            <div
              className="rounded-xl p-4"
              style={{ border: "1px solid rgba(26,43,60,0.12)", backgroundColor: "rgba(255,255,255,0.6)", maxWidth: "300px" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "#1a2b3c" }}>
                Twickenham&rsquo;s trusted web design agency, helping to grow over 130+ local
                businesses across London and the south east.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-xs mt-auto">
              {/* Work with us button */}
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 py-3 px-6 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: "#1a2b3c" }}
                >
                  Work with us
                </button>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#1a2b3c" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              {/* View case studies */}
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 py-3 px-6 rounded-full text-sm font-semibold"
                  style={{ border: "1.5px solid #1a2b3c", color: "#1a2b3c", backgroundColor: "transparent" }}
                >
                  View case studies
                </button>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid #1a2b3c" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
