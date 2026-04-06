const caseStudies = [
  {
    tag: "National SEO",
    title: "How a Shower Brand Dominated Search & Grew Sales 33% in 90 Days",
    color: "#7eb8c4",
  },
  {
    tag: "National SEO",
    title: "From zero visibility to £75K/month in inbound enquiries.",
    color: "#3a4a5c",
  },
  {
    tag: "National SEO",
    title: "How a Local Coffee Supplier Grew With SEO",
    color: "#c4a882",
  },
];

export default function SEOCaseStudies() {
  return (
    <section style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl lg:text-6xl font-black text-center mb-12"
          style={{ color: "#1a2b3c" }}
        >
          SEO Case Studies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
              {/* Image placeholder */}
              <div
                className="h-48 w-full"
                style={{ backgroundColor: study.color }}
              ></div>
              <div className="p-5">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded"
                  style={{ backgroundColor: "#1a2b3c", color: "#ffffff" }}
                >
                  {study.tag}
                </span>
                <h3 className="text-base font-bold mt-3 leading-snug" style={{ color: "#1a2b3c" }}>
                  {study.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
