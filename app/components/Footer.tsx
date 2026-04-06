export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2b3c" }} className="px-8 pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Social icons */}
        <div className="flex gap-4 mb-10">
          {[
            { label: "LinkedIn", icon: "in" },
            { label: "Instagram", icon: "ig" },
            { label: "Facebook", icon: "fb" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {s.icon === "in" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )}
                {s.icon === "ig" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                  </svg>
                )}
                {s.icon === "fb" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                )}
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#0088e9" }}>Menu</h4>
            {["Home","About","Projects","Blog","Growth","Contact","Sitemap"].map((item) => (
              <a key={item} href="#" className="block text-xs mb-2 hover:opacity-80" style={{ color: "#ffffff" }}>{item}</a>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#0088e9" }}>Services</h4>
            {["Web Design","Website Development","Shopify Development","Search Engine Optimisation","AI RAMS Generator","swiftRMS"].map((item) => (
              <a key={item} href="#" className="block text-xs mb-2 hover:opacity-80" style={{ color: "#ffffff" }}>{item}</a>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#0088e9" }}>Service Areas</h4>
            {["Web Design Farnham","Web Design Guildford","Web Design Surrey","Web Design Hampton","Web Design Teddington","SEO Twickenham","Web Design Twickenham","Web Design Richmond","Web Design Kingston"].map((item) => (
              <a key={item} href="#" className="block text-xs mb-2 hover:opacity-80" style={{ color: "#ffffff" }}>{item}</a>
            ))}
          </div>
        </div>

        {/* Bottom: privacy links */}
        <div className="flex gap-6 pb-4">
          <a href="#" className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Privacy Policy</a>
          <a href="#" className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Terms</a>
        </div>
      </div>

      {/* Large brand name */}
      <div className="w-full overflow-hidden">
        <p
          className="font-black italic leading-none select-none"
          style={{
            color: "#0088e9",
            fontSize: "clamp(80px, 18vw, 220px)",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
            paddingLeft: "0.5rem",
          }}
        >
          fourseven
        </p>
      </div>
    </footer>
  );
}
