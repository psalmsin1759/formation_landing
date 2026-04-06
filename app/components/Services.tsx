const services = [
  {
    title: "Web Design",
    desc: "With user experience in mind, transform your business's digital presence into a powerful lead-generation engine with websites meticulously designed to convert your ideal clients.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="5" y="10" width="50" height="38" rx="3" stroke="#1a2b3c" strokeWidth="2.5"/>
        <rect x="8" y="14" width="44" height="28" rx="1" stroke="#1a2b3c" strokeWidth="1.5"/>
        <line x1="5" y1="52" x2="55" y2="52" stroke="#1a2b3c" strokeWidth="2"/>
        <line x1="25" y1="52" x2="25" y2="58" stroke="#1a2b3c" strokeWidth="2"/>
        <line x1="20" y1="58" x2="35" y2="58" stroke="#1a2b3c" strokeWidth="2"/>
        <path d="M45 55 L65 45 L75 65 L55 75 Z" stroke="#1a2b3c" strokeWidth="2" fill="none"/>
        <circle cx="65" cy="45" r="3" fill="#1a2b3c"/>
        <path d="M55 65 L60 55 L70 60" stroke="#1a2b3c" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Website Development",
    desc: "We build fast, secure, and scalable websites that handle your growth while delivering the seamless experience today's clients demand.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="5" y="8" width="55" height="42" rx="3" stroke="#1a2b3c" strokeWidth="2.5"/>
        <rect x="8" y="18" width="49" height="28" rx="1" fill="none" stroke="#1a2b3c" strokeWidth="1.5"/>
        <line x1="8" y1="13" x2="60" y2="13" stroke="#1a2b3c" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="1.5" fill="#1a2b3c"/>
        <circle cx="17" cy="13" r="1.5" fill="#1a2b3c"/>
        <circle cx="22" cy="13" r="1.5" fill="#1a2b3c"/>
        <path d="M20 30 L27 37 L20 44" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M35 30 L28 37 L35 44" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round"/>
        <line x1="40" y1="22" x2="57" y2="22" stroke="#1a2b3c" strokeWidth="1.5"/>
        <line x1="40" y1="27" x2="55" y2="27" stroke="#1a2b3c" strokeWidth="1.5"/>
        <path d="M60 55 L75 40 L80 65 Z" stroke="#1a2b3c" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Search Engine Optimisation",
    desc: "Dominate your market's search results with data-driven SEO strategies that consistently deliver page-one rankings for terms your ideal clients are searching for.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <circle cx="30" cy="30" r="20" stroke="#1a2b3c" strokeWidth="2.5"/>
        <line x1="45" y1="45" x2="68" y2="68" stroke="#1a2b3c" strokeWidth="3" strokeLinecap="round"/>
        <path d="M22 38 Q26 22 38 22" stroke="#1a2b3c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 55 Q10 65 20 65 Q25 65 28 60 Q32 65 38 65 Q48 65 48 55 Q48 45 38 45 Q33 45 30 50 Q27 45 22 45 Q15 45 15 55Z" stroke="#1a2b3c" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section style={{ backgroundColor: "#edf2f7" }} className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl lg:text-6xl font-black text-center mb-12"
          style={{ color: "#1a2b3c" }}
        >
          What we do best
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1a2b3c" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#1a2b3c" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
